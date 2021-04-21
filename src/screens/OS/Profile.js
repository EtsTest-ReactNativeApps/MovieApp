
import FavoriteList from 'components/core/FavoriteList'
import Container from 'components/layout/ContainerView'
import FavContext from 'context/FavContext'
import React, {useContext} from 'react'
import { Text, View,FlatList,Button,StyleSheet } from 'react-native'
import { useQuery } from 'react-query'
import colors from 'styles/colors'



const Profile = () => {



  const {favList,addFavMovie,removeFavMovie} = useContext(FavContext)

  return (
    <Container >
      <View  >
        <FlatList
          style={{paddingTop: 15 }} 
      
          contentContainerStyle={{paddingBottom: 50}}
       
          data={favList}
          keyExtractor={results => results}
          renderItem={({ item }) => {
            return (     
          
              <FavoriteList id={item}/>
             
            )
          }}
        />
      </View>
    </Container>
  )
}

export default Profile

const styles = StyleSheet.create({
  indicator: {
   
    justifyContent: 'center',
    alignSelf:'center',
    height:'100%',
    backgroundColor: colors.backColorLight,
    width:'100%'
   
  },
 
})