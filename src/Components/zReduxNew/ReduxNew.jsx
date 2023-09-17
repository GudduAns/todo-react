import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpHandle } from './Store/actions/UpdownAction'

const ReduxNew = () => {
    const dispatch = useDispatch()
    const { inputVal } = useSelector((state) => {
        return {
            inputVal: state.UpDownHandler,
        }
    })

    console.log(inputVal, 'inputVal')

    const handleIncrement = () => {
        dispatch(UpHandle())
    }

    return (
        <>
            <div className="container my-3">
                <div className="d-flex">
                    <button className="btn btn-danger mx-3 btn-m"

                    >
                        -
                    </button>
                    <input
                        type="email"
                        className="form-control w-auto"
                        value={inputVal}
                        onChange={() => { }}
                    />
                    <button className="btn btn-success mx-3 btn-m"
                        onClick={() => handleIncrement()}
                    >+</button>
                </div>
            </div>
        </>
    )
}

export default ReduxNew
