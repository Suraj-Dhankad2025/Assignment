import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  deleteInvoice,
  editInvoice,
  viewInvoice,
} from "../features/InvoiceSlice";
const ListInvoices = () => {
  const dispatch = useDispatch();
  const invoices = useSelector(state => ({
    ...state.invoices,
  }));
  if(!invoices) {
    console.log("no invoices");
  }
  const handleView = (id) => {
    dispatch(viewInvoice(id));
    // Add logic for navigating to the view page or displaying a modal
  };

  const handleEdit = (id) => {
    dispatch(editInvoice(id));
    // Add logic for navigating to the edit page or displaying a modal
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this invoice?")) {
      dispatch(deleteInvoice(id));
      // Add additional logic for deleting the invoice
    }
  };
  const formatDueDate = (dueDate) => {
    const date = new Date(dueDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="mt-3">All Invoices</h2>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Due Date</th>
            <th>Bill To</th>
            <th>Email</th>
            <th>Billing Address</th>
            <th>Bill From</th>
            <th>Email</th>
            <th>Billing Address</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Price/Rate</th>
          </tr>
        </thead>
        <tbody>
          {invoices && invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.invoiceNumber}</td>
              <td>{formatDueDate(invoice.dueDate)}</td>
              <td>{invoice.billTo.name}</td>
              <td>{invoice.billTo.email}</td>
              <td>{invoice.billTo.billingAddress}</td>
              <td>{invoice.billFrom.name}</td>
              <td>{invoice.billFrom.email}</td>
              <td>{invoice.billFrom.billingAddress}</td>
              <td>
                {invoice.items.map((item, index) => (
                  <div key={index}>{item.itemName}</div>
                ))}
              </td>
              <td>
                {invoice.items.map((item, index) => (
                  <div key={index}>{item.quantity}</div>
                ))}
              </td>
              <td>
                {invoice.items.map((item, index) => (
                  <div key={index}>{item.price}</div>
                ))}
              </td>
              <td>
                <button onClick={() => handleView(invoice.id)}>View</button>
                <button onClick={() => handleEdit(invoice.id)}>Edit</button>
                <button onClick={() => handleDelete(invoice.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        variant="primary"
        className="position-absolute top-0 end-0 m-3 mr-2"
      >
        <Link to="/addInvoice" className="text-white text-decoration-none">
          Add Invoice
        </Link>
      </Button>
    </div>
  );
};

export default ListInvoices;
