import React from 'react'
import Carousel from 'react-multi-carousel';
import {Box,Typography,styled} from '@mui/material';
const StyledBanner = styled('img')({
  width: '100%'

});
const Title = styled(Typography)`
    color: #FFFFFF;
    display: flex;
`;


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function Slide({Movies}) {
  return (
       <Carousel responsive={responsive}
             swipeable={false}
             draggable={false}
             infinite={true}
             autoPlaySpeed={3000}>
                {
                    Movies.map(movie=>(
                      <>
                        <StyledBanner key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="home"/>
                        <Title>{movie.original_title}</Title>
                      </>
                    ))
                }
            </Carousel>
    
  )
}
