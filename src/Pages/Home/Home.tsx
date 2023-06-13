import React from 'react';
import { Button, Box, Stack, Container, Toolbar, Typography, Divider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../../Components/Theme';
import { styled } from '@mui/material/styles';
import Logo from '../../assets/images/chip.png';
import Robot from '../../assets/gifs/Robot_face.gif';
import { useNavigate } from 'react-router-dom';
import './Home.css';


const StartBtn = styled(Button)({
  backgroundColor: '#002663',
  textTransform: 'none',
  border: 'none',
  fontSize: '14px',
  fontWeight: '700',
  width: '200px', 
  height: '40px',
  color: '#FFFFFF', 
  borderRadius: '2px', 
  '&:hover': {
    backgroundColor: '#1f4287',
  }
});





const Home: React.FC = () => {

  const navigate = useNavigate();

  const handleClick = () => navigate('/main');

  return (

    <ThemeProvider theme={Theme}>

        <Box sx={{ width: '100%', height: 'auto'}}>

          <Container maxWidth='xl'>

            <Toolbar disableGutters >
              {/* Logo */}

              <Stack direction='row' spacing={1} display='flex' alignItems='center' justifyContent='center'>
              <img src={Logo} alt="logo" className='logo'/>
              <Typography variant='h5' fontWeight='800' color='#002663'>CatBoost</Typography>
              </Stack>
              

            </Toolbar>

          </Container> 

          </Box>

          <Divider orientation='horizontal'/>

      <Box width='100%' height='100%' display='flex' alignItems='center' justifyContent='center'>

        <Stack direction='column' pt='20px' spacing={2} display='flex' alignItems='center' justifyContent='center'>

          <img src={Robot} alt="Robot" className='Robot' />

          <StartBtn onClick={handleClick}>START</StartBtn>
          
        </Stack>

      </Box>
      
        
    </ThemeProvider>
  )
}

export default Home