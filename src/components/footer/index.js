import './index.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer=()=> {
  return (
    <footer class="footer_container">
    <div class="footer_links">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="footer_social mb3">
                        <h5 class="heading">Social Links</h5>
                        <div class="links d-flex">
                            <button type="button" class="btn btn-dark"><FaFacebookF/> Facebook</button>
                            <button type="button" class="btn btn-dark ml5"><FaInstagram/> Instagram</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="services">
                        <h5 class="heading">Services</h5>
                        <div class="d-flex flex-column content">
                            <button class="heading">Social Media Management</button>
                            <button class="heading">SEO Services</button>
                            <button class="heading">CMS SEO</button>
                            <button class="heading">PPC Services</button>
                            <button class="heading">Web Design Services</button>
                            <button class="heading">Graphic Design</button>
                            <button class="heading">Photoshoot</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="kilimanjaro_part">
                        <h5 class="heading">Quick Contact</h5>
                        <div class="kilimanjaro_single_contact_info">
                            <h5 class="heading">Phone:</h5>
                            <p>+91 9040492162 <br/> +91 9090909090</p>
                        </div>
                        <div class="kilimanjaro_single_contact_info">
                            <h5 class="heading">Email:</h5>
                            <p>support@email.com <br/> company@email.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="container d-flex justify-content-center p16">
            <div class="row">
                <div class="col-12">
                    © All Rights Reserved by @Graphic Square
                </div>
            </div>
        </div>
    </div>
</footer>
  );
}

export default Footer;
