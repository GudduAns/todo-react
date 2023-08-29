import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decHandle, incHandle } from './Action';
import { SuccessMsgAction } from './Action/popHandler/Action';
const Redux = () => {
    const { inputVal, popShow } = useSelector((state) => {
        return {
            inputVal: state.UpDownHandle,
            popShow: state.SuccessMsg
        }
    })
    const dispatch = useDispatch();
    function popHandler() {
        dispatch(SuccessMsgAction({ msg: 'hello' }))
    }
    console.log(popShow)
    return (
        <>
            <div className="container my-3">
                <div className="d-flex">
                    <button className="btn btn-danger mx-3 btn-m"
                        onClick={() => dispatch(decHandle())} >
                        -
                    </button>
                    <input type="email" className="form-control w-auto" value={inputVal} onChange={() => { }} />
                    <button className="btn btn-success mx-3 btn-m"
                        onClick={() => dispatch(incHandle(5))}
                    >+</button>
                </div>
            </div>
            <button className="btn btn-success my-5 center" onClick={popHandler}>
                Show Popup
            </button>
        </>
    )
}

export default Redux
