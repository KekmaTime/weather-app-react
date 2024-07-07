"use client"

import React from 'react'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { AppBar, Toolbar, Box, Paper } from '@mui/material';
import { github } from '../utils/Icons';

function Navbar() {
    const router = useRouter();
    return (
        <AppBar position="static" color='transparent' elevation={0}>
            <Toolbar className='w-full py-4 flex items-center justify-between'>
                <Box className="left"></Box>
                <Box className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
                    <Paper elevation={3} sx={{ padding: '2px', borderRadius: '8px', backgroundColor: 'white' }}>
                        <Button 
                            className='source-code flex items-center gap-2' 
                            onClick={() => router.push('https://github.com/')}
                            sx={{ fontSize: '0.675rem', color: 'black' }}
                        >
                           {github} Source Code
                        </Button>
                    </Paper>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar