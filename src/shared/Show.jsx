/**
 * @author: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyright:  2024 
*/
import React from "react"

export default (props) => {
    return <React.Fragment>{props.when && props.children}</React.Fragment>
}