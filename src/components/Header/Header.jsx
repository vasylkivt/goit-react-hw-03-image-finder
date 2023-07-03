import { HeaderWrap } from './Header.style';

const Header = ({ children, className }) => (
  <HeaderWrap className={className}>{children}</HeaderWrap>
);

export default Header;
