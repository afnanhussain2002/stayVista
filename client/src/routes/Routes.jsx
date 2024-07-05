import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/roomDetails/RoomDetails";
import PrivateRoutes from "./PrivateRoutes";
import { getSingleRoom } from "../api/rooms";
import DashboardLayouts from "../layouts/DashboardLayouts";
import AddRoom from "../components/Dashboard/Host/AddRoom";
import MyListing from "../components/Dashboard/Host/MyListing";
import HostRoutes from "./HostRoutes";
import Profile from "../components/Dashboard/Profile/Profile";
import MyBookings from "../components/Dashboard/Guest/MyBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoutes>
            <RoomDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => getSingleRoom(params.id),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayouts />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "add-room",
        element: (
          <PrivateRoutes>
            <HostRoutes>
              <AddRoom />
            </HostRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-listing",
        element: (
          <PrivateRoutes>
            <HostRoutes>
              <MyListing />
            </HostRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path:'profile',
        element:<PrivateRoutes> <Profile/> </PrivateRoutes> 

      },
      {
        path:'my-bookings',
        element:<PrivateRoutes> <MyBookings/> </PrivateRoutes> 

      },
    ],
  },
]);
