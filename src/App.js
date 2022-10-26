import './App.css';
import Search from "./components/Search";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import CheckUser from "./components/CheckUser";

function App() {
  return (
    <div className="App w-full py-4 px-5">
        <Search />
        <Users/>
        <AddUser />
        <CheckUser />
    </div>
  );
}

export default App;
