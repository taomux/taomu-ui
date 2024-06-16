export function isReactFC<P = {}>(component: React.ComponentType<P>): component is React.FC<P> {
  return typeof component === 'function' && component.prototype == null
}
