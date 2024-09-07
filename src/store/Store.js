//  step 1 : Creation of the store : 
//  where every state will be stored !! 


import { configureStore} from '@reduxjs/toolkit'
import TodoSlice from '../features/todo/TodoSlice'

export const store = configureStore({
   reducer:TodoSlice
})
