import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import todos, { initialState } from './index'
import { ADD_TODO, TOGGLE_TODO } from './actions'

it('Todos should be a function', () => {
    expect(todos).to.be.a('function')
})

it('Should add a todo item', () => {
    const before = deepFreeze([])
    const action = deepFreeze({
        type: ADD_TODO,
        payload: {
            id: 0,
            text: 'IHAAAA'
        }
    })
    const after = [{
        id: 0,
        text: 'IHAAAA',
        completed: false
    }]
    expect(todos(before, action)).to.be.deep.equal(after)
})

it('Should add a new todo item', () => {
    const before = deepFreeze([
        {
            id: 0,
            text: 'IHAAAA',
            completed: false
        }
    ])
    const action = deepFreeze({
        type: ADD_TODO,
        payload: {
            id: 1,
            text: 'Ho'
        }
    })
    const after = [{
        id: 0,
        text: 'IHAAAA',
        completed: false
    },
    {
        id: 1,
        text: 'Ho',
        completed: false
    }]
    expect(todos(before, action)).to.be.deep.equal(after)
})

it('should toogle first todo', () => {
    const before = deepFreeze([
        { id: 0, text: 'hey', completed: false },
        { id: 1, text: 'ho', completed: false },
    ])

    const action = deepFreeze({
        type: TOGGLE_TODO,
        payload: { id: 0 }
    })

    const after = [
        { id: 0, text: 'hey', completed: true },
        { id: 1, text: 'ho', completed: false }
    ]

    expect(todos(before, action)).to.be.deep.equal(after)
})

it('should toogle second todo', () => {
    const before = deepFreeze([
        { id: 0, text: 'hey', completed: false },
        { id: 1, text: 'ho', completed: false },
    ])

    const action = deepFreeze({
        type: TOGGLE_TODO,
        payload: { id: 1 }
    })

    const after = [
        { id: 0, text: 'hey', completed: false },
        { id: 1, text: 'ho', completed: true }
    ]

    expect(todos(before, action)).to.be.deep.equal(after)
})

it('should return the last state when action is unknow', () => {
    const before = deepFreeze([
        { id: 0, text: 'hey', completed: false }
    ])

    const action = deepFreeze({
        type: 'UNKNOW'
    })

    const after = [
        { id: 0, text: 'hey', completed: false }
    ]

    expect(todos(before, action)).to.be.deep.equal(after)
})

it('should return initialState when state before is undefined', () => {
    const before = undefined

    const action = deepFreeze({
        type: TOGGLE_TODO,
        payload: { id: 1 }
    })
    const after = initialState
    expect(todos(before, action)).to.be.deep.equal(after)
})