import React, {Component} from "react";


export default class extends Component {

  render() {
    return <li>
      <span>{this.props.user.firstName} {this.props.user.lastName}</span>
    </li>;
  }
}
