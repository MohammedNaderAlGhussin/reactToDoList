export const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return [
        ...tasks,
        {
          id: tasks.length >= 1 ? tasks[tasks.length - 1].id + 1 : 1,
          title: action.payload.title,
          desc: action.payload.desc,
          completed: false,
        },
      ];
    }

    case "EDIT_TASK": {
      return tasks.map((t) => (t.id == action.payload.id ? action.payload : t));
    }

    case "DELETE_TASK": {
      return tasks.filter((t) => t.id !== action.payload);
    }

    case "TOGGLE_TASK": {
      return tasks.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    }

    default: {
      throw Error("Unkown Actiom Type", action.type);
    }
  }
};
