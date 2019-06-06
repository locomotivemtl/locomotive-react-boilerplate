import React from 'react'

const LayoutItem = ({children, overrideClass}) =>

    <div className={`layout_item ${overrideClass}`}>
        {children}
    </div>

export default LayoutItem
