"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { wind } from "@/app/utils/Icons";
import { Skeleton, Typography, Paper, Box } from "@mui/material";
import { useTheme } from 'next-themes';
import Image from "next/image";
import React from "react";

function Wind() {
  const { forecast } = useGlobalContext();
  const { theme } = useTheme();

  const windSpeed = forecast?.wind?.speed;
  const windDir = forecast?.wind?.deg;

  if (!windSpeed || !windDir) {
    return <Skeleton variant="rectangular" height={192} width="100%" />;
  }

  return (
    <Paper
      sx={{
        padding: 2,
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
      <Typography variant="h6" component="h2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {wind} Wind
      </Typography>

      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Image
            src="/compass_body.svg"
            alt="compass"
            width={110}
            height={110}
          />
          <Image
            src="/compass_arrow.svg"
            alt="compass"
            className="absolute top-0 left-[50%] transition-all duration-500 ease-in-out dark:invert"
            style={{
              transform: `rotate(${windDir}deg) translateX(-50%)`,
              height: "100%",
            }}
            width={11}
            height={11}
          />
        </Box>
        <Typography
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '0.75rem',
            fontWeight: 'medium',
            color: 'text.primary',
          }}
        >
          {Math.round(windSpeed)} m/s
        </Typography>
      </Box>
    </Paper>
  );
}

export default Wind;