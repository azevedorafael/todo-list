import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../redux-flow/reducers/todos/action-creators'

const TodosList = ({ todos, handleToggleTodo }) => (
    <ul>
        {todos.map((todo) => (
            <li
                key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                className='completed'
                onClick={handleToggleTodo(todo.id)}
            >
                {todo.text}</li>
        ))}
    </ul>
)

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapsDispacthToProps = (dispatch) => ({
    handleToggleTodo: (id) => (e) => {
        dispatch(toggleTodo(id))
    }
})

export default connect(mapStateToProps, mapsDispacthToProps)(TodosList)