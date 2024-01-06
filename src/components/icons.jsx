import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import '../css/icons.css';
function Icon(){
    return (<>
                
<div class="menu">
    <li class="menu-item"><a><FaLinkedin style={{fill:'white'}} /></a></li>
    <li class="menu-item"> <a><SiWhatsapp  style={{fill:'white'}}/></a></li>
    <li class="menu-item"><a><FaFacebookF style={{fill:'white'}}/></a></li>
    <li class="menu-item"><a><BsInstagram style={{fill:'white'}}/></a></li>
    <li class="menu-item"><a href="#" ><IoIosMail style={{fill:'white'}}/></a></li>
</div>
    </>)
}
export default Icon;