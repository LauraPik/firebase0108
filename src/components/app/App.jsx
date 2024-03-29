import Header from "../header/Header";
import Works from "../works/Works";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddWork from "../addWork/AddWork";
import WorksTable from "../worksTable/WorksTable";
import Work from "../work/Work";
import Register from "../register/Register";
import Login from "../login/Login";

function App() {
  return (
    <div className="App">
     
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={
          <>
          <Login/>
          
          </>}/>
          <Route path="/works" element={
          <>
          <Works/>
          
          </>}/>
          

          <Route path ="/AddWork" element={<AddWork/>}/>

          <Route path="/update-work/:id" element={<AddWork />}/>
          
          <Route path="/delete-work/:id" element={<Work />}/>
          <Route path ="/Register" element={<Register/>}/>
        </Routes>

        
      </Router>
     
      
      
      
    
    </div>
  );
}

export default App;
