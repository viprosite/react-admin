import React from 'react';


export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: 'xxx'
        }
    }

    render() {
        return (
            <div>{this.state.msg}</div>
        )
    }

}