
import FavoriteList from 'components/core/FavoriteList'
import Typography from 'components/core/Typography'
import Container from 'components/layout/ContainerView'
import Row from 'components/layout/Row'
import FavContext from 'context/FavContext'
import React, {useContext} from 'react'
import { Text, View,FlatList,Button,StyleSheet,Image,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import colors from 'styles/colors'



const Profile = ({navigation}) => {

  const {favList} = useContext(FavContext)

 

  return (
    <Container >
      <Typography {...headerStyle}fontSize={'18px'} fontWeight={'bold'}>PROFILE</Typography>
      <View   >
        <Image style={styles.imageStyle} source={require('../../../assets/pic2.png')}/>
      </View>
      <View style={styles.paraStyle}>
        <Row>
          <Typography {...TextStyle }  fontWeight={'bold'}textAlign={'center'} centerPara  isParagrapgh>
            {favList.length}{'\n'}Movies
          </Typography>
          <Typography {...TextStyle} fontWeight={'bold'}  textAlign={'center'} isParagrapgh>
          1400 {'\n'}Following
          </Typography>
          <Typography {...TextStyle }  fontWeight={'bold'} textAlign={'center'}isParagrapgh>
          1200 {'\n'}Follower
          </Typography>
        </Row>
        
      </View>
      <View style={{width:'100%', alignItems:'center', marginTop:30}}>
        <TouchableOpacity style={styles.buttonStyle}  onPress={() => navigation.navigate('Favorite')}>
          <LinearGradient style={styles.linearGradient2} colors={[colors.gradientStart,colors.gradientEnd ]}>
            <Typography fontWeight={'bold'} fontSize={'18px'}>YOUR FAVORITES</Typography>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}  onPress={() => navigation.navigate('Home')}>
          <LinearGradient style={styles.linearGradient2} colors={[colors.gradientStart,colors.gradientEnd ]}>
            <Typography fontWeight={'bold'} fontSize={'18px'}>HOME</Typography>
          </LinearGradient>
        </TouchableOpacity>
          
      </View>
    </Container>
  )
}

export default Profile

const headerStyle = {
  'marginTop': 10,
  
  
}
const TextStyle = {
  'width': '30%',
  
  
}

const styles = StyleSheet.create({
  paraStyle:{
    marginTop:25,
    alignItems:'center',
    justifyContent:'center'
  },
  imageStyle: {
   
    justifyContent: 'center',
    alignSelf:'center',
    height:100,
    marginTop: 30,
    width:100,
    borderRadius: 50
   
  },
  buttonStyle:{
    marginTop: 30,
    width:'90%',
    justifyContent:'center',
    alignItems:'center'
  },
  linearGradient2:{
    height: 30,
    width:'90%',
    borderRadius: 15,
    justifyContent:'center',
    alignItems:'center'

  },
 
})