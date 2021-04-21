import React, {useState, useReducer} from 'react'

const FavContext = React.createContext()

const favReducer = (state,action) =>{
  switch (action.type){
    case 'add_fav':
      return [...state, action.payload ]
    case 'delete_fav':
      return state.filter(movieList => movieList !== action.payload)
    
    default:
      return state
  }

}

export const FavProvider = ({children}) =>{

  const [favList, dispatch] = useReducer(favReducer,[])
 

  const addFavMovie =(id) =>{
    dispatch({type:'add_fav',payload:id})
  }
  const removeFavMovie =(id) =>{
    dispatch({type:'delete_fav',payload:id})
  }
 
  // const addFavFilm = (id) =>{
  //   setFavList([...favList, {MovieId: id}])
  // }

  return <FavContext.Provider value={{favList, addFavMovie,removeFavMovie}}>
    {children}
  </FavContext.Provider>
}

export default FavContext