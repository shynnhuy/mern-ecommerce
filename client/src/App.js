import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
// import { useTransition, animated } from "react-spring";
// core components
import AdminRoute from "layouts/Admin";
import UserRoute from "layouts/User";
import AuthRoute from "layouts/Auth";
import NotFound from "layouts/NotFound";

import Dashboard from "views/Admin/Dashboard";
import { ListUsers } from "views/Admin/ListUsers";
import { Landing, Profile, Home } from "views/User";
import { Login, Register } from "views/Auth";
import ListCategory from "views/Admin/ListCategory";
import ListShopRequest from "views/Admin/ListShopRequest";

const App = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <UserRoute path="/" exact component={Landing} />
      <UserRoute path="/home" component={Home} />
      <UserRoute path="/profile" auth component={Profile} />
      <AuthRoute path="/login" component={Login} />
      <AuthRoute path="/register" component={Register} />
      <Redirect path="/admin" exact to="/admin/dashboard" />
      <AdminRoute path="/admin/dashboard" component={Dashboard} />
      <AdminRoute path="/admin/users" component={ListUsers} />
      <AdminRoute path="/admin/categories" component={ListCategory} />
      <AdminRoute path="/admin/requests" component={ListShopRequest} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;

// const App = () => {
//   const location = useLocation();
//   const transitions = useTransition(location, (location) => location.pathname, {
//     from: { opacity: 0, transform: "translate3d(100%,0,0)" },
//     enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
//     leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
//   });
//   return transitions.map(({ item: location, props, key }) => (
//     <animated.div key={key} style={props}>
//       <Switch location={location}>
//         <UserRoute path="/" exact component={Landing} />
//         <UserRoute path="/home" component={Home} />
//         <UserRoute path="/profile" auth component={Profile} />
//         <AuthRoute path="/login" component={Login} />
//         <AuthRoute path="/register" component={Register} />
//         <Redirect path="/admin" exact to="/admin/dashboard" />
//         <AdminRoute path="/admin/dashboard" component={Dashboard} />
//         <AdminRoute path="/admin/users" component={ListUsers} />
//         <AdminRoute path="/admin/categories" component={ListCategory} />
//         <AdminRoute path="/admin/requests" component={ListShopRequest} />
//         <Route path="*" component={NotFound} />
//       </Switch>
//     </animated.div>
//   ));
// };
