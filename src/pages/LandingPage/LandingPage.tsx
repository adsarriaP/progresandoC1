import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../../components/AppAppBar/AppAppBar';
import Hero from '../../components/Hero/Hero';
import LogoCollection from '../../components/LogoCollection/LogoCollection';
import Highlights from '../../components/Highlights/Highlights';
import Pricing from '../../components/Pricing/Pricing';
import Features from '../../components/Features/Features';
import Testimonials from '../../components/Testimonials/Testimonials';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';
import getLPTheme from '../getLPTheme/getLPTheme';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import { images } from '../../utils/images/images'; 

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(false); // Set default theme to false
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const sliderItems = [
    { imageUrl: images.slider1, text: 'Eres abogado necesitas que te ayudemos' },
    { imageUrl: images.slider2, text: 'Necesitas un abogado para tu caso' }
  ];

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <CarouselComponent items={sliderItems} />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        {/* <Pricing />
        <Divider /> */}
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
