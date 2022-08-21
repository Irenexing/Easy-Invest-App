import Courses from '../CoursesPage/CoursesPage'
import './Cards.scss'; 

function Cards(props) {

    return (
      <>
        <div className="card">
            <img className="card__image" src ={props.img} alt={"image"}/>
            <div className="card__title">{props.title}</div>
        </div>
      </>
    );
  }
  
  export default Cards;