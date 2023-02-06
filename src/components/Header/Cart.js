import Link from 'next/link';
import { BsCart } from 'react-icons/bs';
import { CartBlock } from './Header.styles';

function Cart() {
  return (
    <CartBlock>
      <Link href="/cart">
        <BsCart />
      </Link>
    </CartBlock>
  );
}
export default Cart;
