import React from 'react'
import {observer, inject} from 'mobx-react'
import Big from './comps/big'
import Small from './comps/small'
import './home.scss'
import {autorun} from 'mobx'

@inject("store")
@observer
export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;

        autorun(() => {
            let params = {
                method: 'get',
                url: (this.store.number % 2 === 1) ? '../source/a.json' : '../source/b.json'
            }
            this.store.fetchData(params)
        })
    }

        render() {
            let {number, plus, name, add, squared, age} = this.store;

            return (
                <div className="home">
                    <Small number={number} />
                    <Big plus={plus} add={add} squared={squared}/>
                    <div>
                        <h2>渲染响应数据</h2>
                        <h3>姓名：{name}</h3>
                        <h3>年龄：{age}</h3>
                    </div>
                </div>
            )
        }
    }
