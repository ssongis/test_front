import React from 'react';
import styled from 'styled-components';

export default function CategoryCarouselArrow({
  className,
  go,
  style,
  onClick,
}) {
  return (
    <SlickArrowZero>
      <ArrowWrapper
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      ></ArrowWrapper>
    </SlickArrowZero>
  );
}

const ArrowWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);

  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  z-index: 10;
`;

const SlickArrowZero = styled.div`
  .slick-next:before,
  .slick-prev:before {
    opacity: 0;
  }

  .slick-arrow:hover {
    opacity: 0.8;
    background-color: rgba(53, 197, 240, 0.7);
  }
`;
