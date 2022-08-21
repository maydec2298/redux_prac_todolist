const ADD = "ADD"

export const add = (payload) => {
  return { type: ADD, payload };
};

// 초기 상태값
const initialState = {

  todos: [
    {
      id: 1,
      title: "운동을 하자",
    },

  ],
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;