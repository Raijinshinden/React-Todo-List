import React from 'react'

export default function TodoCard(props) {
    const { hildren, handleDeleteTodo, index } = props
    return (
        <li className='todoItem'>
            <div className='actionsContainer'>
                {children}

                <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
