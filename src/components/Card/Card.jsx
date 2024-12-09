/**
 * @author: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyright:  2024 
*/
import React from 'react'

// Handlers
import handlersFuncs from './handlers'

// Const 
import Const from './const'

// Components
import For from '../../shared/For'
import Show from '../../shared/Show'

// Sldier
import Slider from 'react-slick';

/** Cards */
export default () => {
    return (
        <React.Fragment>
            <CustomSlider />
        </React.Fragment>
    )
}

const CustomSlider = () => {  
    return (
      <div className="slider-container">
        <Slider {...Const.settings}>
            {Const.sliders.map((element, index) => (
                printSliders(element, index)
            ))}
        </Slider>
      </div>
    );
};
  
const printSliders = (element, index, shared) => {
    return (
        <div key={index} tag="slider">
            <div>
                <img src={element.img} alt={`slider-${index}`} />
            </div>
            <div>
                <p>{element.category}</p>
                <p>{element.name}</p>
                <p>$ {element.price}</p>
            </div>
        </div>
    )
}