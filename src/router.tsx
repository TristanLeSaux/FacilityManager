import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./Layouts/MaintLayout";
import ErrorPage from "@/Layouts/ErrorPage";
import PageNotFound from "@/Layouts/NotFound";
import Resources from "@/components/pages/Resources";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="/" replace />
            },
            {
                path: "resources",
                element: <Resources/>
            },
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
]);