import { useSelector } from "react-redux";
import '../css/theme.css';


export default function Footer() {
    const curYear = (new Date()).getFullYear();

    const theme = useSelector(state => state.theme)
    return (
        <footer className={theme}>
            <p>&copy; {curYear}г</p>
        </footer>
    );
};