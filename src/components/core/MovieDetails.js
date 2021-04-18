import React from 'react'
import { ImageBackground, StyleSheet,View,Text,FlatList, Image} from 'react-native'
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
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import VerticalSpace from 'components/layout/VerticalSpace'
import R from 'ramda'



const MovieDetails = ({navigation,route}) => {
 
  const id = route.params.id
  const { getMovieDetails,getMovieRecommendations } = MovieDB()
 
  const {  data ,isLoading, error} =   useQuery(['MoviesDetails',id], 
    () => getMovieDetails(id))

  const {data: recommendationsMovies} = useQuery(['MoviesRecommendations',id],
    ()  => getMovieRecommendations(id))
  

  var Recommend = R.flatten((R.propOr([], 'results', recommendationsMovies)))


  var Details = data
 
  console.log(Recommend)
  
  if (isLoading) return <Text>Loading...</Text>

  if (error) return<Text> 'An error has occurred: ' + {error.message} </Text>

  return (
    <ScrollView 
      style={{backgroundColor:colors.backColor}}
      StickyHeaderComponent
    >
      <ViewContainer>
        <ImageBackground  imageStyle={{resizeMode:'cover'}} style={styles.imageStyle} source={{ uri: `http://image.tmdb.org/t/p/w500${Details.poster_path}`  }} > 
       
          <LinearGradient colors={['transparent', '#191926']} style={styles.linearGradient}></LinearGradient>
          <Row direction={'flex-end'}>
          
            <HorizontalSpace width={'110px'}/>
            <Icon style={styles.iconStyle} size={24} color="white" name="heart" />
          </Row>
          
         
          <View style={{marginLeft: 10, marginBottom:10, alignItems:'flex-start'}} >
            <LanguageBox language={Details.original_language} />
          
          </View>
        </ImageBackground>



        <View style={styles.paragrapghStyle}>

          <Typography isParagrapgh {...TextStyle} fontSize={'40px'} fontWeight={'700'} >

            {Details.title}

          </Typography>
          <VerticalSpace height={'15px'}/>

          <Row direction={'flex-start'}>

            {Details.genres.map((gender)=>{return(<Typography key={gender.id} fontColor={colors.radicalRed} >{gender.name}, 
            </Typography>)})}

          </Row>
          <VerticalSpace height={'5px'}/>
          <RateReview starSize={20} fontSize={'18px'} review={Details.vote_count} stars={Details.vote_average}/>

          <Typography {...TextStyle} fontSize={'15px'} fontColor={colors.stormGray} fontWeight={'700'} >

         Release Date: {Details.release_date}

          </Typography>
          <VerticalSpace height={'15px'}/>
          <Typography fontWeight={'700'} fontSize={'18px'}>Storyline</Typography>
          <VerticalSpace height={'10px'}/>
          <Typography isParagrapgh> 

            {Details.overview}</Typography>
          <VerticalSpace height={'20px'}/>
          <Typography fontWeight={'700'} fontSize={'18px'}>
                Recommendations:
          </Typography>

          <FlatList 
            
            data={Recommend}
            horizontal
            keyExtractor={results => results.id}
            renderItem={({ item }) => {
              return (     
                <TouchableOpacity onPress={() => navigation.navigate('MovieDetails',{id: item.id})}>
                  <ImageBackground   imageStyle={{ borderRadius: 19}} style={styles.similarImageStyle} source={{ uri: `http://image.tmdb.org/t/p/w500${item.poster_path}`  }} >
                    <LinearGradient colors={['transparent', '#191926']} style={styles.linearGradient}></LinearGradient>
                    <View style={{marginTop:80, marginLeft:5}}><Typography fontWeight={'700'} fontSize={'14px'}>{item.title}</Typography>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )
            }}
          />
        </View>

      </ViewContainer>
    </ScrollView>
  )
}

const TextStyle = {
  'alignItems': 'flex-start',
  'textAlign': 'left',
  
  
}
  
const ViewContainer = styled.View`
background-color: ${colors.backColor}
height: 100%
width: 100%
margin-bottom: 10px
align-self: center
`


export default MovieDetails

const styles= StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
   
    position: 'absolute',
    width: '100%',
    height:250,
      
  },
  imageStyle:{
    height: 250,
    width: '100%',
    justifyContent: 'space-between'
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
  }
})
  
  