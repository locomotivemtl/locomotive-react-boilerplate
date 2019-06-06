import React from 'react'

const Layout = ({children, overrideClass}) =>

    <div className={`layout ${overrideClass}`}>
        {children}
    </div>

export default Layout
