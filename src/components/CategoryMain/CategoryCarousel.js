import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CategoryCarouselArrow from './CategoryCarouselArrow';

export default function CategoryCarousel() {
  return (
    <>
      <Slider {...settings}>
        <ImageContent />
        <ImageContent2 />
        <ImageContent />
        <ImageContent2 />
        <ImageContent />
      </Slider>
      <MarginBottom />
    </>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 900,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <CategoryCarouselArrow />,
  prevArrow: <CategoryCarouselArrow />,
};

const ImageContent = styled.div`
  width: 100%;
  height: 200px;
  background-color: #7d7d7d;
`;

const ImageContent2 = styled.div`
  width: 100%;
  height: 200px;
  background-color: #4b4b4b;
`;

const MarginBottom = styled.div`
  width: 100%;
  height: 20px;
`;
