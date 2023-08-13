import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard'


const getLocalData = () => {
    const List = localStorage.getItem('items');
    if (List) {
        return JSON.parse(List)
    } else {
        return []
    }

}

const Todo = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const [allTodo, setAllTodo] = useState(getLocalData)

    const submitHandle = (e) => {
        e.preventDefault()
        const myData = { title: title, desc: desc }
        setAllTodo([...allTodo, myData])
    }
    function deletHandle(e) {
        const DeleteItem = allTodo.filter((val, key) => {
            return e !== key
        })
        setAllTodo(DeleteItem)
        console.log(e, allTodo)
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(allTodo))
    }, [allTodo])

    return (
        <>
            <div className='container' >
                <h3 className="text-left my-3">Add Todo</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Tite</label>
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    <button onClick={submitHandle} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <TodoCard data={allTodo} deletHandle={deletHandle} />
        </>
    )
}

export default Todo
