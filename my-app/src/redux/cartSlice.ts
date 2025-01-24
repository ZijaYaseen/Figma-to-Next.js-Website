import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string,
    name: string,
    imagePath :string,
    description: string,
    price: number,
    quantity :number
}

interface CartState {
    items: CartItem[],
    selectedItem: CartItem | null; // Add selectedItem
}

const initialState : CartState = {
    items : [],
    selectedItem: null, // Initialize as null
}

const cartSlice = createSlice(
    {
        name:"Cart",
        initialState,
        reducers: {
            addToCart : (state, action: PayloadAction<CartItem>) =>{
                const existingItem = state.items.find(item => item.id === action.payload.id);

                if(existingItem) {
                    existingItem.quantity += action.payload.quantity
                } 

                else{
                    state.items.push(action.payload)
                }
            },

            removeFromCart(state, action: PayloadAction<string>) { // Accepts only the `id`
                state.items = state.items.filter((item) => item.id !== action.payload);
              },

            clearCart : state => {
                state.items = []
            },

            setCartItems(state, action: PayloadAction<CartItem[]>) {
                state.items = action.payload;
              },

              setSelectedItem(state, action: PayloadAction<CartItem | null>) {
                state.selectedItem = action.payload; // Update selectedItem
              },

        }
    }
);

export const {addToCart, removeFromCart, clearCart, setCartItems, setSelectedItem} = cartSlice.actions;

export default cartSlice.reducer;