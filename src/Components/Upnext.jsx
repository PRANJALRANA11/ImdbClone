import React from 'react'
import {Box,Typography,styled} from '@mui/material';
export default function Upnext({Movies}) {
    const Component=styled(Box)`
        width:40%;
        display:flex;
        flex-direction:column;
        align-items:baseline;
        padding-left: 20px;
        &>p{
            color:#f5c518;
            font-weight:600;
            font-size:18px;
            margin-bottom:10px;
        }
    `;
    const Poster=styled('img')({width:88});
    const Wrapper=styled(Box)`
        color:#fff;
        display:flex;
        &>p{
            margin-left:20px;
        }
    `;
  return (
    <>
      <Component>
        <Typography>Upnext</Typography>
        {
             Movies.splice(0,3).map(movie=>(
                <Wrapper>
                    <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="home"/>
                    <Typography>{movie.original_title}</Typography>
                </Wrapper>
            ))
        }
      </Component>
    </>
  )
}
