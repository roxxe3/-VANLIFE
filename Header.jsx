import {Link} from "react-dom-router"

export default function Header (){
    return (<header>
        <Link to="/">#VANLIFE</Link>
        <Link to="/about">About</Link>
    </header>)
}