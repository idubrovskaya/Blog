import './App.css';
import { createContext, useEffect, useState } from 'react';
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
  const [isDark, setIsDark] = useState(
    localStorage.getItem('isDark') === 'true'
  );

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <Provider store={store}>
      <Context.Provider
        value={{ isDark, changeIsDark, theme: isDark ? darkTheme : lightTheme }}
      >
        <div
          className='App'
          style={{
            background: isDark ? darkTheme.background : lightTheme.background,
          }}
        >
          <RootRouter />
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
