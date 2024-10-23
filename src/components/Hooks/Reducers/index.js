import { combineReducers } from "@reduxjs/toolkit";
import Snackbar from "./Snackbar"
import User from './User'

export const rootReducers = combineReducers({
    snackbar : Snackbar,
    user : User
})