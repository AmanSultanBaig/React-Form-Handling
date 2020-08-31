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
        }
    }

    // change state of firstname
    ChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    // change state of lastname
    ChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    // change state of email
    ChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    // change state of age
    ChangeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    // change state of about section
    ChangeAbout = (e) => {
        this.setState({
            about: e.target.value
        })
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
        const disabledCondition = this.state.firstName === '' || this.state.lastName === '' || this.state.age === '' || this.state.email === '' || this.state.about === ''

        return (
            <div className="container">
                <form onSubmit={this.formSubmission}>
                    <h1 className="App mt-3">React Form Handling</h1>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <input type="text" required onChange={this.ChangeFirstName} placeholder="First Name e.g Aman" value={this.state.firstName} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" required onChange={this.ChangeLastName} placeholder="Last Name e.g Sultan" value={this.state.lastName} className="form-control" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <input type="email" required onChange={this.ChangeEmail} placeholder="Email e.g Johndeo@gmail.com" value={this.state.email} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <input type="number" required onChange={this.ChangeAge} min="0" placeholder="Age e.g 25" value={this.state.age} className="form-control" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <textarea rows="4" required onChange={this.ChangeAbout} placeholder="About Yourself" value={this.state.about} className="form-control"></textarea>
                        </div>
                    </div>
                    <button disabled={disabledCondition} className="btn btn-primary submit-btn float-right mt-3">Submit Form</button>
                </form>
            </div>
        )
    }
}

export default FromComponent