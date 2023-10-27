import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CompatRouter, Route, Routes } from "react-router-dom-v5-compat";
import { Provider } from "react-redux";
import { store } from "./core/redux/store";

import * as Styled from './styled'

import Header from "./components/Header/index";
import Menu from "./components/Menu/index";
import Home from "./components/Home";

const RemoteFreightRateNatura = React.lazy(() => import("LEGACY/freightRateNatura"))
const RemoteShopee = React.lazy(() => import("LEGACY/shopee"))
const RemoteEmpresa = React.lazy(() => import("LEGACY/empresa"))

const App = () => (
  <div>
    <Header />
    <Menu />

    <Styled.Content>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fatura" element={<RemoteFreightRateNatura />} />
          <Route path="/shopee" element={<RemoteShopee />} />
          <Route path="/empresa" element={<RemoteEmpresa />} />
        </Routes>
      </Suspense>
    </Styled.Content>
  </div>
);
ReactDOM.render(<React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <CompatRouter>
        <App />
      </CompatRouter>
    </BrowserRouter>
  </Provider>
</React.StrictMode>, document.getElementById("app"));
