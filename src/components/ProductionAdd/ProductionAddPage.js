import { AddContainer, AddH2, AddWrapper } from './ProductionAddPage.style';
import ItemAdd from './ItemAdd';
import ProductImageAdd from './ProductImageAdd';
import ProductsAdd from './ProductsAdd';
import StorePostAdd from './StorePostAdd';

export default function ProductionAdd() {
  return (
    <AddWrapper>
      <AddContainer>
        <AddH2>제품 등록</AddH2>
        <ItemAdd />
        <ProductImageAdd />
        <StorePostAdd />
        <ProductsAdd />
      </AddContainer>
    </AddWrapper>
  );
}
