import React from "react"

export default (props) => {
    return <React.Fragment>{props.when && props.children}</React.Fragment>
}