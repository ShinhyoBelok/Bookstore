import { createSlice } from '@reduxjs/toolkit';

export const CHECK_STATUS = 'CHECK_STATUS';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: [] },
  reducers: {
    checkStatus: (state, action) => {
      switch (action.payload.type) {
        case CHECK_STATUS:
          return { categories: 'Under construction' };

        default:
          return state;
      }
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
