/**
 * @author: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyright:  2024 
*/
import React from "react"

// Handlers
import handlersFuncs from './handlers'

// Const 
import Const from './const'

// Components
import For from '../../shared/For'

/** Header */
export default () => {
    const [hiddenClass, SetEnableClass] = React.useState(false);

    const {
        eventScroll
    } = handlersFuncs({...{SetEnableClass}})

    React.useEffect(eventScroll, []); 

    return (
      <React.Fragment>
        <PromotionHeader />
        <header className={hiddenClass?'active-header' : ''}>
           <FirstSection />
           <LastSection />
        </header>
      </React.Fragment>
    )
}

const PromotionHeader = () => {
    return (
        <section tag="sub-hearder">
            <div>
                <span>
                  Suscríbete hoy y recibe un 10% de descuento en tu primera compra
                </span>
            </div>
        </section>
    )
}

/** Hamburger and Navmenu */
const FirstSection = ({}) => {
    return (
        <section>
            <For func={printItems} list={Const.firstSection} />
        </section>
    )
}

/** Cart Shopping and later elements */
const LastSection = () => {
    return (
        <section>
            <For func={printItems} list={Const.secondSection} />
        </section>
    )
}

/** List Repeat */
const printItems = (element, index, shared) => {
    return (
        <a onClick={element?.callback} tag={element?.tag} key={index}>
            {element?.content}
        </a>
    )
}