import { AiOutlineClose } from 'react-icons/ai';
import { BannerBlock } from './Header.styles';

function Banner(props) {
  const { onRemove } = props;
  return (
    <BannerBlock className="banner-area">
      <p className="banner" aria-label="pc 최상단배너">
        {' '}
      </p>
      <p className="banner" aria-label="pc 최상단배너">
        {' '}
      </p>
      <div className="imgArea">
        <p aria-label="pc 최상단배너"> </p>
        <p aria-label="pc 최상단배너"> </p>
      </div>
      <button
        onClick={() => {
          onRemove(false);
        }}
      >
        <AiOutlineClose />
      </button>
    </BannerBlock>
  );
}
export default Banner;
