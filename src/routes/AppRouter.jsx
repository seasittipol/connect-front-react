import { RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'

const routerGuest = createBrowserRouter([
    {
        path: '/',
        element: <Outlet />,
        // errorElement: <p className="text-4xl text-primary">Page Not Found</p>,
        errorElement: <Navigate to='/login' />,
        children: [
            { path: '', element: <p className='text-5xl'>Home</p> },
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