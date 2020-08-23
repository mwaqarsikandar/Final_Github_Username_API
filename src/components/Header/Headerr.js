import React, { Component } from "react";



class Headerr extends Component {
  
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const wwe = 'https://api.github.com/users/' + this.state.email;
    console.log(wwe);
    console.log("The form was submitted with the following data:");
    this.props.callbackFromParent(wwe);
    
  }
 

  render() {
    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Enter Your Github Username Here
            </label>
            <input
              type="text"
              id="email"
              className="formFieldInput"
              placeholder="Enter your Username"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          

          <div className="formField">
            <button className="formFieldButton">Click To Go</button>{" "}
            
          </div>

          
        </form>
      </div>
    );
  }
}

export default Headerr;
