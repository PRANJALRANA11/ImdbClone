import React from 'react'
import { Menu,MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { Popular_Movies_url, Top_Rated_Movies_url, Upcoming_Movies_url } from '../constants/Routepath';
export default function HeaderMenu({open , handleClose}) {
  const openMenu=Boolean(open);
    return (
    <Menu
        id="basic-menu"
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={`${Popular_Movies_url}?category=popular`} style={{textDecoration:'none', color:"inherit"}}>
        <MenuItem onClick={handleClose}>Popular</MenuItem>
        </Link>
        <Link to={`${Top_Rated_Movies_url}?category=TopRated`} style={{textDecoration:'none', color:"inherit"}}>
        <MenuItem onClick={handleClose}>Top rated</MenuItem>
        </Link>
        <Link to={`${Upcoming_Movies_url}?category=Upcoming`}style={{textDecoration:'none', color:"inherit"}}>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
        </Link>
      </Menu>

  )
}
