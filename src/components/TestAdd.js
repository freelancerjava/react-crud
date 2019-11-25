import React, { Component } from 'react';
import './TestItem.css';


class TestAdd extends Component {

    state = this.props.curItem;

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handelSubmit = (e) => {
        e.preventDefault();
        this.setState({id: Date.now()});
        this.props.addItem(this.state);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' onChange={this.handleChange} value={this.state.name} />
                    <label htmlFor='name'>Age</label>
                    <input type='text' id='age' onChange={this.handleChange} value={this.state.age} />
                    <label htmlFor='name'>Sex</label>
                    <input type='text' id='sex' onChange={this.handleChange} value={this.state.sex} />
                    <button>Submit</button>
                    <button onClick={()=>{
                        this.props.editItem(this.id)
                    }}>Update</button>
                </form>
            </div>
        )
    }
}
export default TestAdd;