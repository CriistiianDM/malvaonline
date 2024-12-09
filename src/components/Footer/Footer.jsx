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
import NavMenu from '../Nav/Nav'
import BodyNavMenu from '../../shared/List'

// Icons
import ArrowDown from '../../../public/icons/arrow-down'
import ArrowUp from '../../../public/icons/arrow-up'

/** Footer */
export default () => {
    const [openTap, setOpenTap] = React.useState({
        servicio: false,
        somos: false,  
    })
    const handlers = handlersFuncs({...{setOpenTap,openTap}})

    return (
        <footer tag="footer">
            <section>
                <FirstSection {...{handlers, openTap}}/>
            </section>
            <section>
                <LastSection />
            </section>
        </footer>
    )
}

/** First Section */
const FirstSection = ({ handlers, openTap }) => {
    return (
        <React.Fragment>
            {/* Social Network Section */}
            <div tag="head-option">
                <div>
                    <span>Síguenos</span>
                </div>
                <div tag="social-network">
                    <For func={BodyNavMenu} list={Const.networksSocial} shared={null} />
                </div>
            </div>

            {/* Toggle Sections */}
            <ToggleSection
                title="Servicio al cliente"
                stateKey="servicio"
                list={Const.states}
                handlers={handlers}
                openTap={openTap}
            />
            <ToggleSection
                title="Quienes Somos"
                stateKey="somos"
                list={Const.equipo}
                handlers={handlers}
                openTap={openTap}
            />

            {/* Newsletter Section */}
            <div tag="head-option">
                <div tag="newsletter">
                    <p>Suscríbete a nuestro Newsletter</p>
                    <p>
                        Regístrate para recibir 10% de descuento en tu primera orden y ofertas
                        exclusivas a lo largo del año.
                    </p>
                </div>
                <div></div>
            </div>
        </React.Fragment>
    );
};

/** Politices */
const LastSection = ({ handlers }) => {
    return (
        <React.Fragment>
            <div>
                <For func={BodyNavMenu} list={Const.policiesData} shared={handlers} />
            </div>
            <div>
                <span>© 2024, Cristiank</span>
            </div>
        </React.Fragment>
    )
}

/** Toggle */
const ToggleSection = ({ title, stateKey, list, handlers, openTap }) => (
    <div tag="head-option">
        <div onClick={() => handlers.openCloseTap(stateKey)}>
            <span>{title}</span>
            {openTap[stateKey] ? <ArrowUp /> : <ArrowDown />}
        </div>
        <Show when={openTap[stateKey]}>
            <div tag="list">
                <For func={BodyNavMenu} list={list} shared={null} />
            </div>
        </Show>
    </div>
);