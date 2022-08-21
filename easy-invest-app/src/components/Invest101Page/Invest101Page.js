import Module1Page3 from '../Module1Page/Module1Page3';
import Module1Page1 from '../Module1Page/Module1Page1';
import './Invest101Page.scss'; 

function Invest101Page(props) {
    return (
      <div className="cards">
            <img className="cards__image" src ={props.img} alt={"image"}/>
            <div>
            <div className="cards__chapter">{props.chapter}</div>
            <div className="cards__title">{props.title}</div>
            <p className="cards__description">{props.description}</p>
            <p className="cards__duration">{props.duration}</p>
            </div>
        </div>
   
    );
  }
  
  export default Invest101Page;