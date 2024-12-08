/**
 * @author: Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @copyright:  2024 
*/
import React from 'react'

/** Body Nav Menu */
export default (element, index, shared) => {
    const handler = shared 
    ? React.useCallback((e) => shared[element?.callback]?.(e), [element?.callback])
    : null;

    return (
        <a id={index} onClick={handler} className={element?.class} tag={element?.tag} key={index}>
            {element?.content}
            {element?.icon}
        </a>
    )
}