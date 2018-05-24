import React from 'react'

export default class Small extends React.Component {

    render () {
        let {number} = this.props;

        return (
            <div>
                <h1>Small组件</h1>
                <h2>Observable：{number}</h2>
            </div>
        )
    }
}
