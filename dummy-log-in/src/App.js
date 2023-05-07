import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

function App() {
  // ================== MOVED TO auth-context.js ================== //

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   // Check if the user is already logged in
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  //   // Effect runs only once if the dependency array is empty
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways

  //   // Store the user data in the local storage on login
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   // Remove the user data from the local storage on logout
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  // ================== MOVED TO auth-context.js ================== //
  const ctx = useContext(AuthContext);

  return (
    // ================== MOVED TO index.js ================== //
    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: isLoggedIn,
    //     onLogout: logoutHandler,
    //   }}
    // >
    // ================== MOVED TO index.js ================== //
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
    // ================== MOVED TO index.js ================== //
    // </AuthContext.Provider>
    // ================== MOVED TO index.js ================== //
  );
}

export default App;
