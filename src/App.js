import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import StudentDetails from "./components/StudentDetails";
import ProgramList from "./components/ProgramList";
import AddProgram from "./components/AddProgram";
import ProgramDetails from "./components/ProgramDetails";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/students" element={ <StudentList /> } />
          <Route path="/students/new" element={ <AddStudent /> } />
          <Route path="/students/:id" element={ <StudentDetails /> } />
          <Route path="/students/:id/edit" element={ <EditStudent /> } />
          <Route path="/programs" element={ <ProgramList /> } />
          <Route path="/programs/new" element={ <AddProgram /> } />
          <Route path="/programs/:id" element={ <ProgramDetails /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
