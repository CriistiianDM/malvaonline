// Icons
import MenuNav from '../../../public/icons/nav'
import ArrowLeft from '../../../public/icons/arrow-left'
import CloseIcon from '../../../public/icons/close'

// Img
const menuNavImg = '/img/menu.webp'
const menuHombre = '/img/Hombre.webp'
const menuGlobal = '/img/Global_Flabelus_FW24.webp'
const menuBrans = '/img/Local_Baobab_sarakiniko.webp'

export default {
    sections: [
        {
            id: "logo-nav",
            tag: "menu-nav",
            content: <MenuNav />,
            callback: null,
        },
        {
            id: "logo-nav",
            tag: "close-btn-nav",
            content: <CloseIcon />,
            callback: 'closeNav',
        },
        {
            id: "mujer-nav",
            tag: "menu-nav",
            content: "Mujer",
            callback: 'selectedNavMenu',
            subItems: [
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Ir a Inicio',
                    icon: null,
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Herencia Verde',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'New in',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Malva Edition',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Ropa',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Calzado',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
            ],
            sectionImg: {
                type: 'img',
                src: menuNavImg,
                content: 'Zadig & Voltaire Bolsos'
            },
            footer: [
                {
                    tag: 'footer',
                    content: 'Malva Exclusive'
                },
                {
                    tag: 'footer',
                    content: 'Malva Edition'
                }
            ],
            labelAccount: 'Mi cuenta'
        },
        {
            id: "hombre-nav",
            tag: "menu-nav",
            content: "Hombre",
            callback: 'selectedNavMenu',
            subItems: [
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Ir a Inicio',
                    icon: null
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Herencia Verde',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'New in',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Malva Edition',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Ropa',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Calzado',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
            ],
            sectionImg: {
                type: 'img',
                src: menuHombre,
                content: 'Zadig & Voltaire Bolsos'
            },
            footer: [
                {
                    tag: 'footer',
                    content: 'Malva Exclusive'
                },
                {
                    tag: 'footer',
                    content: 'Malva Edition'
                }
            ],
            labelAccount: 'Mi cuenta'
        },
        {
            id: "global-brands-nav",
            tag: "menu-nav",
            content: "Global brands",
            callback: 'selectedNavMenu',
            subItems: [
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Ir a Inicio',
                    icon: null
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Herencia Verde',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'New in',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Malva Edition',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Ropa',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Calzado',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
            ],
            sectionImg: {
                type: 'img',
                src: menuGlobal,
                content: 'Zadig & Voltaire Bolsos'
            },
            footer: [
                {
                    tag: 'footer',
                    content: 'Malva Exclusive',
                    callback: null
                },
                {
                    tag: 'footer',
                    content: 'Malva Edition',
                    callback: null
                }
            ],
            labelAccount: 'Mi cuenta'
        },
        {
            id: "local-brands-nav",
            tag: "menu-nav",
            content: "Local Brands",
            callback: 'selectedNavMenu',
            class: "active",
            subItems: [
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Ir a Inicio',
                    icon: null,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Herencia Verde',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'New in',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Malva Edition',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Ropa',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
                {
                    type: 'a',
                    id: 'item-menu',
                    content: 'Calzado',
                    icon: <ArrowLeft />,
                    callback: 'goToSubMenu',
                    items: [
                        {
                            content: 'Scalpers',
                            callback: null,
                        },
                        {
                            content: 'El ganso',
                            callback: null,
                        },
                        {
                            content: 'No drama',
                            callback: null,
                        },
                        {
                            content: 'Eco Alf',
                            callback: null,
                        },
                        {
                            content: 'Ami Paris',
                            callback: null,
                        },
                        {
                            content: 'Voie',
                            callback: null,
                        },
                    ]
                },
            ],
            sectionImg: {
                type: 'img',
                src: menuBrans,
                content: 'Zadig & Voltaire Bolsos'
            },
            footer: [
                {
                    tag: 'footer',
                    content: 'Malva Exclusive'
                },
                {
                    tag: 'footer',
                    content: 'Malva Edition'
                }
            ],
            labelAccount: 'Mi cuenta'
        }
    ]
}