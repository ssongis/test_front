import Image from 'next/image';

import { useRef } from 'react';
import {
  SliderButtonContainer,
  SliderImage,
  StyledSlider,
} from './storeCarousel.style';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};
export default function Carousel() {
  const customSliderRef = useRef();

  const SlickNextImage = () => {
    customSliderRef.current.slickNext();
  };

  const SlickPrevImage = () => {
    customSliderRef.current.slickPrev();
  };

  const SlickGoTo = (num, e) => {
    customSliderRef.current.slickGoTo(num);
  };

  return (
    <>
      <StyledSlider {...settings} ref={customSliderRef}>
        <SliderImage>
          <Image src="/store-main-image/image1.jpg" alt="" layout="fill" />
        </SliderImage>
        <SliderImage>
          <Image src="/store-main-image/image2.jpg" alt="" layout="fill" />
        </SliderImage>
        <SliderImage>
          <Image src="/store-main-image/image3.jpg" alt="" layout="fill" />
        </SliderImage>
        <SliderImage>
          <Image src="/store-main-image/image4.jpg" alt="" layout="fill" />
        </SliderImage>
        <SliderImage>
          <Image src="/store-main-image/image5.jpg" alt="" layout="fill" />
        </SliderImage>
      </StyledSlider>
      <SliderButtonContainer>
        <button onClick={e => SlickGoTo(0, e)} data-num="0">
          주말특가
        </button>
        <button onClick={e => SlickGoTo(1, e)} data-num="1">
          베스트 브랜드
        </button>
        <button onClick={e => SlickGoTo(2, e)} data-num="2">
          OI푸드위크
        </button>
        <button onClick={e => SlickGoTo(3, e)} data-num="3">
          LG전자 세일
        </button>
        <button onClick={e => SlickGoTo(4, e)} data-num="4">
          특가 찬스
        </button>
        <button onClick={SlickPrevImage}>&lt;</button>
        <button onClick={SlickNextImage}>&gt;</button>
      </SliderButtonContainer>
    </>
  );
}
