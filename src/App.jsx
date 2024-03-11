import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/auth/Login.jsx";
import { Register } from "./components/auth/Register.jsx";
import { ApplicationViews } from "./components/views/ApplicationViews.jsx";

/** Folders i will need :
 * posts
 * users
 * comments
 * services
 * welcome
 * navbar
 * profile
 * login
 * auth
 *
 *  Modules that i will need:
 * welcomeLayout
 * welcomeView
 * postLayout
 * allPosts
 * postDetails
 * commentSection
 * a filter bar
 * a nav bar
 * something for drop downs for decks
 * something for drop downs for formats
 * an edit post view
 * an edit profile view
 *
 * Service that i will need :
 * a post service
 * a user service
 * a comment service
 * a deck service?
 * a format service?
 */
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<ApplicationViews />} />
    </Routes>
  );
}

export default App;
