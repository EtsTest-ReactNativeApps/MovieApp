import React from 'react'
import { ImageBackground, StyleSheet,View } from 'react-native'
import styled from 'styled-components'
import colors from 'styles/colors'
import LanguageBox from './LanguageBox'
import Typography from './Typography'
import Icon from 'react-native-vector-icons/AntDesign'
import Row from 'components/layout/Row'
import HorizontalSpace from 'components/layout/HorizontalSpace'


const TextStyle = {
  'alignItems': 'flex-start'
}


const MovieCard = () => {
  return (
    <ViewContainer>
      <ImageBackground  imageStyle={{ borderRadius: 19}} style={styles.imageStyle} source={require('../../../assets/pic1.png')} > 
        <Row>
          <LanguageBox />
          <HorizontalSpace width={'110px'}/>
          <Icon style={styles.iconStyle} size={24} color="white" name="heart" />
        </Row>
        <View style={{marginLeft: 15, marginBottom:10}} >
          <Typography {...TextStyle} fontColor={colors.wildWatermelon}>
          Hello
          </Typography>
          <Icon  size={18} color="white" name="star" />
        </View>
      </ImageBackground>

    </ViewContainer>
  )
}

const styles= StyleSheet.create({
  imageStyle:{
    height: 250,
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'space-between'
  },

  iconStyle:{
    marginTop: 18
  }
})

const ViewContainer = styled.View`
border: 1px solid ${colors.stormGray}
border-radius: 20px
height: 300px
width: 46%
margin-bottom: 10px
align-self: center
`

export default MovieCard
