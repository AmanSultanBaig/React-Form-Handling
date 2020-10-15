import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert';

class FromComponent extends Component {

    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            about: '',

            errors: ""
        }
    }

    // change state of form fields
    // StateChangeHandler = (e) => {
    //     const { name, value } = e.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    StateChangeHandler = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });

        let fname = event.target.value;

        if (fname == "") {
            this.setState({ errors: "Invalid" })
        }
        this.setState({
            [name]: value
        });


        // this.setState({
        //     errors, [name]: value
        // })
        console.log(this.state)
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

        swal(
            "Good job!",
            `Name: ${this.state.firstName} ${this.state.lastName}
                Email: ${this.state.email}, Age: ${this.state.age}
                About: ${this.state.about}`,
            "success"
        );
        e.preventDefault();
        this.clearStates()
    }


    render() {
        // const disabledCondition = this.state.firstName === '' || this.state.lastName === '' || this.state.age === '' || this.state.email === '' || this.state.about === ''
        const { errors } = this.state
        return (
            <div className="container">
                <form onSubmit={this.formSubmission}>
                    <h1 className="App mt-3">React Form Handling</h1>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <input type="text" name="firstName" onChange={this.StateChangeHandler} placeholder="First Name e.g Aman" value={this.state.value} className="form-control" />
                            <small style={{ color: "red" }}>{errors.username}</small>
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="lastName" onChange={this.StateChangeHandler} placeholder="Last Name e.g Sultan" value={this.state.value} className="form-control" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <input type="email" name="email" onChange={this.StateChangeHandler} placeholder="Email e.g Johndeo@gmail.com" value={this.state.value} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <input type="number" name="age" onChange={this.StateChangeHandler} min="0" placeholder="Age e.g 25" value={this.state.value} className="form-control" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <textarea rows="4" name="about" onChange={this.StateChangeHandler} placeholder="About Yourself" value={this.state.value} className="form-control"></textarea>
                        </div>
                    </div>
                    <button className="btn btn-primary submit-btn float-right mt-3">Submit Form</button>
                </form>
            </div>
        )
    }
}

export default FromComponent