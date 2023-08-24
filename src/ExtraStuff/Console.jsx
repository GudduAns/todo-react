import React, { useState } from 'react'

const Console = () => {

    const months = ['jan', 'march', 'aprial', 'june']
    months.splice(1, 0, 'Feb');
    // console.log(months)

    function btnHandle(e) {
        console.log(e, 'Clicked!')

    }
    return (
        <>
            <h3 className="text-left my-3">Console Here !</h3>
            <button onClick={(e) => btnHandle(e)}>Hello</button>
            <input type="file" accept={false}/>
        </>
    )
}

export default Console
