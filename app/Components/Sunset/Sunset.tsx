"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { sunset } from "@/app/utils/Icons";
import { unixToTime } from "@/app/utils/misc";
import { Skeleton, Typography, Paper } from "@mui/material";
import React from "react";
import { useTheme } from 'next-themes';

function Sunset() {
  const { forecast } = useGlobalContext();
  const { theme } = useTheme();

  if (!forecast || !forecast?.sys || !forecast?.sys?.sunset) {
    return <Skeleton variant="rectangular" height={192} width="100%" />;
  }

  const times = forecast?.sys?.sunset;
  const timezone = forecast?.timezone;

  const sunsetTime = unixToTime(times, timezone);
  const sunrise = unixToTime(forecast?.sys?.sunrise, timezone);

  return (
    <Paper
      sx={{
        padding: 3,
        height: 179,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: 'var(--background-end-rgb)',
        boxShadow: theme === 'light' ? '0px 1px 3px rgba(0, 0, 0, 0.2)' : 'none',
        borderColor: '#0A0A0A',
        borderWidth: '1px',
        borderStyle: 'solid',
        width: '200px',
      }}
    >
      <Typography variant="h6" component="h2" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {sunset}Sunset
      </Typography>
      <Typography variant="h5" fontWeight="bold" alignSelf="left" py={0}>{sunsetTime}</Typography>
      <Typography>Sunrise: {sunrise}</Typography>
    </Paper>
  )
}

export default Sunset;