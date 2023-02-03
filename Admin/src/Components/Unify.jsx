import React from 'react'

const Unify = ({
    component,
    ...rest
}) => {

    if (!component) {
        const mesasge = 'Component passed to the wrapper is null or undefined'
        return <span className="hidden">{mesasge}</span>
    }
    if (typeof component === 'string') {
        return <>{component}</>
    }
    if (component.type) {
        if (typeof component.type === 'string') {
            return <>{component}</>
        }
        if (typeof component.type === 'function') {
            const Component = component.type
            let props = rest
            if (rest.props) {
                props = rest.props
            }
            return <Component {...component.props} {...props} />
        }
        if (typeof component.type === 'string') {
            return <>
                {component.type}
            </>
        }
        if (typeof component.type === 'symbol') {
            if (component.type.toString() === 'Symbol(react.fragment)') {
                if (component.props && component.props.children) {
                    if (Array.isArray(component.props.children)) {
                        return <>
                            {
                                component.props.children
                                    .filter(i => i !== undefined)
                                    .filter(i => {
                                        if (i.props?.superAdmin === true) {
                                            return app.isSuperAdmin()
                                        }
                                        else if (
                                            i.type instanceof Function &&
                                            (
                                                i.type.toString().indexOf('superAdmin: true') > 0
                                                ||
                                                i.type.toString().indexOf('superAdmin:!0') > 0
                                            )) {
                                            return app.isSuperAdmin()
                                        }
                                        else {
                                            return true
                                        }
                                    })
                                    .map((i, index) => {
                                        const { superAdmin, ...rest } = i.props || {}
                                        return <Unify
                                            key={index}
                                            component={
                                                i.type
                                                    ? <i.type {...rest} />
                                                    :
                                                    <Unify
                                                        component={i}
                                                    />
                                            }
                                            {...i.props}
                                            {...rest}
                                        />
                                    })
                            }
                        </>
                    } else {
                        return <Unify
                            component={component.props.children}
                            {...component.props.children}
                            {...rest}
                        />
                    }
                }
            }
        }
    }
    if (typeof component === 'function') {
        const Component = component
        return <Component {...component.props} {...rest} />
    }

    return <div>{component}</div>
}

export default Unify