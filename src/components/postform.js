import React, { Component } from 'react';
import axios from 'axios'
import '../App.css';
class Postform extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email: '',
            position: ''
        }
    }
   

    changeHandler = (e) =>{
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e =>{
        e.preventDefault()
        axios 
        .post('https://6096be38116f3f00174b38a5.mockapi.io/employee/add', this.state)
        window.location.reload(false);
       
    }
    render(){
        const { name, email, position } = this.state
        return(
        <div className= "counters">
            <form onSubmit={this.submitHandler} className="form_cont">
                <div>
                    <input type="text" name="name" 
                    value={name}
                    onChange = {this.changeHandler}
                    placeholder="Enter Name"
                    ></input>
                </div>
                <div>
                    <input type="text"  name="email" 
                    value={email}
                    onChange = {this.changeHandler} 
                    placeholder="Enter Email" ></input>
                </div>
                <div>
                    <input type="text"  name="position" 
                    value={position}
                    onChange = {this.changeHandler}
                    placeholder="Enter Position" ></input>
                </div>
                <button type="submit">Add New</button>
            </form>
        </div>
        )
    }
}

export default Postform;