
import React from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'

const Typography = ({children, fontSize, fontWeight, fontColor, ...props}) => {
 
  return (
    <Container style={{...props}}>
      
      <Text numberOfLines={1} FC={fontColor} FW={fontWeight} FS={fontSize}>
        {children}
      </Text>
    </Container>
  )
}

const Container = styled.View`

`
const Text = styled.Text`
    font-family: 'FreeSans'
    font-size: ${props => props.FS || '15px'};
    font-weight: ${props => props.FW || 'normal'}
    color: ${props => props.FC || colors.white}
    text-align: center;

    `
export default Typography
