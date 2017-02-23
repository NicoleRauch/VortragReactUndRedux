import React, {Component} from "react";


export default class UserCreation extends Component {

  constructor(props) {
    super(props);
    this.inputs = {};
  }

  render() {
    return (
      <div>
        <h3>New User</h3>
        <div>
          <label>Dein Vorname: </label>
          <input type="string" ref={c => this.inputs.firstName = c}/>
        </div>
        <div>
          <label>Last Name: </label>
          <input type="string" ref={c => this.inputs.lastName = c}/>
        </div>
        <div>
          <button onClick={() => {
            this.props.submitUser({firstName: this.inputs.firstName.value, lastName: this.inputs.lastName.value});
            this.inputs.firstName.value = "";
            this.inputs.lastName.value = "";
            }
          }
          >Submit
          </button>
        </div>
      </div>
    );
  }

}
