import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";// this cartSlice is exporting reducer

const store = configureStore({
    reducer:{
        cart:cartSlice
    }
});
export default store;


/*
* Create Store
- configureStore() - RTK

* Provide my store to app
*- <Provider store = {store}> - import from react-redux
*
*Slice
*- RTK - createSlice({
name: ""
initialState:
reducers: {
addItem: (state, action)= { state= action.payload}

}
})
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

* Put the slice into Store
  -{
    reducer:{
        cart:cartSlice,
        user:userSlice
        }
  }
*/

