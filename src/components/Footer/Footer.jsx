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

/** Section Information */
const FirstSection = ({ handlers, openTap }) => {
    return (
        <React.Fragment>
            {/* Following */}
            <div tag="head-option">
                <div>
                    <span>Síguenos</span>
                </div>
                <div tag="social-network">
                    <For func={BodyNavMenu} list={Const.networksSocial} shared={null} />
                </div>
            </div>
            <div tag="head-option">
                <div onClick={() => handlers.openCloseTap('servicio')}>
                    <span>Servicio al cliente</span>
                    <Show when={openTap.servicio}>
                        <ArrowUp />
                    </Show>
                    <Show when={!openTap.servicio}>
                        <ArrowDown />
                    </Show>
                </div>
                <div>
                    <Show when={openTap.servicio}>
                        <div tag="list">
                            <For func={BodyNavMenu} list={Const.states} shared={null} />
                        </div>
                    </Show>
                </div>
            </div>
            <div tag="head-option">
                <div onClick={() => handlers.openCloseTap('somos')}>
                    <span>Quienes Somos</span>
                    <Show when={openTap.somos}>
                        <ArrowUp />
                    </Show>
                    <Show when={!openTap.somos}>
                        <ArrowDown />
                    </Show>
                </div>
                <div>
                    <Show when={openTap.somos}>
                        <div tag="list">
                            <For func={BodyNavMenu} list={Const.equipo} shared={null} />
                        </div>
                    </Show>
                </div>
            </div>
            <div tag="head-option">
                <div tag="newsletter">
                    <p>Suscríbete a nuestro Newsletter</p>
                    <p>Regístrate para recibir 10% de descuento en tu primera orden y ofertas exclusivas a lo largo del año.</p>
                </div>
                <div></div>
            </div>
        </React.Fragment>
    )
}

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