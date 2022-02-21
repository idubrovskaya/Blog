import './App.css';
import { createContext, useState } from 'react';
import { RootRouter } from './navigation/RootRouter';
import { lightTheme, darkTheme } from './theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: lightTheme,
});

function App() {
  const [isDark, setIsDark] = useState(false);

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <Provider store={store}>
      <Context.Provider
        value={{ isDark, changeIsDark, theme: isDark ? darkTheme : lightTheme }}
      >
        <div className='App'>
          <RootRouter />
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
