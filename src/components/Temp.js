import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addInvoice,
  deleteInvoice,
  editInvoice,
  viewInvoice,
} from "../features/InvoiceSlice";

const Temp = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const addInvoiceHandler = (e) => {
    e.preventDefault();
    dispatch(
      addInvoice(input)
    );
    setInput("");
  };

  return (
   <div>Temp</div>
  )
};

export default Temp;
