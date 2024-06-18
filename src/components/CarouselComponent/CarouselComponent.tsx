import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Typography } from '@mui/material';

interface SliderItem {
  imageUrl: string;
  text: string;
}

interface CarouselComponentProps {
  items: SliderItem[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ items }) => {
  return (
    <Box sx={{ width: '80%', margin: 'auto', textAlign: 'center', paddingTop: 2 }}>
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.imageUrl} alt={item.text} />
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', bgcolor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: 1 }}>
              <Typography variant="h6">{item.text}</Typography>
            </Box>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;
