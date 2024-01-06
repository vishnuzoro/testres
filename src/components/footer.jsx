import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import '../css/footer.css';
function Footer(){
    
    return (<>

    
<section class="trial-block shadow3" id="ContactUs">
  <div class="height450">
    <div class="section-title text-center">
      <span class="badge badge-info">Get Started</span>
      <h2 className="text-light">Social Link</h2>
      <span class="section-title-line section-title-line"></span>
    </div>
    <div class="social-overlap process-scetion mt100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="social-bar">
              <div class=" mb-3 iconpad text-center">
                <a ><i ><FaFacebookF style={{fill:'blue'}}/></i></a>
                <a ><BsInstagram style={{fill:'white'}}/></a>
                <a ><i><SiWhatsapp size={'50px'} style={{fill:'green'}}/></i></a>
                <a href="#" ><IoIosMail style={{fill:'white'}}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>)
}
export default Footer;