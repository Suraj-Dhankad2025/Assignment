import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    invoices:[],
}
const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addInvoice: (state, action) => {
      const invoice = {
          id:nanoid(),
          ...action.payload
      }
      state.invoices.push(invoice);
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    editInvoice: (state, action) => {
      const { id, updatedInvoiceData } = action.payload;
      const index = state.invoices.findIndex((invoice) => invoice.id === id);
      if (index !== -1) {
        state.invoices[index] = { ...state.invoices[index], ...updatedInvoiceData };
      }
    },
    viewInvoice: (state, action) => {
      const { id } = action.payload;
      const existingInvoice = state.find((invoice) => invoice.id === id);
      if (existingInvoice) {
        existingInvoice.status = 'viewed';
      }
    },
  },
});

export const { addInvoice, deleteInvoice, editInvoice, viewInvoice } =
  invoiceSlice.actions;
export default invoiceSlice.reducer;
