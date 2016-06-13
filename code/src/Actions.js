
export const USER_ADDED = "USER_ADDED";

export function addUser(user) {
  return {
    type: "USER_ADDED",
    payload: user
  }
}

