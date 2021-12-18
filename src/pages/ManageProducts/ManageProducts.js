import { Container, Grid, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ManageProducts = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-caverns-99351.herokuapp.com/allPackages')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const url = `https://safe-caverns-99351.herokuapp.com/managePackages/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    const remaingProducts = products.filter(product => product._id !== id);
                    setProducts(remaingProducts);
                    window.location.reload();
                }
            })


    }

    return (
        < Box >
            <Typography variant='h4' sx={{ fontWeight: 'medium', textAlign: 'center' }}>Manage  Packages</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>

                            <TableCell align="right">Rating</TableCell>
                            <TableCell align="right">Rent</TableCell>

                            <TableCell align="center">Edit</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.rating}</TableCell>
                                <TableCell align="right">{row.rent}</TableCell>


                                <TableCell align="center">
                                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/manageBookingEdit/${row._id}`}><Button variant="contained">Edit</Button></NavLink>
                                </TableCell>
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
                                    {/* 
                                <Button onClick={() => handleDelete(row._id)} variant="contained">Delete</Button> */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    );
};

export default ManageProducts;