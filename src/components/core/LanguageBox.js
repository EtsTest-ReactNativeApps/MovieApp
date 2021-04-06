import React from 'react'
import styled from 'styled-components'


import { StyleSheet, Text } from 'react-native'

const LanguageBox = ({language}) => {
  return (
    <ViewContainer>
      <Text style={styles.fontStyle}>{language.toUpperCase()}</Text>
    </ViewContainer>
  )
}

const ViewContainer = styled.View`
background-color: 'rgba(0, 0, 0, 0.8)'
height: 30px
width: 30px
border-radius: 5px
justify-content: center
padding-bottom: 1px

margin-top: 16px
`

export default LanguageBox


const styles = StyleSheet.create({
  fontStyle:{
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  }
})