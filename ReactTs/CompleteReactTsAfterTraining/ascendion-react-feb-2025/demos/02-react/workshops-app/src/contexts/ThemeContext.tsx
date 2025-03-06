import { createContext } from 'react';

// EXERCISE: Explore why the default value provided to createContext will help (very rarely)
const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
});

export default ThemeContext;