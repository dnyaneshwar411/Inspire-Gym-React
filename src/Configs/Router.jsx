import { Navigate, createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/Landing/LandingPage";
import Login from "../Pages/Account/Login";
import SignUp from "../Pages/Account/Signup";
import BlogsListing from "../Pages/Blogs/Index";
import ContactPage from "../Pages/Contact/Contact";
import SubscriptionPage from "../Pages/Subscription/Subcription";
import Account from "../Pages/Account/Account";

const RouterLinks = createBrowserRouter([

    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/account',
        element: <Account />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: '/blogs',
        element: <BlogsListing />
    },
    {
        path: '/contact',
        element: <ContactPage />
    },
    {
        path: '/subscription',
        element: <SubscriptionPage />
    }
])

export default RouterLinks;