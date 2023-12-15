import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';

function NavBar() {
    const navigate = useNavigate();
    const [current ,setCurrent] = useState("home");
    const [isExpanded,setExpand] = useState(false);
  return (
    <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
        <div className="container">
            {/* <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"/></a> */}
             <a className="navbar-brand logo-text" href="/">Graphic Square</a>

            <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" onClick={()=>setExpand(!isExpanded)}></span>
            </button>

            <div className={`navbar-collapse offcanvas-collapse ${isExpanded?"open":null}`} id="navbarsExampleDefault">
                <ul className="navbar-nav ms-auto navbar-nav-scroll">
                    <li className="nav-item" onClick={()=>setExpand(false)}>
                        <button className={`nav-link ${current==="home"?"active":null}`} aria-current="page" onClick={()=>navigate("/")}>Home</button>
                    </li>
                    <li className="nav-item"  onClick={()=>setExpand(false)}>
                        <button className={`nav-link ${current==="service"?"active":null}`} onClick={()=>navigate("/services")}>Services</button>
                    </li>
                    <li className="nav-item"  onClick={()=>setExpand(false)}>
                        <button className={`nav-link ${current==="project"?"active":null}`} onClick={()=>navigate("/projects")}>Projects</button>
                    </li>
                </ul>
                <span className="nav-item">
                    <a className="btn-solid-sm" href="#contact" onClick={()=>navigate("")} >Get Free Estimation</a>
                </span>
            </div> 
        </div>
    </nav>
  );
}

export default NavBar;
