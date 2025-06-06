import { useDispatch, useSelector } from "react-redux";
import '../css/theme.css';


export default function ThemeSwitcher() {

    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch({type: 'TOGGLE_THEME', payload: theme === 'light' ? 'dark' : 'light'});
    };

    return (
        <>
            <button onClick={toggleTheme} className={theme}>Переключить тему на {theme === 'light' ? 'темную' : 'светлую'} </button>
        </>
    );
};