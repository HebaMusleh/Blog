import { Route, Routes } from "react-router-dom";
import MainWrapper from "../layouts/MainWrapper";
import { Core, Detail, Category, Search } from "../views/core";
import {
  Register,
  Login,
  Logout,
  ForgotPassword,
  CreatePassword,
} from "../views/auth";
import {
  Dashboard,
  Posts,
  AddPost,
  Comments,
  Notifications,
  Profile,
  EditPost
} from "../views/dashboard";
import {About,Contact} from "../views/pages";

function Router() {
  return (
    <MainWrapper>
      <Routes>
        <Route path="/" element={<Core />} />
        <Route path="/:slug/" element={<Detail />} />
        <Route path="/category/:slug/" element={<Category />} />
        <Route path="/search/" element={<Search />} />

        {/* Authentication */}
        <Route path="/register/" element={<Register />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/logout/" element={<Logout />} />
        <Route path="/forgot-password/" element={<ForgotPassword />} />
        <Route path="/create-password/" element={<CreatePassword />} />

        {/* Dashboard */}
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/posts/" element={<Posts />} />
        <Route path="/add-post/" element={<AddPost />} />
        <Route path="/edit-post/:id/" element={<EditPost />} />
        <Route path="/comments/" element={<Comments />} />
        <Route path="/notifications/" element={<Notifications />} />
        <Route path="/profile/" element={<Profile />} />

        {/* Pages */}
        <Route path="/about/" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>
    </MainWrapper>
  );
}

export default Router;
