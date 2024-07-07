import Navbar from "./Components/Navbar";
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ mx: { xs: '1rem', lg: '2rem', xl: '6rem', '2xl': '16rem' }, m: 'auto' }}>
      <Navbar />
    </Container>
  );
}