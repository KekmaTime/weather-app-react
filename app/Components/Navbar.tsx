"use client"

import React from 'react'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { AppBar, Toolbar, Box, Paper } from '@mui/material';
import { github } from '../utils/Icons'
import ThemeDropDown from './ThemeDropDown/ThemeDropDown';
import SearchDialog from './SearchDialog/SearchDialog';
import { useGlobalContext } from '../context/globalContext';

function Navbar() {
    const router = useRouter();
    const { state } = useGlobalContext();
    console.log(state);
    return (
        <AppBar position="static" color='transparent' elevation={0}>
            <Toolbar className='w-full py-4 flex items-center justify-between'>
                <Box className="left"></Box>
                <Box className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
                    <SearchDialog />
                    <div className="btn-group flex items-center gap-2">
                        <ThemeDropDown />
                        <Paper elevation={3} sx={{ padding: '2px', borderRadius: '8px', backgroundColor: 'rgb(var(--button-bg-color))' }}>
                        <Button 
                            className='source-code flex items-center gap-2' 
                                onClick={() => router.push('https://github.com/kekmatime')}
                                sx={{ fontSize: '0.675rem', color: 'rgb(var(--button-text-color))' }}>
                                {github} Source Code
                            </Button>
                        </Paper>    
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar