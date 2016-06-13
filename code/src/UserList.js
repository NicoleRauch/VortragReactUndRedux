import React from "react";

import User from "./User";

export default ({users}) => (
  <div>
    <h3>All Users</h3>
    <ul>
      { users.map((user, index) => <User user={user} key={"user_" + index}/>) }
    </ul>
  </div>
);
