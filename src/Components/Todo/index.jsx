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
    const [seletedID, setSeletedID] = useState(null)

    const submitHandle = (e) => {
        e.preventDefault()
        const myData = { title: title, desc: desc, _id: new Date().getTime().toString() }
        if (seletedID) {
            setAllTodo(
                allTodo.map((val) => {
                    if (val._id === seletedID) {
                        return [...allTodo, myData]
                        console.log('ffff')
                    }
                })
            )
            console.log(allTodo, title)
        } else {
            setAllTodo([...allTodo, myData])
            setTitle('')
            setDesc('')
        }

    }
    function deletHandle(e) {
        const DeleteItem = allTodo.filter((val, key) => {
            return e !== key
        })
        setAllTodo(DeleteItem)
    }

    function editHandle(e) {
        setSeletedID(e)
        allTodo.map((val) => {
            if (val._id === e) {
                setTitle(val.title)
                setDesc(val.desc)
            }
            return allTodo
        })
    }
    function saveEditHandle(e) {
        e.preventDefault()
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
                    {true ?
                        <button onClick={submitHandle}
                            type="submit"
                            className="btn btn-primary">
                            Submit
                        </button>
                        :
                        <button onClick={saveEditHandle}
                            type="submit"
                            className="btn btn-success">
                            Edit
                        </button>
                    }
                </form>
            </div>
            <TodoCard data={allTodo} deletHandle={deletHandle} editHandle={editHandle} />
        </>
    )
}

export default Todo
