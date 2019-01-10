import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", desc: "", result: [] };
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleDescChange = event => {
    this.setState({
      desc: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const value = {
      title: this.state.title,
      desc: this.state.desc
    };
    this.setState(prevState => ({
      result: [...prevState.result, value],
      title: "",
      desc: ""
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
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Desc:</label>
              <div className="col-10">
                <textarea
                  className="form-control"
                  value={this.state.desc}
                  onChange={this.handleDescChange}
                  placeholder="Description"
                />
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-primary pull-right"
              value="Add"
            />
          </form>
          <ul className="scroll list-group list-group-flush">
            {this.state.result.map((item, i) => (
              <li className="list-group-item row" key={i}>
                <span className="title col-3">{item.title}</span>
                <span className="desc col-9">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Register;
