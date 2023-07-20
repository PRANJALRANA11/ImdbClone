import React ,{useEffect,useState}from 'react'
import { POPULAR_API_URL,TOPRATED_API_URL,UPCOMING_API_URL,Movie} from "../constants/url";
import { categoryMovies } from "../services/api";
import { useLocation } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box,styled,Typography,Divider } from '@mui/material';
import Upnext from '../Components/Upnext';
import MoviesList from '../Components/MoviesList';
export default function Category() {
  const[Movies,setMovies]=useState([]);
  const {search}=useLocation();
  const Container=styled(Box)`
    Background:#f5f5f5;
    padding:10px;
  `;
  useEffect(()=>{
      const getMovies=async(API_URL)=>{
       let response= await categoryMovies(API_URL);
       setMovies(response.results)
      }
      let API_URL='';
      if( search.includes('popular')){
         API_URL=POPULAR_API_URL;
      }else if( search.includes('TopRated')){
         API_URL=TOPRATED_API_URL;
      }
      else if( search.includes('Upcoming')){
         API_URL=UPCOMING_API_URL;
      }   
      getMovies(API_URL); 
  },[search])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const StyledBanner=styled('img')(
    {
        height:450,
        width:'100%'
    }
    );
    const Component=styled(Box)`
    width:83%;
    margin:auto;`;
  
  return (
    <>
    <Component >
            <Carousel responsive={responsive}
             swipeable={false}
             draggable={false}
             infinite={true}
             autoPlaySpeed={3000}>
                {
                    Movies.map(movie=>(
                        <StyledBanner src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="home"/>
                    ))
                }
            </Carousel>
            <Container>
              <Typography variant='h6'>IMDb charts</Typography>
              <Typography variant='h4'>IMDb  Movies</Typography>
              <Typography style={{fontSize:12,margin:5}}>IMDb Top {Movies.length} Movies</Typography>
              <Divider/>
              <MoviesList Movies={Movies}/>
            </Container>
      </Component>
    </>
  )
}


