import './App.css';
import { createContext, useContext, useState } from 'react';
import { RootRouter } from './navigation/RootRouter';

export const Context = createContext({ isDark: false, changeIsDark: () => {} });

function App() {
  const [isDark, setIsDark] = useState(false);

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <Context.Provider value={{ isDark, changeIsDark }}>
      <div className='App'>
        <RootRouter />
      </div>
    </Context.Provider>
  );
}

export default App;
