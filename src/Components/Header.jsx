import React , {useState} from "react";
import {Menu,BookmarkAdd,ExpandMore} from '@mui/icons-material';
import { AppBar,Toolbar,styled,Box,Typography,InputBase,MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {logoUrl}from '../constants/url'
import HeaderMenu from "./HeaderMenu";
import { Home_url } from "../constants/Routepath";
const StyledBox=styled(Box)`
  color:blue;
`;
const StyledToolbar = styled(Toolbar)`
  background: black ;
  min-height: 56px !important;
  padding:0 115px !important;
  justify-content:space-between ;
  &>*{
    padding: 0 16px;
  }
  &>div{
    display:flex;
    align-items:center;
    cursor:pointer;
    &>p{
        font-size:14px;
        font-weight:600;
    }
  }
  &>p{
    font-size:14px;
    font-weight:600;
}
  `;
const InputSearchField = styled(InputBase)`
    background: white;
    height: 30px;
    width: 55%;
    border-radius:5px;

  `;
  
const Logo = styled('img')({
  width: 64
});

function Header() {
  const[open,setOpen]=useState(null);
  const navigate = useNavigate();

  const handleClick=(e)=>{
      setOpen(e.currentTarget)
  }
  const handleClose=()=>{
    setOpen(null);
  }
  return (
    <AppBar position="static">
      <StyledToolbar>
       <Logo src={logoUrl} alt='logo' onClick={() => navigate(Home_url)}/>
          <Box  onClick={handleClick}>
            <Menu/>
            <Typography>
              Menu
            </Typography>
          </Box>
          <HeaderMenu open={open} handleClose={handleClose}/>
          <InputSearchField placeholder="search IMDb" ></InputSearchField >
          <Typography>IMDb<StyledBox component="span">Pro</StyledBox></Typography>
            
          <Box>
          <BookmarkAdd/>
          <Typography>
            Watchlist
          </Typography>
        </Box>
          <Typography>
            Sign in
          </Typography>
        <Box>
            <Typography>
              EN
            </Typography>
            <ExpandMore/>
        </Box>
      
      </StyledToolbar>
    </AppBar>
  );
}
export default Header;
