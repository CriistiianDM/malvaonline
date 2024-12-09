// Handlers Header
export default (props) => {
    const initHeight = 30
    
    // Props
    const {
        SetEnableClass,
        openNav, 
        SetCloseNav
    } = props

    const eventScroll = () => {
        // const handleScroll = () => {
        //     SetEnableClass(initHeight <= window.scrollY)
        // }
        // window.addEventListener('scroll', handleScroll);
      
        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }

    const openNavEffect = () => {
        if (openNav == null) return
        const body = document.querySelectorAll('body')[0]
        if (body?.classList?.contains('overflow-hidden')) {
            body.classList.remove('overflow-hidden');
        } else {
            body?.classList?.add('overflow-hidden');
        }
    }

    const closeNav = () => SetCloseNav(!openNav)

    return {
        eventScroll: eventScroll,
        closeNav: closeNav,
        openNavEffect: openNavEffect
    }
}