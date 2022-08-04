import jss from 'jss';
import preset from 'jss-preset-default';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import { Dashboard } from './components/Dashboard';
import { CssBaseline } from '@material-ui/core';

jss.setup(preset());

function App() {
  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <Dashboard />
        <CssBaseline />
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
