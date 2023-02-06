import Link from 'next/link';
import { useRouter } from 'next/router';
import { MENU_DATA } from 'constants/Header';
import { NavBlock } from './Header.styles';

function Nav() {
  const router = useRouter();
  return (
    <NavBlock>
      {MENU_DATA.map(menu => (
        <li key={menu.key}>
          <Link href={menu.path}>
            <a>{menu.name}</a>
          </Link>
        </li>
      ))}
    </NavBlock>
  );
}
export default Nav;
