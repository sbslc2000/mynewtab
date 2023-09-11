import { lightTheme ,darkTheme } from '../theme/theme';
import {createContext, useState, useContext, useCallback, useEffect} from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

const ThemeContext = createContext({});
const ThemeProvider = ({children}) => {
    const [ThemeMode, setThemeMode] = useState('dark');
    const themeObject = ThemeMode === 'light' ? lightTheme : darkTheme;

    useEffect(() => {
        const handleKeyDown = (event) => {
            const isCommandOrCtrl = event.metaKey || event.ctrlKey;
            const isShift = event.shiftKey;
            const isD = event.code === 'KeyD';

            if (isCommandOrCtrl && isShift && isD) {
                event.preventDefault();
                setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
            }
        };

        // 이벤트 리스너 등록
        window.addEventListener('keydown', handleKeyDown);

        // 이벤트 리스너 해제 (Cleanup)
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return(
        <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
            <StyledProvider theme={themeObject}>
                { children }
            </StyledProvider>
        </ThemeContext.Provider>
    )
}

function useTheme() {
    const context = useContext(ThemeContext);
    const { ThemeMode, setThemeMode } = context;

    const toggleTheme = useCallback(() => {
        if (ThemeMode === "light") {
            setThemeMode("dark");
        }
        else {
            setThemeMode("light")
        };
    }, [ThemeMode]);

    return [ ThemeMode, toggleTheme];
}

export { ThemeProvider, useTheme };