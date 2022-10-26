import './App.css';
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import CheckUser from "./components/CheckUser";
import { Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App w-full py-4 px-5">
        <Routes>
            <Route path="/" element={ <Users/>} />
            <Route path="/add" element={ <AddUser />} />
            <Route path="/edit/:id" element={ <EditUser />} />
            <Route path="/check/:id" element={<CheckUser />} />
        </Routes>



    </div>
  );
}

export default App;
