import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiFetch } from "@/lib/api";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: AuthUser | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: true,
};

export const refreshMe = createAsyncThunk("auth/me", async () => {
  const data = await apiFetch<{ user: AuthUser }>("/api/auth/me");
  return data.user;
});

// export const loginThunk = createAsyncThunk(
//   "auth/login",
//   async (payload: { email: string; password: string }) => {
//     const data = await apiFetch<{ user: AuthUser }>("/api/auth/login", {
//       method: "POST",
//       body: JSON.stringify(payload),
//     });
//     return data.user;
//   }
// );



export const loginThunk = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    const res = await apiFetch<{ user?: AuthUser; error?: string }>(
      "/api/auth/login",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    if ("error" in res) {
      return rejectWithValue(res.error); // ❌ wrong password → catch block
    }

    return res.user!; // login successful
  }
);



// export const signupThunk = createAsyncThunk(
//   "auth/signup",
//   async (payload: { name: string; email: string; password: string }) => {
//     await apiFetch<{ message: string }>("/api/auth/signup", {
//       method: "POST",
//       body: JSON.stringify(payload),
//     });
//   }
// );


export const signupThunk = createAsyncThunk(
  "auth/signup",
  async (
    payload: { name: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    const res = await apiFetch<{ message?: string; error?: string }>(
      "/api/auth/signup",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    // check if backend returned error
    if ("error" in res) {
      return rejectWithValue(res.error); // ❌ reject for frontend catch
    }

    return res.message; // success
  }
);



export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  await apiFetch<{ message: string }>("/api/auth/logout", { method: "POST" });
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthUser | null>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshMe.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(refreshMe.rejected, (state) => {
        state.user = null;
        state.loading = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;


