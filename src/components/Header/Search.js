import { TiDelete } from 'react-icons/ti';
import { BsSearch } from 'react-icons/bs';
import { SearchBlock } from './Header.styles';

function Search() {
  return (
    <SearchBlock>
      <span>
        <BsSearch />
      </span>
      <input type="text" placeholder="통합검색" autoComplete="off" />
      <button type="button" aria-hidden="true">
        <TiDelete />
      </button>
    </SearchBlock>
  );
}

export default Search;
