import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'reducers/visibility-filter/actions'

const Filter = ({ activeFilter }) => (
    <div>
        <h3>Mostrar</h3>
        {filterItens.map((item) => {
            if (item.action === activeFilter) {
                return <span key={item.action} style={{ marginRight: 10 }}>{item.label}</span>
            }
            return <a href='' key={item.action} style={{ marginRight: 10 }}> {item.label}</a>
        })}
    </div>
)

const filterItens = [
    { label: 'Todos', action: actions.SHOW_ALL },
    { label: 'Finalizados', action: actions.SHOW_COMPLETED },
    { label: 'A fazer', action: actions.SHOW_ACTIVE }
]

const mapStateToProps = (state) => ({
    activeFilter: state.visibilityFilter
})

export default connect(mapStateToProps)(Filter)