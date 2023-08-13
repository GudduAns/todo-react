import React from 'react'

const Console = () => {

    const months = ['jan', 'march', 'aprial', 'june']
    months.splice(1, 0, 'Feb');
    console.log(months)
    return (
        <>
            <h3 className="text-left my-3">Console Here !</h3>
        </>
    )
}

export default Console
