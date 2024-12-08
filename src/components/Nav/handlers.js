// Handlers Nav Menu
export default (props) => {
    // Props
    const {
        setSelected,
        closeNav,
        setSubMenu,
        subMenu,
        setSelectedMenu
    } = props

    const selectedNavMenu = (e) => {
        setSelected(Number(e.target.id))
        const tagValue = e.target.getAttribute('tag');
        if (!tagValue) return;

        const allTags = document.querySelectorAll('[tag]');
        allTags.forEach((el) => el.classList.remove('active'));
        e.target.classList.add('active');
        setSubMenu(false)
    }

    const goToSubMenu = (e) => {
        setSelectedMenu(Number(e.target.id))
        setSubMenu(!subMenu)
    }

    const returnMenu = () => setSubMenu(!subMenu)

    return {
        selectedNavMenu: selectedNavMenu,
        closeNav: closeNav,
        goToSubMenu: goToSubMenu,
        returnMenu: returnMenu
    }
}