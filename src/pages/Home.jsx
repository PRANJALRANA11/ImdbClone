import React,{useEffect,useState} from "react";
import { categoryMovies } from "../services/api";
import { NOWPLAYING_API_URL } from "../constants/url";
import {Box,styled} from '@mui/material';
import Banner from "../Components/Banner";
import Upnext from "../Components/Upnext";
import Slide from "../Components/Slide";
const Wrapper=styled(Box)`
  display:flex;
  padding:20px 0;
`;
const Component=styled(Box)`
  padding:0 115px;
`;

function Home() {
  const[Movies,setMovies]=useState([]);
  useEffect(()=>{
    const getMovies=async()=>{
     let response= await categoryMovies(NOWPLAYING_API_URL);
     setMovies(response.results)
    }
    getMovies();
  },[])
  return (
    <>
      <Component>
        <Wrapper>
          <Banner Movies={Movies}/>
          <Upnext Movies={Movies}/>
         </Wrapper>
         <Slide Movies={Movies}/>
         <Slide Movies={Movies}/>
         <Slide Movies={Movies}/>
         <Slide Movies={Movies}/>
         <Slide Movies={Movies}/>
         <Slide Movies={Movies}/>
         <Slide Movies={Movies}/>
         <Slide Movies={Movies}/>
      </Component>
    </>
  );
}

export default Home;
