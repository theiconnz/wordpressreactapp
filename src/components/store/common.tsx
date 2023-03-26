import { createSlice } from '@reduxjs/toolkit'

export const commonState = createSlice({
    name: 'commonstate',
    initialState: {
        menuslist:{}
    },
    reducers: {
        setMenulist(state, action){
            state.menuslist = action.payload;
        },
    }
})

// Action creators are generated for each case reducer function
export const { setMenulist } = commonState.actions
export default commonState.reducer