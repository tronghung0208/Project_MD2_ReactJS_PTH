import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// phần cho user

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await axios.get("http://localhost:8000/users");
  return response.data;
});
export const putUser = createAsyncThunk("putUser", async (user) => {
  const response = await axios.put(
    `http://localhost:8000/users/${user.id}`,
    user.values
  );
  return response.data;
});
export const lockUser = createAsyncThunk("lockUser", async (user) => {
  const response = await axios.put(
    `http://localhost:8000/users/${user.id}`,
    user
  );
  return response.data;
});
export const unLockUser = createAsyncThunk("unLockUser", async (user) => {
  const response = await axios.put(
    `http://localhost:8000/users/${user.id}`,
    user
  );
  return response.data;
});
export const putCartInUser = createAsyncThunk(
  "putCartInUser",
  async (cartUser) => {
    const response = await axios.put(
      `http://localhost:8000/users/${cartUser.id}`,
      cartUser
    );
    return response.data;
  }
);

// phần action cho product
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await axios.get("http://localhost:8000/products");
  return response.data;
});
export const portProduct = createAsyncThunk("portProduct", async (product) => {
  const response = await axios.post("http://localhost:8000/products", product);
  return response.data;
});
export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (productId) => {
    await axios.delete(`http://localhost:8000/products/${productId}`);
    return productId;
  }
);
export const putProduct = createAsyncThunk("putProduct", async (product) => {
  const response = await axios.put(
    `http://localhost:8000/products/${product.id}`,
    product.values
  );
  return response.data;
});

// phần action cho Categori
export const fetchCategori = createAsyncThunk("fetchCategori", async () => {
  const response = await axios.get("http://localhost:8000/categoris");
  return response.data;
});
export const portCategori = createAsyncThunk(
  "portCategori",
  async (categori) => {
    const response = await axios.post(
      "http://localhost:8000/categoris",
      categori
    );
    return response.data;
  }
);
export const deleteCategori = createAsyncThunk(
  "deleteCategori",
  async (categoriId) => {
    await axios.delete(`http://localhost:8000/categoris/${categoriId}`);
    return categoriId;
  }
);

// phần action cho cart: tăng số lượng, xóa sp
export const upCartQuantity = createAsyncThunk(
  "upCartQuantity",
  async (user) => {
    const response = await axios.put(
      `http://localhost:8000/users/${user.id}`,
      user
    );
    return response.data;
  }
);
export const downCartQuantity = createAsyncThunk(
  "downCartQuantity",
  async (user) => {
    const response = await axios.put(
      `http://localhost:8000/users/${user.id}`,
      user
    );
    return response.data;
  }
);
export const checkOutCart = createAsyncThunk("checkOutCart", async (user) => {
  const response = await axios.put(
    `http://localhost:8000/users/${user.id}`,
    user
  );
  return response.data;
});
export const deleteCartProduct = createAsyncThunk(
  "deleteCartProduct",
  async (user) => {
    const response = await axios.put(
      `http://localhost:8000/users/${user.id}`,
      user
    );
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
    newState: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // phần cho user
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = "Error";
    });
    builder.addCase(putUser.fulfilled, (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state.status = "success";
    });
    builder.addCase(lockUser.fulfilled, (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? { ...user, locked: true } : user
      );
      state.status = "success";
    });
    builder.addCase(unLockUser.fulfilled, (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? { ...user, locked: false } : user
      );
      state.status = "success";
    });
    builder.addCase(putCartInUser.fulfilled, (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state.status = "success";
    });
    // phần Products
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = "Error";
    });

    builder.addCase(portProduct.fulfilled, (state, action) => {
      if (state.users.products) {
        state.users.products = state.users.products.push(action.payload);
      }
    });
    builder.addCase(putProduct.fulfilled, (state, action) => {
      if (state.users.products && state.users.products.id) {
        state.users.products = state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
      }
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products?.filter(
        (product) => product.id !== action.payload
      );
      state.status = "success";
    });

    // phần Categoris

    builder.addCase(fetchCategori.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchCategori.fulfilled, (state, action) => {
      state.categoris = action.payload;
    });
    builder.addCase(fetchCategori.rejected, (state, action) => {
      state.error = "Error";
    });
    builder.addCase(portCategori.fulfilled, (state, action) => {
      if (state.users.categoris) {
        state.users.categoris = [...state.users.categoris, action.payload];
      }
      state.status = "success";
    });

    builder.addCase(deleteCategori.fulfilled, (state, action) => {
      state.categoris = state.categoris?.filter(
        (categori) => categori.id !== action.payload
      );
      state.status = "success";
    });

    // Phần cho cart: tăng số lượng, xóa sp
    builder.addCase(upCartQuantity.fulfilled, (state, action) => {
      if (state.users.users) {
        state.users.users = [...state.users.users, action.payload];
      }
      state.status = "success";
    });
    builder.addCase(downCartQuantity.fulfilled, (state, action) => {
      if (state.users.users) {
        state.users.users = [...state.users.users, action.payload];
      }
      state.status = "success";
    });
    builder.addCase(deleteCartProduct.fulfilled, (state, action) => {
      if (state.users.users) {
        state.users.users = [...state.users.users, action.payload];
      }
      state.status = "success";
    });
    builder.addCase(checkOutCart.fulfilled, (state, action) => {
      if (state.users.users) {
        state.users.users = [...state.users.users, action.payload];
      }
      state.status = "success";
    });
  },
});

export default usersSlice.reducer;
