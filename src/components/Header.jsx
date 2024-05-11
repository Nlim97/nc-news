import { Link } from "react-router-dom";
function Header(){
    const home = `/`
    const articles = `/articles`
    const topics = `/topics`
 return(<div>
        <h1>NC NEWS</h1>
        <nav className="navbar">
            <Link to={home}><p>Home</p></Link>
            <Link to={articles}><p>Articles</p></Link>
            <Link to={topics}><p>Topics</p></Link>
        </nav>
    </div>)
}

export default Header;