import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

import Routes from './routes';
import SwitchButton from './components/SwitchButton';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    '@financialapp:theme',
    dark,
  );

  function toggleTheme(name: string): void {
    setTheme(name === 'light' ? light : dark);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SwitchButton
        value={theme.name}
        checked="dark"
        unChecked="light"
        toogleTheme={toggleTheme}
      />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
