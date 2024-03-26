import { createSlice } from '@reduxjs/toolkit'

// create an auth slice to maintain the user signin status
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // user is not logged in
    status: sessionStorage['status'],
    role:'',
    regNo:-1,
  
  },
  reducers: {
    signin: (state, action) => {
      // the user is now signed in
      state.status = true
      sessionStorage['userrole']=action.payload['userrole']
      sessionStorage['loginid'] = action.payload['loginid']
      sessionStorage['status']=true;
    },
    signout: (state, action) => {
      // the user is signed out
      state.status = false

      sessionStorage.removeItem('userrole')
      sessionStorage.removeItem('loginid')
      sessionStorage['status']=false;
    },

   
     clear:(state,action)=>{
      state.status=false;
     },
  },
})

// export the reducer for authSlice
export default authSlice.reducer

// export the actions
export const { signin, signout , clear } = authSlice.actions
