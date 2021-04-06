import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Row from 'components/layout/Row'
import colors from 'styles/colors'
import Typography from './Typography'
import HorizontalSpace from 'components/layout/HorizontalSpace'



const RateReview = ({review,stars}) => {
  
   

  return (
   
    <Row direction={'flex-start'}>
      <Icon  size={14} color= { stars <= 2 ? colors.steelgray : colors.radicalRed} name="star" />
      <Icon  size={14} color= { stars <= 4 ? colors.steelgray : colors.radicalRed} name="star" />
      <Icon  size={14} color= { stars <= 6 ? colors.steelgray : colors.radicalRed} name="star" />
      <Icon  size={14} color= { stars <= 8 ? colors.steelgray : colors.radicalRed} name="star" />
      <Icon  size={14} color= { stars <= 9 ? colors.steelgray : colors.radicalRed} name="star" />
      <HorizontalSpace width={'5px'} />
      <Typography fontWeight={'700'} fontColor={colors.steelgray} fontSize={'12px'}>{review} Review</Typography>
    </Row>
   
  )
}



export default RateReview
