"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context/globalContext";
import {
  clearSky,
  cloudy,
  drizzleIcon,
  navigation,
  rain,
  snow,
} from "@/app/utils/Icons";
import { kelvinToCelsius } from "@/app/utils/misc";
import moment from "moment";
import { Box, Typography, Paper } from '@mui/material';
import { useTheme } from "next-themes";

function Temperature() {
    const { theme } = useTheme();
    const { forecast } = useGlobalContext();
    const { main, timezone, name, weather } = forecast;
    if (!forecast || !weather) {
      return <div>Loading...</div>;
    }
    const temp = kelvinToCelsius(main?.temp);
    const minTemp = kelvinToCelsius(main?.temp_min);
    const maxTemp = kelvinToCelsius(main?.temp_max);
    // State
    const [localTime, setLocalTime] = useState<string>("");
    const [currentDay, setCurrentDay] = useState<string>("");
    const { main: weatherMain, description } = weather[0];
    const getIcon = () => {
      switch (weatherMain) {
        case "Drizzle":
          return drizzleIcon;
        case "Rain":
          return rain;
        case "Snow":
          return snow;
        case "Clear":
          return clearSky;
        case "Clouds":
          return cloudy;
        default:
          return clearSky;
      }
    };
  
    // Live time update
    useEffect(() => {
      // update time every second
      const interval = setInterval(() => {
        const localMoment = moment().utcOffset(timezone / 60);
        // custom format: 24 hour format
        const formattedTime = localMoment.format("HH:mm:ss");
        // day of the week
        const day = localMoment.format("dddd");
  
        setLocalTime(formattedTime);
        setCurrentDay(day);
      }, 1000);
    }, []);
  
    return (
      <Paper
        sx={{
          padding: '24px 16px',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'var(--background-end-rgb)',
          boxShadow: theme === 'light' ? '0px 1px 3px rgba(0, 0, 0, 0.2)' : 'none',
          borderColor: '#0A0A0A',
          borderWidth: '1px',
          borderStyle: 'solid',
          width: '450px',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="medium">{currentDay}</Typography>
          <Typography variant="h6" fontWeight="medium">{localTime}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1} pt={2}>
          <Typography variant="h6" fontWeight="bold">{name}</Typography>
          <Typography variant="h6" fontWeight="bold">{navigation}</Typography>
        </Box>
        <Typography variant="h1" fontWeight="bold" alignSelf="center" py={5}>{temp}°</Typography>
  
        <Box>
          <Box display="flex" alignItems="center" gap={1}>
            <span>{getIcon()}</span>
            <Typography variant="subtitle1" fontWeight="bold" textTransform="capitalize" >{description}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body1">Low: {minTemp}°</Typography>
            <Typography variant="body1">High: {maxTemp}°</Typography>
          </Box>
        </Box>
      </Paper>
    );
  }
  export default Temperature;