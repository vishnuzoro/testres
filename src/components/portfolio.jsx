import '../css/portfolio.css';
import Head from './head';
import Icon from './icons';
import { Col, Row,Container } from 'react-bootstrap';
import { LiaHackerrank } from "react-icons/lia";
function Portfolio(){
    
      
    return (<>
    
    <Container fluid>
    <h4 class="firsthead"><LiaHackerrank size={50} style={{fill:' rgb(0, 255, 0)'}}/>ack</h4>
    <Row>
        <Col lg={1}>
          <Icon/>
        </Col>
        <Col lg={11}>
        <h2 class="portfolio">Portfolio</h2>
        <hr class="one mb-5" id="one" />
        <div class='main-container'>
  <div class='grid-container'>
    <div class='card card--2x'>
      <div class='card__content big-script padding-large'>
        <p>Travel and see the world</p>
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
      <a href=''><div class="card-blur"></div>
          <img src='https://images.pexels.com/photos/443416/pexels-photo-443416.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
          </a>
      </div>
      
    </div>
    <div class='card'>  
      <div class='card__image'>
      <a href=''></a><div class="card-blur"></div>
        <img src='https://images.pexels.com/photos/542411/pexels-photo-542411.png?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
      </div>
      
    </div>
    <div class='card'>
      <div class='card__content'>
        <p><em>Travel is fatal to prejudice, bigotry, and narrow-mindedness.</em></p>
        <p>— Mark Twain</p>
      </div>
      
    </div>
    <div class='card card--horizontal'>
      <div class='card__image'>
        <a href=''><div class="card-blur"></div>
        <img src='https://images.pexels.com/photos/614494/pexels-photo-614494.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
        </a>
      </div>
      
    </div>
    <div class='card card--featured'>
      <div class='card__side-by-side--m'>
        <div class='card__image'>
            <a href=''><div class="card-blur"></div>
            <img src='https://images.pexels.com/photos/1125278/pexels-photo-1125278.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
            </a>
          
        </div>
        <div class='card__content padding-large--l'>
          <h2>Quisque volutpat.</h2>
          <p>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.</p>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <div class='card__button'>More...</div>
        </div>
      </div>
    </div>
    <div class='card card--vertical'>
      <div class='card__image'>
        <a href=''><div class="card-blur"></div>
        <img src='https://images.pexels.com/photos/920968/pexels-photo-920968.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
        </a>
        
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
        <a href=''><div class="card-blur"></div>
        <img src='https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
        </a>
        
      </div>
    </div>
    <div class='card card--horizontal'>
      <div class='card__side-by-side'>
        <div class='card__image'>
            <a href=''><div class="card-blur"></div>
            <img src='https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
            </a>
         
        </div>
        <div class='card__content'>
          <h3>Lorem ipsum</h3>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>
        </div>
      </div>
    </div>
    <div class='card card--vertical'>
      <div class='card__image'>
        <a href=''><div class="card-blur"></div>
        <img src='https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
        </a>
        
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
        <a href=''><div class="card-blur"></div>
        <img src='https://images.pexels.com/photos/269923/pexels-photo-269923.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
        </a>
        
      </div>
    </div>
    <div class='card'>
      <div class='card__content'>
        <p><em>We wander for distraction, but we travel for fulfilment.</em></p>
        <p>— Hilaire Belloc</p>
      </div>
    </div>
    <div class='card card--2x'>
      <div class='card__image'>
        <a href=''><div class="card-blur"></div>
        <img src='https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
        </a>
        
      </div>
    </div>
    <div class='card card--horizontal card--frameless'>
      <div class='card__content big-script'>
        <p>Bon voyage</p>
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
        <a href=''><div class="card-blur"></div>
        <img src='https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
        </a>
        
      </div>
    </div>
    <div class='card card--horizontal'>
      <div class='card__image'>
        <a href=''><div class="card-blur"></div>
        <img src='https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
        </a>
        
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
        <a href=''><div class="card-blur"></div>
        <img src='https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
        </a>
        
      </div>
    </div>
    <div class='card'>
      <div class='card__content'>
        <p><em>A good traveller has no fixed plans and is not intent on arriving.</em></p>
        <p>— Lao Tzu</p>
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
        <a href=''><div class="card-blur"></div>
        <img src='https://images.pexels.com/photos/386007/pexels-photo-386007.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'/>
        </a>
        
      </div>
    </div>
  </div>
</div>
</Col>
</Row>
</Container>       
<Head/>
 

    

        </>
    )
}
export default Portfolio;