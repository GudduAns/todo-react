import React from 'react'

const TodoCard = ({ data, deletHandle }) => {
    return (
        <>
            <div className="container text-center my-5">
                <h3 className="text-center">Your Notes</h3>
                <div className="row my-5">
                    {data?.length ? data?.map((val, key) => {
                        return (
                            <div className="col-md-4 col-12" key={key}>
                                <div className="card my-2" >
                                    <div className="card-body">
                                        <h5 className="card-title">{val.title}</h5>
                                        <p className="card-text">{val.desc}</p>
                                        <button className="btn btn-danger" onClick={() => deletHandle(key)}>Delete</button>
                                    </div>
                                </div>
                            </div>

                        )
                    }) : ''}
                </div>
            </div>
        </>
    )
}

export default TodoCard
