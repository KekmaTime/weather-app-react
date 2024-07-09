import Navbar from "./Components/Navbar";
import Container from '@mui/material/Container';
import Temperature from "./Components/Temperature/Temperature";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AirPollution from "./Components/AirPollution/AirPollution";
import Sunset from "./Components/Sunset/Sunset";
import Wind from "./Components/Wind/Wind";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Box sx={{ pb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', minWidth: '18rem', md: 'w-[35rem]' }}>
        <Box sx={{ mr: 4 * 8 }}>
            <Temperature />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Grid container spacing={4} sx={{ height: '100%' }}>
            <Grid item xs={12} sm={6} lg={4} xl={3} className="sm:w-[581px] md:w-[1055px]">
              <Box sx={{ ml: 0.2 }}>
                  <AirPollution />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                  <Box sx={{ mr: 2 }}>
                      <Sunset />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <Box sx={{ ml: 11.5 }}>
                      <Wind />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}