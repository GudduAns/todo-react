import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    
`
const Tabs = ({ tabs, activeTitle, activeState }) => {

    const activeHandle = (val) => {
        activeTitle(val)
    }

    return (
        <>
            {tabs?.map((val, key) => {
                return (
                    <Button key={key}
                        className={`btn btn-sm mx-3  btn-${activeState === val ? 'success' : 'warning'}`}
                        onClick={() => activeHandle(val)}>
                        {val}
                    </Button>
                )
            })}
        </>
    )
}

export default Tabs
