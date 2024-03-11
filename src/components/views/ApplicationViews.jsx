import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../welcome/Welcome.jsx";
import { NavBar } from "../navbar/NavBar.jsx";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const localMtgUser = localStorage.getItem("mtg_user");
    const mtgUserObj = JSON.parse(localMtgUser);
    setCurrentUser(mtgUserObj);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
      </Route>
    </Routes>
  );
};
