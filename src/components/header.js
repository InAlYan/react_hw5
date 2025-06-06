import { useDispatch, useSelector } from "react-redux";
import '../css/theme.css'

export default function Header() {
    const theme = useSelector(state => state.theme);
    return (
        <header className={theme}>
            <h1>Заголовок сайта</h1>
        </header>
    );
};