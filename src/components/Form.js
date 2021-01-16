import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            address:"",
            email: "",
            password: "",
            gender: "",
            message:""


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    addresshandler = (event)=>{
        this.setState({
            address: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    firstcase=(event) =>{
        this.setState({
            message:"You Have Registered as Buyer"
        })
    }

    secondcase=(event) =>{
        this.setState({
            message:"You Have Registered as Seller"
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName} ${this.state.message}`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            address: "",
            email: "",
            password: '',
            gender: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div class="container">

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>First Name:</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>Last Name :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Address :</label> <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="Addresss..." /><br />
                    <label>Email Adress`:</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /><br />
                    <label>Phone Number`:</label> <input type="text" value={this.state.phonenumber} onChange={this.phonenumberhandler} placeholder="PhoneNumber..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Gender   :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="REGISTER AS BUYER" onClick={this.firstcase} />
                    <input type="submit" value="REGISTER AS SELLER"onClick={this.secondcase}/>
                </form>

            </div>
            
        )
    }
}

export default Form
