import { RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import Header from '../layout/Header'

const routerGuest = createBrowserRouter([
    {
        path: '/',
        element:
            <>
                <Header />
                <Outlet />
            </>,
        // errorElement: <p className="text-4xl text-primary">Page Not Found</p>,
        errorElement: <Navigate to='/login' />,
        children: [
            { index: true, element: <LoginForm /> },
            { path: '/login', element: <LoginForm /> },
            { path: '/register', element: <RegisterForm /> },
        ]
    }
])

export default function AppRouter() {
    return (
        <RouterProvider router={routerGuest} />
    )
}