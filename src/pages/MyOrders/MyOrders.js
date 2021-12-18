import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/myOrders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])


    const handleDelete = id => {
        const url = `http://localhost:5000/booking/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('deleted')
                    const remaingProducts = orders.filter(order => order._id !== id);
                    setOrders(remaingProducts)
                }
            })


    }
    return (
        <div>
            <Typography sx={{ mb: 5, textAlign: 'center' }} variant="h3" gutterBottom component="div">
                My Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Name</TableCell>
                            <TableCell >Package  </TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">City</TableCell>

                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.package}
                                </TableCell>
                                <TableCell align="right">{row.phoneNumber}</TableCell>
                                <TableCell align="right">{row.city}</TableCell>

                                <TableCell align="right"><Button onClick={() => handleDelete(row._id)} variant="contained" color="error">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;