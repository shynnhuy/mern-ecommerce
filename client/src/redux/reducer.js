import { combineReducers } from "redux";
import adminReducer from "./admin/admin.reducer";
import authReducer from "./auth/auth.reducer";
import snackbarReducer from "./snackbar/snackbar.reducer";
import shopReducer from "./shop/shop.reducer";

export default combineReducers({
  auth: authReducer,
  admin: adminReducer,
  snack: snackbarReducer,
  shop: shopReducer,
});
