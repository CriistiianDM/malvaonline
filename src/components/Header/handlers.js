// Handlers Header
export default (props) => {
    const initHeight = 30
    
    // Props
    const {
        SetEnableClass
    } = props

    const eventScroll = () => {
        const handleScroll = () => {
            SetEnableClass(initHeight <= window.scrollY)
        }
        window.addEventListener('scroll', handleScroll);
      
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }

    return {
        eventScroll: eventScroll
    }
}