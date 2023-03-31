import Button from '../components/button/Button';
import ThemeProvider from '../theme/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider>
      <h1>Home Page!</h1>
      <Button variant="accent">Click here!</Button>
    </ThemeProvider>
  );
}
