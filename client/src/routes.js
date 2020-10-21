// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Category from "@material-ui/icons/CategorySharp";
import People from "@material-ui/icons/People";
import Request from "@material-ui/icons/ReceiptTwoTone";
import DashboardPage from "views/Admin/Dashboard";
import ListCategory from "views/Admin/ListCategory";
import ListShopRequest from "views/Admin/ListShopRequest";
import { ListUsers } from "views/Admin/ListUsers";

const dashboardRoutes = [
  //  ADMIN LAYOUT
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: People,
    component: ListUsers,
    layout: "/admin",
  },
  {
    path: "/categories",
    name: "Categories",
    icon: Category,
    component: ListCategory,
    layout: "/admin",
  },
  {
    path: "/requests",
    name: "Requests",
    icon: Request,
    component: ListShopRequest,
    layout: "/admin",
  },
  // {
  //   path: "/user/:id",
  //   name: "User",
  //   icon: Person,
  //   component: UserProfile,
  //   hidden: true,
  //   layout: "/admin",
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
