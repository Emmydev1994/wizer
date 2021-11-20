import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name } = props.location.state.contact;
    this.state = {
      id,
      name,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Book Name</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
