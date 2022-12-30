import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    message: "",
    wishlists: [],
  },
  reducers: {
    createWishlist: (state, action) => {
      return {
        message: "Berhasil menambahkan wishlist ticket !",
        wishlists: [...state.wishlists, action.payload],
      };
    },
    deleteWishlist: (state, action) => {
      return {
        message: "Berhasil menghapus wishlist ticket !",
        wishlists: state.wishlists.filter(
          (ticket) => ticket.id !== action.payload
        ),
      };
    },
  },
});

export const { createWishlist, deleteWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
