import React, { Component } from "react";

class Todo extends Component {
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
    if (this.state.title.length < 1) {
      alert("Title Kosong!");
    } else if (this.state.desc.length < 1) {
      alert("Desc Kosong!");
    } else {
      const resultLength = this.state.result.length;
      const value = {
        id: resultLength,
        title: this.state.title,
        desc: this.state.desc
      };
      this.setState(prevState => ({
        result: [...prevState.result, value],
        title: "",
        desc: ""
      }));
    }
  };

  handleBtnDelete = (e, id) => {
    var result = [...this.state.result];
    if (id !== -1) {
      result.splice(id, 1);
      this.setState({ result: result });
    }
  };

  render() {
    const enabled = this.state.title.length > 0 && this.state.desc.length > 0;
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
              disabled={!enabled}
              value="Add"
            />
          </form>
          <table className="scroll table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Desc</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {this.state.result.map((item, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.desc}</td>
                  <td>
                    <div
                      className="danger"
                      onClick={e => this.handleBtnDelete(e, item.id)}
                    >
                      <i className="fa fa-times" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Todo;
