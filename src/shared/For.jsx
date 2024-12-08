import React from "react"

export default function For({ func, list, shared }) {
    if (list?.length <= 0 || typeof list !== 'object') return <></>;
    return (
        <React.Fragment>
            {list.map((e, index) => func(e, index, shared))}
        </React.Fragment>
    );
}