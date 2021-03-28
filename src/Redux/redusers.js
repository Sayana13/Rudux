const initialState = {
    todo: [
        {name: 'create redux app', id: 1, status: false},
        {name: 'create todo app', id: 2, status: false},
        {name: 'create framework', id: 3, status: false}
    ]
}

const todo = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
         return {
             ...state, todo: [...state.todo, {...action.payload}]
         }
        case 'DELETE':
            const newTodo = state.todo.filter(el => el.id !== action.payload.id);
            return {
                ...state, todo: [newTodo]
            }
        default:
            return state;
    }
}

export default todo;