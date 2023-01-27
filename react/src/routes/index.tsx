import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createHashRouter,
  } from "react-router-dom";
import { Dashboard } from "../domain/dashboard/DashboardView";

export const routes =   createHashRouter([
        {
            path: "/",
            element: <Dashboard />
        }
    ])