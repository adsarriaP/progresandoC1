// src/react-responsive-carousel.d.ts
declare module 'react-responsive-carousel' {
    import * as React from 'react';
  
    export interface CarouselProps {
      showArrows?: boolean;
      autoPlay?: boolean;
      infiniteLoop?: boolean;
      showThumbs?: boolean;
      showStatus?: boolean;
      showIndicators?: boolean;
      interval?: number;
      transitionTime?: number;
      swipeable?: boolean;
      stopOnHover?: boolean;
      dynamicHeight?: boolean;
      emulateTouch?: boolean;
      autoFocus?: boolean;
      useKeyboardArrows?: boolean;
      className?: string;
      children?: React.ReactNode;
      selectedItem?: number;
      onChange?: (index: number, item: React.ReactNode) => void;
      onClickItem?: (index: number, item: React.ReactNode) => void;
      onClickThumb?: (index: number, item: React.ReactNode) => void;
    }
  
    export class Carousel extends React.Component<CarouselProps> {}
  }
  