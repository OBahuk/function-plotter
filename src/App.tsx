import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { AppContainer } from './components/AppContainer';
import store from './redux/store';
import { theme } from './assets';

function App() {
  return (
      <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <AppContainer />
          </MuiThemeProvider>
      </Provider>
  );
}

export default App;
