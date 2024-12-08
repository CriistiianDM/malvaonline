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
import ArrowRigth from '../../../public/icons/arrow-rigth'

/** Menu Nav */
export default ({ closeNav }) => {
    const [subMenu, setSubMenu] = React.useState(false)
    const [selected, setSelected] = React.useState(4)
    const [selectedMenu, setSelectedMenu] = React.useState(0)
    const sectionData = Const.sections[selected]

    const handlers = handlersFuncs({...{setSelected,subMenu,setSubMenu,closeNav,setSelectedMenu}})
    return (
        <React.Fragment>
            <a onClick={closeNav} tag="close-nav"/>
            <nav tag="nav-menu">
                <div tag="head-nav">
                    <For func={BodyNavMenu} list={Const.sections} shared={handlers} />
                </div>
                <Show when={sectionData?.sectionImg?.src && !subMenu}>
                    <div tag="content-nav">
                        <For func={BodyNavMenu} list={sectionData?.subItems} shared={handlers} />
                    </div>
                    <ItemsPrimary {...{handlers, sectionData}} />
                </Show>
                <Show when={subMenu}>
                    <SubMenuItems {...{handlers,selectedMenu, sectionData}} />
                </Show>
            </nav>
        </React.Fragment>
    )
}

/** Items Primary */
const ItemsPrimary = ({sectionData , handlers}) => {
    return (
        <div tag="footer-nav">
            <div>
                <div><img src={sectionData?.sectionImg?.src} alt="img-nav"/></div>
                <span>{sectionData?.sectionImg?.content}</span>
            </div>
            <div tag="line">
                <For func={BodyNavMenu} list={sectionData?.footer} shared={handlers} />
            </div>
            <div tag="line">
                <a>{sectionData?.labelAccount}</a>
            </div>
        </div>
    )
}

/** Sub Menu */
const SubMenuItems = ({sectionData ,selectedMenu, handlers}) => {
    const subMenuSelected = sectionData?.subItems[selectedMenu]
    return (
        <div tag="sub-menu-nav">
          <a onClick={handlers.returnMenu}>
            <ArrowRigth /> 
            <span>Volver a {sectionData.content}</span>
          </a>
          <a tag="see-all-category">
            <span><b>{subMenuSelected.content}</b></span>
            <span>Ver Todo</span>
          </a>
          <div tag="list-sub-menu">
            <For func={BodyNavMenu} list={subMenuSelected?.items} shared={handlers} />
          </div>
        </div>
    )
}