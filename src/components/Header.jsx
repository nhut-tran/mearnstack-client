import { Link } from "react-router-dom"

const Header = () => {
    return <header>
        <ul className="main-nav">
            <li><Link to="/"><h1>CountrySearch</h1></Link></li>
        </ul>
    </header>
}

export default Header;