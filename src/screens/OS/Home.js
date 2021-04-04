import React from 'react'
import ContainerView from '../../components/layout/ContainerView'
import Typography from '../../components/core/Typography'
import MovieCard from 'components/core/MovieCard'
import Row from 'components/layout/Row'

const Home = () => {
  return (
    <ContainerView>
      <Typography>This is home</Typography>
      <Row >
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
       
      </Row>
    </ContainerView>
  )
}

export default Home
