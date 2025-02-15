const socialLink = [
  {
    classIcon: "fa-twitter-square",
    href: "https://twitter.com/coder_heba",
  },
  {
    classIcon: "fa-facebook-square",
    href: "https://facebook.com/#",
  },
  {
    classIcon: "fa-youtube-square",
    href: "https://youtube.com/#",
  },
];

const Buttons = [
  {
    link: "register",
    title: "Register",
  },
  {
    link: "login",
    title: "Login",
  },
];

const DropDownItemsDashboard = [
  {
    link: "dashboard",
    title: "Dashboard",
    classIcon: "fa-user",
  },
  {
    link: "posts",
    title: "Posts",
    classIcon: "bi-grid-fill",
  },
  {
    link: "add-post",
    title: "Add Post",
    classIcon: "fa-plus-circle",
  },
  {
    link: "comments",
    title: "Comments",
    classIcon: "bi-chat-left-quote-fill",
  },
  {
    link: "notifications",
    title: "Notifications",
    classIcon: "fa-bell",
  },
  {
    link: "profile",
    title: "Profile",
    classIcon: "fa-user-gear",
  },
];

const DropDownItemPages = [
  {
    link: "about",
    title: "About",
    classIcon: "bi-person-lines-fill",
  },
  {
    link: "contact",
    title: "Contact",
    classIcon: "bi-telephone-fill",
  },
];

const InputLogin = [
  {
    title: "Username",
    type: "text",
    id: "username",
    name: "username",
    placeholder: "John Doe",
    htmlFor: "username",
    error: "Please enter valid username.",
  },
  {
    title: "Password",
    type: "password",
    id: "password",
    name: "password",
    placeholder: "**************",
    htmlFor: "password",
    error: "Please enter valid password.",
  },
];

const InputRegister = [
  {
    title: "Username",
    type: "text",
    id: "username",
    name: "username",
    placeholder: "John Doe",
    htmlFor: "username",
    error: "Please enter valid username.",
  },
  {
    title: "Email",
    type: "email",
    id: "email",
    name: "email",
    placeholder: "john.doe@gmail.com",
    htmlFor: "email",
    error: "Please enter valid email.",
  },
  {
    title: "Password",
    type: "password",
    id: "password",
    name: "password",
    placeholder: "**************",
    htmlFor: "password",
    error: "Please enter valid password.",
  },
  {
    title: "Confirm Password",
    type: "password",
    id: "confirmPassword",
    name: "confirmPassword",
    placeholder: "**************",
    htmlFor: "confirmPassword",
    error: "Please enter valid password.",
  },
];

const InputCreatePassword = [
  {
    title: "Password",
    type: "password",
    id: "password",
    name: "password",
    placeholder: "**************",
    htmlFor: "password",
    error: "Please enter valid password.",
  },
  {
    title: "Confirm Password",
    type: "password",
    id: "confirmPassword",
    name: "confirmPassword",
    placeholder: "**************",
    htmlFor: "confirmPassword",
    error: "Please enter valid password.",
  },
];

const tags = [
  "agency",
  "business",
  "company",
  "corporate",
  "theme",
  "bootstrap",
  "marketing",
];

const statistics = [
  {
    classIcon: "bi-people-fill",
    TotalNum: "654",
    title: "Total Views",
    color:"success"
  },
  {
    classIcon: "bi-file-earmark-text-fill",
    TotalNum: "25",
    title: "Posts",
    color:"primary"
  },
  {
    classIcon: "bi-suit-heart-fill",
    TotalNum: "210",
    title: "Likes",
    color:"danger"
  },
  {
    classIcon: "bi-tag",
    TotalNum: "84K",
    title: "Bookmarks",
    color:"info"
  },
];
export {
  statistics,
  tags,
  InputCreatePassword,
  InputRegister,
  InputLogin,
  DropDownItemPages,
  DropDownItemsDashboard,
  socialLink,
  Buttons,
};
