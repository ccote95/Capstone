import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../welcome/Welcome.jsx";
import { NavBar } from "../navbar/NavBar.jsx";
import { AllPosts } from "../posts/AllPosts.jsx";
import { PostDetails } from "../posts/PostDetails.jsx";
import { NewPostForm } from "../forms/NewPostForm.jsx";
import { MyPosts } from "../posts/MyPosts.jsx";
import { Profile } from "../profile/Profile.jsx";
import { EditProfile } from "../forms/EditProfileForm.jsx";
import { MyComments } from "../comments/MyComments.jsx";

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

        <Route path="allposts">
          <Route index element={<AllPosts />} />
          <Route
            path=":postId"
            element={<PostDetails currentUser={currentUser} />}
          ></Route>
          <Route
            path="create"
            element={<NewPostForm currentUser={currentUser} />}
          />
        </Route>
        <Route path="myposts">
          <Route index element={<MyPosts currentUser={currentUser} />} />
          <Route
            path=":postId"
            element={<NewPostForm currentUser={currentUser} />}
          />
        </Route>
        <Route path="profile">
          <Route index element={<Profile currentUser={currentUser} />} />
          <Route
            path=":userId"
            element={<EditProfile currentUser={currentUser} />}
          />
        </Route>
        <Route path="mycomments">
          <Route index element={<MyComments currentUser={currentUser} />} />
        </Route>
      </Route>
    </Routes>
  );
};
