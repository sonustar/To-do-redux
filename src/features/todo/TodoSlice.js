import { createSlice, nanoid } from "@reduxjs/toolkit";


//  We need a initial state : 
// Initial state :
const initialState = {
    
    todos :[{id:1 , text : "hello world "}]

}

const todoSlice = createSlice({

  // Name 
  name:'todo',
  // Initial state 
  initialState,
  reducers:{

    // add some items : 
    // terminology : REDUCER FUNCTION
    additem: (state,action)=>{
        // New state
        console.log(action)
        // contains the text only !! 
        const todo = {
            
          id:nanoid(),
          text: action.payload
        }
        //  new state is stored !! 
        state.todos.push(todo)

    },

    removeTodo:(state,action)=>{

    
      state.todos = state.todos.filter((todo) => todo.id !== action.payload )
    },

    updateTodo:(state,action)=>{
      
      console.log("update to do " , action.payload)
      // what we are sending ? 
     // id  and  text -> object -> destructing !!    
      const { id, text } = action.payload;

      const existing = state.todos.find(todo => todo.id === id);

      if(existing){
        existing.text = text ;
      }
       
    }
       
  }
})

// Exportation :)

export const {additem ,removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer