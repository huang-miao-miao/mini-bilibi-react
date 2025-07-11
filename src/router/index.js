import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
const Layout = lazy(() => import("@/views/layout/index.jsx"));
const Login = lazy(() => import("@/views/login/index.jsx"));
const Personal = lazy(() => import("@/views/personal/index.jsx"));
const NotFound = lazy(() => import("@/views/notFound.jsx"));

const router = [
  {
    path: "/",
    element: <Navigate to="/layout" replace />,
  },
  {
    // 首页
    path: "/layout",
    element: <Layout />,
  },
  {
    path: "/login",
    // 登录页
    element: <Login />,
  },
  {
    // 个人中心
    path: "personal",
    element: <Personal />,
  },
  {
    // 404页面
    path: "*",
    element: <NotFound />,
  },
];

export default router;
