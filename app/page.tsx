import Navbar from "./Components/Navbar";
import Container from '@mui/material/Container';
import Temperature from "./Components/Temperature/Temperature";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AirPollution from "./Components/AirPollution/AirPollution";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Box sx={{ pb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', minWidth: '18rem', md: 'w-[35rem]' }}>
          <Temperature />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Grid container spacing={4} sx={{ height: '100%' }}>
            <Grid item xs={12} sm={6} lg={4} xl={3} className="sm:w-[581px] md:w-[1055px]">
              <AirPollution />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}