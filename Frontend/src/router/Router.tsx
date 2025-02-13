import MainWrapper from "../layouts/MainWrapper";
import { Route, Routes } from "react-router-dom";
import Index from "../views/core/Index";
import Detail from "../views/core/Detail";
import Category from "../views/core/Category";
import Search from './../views/partials/Header/components/Search';
import Register from "../views/auth/Register";
import Login from "../views/auth/Login";
import ForgotPassword from "../views/auth/ForgotPassword";
import CreatePassword from "../views/auth/CreatePassword";
import Logout from "../views/auth/Logout";
import Dashboard from "../views/dashboard/Dashboard";
import Posts from "../views/dashboard/Posts";
import AddPost from "../views/dashboard/AddPost";
import Comments from "../views/dashboard/Comments";
import Notifications from "../views/dashboard/Notifications";
import Profile from "../views/dashboard/Profile";
import About from "../views/pages/About";
import Contact from "../views/pages/Contact";

function Router() {
  return (
    <MainWrapper>
      <Routes>
        <Route path="/" element={<Index />} />
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
        {/* <Route path="/edit-post/:id/" element={<EditPost />} /> */}
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
