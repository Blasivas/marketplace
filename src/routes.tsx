import { createBrowserRouter, Navigate } from 'react-router'
import { Dashboard } from './pages/app/Dashboard'
import { Produtos } from './pages/app/Produtos'
import { Login } from './pages/auth/Login'
import { AppLayout } from './pages/_layouts/App'
import { AuthLayout } from './pages/_layouts/Auth'
import { Cadastro } from './pages/auth/Cadastro'
import { NovoProduto } from './pages/app/NovoProduto'
import { NotFound } from './pages/NotFound'
import { EditarProduto } from './pages/app/EditarProduto'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to="/sign-in" replace />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <Login />,
      },
    ],
  },
  {
    path: '/sign-up',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-up',
        element: <Cadastro />,
      },
    ],
  },

  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        path: '/app/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/app/produtos',
        element: <Produtos />,
      },
      {
        path: '/app/novo-produto',
        element: <NovoProduto />,
      },
      {
        path: '/app/editar-produto',
        element: <EditarProduto />,
      },
    ],
  },
])
