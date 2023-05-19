import { Component } from "react";

class Content extends Component {
  constructor() {
    super(); //method triggers the parent class
    this.state = {
      email: "",
      pass: "",
    };
    console.log('I am  constructor Method');
  }

  componentDidMount(){
    console.log('hey i am ComponentDidMount method');
    setTimeout(()=>{
      console.log("After 5 seconds")
    },5000)
}
componentDidUpdate(){
  console.log('hey i am ComponentDidUpdate method');
  }
  myFunction = (event) => {
    event.preventDefault(); //stop the page from refreshing
    console.log("Someone Submitted the Data");
    console.log(this.state.email);
    console.log(this.state.pass);
  };

  myEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  myPass = (event) => {
    this.setState({ pass: event.target.value });
  };
  render() {
    // render is method and return is keyword
    return (
      <div className="m-5 ">
        <form onSubmit={this.myFunction}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address*
            </label>
            <input
              type="email"
              name="email"
              onChange={this.myEmail}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="enter email address"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password*
            </label>
            <input
              type="password"
              name="pass"
              onChange={this.myPass}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="enter password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p>{console.log('I am Render Method')}</p>
      </div>
    );
  }
}
export default Content;
