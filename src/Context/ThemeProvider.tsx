import { ReactNode, useState } from 'react';
import ThemeContext from './ThemeContext'

//COMPLETAR EL PROVIDER CON LO QUE NECESITE

const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;