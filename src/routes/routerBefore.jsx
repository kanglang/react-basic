//路由表配置：src/routes/routerBefore.jsx

import { Navigate, useLocation, useRoutes,useNavigate, RelativeRoutingType, To } from 'react-router-dom';

import routes from './index';
import React from 'react';
// 拦截组件
const RouterBeforeEach = props => {
    const navigate = useNavigate();
    if (props?.route?.meta?.title) {
        document.title = props.route.meta.title;
    }
    const isLogin = !!localStorage.getItem('token');
    if (props?.route?.meta?.auth) {
        if (!isLogin) {
            navigate('/login');
        }
    }
    const location = useLocation();
    const routerKey = location.pathname;
    if (isLogin && ['/login'].includes(routerKey)) {
        navigate('/');
    }
    return <div>{props.children}</div>;
};

// 渲染路由
const renderRoutes = (routes) => {
    return routes.map(item => {
        const route = { meta: item.meta, path: item.path };

        route.element = <RouterBeforeEach route={item}>{item.element}</RouterBeforeEach>;

        if (item.children) {
            route.children = renderRoutes(item.children);
        }
        return route;
    });
};

export default function Router() {
    return useRoutes(renderRoutes(routes));
}
