import Login from './components/Login';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
};
// import React from "react";
// import { Button } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
// import Header from "./components/Header";
// import Login from './components/Login';

// const App = (props) => {
//   console.log(props);

//   const handleRedirect = (path) => {
//     props.history.push(path);
//   };
//   return (

//     <div className="container">
//       <div className="login-buttons">
//         <Button
//           variant="primary"
//           className="signin-btn"
//           onClick={() => handleRedirect("/signin")}
//         >
//           Sign In
//         </Button>
//         <Button
//           variant="info"
//           className="signup-btn"
//           onClick={() => handleRedirect("/signup")}
//         >
//           Sign Up
//         </Button>
//       </div>
//     </div>
//   );
// };

export default App;
