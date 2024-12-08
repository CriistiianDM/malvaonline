/**
 * @author: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyright:  2024 
*/
import React from "react"

// Components
import For from '../../shared/For'
import Show from '../../shared/Show'

/** Banner */
export default ({ data }) => {
    return (
        <section tag="banner-two-columns">
            <For func={printBanners} list={data} />
        </section>
    )
}

/** Print Banners */
const printBanners = (element, index, shared) => {
    return (
      <Show when={element?.img} key={index}>
        <a>
            <img src={element?.img} alt={`banner-${index}`}/>
            <div>
                <h2>{element?.text}</h2>
                <span>{element?.label}</span>
            </div>
        </a>
     </Show>
    )
}