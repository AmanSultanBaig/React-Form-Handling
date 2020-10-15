import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class FromComponent extends Component {

    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            about: '',

            message: ""
        }
    }

    // change state of form fields
    // StateChangeHandler = (e) => {
    //     const { name, value } = e.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // StateChangeHandler = (event) => {
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     });
    // }


    changeName = (e) => {
        this.setState({
            firstName: e.target.value
        })
        if (this.state.firstName === "") {
            this.setState({
                message: "Invalid! Please Fill the field"
            })
        }
        if (this.state.firstName !== "") {
            this.setState({
                message: ""
            })
        }

        console.log(this.state.firstName)
    }

    // reset form function
    clearStates = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            about: '',
        })
    }

    // showing form data
    formSubmission = (e) => {
        if (this.state.firstName === "") {
            this.setState({
                message: "Invalid! Please Fill the field"
            })
        }
        if (this.state.firstName !== "") {
            this.setState({
                message: ""
            })
        }
        console.log(this.state)
        // swal(
        //     "Good job!",
        //     `Name: ${this.state.firstName} ${this.state.lastName}
        //         Email: ${this.state.email}, Age: ${this.state.age}
        //         About: ${this.state.about}`,
        //     "success"
        // );
        e.preventDefault();
        this.clearStates()
    }


    render() {
        // const disabledCondition = this.state.firstName === '' || this.state.lastName === '' || this.state.age === '' || this.state.email === '' || this.state.about === ''
        const { message } = this.state
        return (
            <div className="container">
                <form onSubmit={this.formSubmission}>
                    <h1 className="App mt-3">React Form Handling</h1>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <input type="text" name="firstName" onChange={this.changeName} placeholder="First Name e.g Aman" value={this.state.value} className="form-control" />
                            <small style={{ color: "red" }}>{message}</small>
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="lastName" onChange={this.StateChangeHandler} placeholder="Last Name e.g Sultan" value={this.state.value} className="form-control" />
                        </div>
                    </div>
                    <button className="btn btn-primary submit-btn float-right mt-3">Submit Form</button>
                </form>
            </div>
        )
    }
}

export default FromComponent