import React from 'react';
import img1 from '../Static/img.png';
import M from 'materialize-css/dist/js/materialize.min.js';

class Carousel extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    
    document.addEventListener('DOMContentLoaded',() => {
      let elems = document.querySelectorAll('.carousel');
      let instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
      });
    });
  }

  render(){
    return (
      <div>
        <div className="carousel carousel-slider center">
          <div className="carousel-item" href="#one!">
            <img src={img1} alt="img"/>
          </div>
          <div className="carousel-item" href="#two!">
            <img src={img1} alt="img"/>
          </div>
          <div className="carousel-item" href="#three!">
            <img src={img1} alt="img"/>
          </div>
          <div className="carousel-item" href="#four!">
            <img src={img1} alt="img"/>
          </div>
        </div>
      </div>
    );
  }

}

export default Carousel;