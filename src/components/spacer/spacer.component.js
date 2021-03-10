import styled from 'styled-components/native'

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3
}

const sideVariant = {
  top: 'margin-top',
  left: 'margin-left',
  bottom: 'margin-bottom',
  right: 'margin-right'
}

// const getVariant = (position, size, theme) => {
//   const sizeIndex = sizeVariant[size]
//   const property = positionVariant[position]
//   const value = theme.space[sizeIndex]
//   return `${property}: ${value}px`
// }

export const Spacer = styled.View`
  ${({side, size, theme}) =>
  `${sideVariant[side]}: ${theme.space[sizeVariant[size]]}`}
`

Spacer.defaultProps = {
  side: 'top',
  size: 'small'
}