import React from 'react'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import User from './user';
import TableBody from '@mui/material/TableBody';




export default function TableBox() {

  return (
    <TableContainer  component={Paper} sx={{ overflow : "auto", minHeight: "80%",
      maxHeight:"80%" , "& th, & td": {
      fontSize: {
        xs: "0.7rem",
        sm: "0.85rem",
        md: "1rem",
      },  
    }, 
     }} 
    >
      <Table  aria-label="simple table" >
        <TableHead sx={{"& th" : {fontWeight : "bold"} }} >
            
              <TableRow>
                <TableCell  align='left'>Name</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Ticket Type</TableCell>
                <TableCell align="right">Phone.No</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
              
            
        </TableHead>
        <User/>
      </Table>
    </TableContainer>
    
  )
}
