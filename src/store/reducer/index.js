export const initialState = {
  user: "",
  criteriaList: [
    {
      id: null,
      title: "",
      order: null,
    },
  ],
  todoList: [
    {
      id: "",
      title: "",
      scores: [
        {
          id: 0,
        },
      ],
      status: "",
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_CRITERIA":
      return {
        ...state,
        criteriaList: action.payload,
      };
    case "ADD_CRITERIA":
      return {
        ...state,
        criteriaList: [...state.criteriaList, action.payload],
      };
    case "EDIT_CRITERIA":
      const updatedCriteriaList = state.criteriaList.map((criteria) => {
        if (criteria.id === action.payload.id) {
          return {
            ...criteria,
            ...action.payload,
          };
        } else {
          return criteria;
        }
      });
      return {
        ...state,
        criteriaList: updatedCriteriaList,
      };
    case "REORDER_CRITERIA_LIST":
      return {
        ...state,
        criteriaList: action.payload,
      };
    case "REMOVE_CRITERIA":
      return {
        ...state,
        criteriaList: state.criteriaList.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    case "SET_TODOS":
      return {
        ...state,
        todoList: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "EDIT_TODO":
      const updatedTodoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload,
          };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todoList: updatedTodoList,
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
