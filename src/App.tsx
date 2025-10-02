import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import SharedLayout from "./components/layouts/SharedLayout";
import Login from "./components/layouts/Login";
import Signup from "./components/layouts/Signup";
import Dashboard from "./components/Dashboard";
import AllNotes from "./components/AllNotes";
import AllBookmarks from "./components/AllBookmarks";
import AddBookmarks from "./components/AddBookmarks";
import AddNote from "./components/AddNote";
import ResetPassword from "./components/ResetPassword";
import Profile from "./components/Profile";
import ProtectedRoute from "./protected/ProtectedRoute";
import Detail from "./components/Detail";


// ✅ Define routes in v7 style
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "resetpassword", element: <ResetPassword /> },

        // 🔒 Protected routes
        {
          path: "addnote",
          element: (
            <ProtectedRoute>
              <AddNote />
            </ProtectedRoute>
          ),
        },
        {
          path: "addbookmark",
          element: (
            <ProtectedRoute>
              <AddBookmarks />
            </ProtectedRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "/detail/:id",
          element: (
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          ),
        },
        {
          path: "notes",
          element: (
            <ProtectedRoute>
              <AllNotes />
            </ProtectedRoute>
          ),
        },
        {
          path: "bookmarks",
          element: (
            <ProtectedRoute>
              <AllBookmarks />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true, // 👈 opt-in early to v7 behavior
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
