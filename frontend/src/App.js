// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Nav from './Compponent/Nav';
// import Footer from './Compponent/Footer';
// import SignUp from './Compponent/SinUp';
// import PrivateComponent from './Compponent/PrivateComponent';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter> 
//         <Nav />
//         <Routes>
//           <Route element={PrivateComponent}> 
//            <Route path='/' element={<h1>PRODUCT LISTIN COMPONENT</h1>} />
//             <Route path="/ADD" element={<h1> ADD  PRODUCT COMPONENT</h1>} />
//             <Route path="/UPDATE" element={<h1> UPDATE PRODUCT COMPONENT</h1>} />
//             <Route path="/LOGOUT" element={<h1> LOOUT</h1>} />
//             <Route path="/LOGPROFILR" element={<h1>LOGPROFILR</h1>} />  
//              </Route>
//              <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       </BrowserRouter>
      
//       <Footer />
//     </div>
//   );
// }

// export default App;






/////////////////////video12

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Compponent/Nav';
import Footer from './Compponent/Footer';
import SignUp from './Compponent/SinUp';
import PrivateComponent from './Compponent/PrivateComponent';
import Login from './Compponent/Login';
import AddProduct from './Compponent/AddProduct';
import ProductList from './Compponent/ProductList';
import UpdateProduct from './Compponent/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Nav />
        <Routes>
         
         <Route element={<PrivateComponent/>} >
           <Route path='/' element={<ProductList/>} />
            <Route path="/add" element={ <AddProduct/>} />
            {/* <Route path="/update/:id" element={<UpdateProduct/>} /> */}
            <Route path="/update/:id" element={<UpdateProduct/>} />
            <Route path="/logout" element={<h1> logout</h1>} />
            <Route path="/profile" element={<h1>PrivateComponent</h1>} /> 
            </Route>
            <Route path='/SignUp'  element={<SignUp/>}/>
            <Route  path='/Login' element={<Login/>} />
            </Routes>
      
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;






























// //////////////////VIDEO 6/////////
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Nav from './Compponent/Nav';
// import Footer from './Compponent/Footer';
// import SignUp from './Compponent/SinUp';
// import PrivateComponent from './Compponent/PrivateComponent';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter> 
//         <Nav />
//         <Routes>
         
//            <Route path='/' element={<h1>PRODUCT LISTIN COMPONENT</h1>} />
//             <Route path="/add" element={<h1> ADD  PRODUCT COMPONENT</h1>} />
//             <Route path="/update" element={<h1> UPDATE PRODUCT COMPONENT</h1>} />
//             <Route path="/logout" element={<h1> logout</h1>} />
//             <Route path="/profile" element={<h1>PrivateComponent</h1>} /> 
//             <Route path='/SignUp'  element={<SignUp/>}/>
//             </Routes>
      
//       </BrowserRouter>
      
//       <Footer />
//     </div>
//   );
// }

// export default App;


// ///////////////VIDEO 4//////////
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Nav from './Compponent/Nav';
// import Footer from './Compponent/Footer';
// import SignUp from './Compponent/SinUp';
// import PrivateComponent from './Compponent/PrivateComponent';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter> 
//         <Nav />
//         <Routes>
         
//            <Route path='/' element={<h1>PRODUCT LISTIN COMPONENT</h1>} />
//             <Route path="/add" element={<h1> ADD  PRODUCT COMPONENT</h1>} />
//             <Route path="/update" element={<h1> UPDATE PRODUCT COMPONENT</h1>} />
//             <Route path="/logout" element={<h1> logout</h1>} />
//             <Route path="/profile" element={<h1>PrivateComponent</h1>} />  
//             </Routes>
      
//       </BrowserRouter>
      
//       <Footer />
//     </div>
//   );
// }

// export default App;


