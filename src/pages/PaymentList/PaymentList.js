import { Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const PaymentList = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `https://safe-caverns-99351.herokuapp.com/paymentList`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color: 'white',

    };




    const handleDelete = id => {
        const url = `https://safe-caverns-99351.herokuapp.com/paymentList/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    const remaingProducts = orders.filter(order => order._id !== id);
                    setOrders(remaingProducts);
                    window.location.reload();
                }
            })


    }
    return (
        <Box>
            <Typography variant='h4' sx={{ fontWeight: 'medium', textAlign: 'center' }}>Manage  Payment</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Method</TableCell>
                            <TableCell align="right">Amount</TableCell>


                            <TableCell align="center">Delete</TableCell>
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
                                    {row.email}
                                </TableCell>
                                <TableCell align="right">{row.pType}</TableCell>
                                <TableCell align="right">{row.payment}</TableCell>
                                {/* disabled={double} */}

                                <TableCell align="center">
                                    <Button variant="contained" color="error" onClick={handleOpen}>Delete</Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Delete!!!
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                Are You Sure? You Want to  Delete this payment?
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                <Button onClick={() => handleDelete(row._id)} variant="contained" color="error">Confirm!</Button>
                                            </Typography>

                                        </Box>
                                    </Modal>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PaymentList;
{/* */ }

