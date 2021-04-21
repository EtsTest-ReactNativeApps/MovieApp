
import FavContext from 'context/FavContext'
import React, {useContext} from 'react'
import { Text, View,FlatList,Button } from 'react-native'


const Profile = () => {

  const {favList,addFavMovie,removeFavMovie} = useContext(FavContext)

  return (
    <View>
      <Text> This is Profile Screen</Text>
      {console.log(favList)}
      {/* <Button title="Add Post" onPress={() => addFavMovie(Math.floor(Math.random() * 999))}/> */}
      <FlatList
        data={favList}
        key = {result => result.id}
        renderItem={({ item }) => {
          return (  
            <View>
              <Text>{item}</Text>
              
            </View>
          )
        }}
      />

    </View>
  )
}

export default Profile
