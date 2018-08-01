import React from 'react'
import {Button} from 'antd'  //子组件需要用{}
import 'antd/dist/antd.css';
export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    hanleAdd() {
        this.setState({
            count:this.state.count +1
        })
    }
    render() {
        return <div>
            <span>{this.state.count}</span>
            <Button onClick={this.hanleAdd.bind(this)}>点击一下</Button>
        </div>
    }
}