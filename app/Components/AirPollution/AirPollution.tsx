"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { thermometer } from "@/app/utils/Icons";
import { airQualityIndexText } from "@/app/utils/misc";
import { Typography, Paper, Slider } from "@mui/material";
import { useTheme } from 'next-themes';
import Skeleton from "@mui/material/Skeleton";
import React from "react";

function AirPollution() {
  const { airQuality } = useGlobalContext();
  const { theme } = useTheme();
  if (
    !airQuality ||
    !airQuality.list ||
    !airQuality.list[0] ||
    !airQuality.list[0].main
  ) {
    return (
      <Skeleton variant="rectangular" height={192} width="100%" />
    );
  }

  const airQualityIndex = airQuality.list[0].main.aqi * 10;

  console.log(airQualityIndex, "airQualityIndex");

  const filteredIndex = airQualityIndexText.reduce((prev, curr) => {
    return (Math.abs(curr.rating - airQualityIndex) < Math.abs(prev.rating - airQualityIndex) ? curr : prev);
  });

  return (
    <Paper
      sx={{
        padding: 2,
        height: 192,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: 'var(--background-end-rgb)',
        boxShadow: theme === 'light' ? '0px 1px 3px rgba(0, 0, 0, 0.2)' : 'none',
        borderColor: '#0A0A0A',
        borderWidth: '1px',
        borderStyle: 'solid',
        width: '1000px',
      }}
    >
      <Typography variant="h6" component="h2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {thermometer}Air Pollution
      </Typography>
      <Slider
        value={airQualityIndex}
        min={0}
        max={100}
        disabled
        sx={{
          height: 8,
          borderRadius: 5,
          '& .MuiSlider-track': {
            background: 'none',
          },
          '& .MuiSlider-rail': {
            background: 'linear-gradient(90deg, rgba(58, 110, 180, 1) 0%, rgba(126, 212, 87, 1) 20%, rgba(248, 212, 73, 1) 40%, rgba(235, 77, 96, 1) 60%, rgba(180, 96, 231, 1) 80%, rgba(178, 34, 34, 1) 100%)',
            opacity: 1,
          },
          '& .MuiSlider-thumb': {
            height: 16,
            width: 16,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
          },
        }}
      />
      <Typography>Air quality is {filteredIndex?.description}.</Typography>
    </Paper>
  );
}

export default AirPollution;