import Navbar from "./Components/Navbar";
import Container from '@mui/material/Container';
import Temperature from "./Components/Temperature/Temperature";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ mx: { xs: '1rem', lg: '2rem', xl: '6rem', '2xl': '16rem' }, m: 'auto' }}>
      <Navbar />
      <Box sx={{ pb: 4 }}>
        <Grid container spacing={4} direction={{ xs: 'column', md: 'row' }}>
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: '18rem', md: '35rem' }}>
              <Temperature />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}></Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}