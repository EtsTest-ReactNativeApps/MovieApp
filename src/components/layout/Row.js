import React from 'react'
import styled from 'styled-components'

const Row = ({ children, direction }) => {
  return <Horizontal direction={direction}>{children}</Horizontal>
}

const Horizontal = styled.View`
flexWrap: wrap
flex-direction : row
margin-left:${props => (props.direction == 'flex-start' ? '24px' : '0px')}
margin-right:${props => (props.direction == 'flex-end' ? '24px' : '0px')}
align-self:${props => props.direction || 'center'}
justify-content: space-around
`

export default Row
