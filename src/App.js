import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import CompletedTask from './Pages/CompletedTask/CompletedTask';
import Calender from './Pages/Calender/Calender';
import Todo from './Pages/Todo/Todo';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/completedTasks" element={<CompletedTask></CompletedTask>}></Route>
        <Route path="/todo" element={<Todo></Todo>}></Route>
        <Route path="/calender" element={<Calender></Calender>}></Route>

      </Routes>
    </div>
  );
}

export default App;
