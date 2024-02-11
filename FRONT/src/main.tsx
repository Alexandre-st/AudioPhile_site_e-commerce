import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Checkout from "./pages/Checkout";
import Earphones from "./pages/EarPhones";
import HeadPhones from "./pages/HeadPhones";
import HomePage from "./pages/Homepage";
import Speakers from "./pages/Speakers";
import "./styles/index.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="headphones" element={<HeadPhones />} />
      <Route path="speakers" element={<Speakers />} />
      <Route path="earphones" element={<Earphones />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
