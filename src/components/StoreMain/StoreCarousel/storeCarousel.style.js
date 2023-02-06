import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: 40px;

    li {
      width: 2px;
      height: 2px;
      margin: 0 7px;

      button {
        width: 2px;
        height: 2px;
      }
      button:before {
        width: 2px;
        height: 2px;
        color: white;
      }
    }
  }
`;

const SliderImage = styled.div`
  position: relative;
  width: 100vw;
  min-height: 400px;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: center center;
  }
`;

const SliderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: transparent;
    border: 1px solid #ededed;
    height: 40px;
    padding: 0 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #ededed;
    transition: 0.5s;
  }
`;

export { StyledSlider, SliderImage, SliderButtonContainer };
