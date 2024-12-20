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
import Show from '../../shared/Show'
import NavMenu from '../Nav/Nav'
import printItems from '../../shared/List'

/** Header */
export default () => {
    const [hiddenClass, SetEnableClass] = React.useState(false);
    const [openNav, SetCloseNav] = React.useState(null);

    const handlers = handlersFuncs({...{SetEnableClass,openNav, SetCloseNav}})

    React.useEffect(handlers.eventScroll, []); 
    React.useEffect(handlers.openNavEffect, [openNav]);

    return (
      <React.Fragment>
        <Show when={openNav}>
            <NavMenu {...handlers}/>
        </Show>
        <PromotionHeader />
        <header className={hiddenClass? 'active-header' : ''}>
            <FirstSection {...{handlers}}/>
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
const FirstSection = ({ handlers }) => {
    return (
        <section>
            <For func={printItems} list={Const.firstSection} shared={handlers} />
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