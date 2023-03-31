import theme from './theme';
import { ThemeProvider as StyledThemeprovider } from 'styled-components';

export default function ThemeProvider({ children }) {
  return <StyledThemeprovider theme={theme}>{children}</StyledThemeprovider>;
}
