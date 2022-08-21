import xyPropsEqual from 'reactochart/utils/xyPropsEqual';
import './Cards.scss'; 

function Cards(props) {

    return (
      <>
        <div className="card">
            <image src ={props.img}/>
            <div className="card__title">{props.card.title}</div>
        </div>
      </>
    );
  }
  
  export default Cards;