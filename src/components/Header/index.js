import { useNavigate } from 'react-router-dom';
import './index.css';

function Header() {
    const navigate = useNavigate();
  return (
    <header id="header" class="header">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-xl-5">
                <div class="text-container">
                    <div class="section-title">Welcome to Digital Marketing agency</div>
                    <h1 class="h1-large anim-typewriter">Grow your business online? <br/> Here to help you</h1>
                    <p class="p-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim, neque ut ultrices sollicitudin</p>
                    <a class="btn-solid-lg" onClick={()=> navigate("/services")}>Explore services</a>
                </div>
            </div>
            <div class="col-lg-6 col-xl-7">
                <div class="image-container">
                    <img class="img-fluid" src="images/header-illustration.svg" alt="alternative"/>
                </div> 
            </div>
        </div> 
    </div>
</header>
  );
}

export default Header;
