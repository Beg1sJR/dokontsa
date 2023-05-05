import "./style.css"

import vk from "./../../img/icons/vk.svg"
import instagram from "./../../img/icons/instagram.svg"
import twitter from "./../../img/icons/twitter.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"
import gitHub from "./../../img/icons/vk.svg"

const Footer = () => {
    return (  
    <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item"><a href="https://instagram.com/umbet.n?igshid=YmMyMTA2M2Y="><img src={vk} alt="Link" /></a></li>
                <li className="social__item"><a href="https://vk.com/id280499041"><img src={instagram} alt="Link" /></a></li>
            </ul>
            <div className="copyright">
                <p>© 2022 Almaty News</p>
            </div>
        </div>
    </div>

    </footer> 
);
}
 
export default Footer;