import React from 'react'
import { copyTextToClipboard } from 'taomu-toolkit'

import * as allIcons from '.'
import { IconProps } from '.'
import { Button } from '..'

export interface IconListProps extends IconProps {}

export const IconList: React.FC<IconListProps> = () => {
  function renderIconList() {
    const list: React.ReactNode[] = []

    for (const name in allIcons) {
      const IconComp = (allIcons as any)[name]
      list.push(
        <Button
          key={name}
          height={100}
          width={'100%'}
          className="col gap-12 fs-16"
          onClick={() => {
            copyTextToClipboard(name)
            alert(`${name} 已复制到剪切板`)
          }}
        >
          <IconComp />
          {name}
        </Button>
      )
    }

    return list
  }

  return <div className="grid col-auto-160 gap-12">{renderIconList()}</div>
}
