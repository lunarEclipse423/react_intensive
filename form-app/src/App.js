import { React, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { UserInfoContext } from "./context/context";
import "./styles/App.css";

function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      <div className="App">
        <Router>
          <AppRouter />
        </Router>
      </div>
    </UserInfoContext.Provider>
  );
}

export default App;
