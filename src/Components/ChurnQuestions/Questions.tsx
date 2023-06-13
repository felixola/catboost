import React from 'react';
import { Box, Stack, MenuItem, Typography, Button, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../Theme';

const PredictBtn = styled(Button)({
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

const Questions: React.FC = () => {

              const [login, setLogin] = React.useState('');
              const [gender, setGender] = React.useState('');
              const [tenure, setTenure] = React.useState('');
              const [city, setCity] = React.useState('');
              const [payment, setPayment] = React.useState('');
              const [distance, setDistance] = React.useState('');
              const [hour, setHour] = React.useState('');
              const [spent, setSpent] = React.useState('');
              const [category, setCategory] = React.useState('');
              const [score, setScore] = React.useState('');
              const [marital, setMarital] = React.useState('');
              const [address, setAddress] = React.useState('');
              const [complain, setComplain] = React.useState('');
              const [orders, setOrders] = React.useState('');
              const [percentage, setPercentage] = React.useState('');
              const [coupon, setCoupon] = React.useState('');
              const [cashback, setCashback] = React.useState('');
            


              const handleChange = (event: SelectChangeEvent) => {
                setLogin(event.target.value as string);
              };


              const handleGender = (event: SelectChangeEvent) => {
                setGender(event.target.value as string);
              };

              

              const handleTenure = (event: SelectChangeEvent) => {
                setTenure(event.target.value as string);
              };

              

              const handleCity = (event: SelectChangeEvent) => {
                setCity(event.target.value as string);
              };

             
              const handlePayment = (event: SelectChangeEvent) => {
                setPayment(event.target.value as string);
              };

             

              const handleDistance = (event: SelectChangeEvent) => {
                setDistance(event.target.value as string);
              };

            

              const handleHour = (event: SelectChangeEvent) => {
                setHour(event.target.value as string);
              };

              

              const handleSpent = (event: SelectChangeEvent) => {
                setSpent(event.target.value as string);
              };

             

              const handleCategory = (event: SelectChangeEvent) => {
                setCategory(event.target.value as string);
              };

             

              const handleScore = (event: SelectChangeEvent) => {
                setScore(event.target.value as string);
              };

              const handleMarital = (event: SelectChangeEvent) => {
                setMarital(event.target.value as string);
              };

              const handleAddress = (event: SelectChangeEvent) => {
                setAddress(event.target.value as string);
              };

              const handleComplain = (event: SelectChangeEvent) => {
                setComplain(event.target.value as string);
              };

              const handleOrders = (event: SelectChangeEvent) => {
                setOrders(event.target.value as string);
              };

              const handlePercentage = (event: SelectChangeEvent) => {
                setPercentage(event.target.value as string);
              };

              const handleCoupon = (event: SelectChangeEvent) => {
                setCoupon(event.target.value as string);
              };

              const handleCashback = (event: SelectChangeEvent) => {
                setCashback(event.target.value as string);
              };

  return (

    <ThemeProvider theme={Theme}>

      <Box px='20px'>

        <FormControl fullWidth>
        {/*Preffered Login Device  */}
         <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='login'><Typography fontWeight='500' align='left'>Preferred Login Device</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={login}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                   >
                  <MenuItem value="">Mobile</MenuItem>
                  <MenuItem value={2}>Computer</MenuItem>
                </Select>
              </Stack>

              </FormControl>


              {/*Gender  */}
              <FormControl fullWidth>
         <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='gender'><Typography fontWeight='500' align='left'>Gender</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={gender}
                  onChange={handleGender}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">Male</MenuItem>
                  <MenuItem value={10}>Female</MenuItem>
                </Select>
              </Stack>
              </FormControl>

               {/*Tenure of customer */}
              <FormControl fullWidth>

              <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='tenure'><Typography fontWeight='500' align='left'>Tenure of customer</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={tenure}
                  onChange={handleTenure}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">0-5</MenuItem>
                  <MenuItem value={10}>5-10</MenuItem>
                  <MenuItem value={20}>10-15</MenuItem>
                  <MenuItem value={30}>15-20</MenuItem>
                  <MenuItem value={40}>20-25</MenuItem>
                  <MenuItem value={50}>30</MenuItem>
                </Select>
              </Stack>

              </FormControl>


              {/* City tier (size of the city */}
              <FormControl fullWidth>

              <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='city'><Typography fontWeight='500' align='left'>City tier (size of the city)</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={city}
                  onChange={handleCity}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">3m</MenuItem>
                  <MenuItem value={10}>3m-15m</MenuItem>
                  <MenuItem value={20}>15m</MenuItem>
                  
                </Select>
              </Stack>

              </FormControl>

             

              {/* Preferred payment method */}

              <FormControl fullWidth>
              <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='payment'><Typography fontWeight='500' align='left'>Preferred payment method</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={payment}
                  onChange={handlePayment}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">Debit Card</MenuItem>
                  <MenuItem value={10}>Credit card</MenuItem>
                  <MenuItem value={20}>E-wallet</MenuItem>
                  <MenuItem value={30}>Cash on delivery</MenuItem>
                  <MenuItem value={40}>UPI</MenuItem>
                </Select>
              </Stack>
              </FormControl>

              

              {/* Distance between warehouse to home of customers */}
              <FormControl fullWidth>

              <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='distance'><Typography fontWeight='500' align='left'>Distance between warehouse to home of customers</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={distance}
                  onChange={handleDistance}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">0-5</MenuItem>
                  <MenuItem value={10}>5-10</MenuItem>
                  <MenuItem value={20}>10-15</MenuItem>
                  <MenuItem value={30}>15-20</MenuItem>
                  <MenuItem value={40}>20-25</MenuItem>
                </Select>
              </Stack>

              </FormControl>

             
               {/* Hour spent on app*/}

               <FormControl fullWidth>

               <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='hour'><Typography fontWeight='500' align='left'>Hour spent on app</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={hour}
                  onChange={handleHour}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">0</MenuItem>
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={40}>4</MenuItem>
                  <MenuItem value={50}>5</MenuItem>
                  <MenuItem value={60}> &gt; 5 </MenuItem>
                  
                </Select>
              </Stack>

               </FormControl>
            


              {/* Number of device registered by that user*/}

              <FormControl fullWidth>

              <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='spent'><Typography fontWeight='500' align='left'>Hour spent on app</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={spent}
                  onChange={handleSpent}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={40}>4</MenuItem>
                  <MenuItem value={50}>5</MenuItem>
                  <MenuItem value={60}>6</MenuItem>
                  <MenuItem value={70}> &gt; 6 </MenuItem>
                  
                </Select>
              </Stack>

              </FormControl>
            

                {/* Preferred order category*/}
                <FormControl fullWidth>

                <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='category'><Typography fontWeight='500' align='left'>Preferred order category</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={category}
                  onChange={handleCategory}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">Mobile phone</MenuItem>
                  <MenuItem value={20}>Laptop and accessory</MenuItem>
                  <MenuItem value={30}>Grocery</MenuItem>
                  <MenuItem value={40}>Fashion</MenuItem>
                  <MenuItem value={50}>Others</MenuItem>
                  
                </Select>
              </Stack>

                </FormControl>
               

               {/* Satisfactory score of customer on service*/}

               <FormControl fullWidth>

               <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='score'><Typography fontWeight='500' align='left'>Satisfactory score of customer on service</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={score}
                  onChange={handleScore}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={40}>4</MenuItem>
                  <MenuItem value={50}>5</MenuItem>
                  
                </Select>
              </Stack>

               </FormControl>
              

               {/* Marital status*/}
               <FormControl fullWidth>

               <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='customer'><Typography fontWeight='500' align='left'>Satisfactory score of customer on service</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={marital}
                  onChange={handleMarital}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">Single</MenuItem>
                  <MenuItem value={20}>Married</MenuItem>
                  <MenuItem value={30}>Divorce</MenuItem>
                  
                </Select>
              </Stack>

               </FormControl>
              

              {/*Total number of address of a particular customer*/}
              <FormControl fullWidth>

              <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='address'><Typography fontWeight='500' align='left'>Total number of address of a particular customer</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={address}
                  onChange={handleAddress}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">1 - 3</MenuItem>
                  <MenuItem value={20}>4 - 7</MenuItem>
                  <MenuItem value={30}>8 - 11</MenuItem>
                  <MenuItem value={30}>12 - 15</MenuItem>
                  <MenuItem value={30}>16 - 20</MenuItem>
                  
                </Select>
              </Stack>

              </FormControl>
             


               {/*Any complain raised in the last month*/}
               <FormControl fullWidth>

               <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='complain'><Typography fontWeight='500' align='left'>Any complain raised in the last month</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={complain}
                  onChange={handleComplain}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">Yes</MenuItem>
                  <MenuItem value={20}>No</MenuItem>
                  
                </Select>
              </Stack>

               </FormControl>
               


              {/*Total number of orders placed since last month*/}

              <FormControl fullWidth>

              <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='order'><Typography fontWeight='500' align='left'>Total number of orders placed since last month</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={orders}
                  onChange={handleOrders}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">0 - 5</MenuItem>
                  <MenuItem value={20}>6 - 10</MenuItem>
                  <MenuItem value={30}>11 - 15</MenuItem>
                  <MenuItem value={40}>&gt; 16 </MenuItem>
                  
                </Select>
              </Stack>

              </FormControl>
            


              {/*Percentage increase in other from last year*/}
              <FormControl fullWidth>
              <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='percentage'><Typography fontWeight='500' align='left'>Percentage increase in other from last year</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={percentage}
                  onChange={handlePercentage}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">0% - 5%</MenuItem>
                  <MenuItem value={20}>6 - 11</MenuItem>
                  <MenuItem value={30}>12 - 17</MenuItem>
                  <MenuItem value={40}>18 - 22 </MenuItem>
                  <MenuItem value={40}>23 - 27 </MenuItem>
                  <MenuItem value={40}> &gt; 27</MenuItem>
                  
                </Select>
              </Stack>
              </FormControl>
             


                {/*Cupon used in last month*/}
                <FormControl fullWidth>
                <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='coupon'><Typography fontWeight='500' align='left'>Coupon used in last month</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={coupon}
                  onChange={handleCoupon}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">&lt; 7</MenuItem>
                  <MenuItem value={20}>7 - 14</MenuItem>
                  <MenuItem value={30}>15 - 21</MenuItem>
                  <MenuItem value={40}>16 - 28 </MenuItem>
                  <MenuItem value={40}>29 - 35</MenuItem>
                  <MenuItem value={40}> &gt; 35</MenuItem>
                  
                </Select>
              </Stack>

                </FormControl>
                

                {/*Cashback average in last month*/}
                <FormControl fullWidth>

                <Stack spacing={2} direction='column' mt='2rem'>
              <label htmlFor='cashBack'><Typography fontWeight='500' align='left'>Cashback average in last month</Typography></label>
                <Select
                  id="demo-simple-select"
                  value={cashback}
                  onChange={handleCashback}
                  displayEmpty
                  sx={{ width: '100%', margin: 0, height: '50px', textAlign: 'left'}}
                  size='small'
                  // onChange={handleChange}
                  defaultValue='Open' >
                  <MenuItem value="">7 - 14</MenuItem>
                  <MenuItem value={20}>15 - 21</MenuItem>
                  <MenuItem value={30}>16 - 28 </MenuItem>
                  <MenuItem value={40}>29 - 35</MenuItem>
                  <MenuItem value={50}> &gt; 35</MenuItem>
                  
                </Select>
              </Stack>

              </FormControl>

              <Box mt='2rem' width='100%' display='flex' alignItems='center' justifyContent='center'>
                <PredictBtn variant='contained'> Predict </PredictBtn>
              </Box>

              </Box>

    </ThemeProvider>
  )
}

export default Questions