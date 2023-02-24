import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Home from "./views/Home";
import LoginPage from "./views/LoginPage";
import { AuthProvider, RequireAuth } from "react-auth-kit";

import "./App.scss";

const App = () => (
  <AuthProvider authType={"localstorage"} authName={"_auth"}>
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth loginPath="login">
              <Home />
            </RequireAuth>
          }
        />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
