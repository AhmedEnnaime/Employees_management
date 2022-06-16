import Home from "./pages/home/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Newuser from "./pages/users/Newuser";
import Listusers from "./pages/users/List";
import ListContrat from "./pages/contrats/ListContrat";
import NewContrat from "./pages/contrats/NewContrat";
import SingleContrat from "./pages/contrats/SingleContrat";
import ListPay from "./pages/payfile/ListPay";
import SinglePay from "./pages/payfile/SinglePay";
import NewPay from "./pages/payfile/NewPay";
import ListRules from "./pages/payrules/ListRules";
import NewRule from "./pages/payrules/NewRule";
import Suser from "./pages/users/Suser";
import FeditUser from "./pages/users/FeditUser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<Listusers />} />
              <Route path="new" element={<Newuser />} />
              <Route path=":id" element={<Suser />} />
              <Route path="update/:id" element={<FeditUser />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
            <Route path="contrats">
              <Route index element={<ListContrat />} />
              <Route path="new" element={<NewContrat />} />
              <Route path=":contratID" element={<SingleContrat />} />
            </Route>
            <Route path="paiments">
              <Route index element={<ListPay />} />
              <Route path="new" element={<NewPay />} />
              <Route path=":contratID" element={<SinglePay />} />
            </Route>
            <Route path="rules">
              <Route index element={<ListRules />} />
              <Route path="new" element={<NewRule />} />
              <Route path=":contratID" element={<SinglePay />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
