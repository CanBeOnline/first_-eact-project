import { Link } from "react-router-dom";

export default function LinkList() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">Über mich</Link>
            </li>
            <li>
                <Link to="/projects">Projekte</Link>
            </li>
            <li>
                <Link to="/contact">Kontakt</Link>
            </li>
        </ul>
    );
}