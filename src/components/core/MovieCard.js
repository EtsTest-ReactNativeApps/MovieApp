import React from 'react'
import { ImageBackground, StyleSheet,View } from 'react-native'
import styled from 'styled-components'
import colors from 'styles/colors'
import LanguageBox from './LanguageBox'
import Typography from './Typography'
import Icon from 'react-native-vector-icons/AntDesign'
import Row from 'components/layout/Row'
import HorizontalSpace from 'components/layout/HorizontalSpace'
import LinearGradient from 'react-native-linear-gradient'

const TextStyle = {
  'alignItems': 'flex-start',
  'marginLeft': 10
}


const MovieCard = () => {
  return (
    <ViewContainer>
      <ImageBackground  imageStyle={{ borderRadius: 19}} style={styles.imageStyle} source={require('../../../assets/pic1.png')} > 
        <LinearGradient colors={['transparent', '#191926']} style={styles.linearGradient}></LinearGradient>
        <Row>
          <LanguageBox />
          <HorizontalSpace width={'110px'}/>
          <Icon style={styles.iconStyle} size={24} color="white" name="heart" />
        </Row>
        <View style={{marginLeft: 10, marginBottom:10, alignItems:'flex-start'}} >
          <Typography fontColor={colors.wildWatermelon} fontSize={'12px'}>
          Action, Adventure, Drama
          </Typography>
          <Icon  size={14} color="white" name="star" />
        </View>
      </ImageBackground>
      <Typography {...TextStyle} fontWeight={'700'} >
        Avengers: End Game 
      </Typography>
      <Typography {...TextStyle} fontSize={'13px'} fontColor={colors.stormGray} fontWeight={'700'} >
        137 MIN
      </Typography>
    </ViewContainer>
  )
}

const styles= StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    position: 'absolute',
    width: '100%',
    height:250,
    
  },
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
