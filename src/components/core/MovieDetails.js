import React, {useEffect,useState} from 'react'

import { ImageBackground, StyleSheet,View,Text} from 'react-native'
import styled from 'styled-components'
import colors from 'styles/colors'
import LanguageBox from './LanguageBox'
import Typography from './Typography'
import Icon from 'react-native-vector-icons/AntDesign'
import Row from 'components/layout/Row'
import HorizontalSpace from 'components/layout/HorizontalSpace'
import LinearGradient from 'react-native-linear-gradient'
import RateReview from './RateReview'
import MovieDB from 'api/MovieDB'
import { useQuery } from 'react-query'



const MovieDetails = ({route}) => {
 
  const id = route.params.id
  const { getMovieDetails } = MovieDB()
 
  const {  data ,isLoading, error} =   useQuery(['MoviesDetails',id], 
    () => getMovieDetails(id))

  var Details = data

  if (isLoading) return <Text>Loading...</Text>

  if (error) return<Text> 'An error has occurred: ' + {error.message} </Text>

  return (
  
    <ViewContainer>
      <ImageBackground  imageStyle={{ borderRadius: 19}} style={styles.imageStyle} source={{ uri: `http://image.tmdb.org/t/p/w500${Details.poster_path}`  }} > 
       
        <LinearGradient colors={['transparent', '#191926']} style={styles.linearGradient}></LinearGradient>
        <Row>
          <LanguageBox language={Details.original_language} />
          <HorizontalSpace width={'110px'}/>
          <Icon style={styles.iconStyle} size={24} color="white" name="heart" />
        </Row>
        <View style={{marginLeft: 10, marginBottom:10, alignItems:'flex-start'}} >
    
          <RateReview review={Details.vote_count} stars={Details.vote_average}/>
        </View>
      </ImageBackground>
      <Typography  {...TextStyle} fontWeight={'700'} >
        {Details.original_title}
      </Typography>
      <Typography {...TextStyle} fontSize={'13px'} fontColor={colors.stormGray} fontWeight={'700'} >
        {Details.release_date}
      </Typography>
    </ViewContainer>
  )
}

const TextStyle = {
  'alignItems': 'flex-start',
  'marginLeft': 10
}
  
const ViewContainer = styled.View`
border: 1px solid ${colors.stormGray}
border-radius: 20px
height: 300px
width: 48%
margin-bottom: 10px
align-self: center
`


export default MovieDetails

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
  
  