import { createAction, createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = createAsyncThunk("Api/fetchApi", async () => {
  const response = await axios.get("http://localhost:5000/Data");
  return response.data;
});

export const addExp = createAction("Api/addExp");

export const Api = createSlice({
  name: "Api",
  initialState: {
    data: [],
    loading: true,
    Total: 0,
    Price: 0,
    item: 0,
    cart: [],
  },
  reducers: {
    addBudget: (state, action) => {
      state.Total += action.payload.price;
      const addItem = state.cart.find(item => item.id === action.payload.id);
      if (addItem) {
        addItem.quantity += 1
      }
      else {
        state.cart.push({ ...action.payload.prolist, quantity: 1 })
      }
    },
    removeprice: (state, action) => {
      state.Total -= action.payload.price;
      const deletitem = state.cart.find(item => item.id === action.payload.id)
      if (deletitem) {
        if (deletitem.quantity > 1) {
          deletitem.quantity -= 1
        }
        else {
          state.cart = state.cart.filter(item => item.id !== action.payload.id)
        }
      }
    },
    items: (state, action) => {
      const change = action.payload?.change;
      console.log(change);
      state.item += change;
      console.log(state.item);
    },
    setdata: (state, action) => {
      state.data = action.payload
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
  },
});

export const { addBudget, removeprice, items, setdata } = Api.actions;
export default Api.reducer;
