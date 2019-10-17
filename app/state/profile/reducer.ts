import ReduxAction from "../../types/reduxAction";

const initialState = {
  stats: {
    libraryBooks: 19,
    reviews: 7,
    followers: 5,
    following: 15,
    lists: 2
  },
  personalInfo: {
    picture:
      "https://cdn.alibrate.com/profile/5d9b59d94658423d425a4085/a208c761-5fc1-4856-9e2e-ce6ff001b292/small",
    displayName: "libasoles",
    birthday: "1978-12-24T03:00:00.000Z"
  }
};

const UPDATE_PROFILE = "UPDATE_PROFILE";

export default function profile(state = initialState, action: ReduxAction<{}>) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
