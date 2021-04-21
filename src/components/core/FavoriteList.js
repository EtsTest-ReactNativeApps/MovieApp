import HorizontalSpace from 'components/layout/HorizontalSpace'
import Row from 'components/layout/Row'
import VerticalSpace from 'components/layout/VerticalSpace'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Text,View,TouchableOpacity,ActivityIndicator,ImageBackground,StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import LanguageBox from './LanguageBox'
import RateReview from './RateReview'
import Typography from './Typography'
import colors from 'styles/colors'
import MovieDB from 'api/MovieDB'
import FavContext from 'context/FavContext'

const FavoriteList = ({navigation,id}) => {

  const {favList,addFavMovie,removeFavMovie} = useContext(FavContext)
  const { getMovieDetails } = MovieDB()
  const {  data ,isLoading, error} =   useQuery(['MoviesDetails',id], 
    () => getMovieDetails(id))
  var Details = data
      
  if (isLoading) return <View  style={styles.indicator}><ActivityIndicator  size="large" color= {colors.radicalRed} /></View>


  if (error) return<Text> 'An error has occurred: ' + {error.message} </Text>

  return ( 
    <TouchableOpacity 
      onPress={() => navigation.navigate('MovieDetails',{id: Details.id})}
    >
      <ViewContainer>
      
        <View >
          <ImageBackground  imageStyle={{ borderTopLeftRadius:19,borderBottomLeftRadius: 19,}} style={styles.imageStyle} source={{ uri: `http://image.tmdb.org/t/p/w500${Details.poster_path}`  }} > 
            <LinearGradient colors={['transparent', '#191926']} style={styles.linearGradient}></LinearGradient>
            <Row>
              <HorizontalSpace width={'10px'}/>
              <LanguageBox language={Details.original_language} />
              <HorizontalSpace width={'110px'}/>
              <TouchableOpacity onPress={()=> {favList.includes(id) === false ? addFavMovie(id) :   removeFavMovie(id)}}>
                <Icon style={styles.iconStyle} size={24} color={favList.includes(id) === true ? colors.radicalRed : 'white'} name="heart" />
              </TouchableOpacity>
            </Row>
            <View style={{marginLeft: 10, marginBottom:10, alignItems:'flex-start'}} >
              <RateReview review={Details.vote_count} stars={Details.vote_average}/>
            </View>
          </ImageBackground> 
        </View>
        <View style={{width:'50%', marginLeft:15, marginTop:15}} >
          <Typography isParagrapgh fontSize={'16px'} fontWeight={'700'} >
            {Details.title}
          </Typography> 
          <Typography  {...TextStyle} fontColor={colors.steelgray} fontWeight={'700'} >
            {Details.runtime}  Min
          </Typography> 
          <Typography {...ParaStyle} isParagrapgh fontSize={'12px'}>{Details.overview}</Typography>
        </View>
      </ViewContainer>
    </TouchableOpacity>
  // <ViewContainer>
     
  //   {/* <TouchableOpacity 
  //     onPress={() => navigation.navigate('MovieDetails',{id: Details.id})}
  //   >
  //     <ImageBackground  imageStyle={{ borderRadius: 19}} style={styles.imageStyle} source={{ uri: `http://image.tmdb.org/t/p/w500${Details.poster_path}`  }} > 
  //       <LinearGradient colors={['transparent', '#191926']} style={styles.linearGradient}></LinearGradient>
  //       <Row>
  //         <LanguageBox language={Details.original_language} />
  //         <HorizontalSpace width={'110px'}/>
  //         <TouchableOpacity onPress={()=> {favList.includes(id) === false ? addFavMovie(id) :   removeFavMovie(id)}}>
  //           <Icon style={styles.iconStyle} size={24} color={favList.includes(id) === true ? colors.radicalRed : 'white'} name="heart" />
  //         </TouchableOpacity>
  //       </Row>
  //       <View style={{marginLeft: 10, marginBottom:10, alignItems:'flex-start'}} >
  //         <RateReview review={Details.vote_count} stars={Details.vote_average}/>
  //       </View>
  //     </ImageBackground> */}
     
  //   {/* <Typography  {...TextStyle} fontWeight={'700'} >
  //     {Details.title}
  //   </Typography> */}
  //   {/* <Typography {...TextStyle} fontSize={'13px'} fontColor={colors.stormGray} fontWeight={'700'} >
  //       {Details.release_date}
  //     </Typography>
  //   </TouchableOpacity> */}
  // </ViewContainer>
  )
  

}
export default FavoriteList

const TextStyle = {
  'textAlign': 'left',
  
}
const ParaStyle = {
  'textAlign': 'left',
  'width': '80%'
}
  
const ViewContainer = styled.View`
border: 1px solid ${colors.stormGray}
border-radius: 20px
flex-direction: row
height: 250px
width: 95%
margin: 10px
margin-right:10px
align-self: center
`

const styles= StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom:15,
    borderTopLeftRadius:19,borderBottomLeftRadius: 19,   
    position: 'absolute',
    width: '100%',
    height:248,
        
  },
  linearGradient2: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom:15,
    borderTopLeftRadius:19,borderBottomLeftRadius: 19,   
    position: 'absolute',
    width: '100%',
    height:248,
        
  },
  imageStyle:{
    height: 248,
    width: '100%',
    justifyContent: 'space-between',

 
  },
  similarImageStyle:{
    height:170,
    width:150,
     
    justifyContent:'center',
    margin:10
  },
    
  iconStyle:{
    marginTop: 18,
    marginRight: 25
  },
  paragrapghStyle:{
    marginHorizontal: 15,
    backgroundColor: colors.backColor
  },
  indicator: {
     
    justifyContent: 'center',
    alignSelf:'center',
    height:'100%',
    backgroundColor: colors.backColorLight,
    width:'100%'
     
  },
})
    
    
