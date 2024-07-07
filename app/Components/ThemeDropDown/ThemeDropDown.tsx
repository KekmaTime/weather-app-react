"use client";

import React from 'react';
import { useTheme } from "next-themes";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function ThemeDropDown() {
  const { setTheme, resolvedTheme } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeTheme = (theme: string) => {
    setTheme(theme);
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--foreground-rgb', '255, 255, 255');
      document.documentElement.style.setProperty('--background-start-rgb', '0, 0, 0');
      document.documentElement.style.setProperty('--background-end-rgb', '0, 0, 0');
      document.documentElement.style.setProperty('--button-bg-color', '255, 255, 255');
      document.documentElement.style.setProperty('--button-text-color', '0, 0, 0');
    } else {
      document.documentElement.style.setProperty('--foreground-rgb', '0, 0, 0');
      document.documentElement.style.setProperty('--background-start-rgb', '255, 255, 255');
      document.documentElement.style.setProperty('--background-end-rgb', '255, 255, 255');
      document.documentElement.style.setProperty('--button-bg-color', '0, 0, 0');
      document.documentElement.style.setProperty('--button-text-color', '255, 255, 255');
    }
  };

  return (
    <div>
      <IconButton onClick={handleClick} color="inherit">
        {resolvedTheme === 'dark' ? (
          <DarkModeIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
        ) : (
          <LightModeIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
        )}
        <span className="sr-only">Toggle theme</span>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => { changeTheme("light"); handleClose(); }}>
          Light
        </MenuItem>
        <MenuItem onClick={() => { changeTheme("dark"); handleClose(); }}>
          Dark
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ThemeDropDown;