
import FavoriteList from 'components/core/FavoriteList'
import Container from 'components/layout/ContainerView'
import FavContext from 'context/FavContext'
import React, {useContext} from 'react'
import {View,FlatList } from 'react-native'
import Typography from 'components/core/Typography'

const Favorite = ({navigation}) => {

  const {favList} = useContext(FavContext)
 
  return (
    <Container >
      <Typography {...TextStyle}fontSize={'18px'} fontWeight={'bold'}>FAVORITE</Typography>
      <View  >
        <FlatList
          style={{paddingTop: 15 }} 
          contentContainerStyle={{paddingBottom: 50}}
          data={favList}
          keyExtractor={results => results}
          renderItem={({ item }) => {
            return (     
          
              <FavoriteList navigation={navigation}id={item}/>
             
            )
          }}
        />
      </View>
    </Container>
  )
}

export default Favorite

const TextStyle = {
  'marginTop': 10,
  
}
