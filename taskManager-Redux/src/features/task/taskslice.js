import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    items: [],
    filters: "all",
  },
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },
    toggleTask: (state, action) => {
      const task = state.items.find((t) => t.id === action.payload);
      if(task) task.completed =!task.completed
    },
    deleteTask:(state,action)=>{
        state.itmes= state.itmes.filter(t=>t.id !==action.payload)
    },
    setFilter:(state,action)=>{
        state.filters=action.payload
    },
  },
});
export const {addTask,deleteTask,setFilter,toggleTask}= taskSlice.actions;
export default taskSlice.reducer