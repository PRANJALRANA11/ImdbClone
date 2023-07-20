import { List, ListItem, Typography,styled } from '@mui/material'
import { Star } from '@mui/icons-material'
import React from 'react'

export default function MoviesList({Movies}) {

    const Banner=styled('img')({
        width:47
    })
    const Container=styled(List)`display:flex;`;
    
      return (
        <>
        {
          Movies.map(movie =>(
                <Container>
                    <ListItem>
                        <Banner src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="home"/>
                    </ListItem>
                    <ListItem>
                        <Typography>{movie.original_title}</Typography>
                    </ListItem>
                    <ListItem>
                        <Star color='warning'/>
                        <Typography>{movie.vote_average}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>{movie.release_date}</Typography>
                    </ListItem>
                </Container>
          ))
        }
        </>
      )
    
    }