import React, { useEffect, useState } from "react";
import data from './data.json'
const SearchTool = () => {
    const inputStyle = {
        background: 'transparent',
        outline: 'none',
        border: 'none',
        borderBottom: '1px solid #ffffff73',
        color: '#ffffff73'
    }
    const [inputVal, setInputval] = useState('')

    const handleChange = (e) => {
        setInputval(e.target.value)
    }

    return (
        <div className="container my-5">
            <input
                type="text"
                className="my-3"
                style={inputStyle}
                value={inputVal}
                onChange={handleChange}
            />
            <br />
            {   
               data.data.filter(item=>item.name.toLowerCase().includes(inputVal.toLowerCase()))
               .map((val, key) => {
                    return (
                        <p style={{ 'color': '#ffffff73' }} key={key}>{val.name}</p>
                    )
                })
            }
        </div>
    )
}

export default SearchTool 