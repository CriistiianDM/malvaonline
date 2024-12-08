/**
 * @author: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyright:  2024 
*/
import React from "react"

/** Banner */
export default ({ urlDeskt, urlMobile, id }) => {
    return (
        <section tag="banner" id={id}>
            <a>
                <img src={urlDeskt} alt="banner"/>
                <img src={urlMobile} alt="banner-mobile"/>
            </a>
        </section>
    )
}