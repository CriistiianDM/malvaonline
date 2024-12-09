// Handlers Header
export default (props) => {

    const {
        setOpenTap,
        openTap
    } = props

    const openCloseTap = (state) => {
        setOpenTap((prev) => ({
            ...prev,
            [state]: !openTap[state]
        }))
    }

    return {
       openCloseTap: openCloseTap
    }
}