import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListInvoices from "./components/ListInvoices";
class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <Router>
            <Routes>
              <Route path="/" element={<ListInvoices/>} />;
              <Route path="/addInvoice" element={<InvoiceForm />} />;
            </Routes>
          </Router>
        </Container>
      </div>
    );
  }
}
export default App;
