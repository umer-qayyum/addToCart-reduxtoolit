import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});
const productSlice = createSlice({
  name: "product",

  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  // REDUCERS ARE USED IN SIMPLE METHOD
  reducers: {
    // setProducts(state,action){
    //     state.data=action.payload;
    // },
    // setStatus(state,action){
    //     state.status=action.payload;
    // },
  },
  // EXTRA-REDUCERS ARE USED IN ASYNCTHUNK METHOD
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// BY ASYNCTHUNK METHOD IN TOOLKIT

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

// BY SIMPLE METHOD IN TOOLKIT

// export const fetchProducts=()=>{
//     return async function fetchProductThunks(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res=await fetch('https://fakestoreapi.com/products');
//             const data=await res.json();
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }
