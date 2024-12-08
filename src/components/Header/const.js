// Object if images
import Logo from '../../../public/svg/logo'
import Hamburger from '../../../public/icons/hamburger'
import Seacrh from '../../../public/icons/search'
import User from '../../../public/icons/user'
import Shopping from '../../../public/icons/shopping'

export default {
    firstSection: [
        {
            tag: "hamburger",
            content: <Hamburger />,
            callback: null
        },
        {
            tag: "logo",
            content: <Logo />,
            callback: null
        }
    ],
    secondSection: [
        {
            tag: "search-btn",
            content: <Seacrh />,
            callback: null
        },
        {
            tag: "user-btn",
            content: <User />,
            callback: null
        },
        {
            tag: "shopping-btn",
            content: <Shopping />,
            callback: null
        },        
    ]
}