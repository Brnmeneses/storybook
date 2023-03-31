import { ElementType, HTMLAttributes, FC } from 'react';

interface HeaderProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

const Header: FC<HeaderProps> = ({ as: Tag = 'div', ...otherProps }) => {
  return <Tag {...otherProps} />;
};

export default Header;
