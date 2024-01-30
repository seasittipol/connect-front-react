import { RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import Header from '../layout/Header'
import useAuth from '../hooks/useAuth'

const routerGuest = createBrowserRouter([
    {
        path: '/',
        element:
            <>
                <Header />
                <Outlet />
            </>,
        // errorElement: <p className="text-4xl text-primary">Page Not Found</p>,
        errorElement: <Navigate to='/' />,
        children: [
            { index: true, element: <LoginForm /> },
            // { path: '/login', element: <LoginForm /> },
            { path: '/register', element: <RegisterForm /> },
        ]
    }
])

const routerTeacher = createBrowserRouter([
    {
        path: '/',
        element:
            <>
                <Header />
                <Outlet />
            </>,
        errorElement: <Navigate to='/' />,
        children: [
            { index: true, element: <p>TeacherHome</p> },
            { path: '/new', element: <p>NewHome</p> },
        ]
    }
])

const routerStudent = createBrowserRouter([
    {
        path: '/',
        element:
            <>
                <Header />
                <Outlet />
            </>,
        errorElement: <Navigate to='/' />,
        children: [
            { index: true, element: <p>StudentHome</p> },
            { path: '/profile', element: <p>Show Profile</p> },
        ]
    }
])

export default function AppRouter() {
    const { user } = useAuth()
    const finalRouter = !user?.role
        ? routerGuest
        : user.role === 'teacher'
            ? routerTeacher
            : routerStudent
    return (
        <RouterProvider router={finalRouter} />
    )
}