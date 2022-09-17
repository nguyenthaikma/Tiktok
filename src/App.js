import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { publicRoute } from "./routes";
import { DefaultLayout } from './Layouts'
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoute.map((route, index) => {
          const Layout =
            (route.layout && route.layout)
            ||
            (route.layout === null && React.Fragment)
            ||
            DefaultLayout;

          const Element = route.element;
          return <Route key={index} path={route.path}
            element={
              <Layout>
                <Element />
              </Layout>
            }
          />
        })}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
