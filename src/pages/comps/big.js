import React from 'react'
import {inject} from 'mobx-react'

@inject("store")
export default class Big extends React.Component {

    square = () => {
        this.props.store.squared = 16
    }

    render () {
        const {plus, add} = this.props;

        return (
            <div>
                <h1>Big组件</h1>
                <h1>Computed: {plus}</h1>
                <button onClick={this.square}>16开平方</button>
                <button onClick={add}>加1</button>
            </div>
        )
    }
}
