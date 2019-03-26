export const Types = {
  GET_TASK: 'tasks/GET_TASK',
  PUT_TASK: 'tasks/PUT_TASK',
  DEL_TASK: 'tasks/DEL'
}

const initialState = {
  data: [],
  loading: false,
  error: null
}

const task = (state = initialState, action) => {
  const { data } = state
  const { payload } = action

  switch (action.type) {
    case Types.GET_TASK:
      return {
        ...state,
        loading: true
      }

    case Types.PUT_TASK:
      return {
        ...state,
        loading: true,
        data: [
          ...data,
          {
            ...payload.task,
            id: data.length
          }
        ]
      }

    case Types.DEL_TASK:
      return {
        ...state,
        data: data.filter((task) => task.id !== payload.task.id)
      }

    default:
      return state
  }
}

export default task

export const Creators = {
  getTasks: () => ({
    type: Types.GET_TASK
  }),

  putTask: (task) => ({
    type: Types.PUT_TASK,
    payload: {
      task
    }
  }),

  delTask: (task) => ({
    type: Types.DEL_TASK,
    payload: {
      task
    }
  })
}
