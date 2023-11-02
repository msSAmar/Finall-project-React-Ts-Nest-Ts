import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../classes/user";

const initialState = {
  user: new User('???','???','???','???','???'),
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload.user;
      console.log("user signUp: ", state.user);
   state.isLoggedIn = true
    },
    signIn: (state, action) => {
      state.user.email= action.payload.user.username;
      state.user.firstName= action.payload.user.sub;
      /////////////שמירה בלוקל סטורייג
      console.log("user signIn: ", state.user);
      state.isLoggedIn = true
    },
    signOut: (state) => {
      localStorage.clear();
      state.user = new User('???','???','???','???','???')
      state.isLoggedIn = false
    },
    setLevel: (state,action) => {
      state.user.level = action.payload.user.level;
      
    }
  }
})

export const {signUp, signIn, signOut,setLevel} = userSlice.actions
export default userSlice.reducer