import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { value: { title: "" }, result: [] };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => ({
      result: [...prevState.result, this.state.value],
      value: {}
    }));
  };

  render() {
    return (
      <div className="todo">
        {/* <div className="tabs">
          <div className="tab left bg-blue">
            <h5>TO DO FORM</h5>
          </div>
          <div className="tab right bg-black">
            <h5>TO DO LIST</h5>
          </div>
        </div> */}
        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-2 col-form-label">Title:</label>
              <div className="col-10">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.value.title}
                  onChange={this.handleChange}
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Desc:</label>
              <div className="col-10">
                <textarea
                  className="form-control"
                  value={this.state.value.desc}
                  onChange={this.handleChange}
                  placeholder="Desc"
                />
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-primary pull-right"
              value="Add"
            />
          </form>
          <ul className="scroll">
            <li />
          </ul>
        </div>
      </div>
    );
  }
}

export default Register;
