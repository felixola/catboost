import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../../Components/Theme';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'; 

function createData(
    name: string,
    preferredLogin: string,
    marital: string,
    tenure: number,
    cityTier: number,
    preferredPayment: string,
    distanceWarehouse: number,
    hourSpent: number,
    numberOfDevices: number,
    Gender: string, 
    preferredOrder: string, 
    satScore: number,
    totalAddress: number,
    anyComplain: string,
    totalOrders: number,
    percentIncreaseOrder: number,
    couponUsed: string,
    daySince: number, 
    cashBack: number,

  ) {
    return { 
        name, 
        preferredLogin, 
        Gender,
        marital, 
        tenure, 
        cityTier,  
        preferredPayment, 
        distanceWarehouse,
        hourSpent,
        numberOfDevices,
        preferredOrder,
        satScore,
        totalAddress,
        anyComplain,
        totalOrders,
        percentIncreaseOrder,
        couponUsed,
        daySince,
        cashBack,

     };
  }
  
  const rows = [

    createData('Steve', 'Mobile', 'Single', 24, 35, 'city', 450, 24, 2, 'Male', 'Debit Card', 66, 45, 'Money', 33, 33, 'Money', 33, 33, ),
    createData('Steve', 'Mobile', 'Single', 24, 35, 'city', 450, 24, 2, 'Male', 'Debit Card', 66, 45, 'Money', 33, 33, 'Money', 33, 33, ),
    createData('Steve', 'Mobile', 'Single', 24, 35, 'city', 450, 24, 2, 'Male', 'Debit Card', 66, 45, 'Money', 33, 33, 'Money', 33, 33, ),

    
  ];
const Business:React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>


<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">

        <TableHead>

          <TableRow>

            <TableCell>Name</TableCell>
            <TableCell align="right">Preferred Login</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Marital</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
            <TableCell align="right">Tenure</TableCell>
            <TableCell align="right">City Tier</TableCell>
            <TableCell align="right">Preferred Payment</TableCell>
            <TableCell align="right">Distance Warehouse</TableCell>
            <TableCell align="right">Hour Spent</TableCell>
            <TableCell align="right">Number of Devices</TableCell>
            <TableCell align="right">Preferred Order</TableCell>
            <TableCell align="right">Sat Score</TableCell>
            <TableCell align="right">Total Address</TableCell>
            <TableCell align="right">Any complain</TableCell>
            <TableCell align="right">Total Order</TableCell>
            <TableCell align="right">PIO</TableCell>
            <TableCell align="right">Coupon used</TableCell>
            <TableCell align="right">Days Since</TableCell>
            <TableCell align="right">Cash Backs</TableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.preferredLogin}</TableCell>
              <TableCell align="right">{row.Gender}</TableCell>
              <TableCell align="right">{row.marital}</TableCell>
              <TableCell align="right">{row.tenure}</TableCell>
              <TableCell align="right">{row.cityTier}</TableCell>
              <TableCell align="right">{row.preferredPayment}</TableCell>
              <TableCell align="right">{row.distanceWarehouse}</TableCell>
              <TableCell align="right">{row.hourSpent}</TableCell>
              <TableCell align="right">{row.numberOfDevices}</TableCell>
              <TableCell align="right">{row.preferredOrder}</TableCell>
              <TableCell align="right">{row.satScore}</TableCell>
              <TableCell align="right">{row.totalAddress}</TableCell>
              <TableCell align="right">{row.anyComplain}</TableCell>
              <TableCell align="right">{row.totalOrders}</TableCell>
              <TableCell align="right">{row.percentIncreaseOrder}</TableCell>
              <TableCell align="right">{row.couponUsed}</TableCell>
              <TableCell align="right">{row.daySince}</TableCell>
              <TableCell align="right">{row.cashBack}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      

    </ThemeProvider>
  )
}

export default Business