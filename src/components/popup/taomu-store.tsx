import React from 'react'

export type Listener = () => void

export interface DispatchOptions<S> {
  /** 是否检查状态变化, actions 中的函数反回值不进验 */
  check?: boolean
  /** 更新完成后的回调, 传入更新后的状态 */
  onChanged?: (state: S) => void
}

export type StoreActions<T extends object = object> = {
  [K in keyof T]?: (data: T[K], states: T) => Record<K, T[K]> & Partial<T>
}

/**
 * ### 基于 React.useSyncExternalStore 实现的全局状态管理器
 *
 * 需要 React 版本 >= 18
 *
 * 高性能状态管理器，派发更新后，仅订阅数据的组件 (组件本身及传递了订阅数据的子组件) 会触发重渲染
 *
 * - store.useStore 订阅数据
 * - store.dispatch 派发更新
 * - actions 可对数据进行处理
 * - options.check 自动检查状态变化
 * - 可以创建多个 Store
 * - 当前渲染线程内跨实例运行
 */
export class Store<StateT extends object> {
  constructor(
    /** 初始化 state */
    private state: StateT,
    /** dispatch 时对数据进行处理 */
    private actions?: StoreActions<StateT>
  ) {}

  private readonly defaultDispatchOptions: DispatchOptions<StateT> = {
    check: false,
  }

  /** 订阅列表 */
  private readonly listeners = new Map<keyof StateT, Set<Listener>>()

  /** 订阅状态 */
  private readonly subscribe = (listener: Listener, key: keyof StateT) => {
    const listeners = this.listeners.get(key) || new Set()
    listeners.add(listener)
    this.listeners.set(key, listeners)

    return () => listeners.delete(listener)
  }

  /**
   * 获取 state
   *
   * @example const state1 = store.getState('state1')
   */
  public getState<K extends keyof StateT>(key: K): StateT[typeof key]
  public getState(key?: keyof StateT): StateT
  public getState(key?: keyof StateT) {
    if (key) {
      return this.state[key]
    } else {
      return this.state
    }
  }

  /**
   * 派发 state 更新
   *
   * @example store.dispatch({ state1: value1, state2: value2 })
   */
  public dispatch(nextState: Partial<StateT>, options?: DispatchOptions<StateT>): void
  public dispatch(nextState: Partial<StateT>, options?: DispatchOptions<StateT> | DispatchOptions<StateT>['onChanged']): void {
    const optionsH: DispatchOptions<StateT> = { ...this.defaultDispatchOptions }
    const changeKeys = Object.keys(nextState) as (keyof StateT)[]
    const changeState: Partial<StateT> = {}

    if (typeof options === 'function') {
      optionsH.onChanged = options
    } else {
      Object.assign(optionsH, options)
    }

    changeKeys.forEach((key) => {
      const nextValue = nextState[key]

      if (typeof this.actions?.[key] === 'function') {
        Object.assign(changeState, this.actions?.[key]?.(nextValue!, this.state))
      } else if (optionsH.check) {
        const currentValue = this.state[key]
        if (nextValue !== currentValue) {
          changeState[key] = nextValue
        }
      } else {
        changeState[key] = nextValue
      }
    })

    this.state = { ...this.state, ...changeState }

    for (const realChangeKey in changeState) {
      if (!Object.prototype.hasOwnProperty.call(changeState, realChangeKey)) {
        continue
      }

      const listeners = this.listeners.get(realChangeKey)
      if (listeners) {
        listeners.forEach((listener) => listener())
      } else {
        // console.warn(`${String(key)} has no subscription list`)
        continue
      }
    }

    optionsH.onChanged?.(this.state)
  }

  /** Store.dispatch 别名 */
  public readonly setState = this.dispatch

  /**
   * 使用 React.useSyncExternalStore 订阅数据
   *
   * @example const { state1, state2 } = store.useStore(['state1','state2'])
   */
  public readonly useStore = <K extends keyof StateT>(subscribeKeys: K[]) => {
    const res = {} as { [key in K]: StateT[key] }
    subscribeKeys.forEach((key) => {
      if (res[key] !== undefined) return
      // see: https://github.com/reactwg/react-18/discussions/86
      res[key] = React.useSyncExternalStore(
        (listener) => this.subscribe(listener, key),
        () => this.getState(key)
      )
    })

    return res
  }

  /**
   * HOC/装饰器，用于在 class 中订阅数据
   *
   * @param subscribeKeys
   * @returns
   */
  public withStore = <K extends keyof StateT>(subscribeKeys: K[]): any => {
    return (Component: any) => {
      const CompH = (props: any) => {
        const storeStates = this.useStore(subscribeKeys)
        return (
          <div>
            <Component {...props} {...storeStates} />
          </div>
        )
      }

      if (Component.beforeRouter) {
        CompH.beforeRouter = Component.beforeRouter
      }

      return CompH
    }
  }
}
