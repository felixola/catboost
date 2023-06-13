import React from 'react';
import { Box, Typography, Button, Divider, Stack, Container, Toolbar} from '@mui/material';
import { Sidebar, Menu, MenuItem, } from "react-pro-sidebar";
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Theme from '../../Components/Theme';
import ApiIcon from '@mui/icons-material/Api';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupIcon from '@mui/icons-material/Group';
import DownloadIcon from '@mui/icons-material/Download';
import './Main.css';
import Robot from '../../assets/gifs/Robot_face.gif'
import Chip from '../../assets/images/chip.png';
import Questions from '../../Components/ChurnQuestions/Questions';


interface Item {
    id: number;
    name: string;
    icons?: any;
  }
  
  export const items: Array<Item> = [
    {
      id: 1,
      name: "Documentation", 
      icons: (<DescriptionIcon />),
     
    },
  
    {
      id: 2,
      name: "Api", 
      icons: (<ApiIcon />),
    },
    {
      id: 3,
      name: "Students", 
      icons: (<GroupIcon />),
    },
  
  ];


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


  const Download = styled(Button)({
    border: '0.5px solid #575757',
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: '700',
    width: '200px', 
    height: '40px',
    color: '#575757', 
    borderRadius: '2px', 
    '&:hover': {
      backgroundColor: '#1f4287',
      color: '#FFFFFF',
    }
  })


const Main:React.FC = () => {

  const [toggled, setToggled] = React.useState(false);

  return (

    <ThemeProvider theme={Theme}>

      {/* SideBar */}
     
    <Box sx={{ height: '100%', display: 'flex', }}>

       <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="sm">

        <Typography pt='20px' px='20px' variant='h5' fontWeight='800' color='#002663'> AI MODEL</Typography>

        <Box mt='30px' pl='20px'>

          {/* Start Btn */}
        <StartBtn> START</StartBtn>

      </Box>

        <Menu style={{ paddingTop: '20px'}}>
    

            {items.map((sides) => (   

              <MenuItem icon={ sides.icons} style={{ color: '#575757'}}>

                <Typography color='#575757' fontWeight='400' fontSize='15px'>

                   { sides.name}

                </Typography>

              </MenuItem>

            ))}
              
        </Menu>

           <Divider orientation='horizontal' variant='middle'  sx={{marginTop: '20px'}}/>

            {/* Download button */}
            <Box mt='40px' pl='20px'>

              <Download variant='outlined'  startIcon={<DownloadIcon />}> DOWNLOAD</Download>

            </Box>

            <Box mt='40px' width='100%' display='flex' alignItems='center' justifyContent='center'>
              
             <img src={Robot} style={{ width: '100px', height: '100px'}} alt="robot" />

            </Box>

            {/* Copyright */}
            <Box  width='100%' mt='2rem' display='flex' alignItems='center' justifyContent='center'>

              <Typography sx={{ position: 'static', bottom: 0,}} variant='body1'  fontWeight='800' color='#002663'>CSC 443 Group 8</Typography>

            </Box>

          </Sidebar>

          {/* Main */}
          <section style={{ width: '100%'}} className='main'>


          <Box sx={{ display:{md: 'none', xs: 'flex'}, width: '100%', height: 'auto', background: '#FFFFFF',  zIndex: 3, position: 'sticky', top: '0px', }}>

<Container maxWidth='xl'>

  <Toolbar disableGutters  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
    {/* Logo */}
    <Typography pt='5px' variant='h5' fontWeight='800' color='#002663'> AI MODEL</Typography>

    </Toolbar>

</Container>

</Box>

    <Divider orientation='horizontal' variant='middle'  sx={{marginTop: '5px', display:{md: 'none', xs: 'flex'},}}/>

    {/* Title and subtitle */}
        <Box width='100%'>

        <Box px='20px'>

          <Stack direction='row' spacing={1} display='flex' alignItems='center'>

            <Typography pt='20px' mb='20px' variant='h5' fontWeight='800' color='#002663'>CatBoost</Typography>

            <img style={{ width: '25px', height: '25px'}} src={Chip} alt='chip' />

          </Stack>
          

        <Stack direction='column' spacing={1}>

          <Typography variant='body1' fontWeight='500'>This is an AI model that predicts if a customer will churn a site</Typography>

          <Typography variant='body1' fontWeight='500'>Answer the following question</Typography>

        </Stack>

        </Box>

        </Box>

        <Divider  orientation='horizontal' variant='middle'  sx={{marginTop: '20px'}}/>

            <Questions />
     
                  </section>
                
            </Box>

    </ThemeProvider>
  )
}

export default Main;