// import React, { useState } from "react";
// import {Outlet , Link, BrowserRouter, Routes, Route} from 'react-router-dom'
// import css from './App.css';
// import News1 from "./components/News1"
// import N2 from "./components/N2"
// import N3 from "./components/N3"


// const Navbar = () => {
//   const [isOpen, setOpen] = useState(false);

//   const handleToggle = () => {
//     setOpen(!isOpen);
//   };

//   return (
//     <>
    
//     <BrowserRouter>
//     <header className="navbar">
//       <a  className="navbar__brand">News Website</a>
//       <button className="navbar__toggle" onClick={handleToggle}>
//         <span className="navbar__toggle-line"></span>
//         <span className="navbar__toggle-line"></span>
//         <span className="navbar__toggle-line"></span>
//       </button>
//       <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
//         <a  className="navbar__link">Home</a>
//         <a  className="navbar__link">About</a>
//         <a  className="navbar__link">Contact</a>
//       </nav>
//     </header>
//     <News/>
//     <Routes>
//       <Route path='/' element = {<News1/>}/>
//       <Route path='/2' element = {<N2/>}/>
//       <Route path='/3' element = {<N3/>}/>
//       <Route path='/4' element = {<News1/>}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// };
// export default Navbar;

// const News = () => {
//   return (
//     <>
//     <div className="news-container">
//       <div className="news-column">
//         <Link to="/" >
//         <h2 className="news-header">News 1</h2>
//         <p className="news-content">This is News1.</p>
//         </Link>
//       </div>
//       <div className="news-column">
//         <Link to="/2" >
//         <h2 className="news-header">News 2</h2>
//         <p className="news-content">This is News2.</p>
//       </Link>
//       </div>
//       <div className="news-column">
//         <Link to="/3" >
//         <h2 className="news-header">News 3</h2>
//         <p className="news-content">This is News3.</p>
//       </Link>
//       </div>
//       <div className="news-column">
//         <Link to="/4" >
//         <h2 className="news-header">News 4</h2>
//         <p className="news-content">This is News4.</p>
//       </Link>
//       </div>
//       <div className="news-feature">
//         <Link to="/" >
//         <h2 className="news-header">Featured News</h2>
//         <p className="news-content">This is Featured news.</p>
//       </Link>
//       </div>
//     </div>
//       <Outlet/>
//     </>
//   );
// };

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [expenses, setExpenses] = useState([
//     { id: 1, title: 'Groceries', amount: 100.0 },
//     { id: 2, title: 'Gas', amount: 50.0 },
//     { id: 3, title: 'Dinner', amount: 75.0 }
//   ]);

//   return (
//     <div className="App">
//       <h1>Expense List</h1>
//       <ul>
//         {expenses.map((expense) => (
//           <li key={expense.id}>
//             <div className="item-container">
//               <div className="title">{expense.title}</div>
//               <div className="amount">Rs.{expense.amount}</div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// 

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [expenses, setExpenses] = useState([
//     { id: 1, title: 'Groceries', amount: 100.0, date: new Date(2022, 1, 15, 10, 30) },
//     { id: 2, title: 'Gas', amount: 50.0, date: new Date(2022, 1, 16, 12, 0) },
//     { id: 3, title: 'Dinner', amount: 75.0, date: new Date(2022, 1, 17, 19, 30) }
//   ]);

//   const [expandedExpense, setExpandedExpense] = useState(null);

//   const handleExpenseClick = (expense) => {
//     if (expense.id === expandedExpense) {
//       setExpandedExpense(null);
//     } else {
//       setExpandedExpense(expense.id);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Expense List</h1>
//       <ul>
//         {expenses.map((expense) => (
//           <li key={expense.id}>
//             <div className="item-container" onClick={() => handleExpenseClick(expense)}>
//               <div className="title">{expense.title}</div>
//               <div className="amount">${expense.amount}</div>
//             </div>
//             {expense.id === expandedExpense && (
//               <div className="details">
//                 <div className="date">{expense.date.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short', hour12: true })}</div>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [expenses] = useState([
    { id: 1, title: 'Shivam ', amount: 10000.0, date: new Date(2022, 1, 15, 10, 30) },
    { id: 2, title: 'Rutvik', amount: 5000.0, date: new Date(2022, 1, 16, 12, 0) },
    { id: 3, title: 'Ashutosh', amount: 7555.0, date: new Date(2022, 1, 17, 19, 30) }
  ]);

  const [expandedExpense, setExpandedExpense] = useState(null);

  const handleExpenseClick = (expense) => {
    if (expense.id === expandedExpense) {
      setExpandedExpense(null);
    } else {
      setExpandedExpense(expense.id);
    }
  };

  return (
      
    <div className="App">
   <Navbar/>
      <h1>Expense List</h1>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <div className="item-container" onClick={() => handleExpenseClick(expense)}>
              <div className="title">{expense.title}</div>
              <div className="amount">Rs{expense.amount}</div>
            </div>
            {expense.id === expandedExpense && (
              <div className="details">
                <div className="date">{expense.date.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short', hour12: true })}</div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>

  );
}

export default App;





