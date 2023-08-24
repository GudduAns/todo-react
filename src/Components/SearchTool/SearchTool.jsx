import React from "react";
import data from './data.json'
const SearchTool = () => {
    const inputStyle={
        background:'transparent',
        outline:'none',
        border:'none',
        borderBottom:'1px solid #202020',
        color:'#ffffff73'
    }
    return (
        <>
            <input type="text" name="" id="" className="my-3"  style={inputStyle}/>
            <br />
            {
                data.data.map((val,key)=>{
                    return (
                        <p style={{'color':'#ffffff73'}}>{val.name}</p>
                    )
                })
            }
        </>
    )
}

export default SearchTool 