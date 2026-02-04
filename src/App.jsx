import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import PaymentDetails from "./pages/paymentDetails/PaymentDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PaymentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
