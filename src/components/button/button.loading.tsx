import React from 'react'

export interface ButtonLoadingBarProps {
  width?: number
  height?: number
  itemWidth?: number
  radius?: number
  frontColor?: string
  backgroundColor?: string
  speed?: number
  scale?: number
}

export const ButtonLoadingBar: React.FC<ButtonLoadingBarProps> = ({
  width = '100%',
  height = 20,
  radius = 10,
  backgroundColor = 'var(--ac-color-primary-light)',
  frontColor = 'var(--ac-color-primary-dark)',
  speed = 0.25,
  scale = 1.2,
  itemWidth = 10,
}) => {
  const svgRef = React.useRef<SVGSVGElement>(null)

  const [blockList, setBlockList] = React.useState<React.ReactNode[]>([])

  React.useEffect(() => {
    if (!svgRef.current) return

    const rects: React.ReactNode[] = []

    const { width: svgRectWidth } = svgRef.current.getBoundingClientRect()
    const itemHeight = height * 3 + 20
    const rectRepeatCount = svgRectWidth / itemWidth / 2 + 6

    for (let i = 0; i < rectRepeatCount; i++) {
      let offsetTop = i * (itemWidth / 1.363) - height * scale
      if (height < 5) {
        offsetTop -= height * 12
      } else if (height < 10) {
        offsetTop -= height * 5
      } else if (height < 40) {
        offsetTop -= height * 2
      } else {
        offsetTop -= height
      }
      rects.push(
        <rect key={i} x={(i - 3) * (itemWidth * 2)} y={offsetTop} width={itemWidth} height={itemHeight} fill={frontColor}></rect>
      )
    }

    setBlockList(rects)
  }, [svgRef])

  return (
    <svg
      ref={svgRef}
      style={{
        width,
        height,
        backgroundColor: backgroundColor,
        borderRadius: radius,
      }}
    >
      <g transform="translate(7.8 0)">
        <g transform={`rotate(-20 50 50) scale(${scale})`}>{blockList}</g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values={`0 0;${scale * 2.2 * itemWidth} 0`}
          keyTimes="0;1"
          repeatCount="indefinite"
          dur={`${speed}s`}
        />
      </g>
    </svg>
  )
}
