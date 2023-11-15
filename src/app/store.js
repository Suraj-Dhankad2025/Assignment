import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../features/InvoiceSlice";
export const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
});