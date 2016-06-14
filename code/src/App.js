import React, {Component} from "react";
import { connect } from "react-redux";

import HelloWorld from "./HelloWorld";
import UserList from "./UserList";
import UserCreation from "./UserCreation";
import * as Actions from "./Actions";

export class AppComponent extends Component {

  render() {
    const {users, dispatch} = this.props;

    return (
      <div>
        <HelloWorld />
        <UserList users={users} />
        <UserCreation submitUser={user => dispatch(Actions.addUser(user))}
        />
      </div>
    );
  }
}

export default connect(state => state)(AppComponent);
