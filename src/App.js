import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./componenets/Main";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/*" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
