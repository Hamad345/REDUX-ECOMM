
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice'

import adminProducts from './admin/products-slice'



const store = configureStore({
    reducer :{
        auth: authReducer,Slice,
    }

})

export default store