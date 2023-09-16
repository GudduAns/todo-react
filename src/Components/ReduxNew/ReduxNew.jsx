import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incHandle } from '../Redux/Action';

const ReduxNew = () => {
    const dispatch = useDispatch();
    const { inputVal } = useSelector((state) => {
        return {
            inputVal: state.UpDownReducer,
        }
    })

    console.log(inputVal, 'inputVal');
    const incrementHandle = () => {
        // dispatch(incHandle({ type: "INCREMENT" }))
    }

    const decrimenttHandle = () => {
        console.log('decrimenttHandle')
    }

    return (
        <>
            <div className="container my-3">
                <div className="d-flex">
                    <button className="btn btn-danger mx-3 btn-m"
                        onClick={() => decrimenttHandle()}
                    >
                        -
                    </button>
                    <input type="email" className="form-control w-auto" value={inputVal} onChange={() => { }} />
                    <button className="btn btn-success mx-3 btn-m"
                        onClick={() => incrementHandle()}
                    >+</button>
                </div>
            </div>
        </>
    )
}

export default ReduxNew
