import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Album/logo.jpeg";
import axios from 'axios'
import toast from 'react-hot-toast'


const Navbar = () => {
  const theme = useTheme();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  const navigate = useNavigate();

  //Handle Logout 
  const handleLogout = async()=> {
    try{
      await axios.post('/api/v1/auth/logout')
      localStorage.removeItem("authToken")
      toast.success("Logout Succeessfully😒")
      navigate("/login")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <Box
      width={"100%"}
      p="1rem 2%"
      backgroundColor={theme.palette.background.alt}
      textAlign={"left"}
      sx={{ boxShadow: 5, mb: 6 }}
    >
      <Typography
        fontSize={35}
        color="secondary"
        fontWeight={"bold"}
        fontFamily={"revert"}
        letterSpacing={2}
      >
        <img src={logo} alt="Logo" />
        KraftAi
        {loggedIn ? (
          <>
          <NavLink className="a" to="/login"
          onClick={handleLogout}>
            Logout
          </NavLink>
          <NavLink className="a" to="/">
            Home
          </NavLink>
          </>
        ) : (
          <>
            <NavLink className="a" to="/register">
              Sign UP
            </NavLink>
            <NavLink className="a" to="/login">
              Sign IN
            </NavLink>
          </>
        )}
      </Typography>
    </Box>
  );
};

export default Navbar;
