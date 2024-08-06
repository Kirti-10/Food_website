import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      items: [],
   },
   reducers: {
      addItem: (state, action) => {
         //*this state is initial state and the action is the data which is comming in

         state.items.push(action.payload);
      },
      removeItem:(state,action)=>{
         //*write an logic which food has to be removed 
         state.items.pop();
      },
      clearCart: (state) => {
         state.items = [];
         // reducers don't return anything so,take a state and modify it
      }
   }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;