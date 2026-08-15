import React from "react"; 
import Student from ".Componet/Student"; 
function App() { 
 return ( 
 <div> 
 <h1>Student Details</h1> 
 <Student 
 name="Lisha soni" 
 rollNo="101" 
 course="BCA" 
 marks="85%" 
 /> 
 <Student 
 name="Drasti patel" 
 rollNo="102" 
 course="BCA" 
 marks="92%" 
 /> 
 <Student 
 name=" tanish malvi"
 rollNo="103" 
 course="BCA" marks="78%" 
 /> 
 </div> 
 ); 
} 
export default App;