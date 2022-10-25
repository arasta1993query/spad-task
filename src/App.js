import './App.css';
import Search from "./components/Search";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="App w-full py-4 px-5">
        <Search />
        <Users/>
        <AddUser />
    </div>
  );
}

export default App;
