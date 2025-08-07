import React, { lazy, Suspense } from "react";
import { PATH } from "../hooks/usePath";
import { Home, Notification, Messages, Bookmarks, Lists, Explore, Profile, More } from "../pages/Dashboard";
import { Tweets, TweetsReplies, Media, Likes } from "../pages/Dashboard/ProfilePages";
import PageLoading from "../components/PageLoading";
const Login = lazy(() => import("../pages/Login").then(mod => ({ default: mod.Login })));
const Register = lazy(() => import("../pages/Login").then(mod => ({ default: mod.Register })));

export const dashboardRouteList = [
  { id: 1, path: PATH.home, element: <Suspense fallback={<PageLoading />}><Home/></Suspense>, children: [] },
  { id: 2, path: PATH.explore, element: <Explore />, children: [] },
  { id: 3, path: PATH.notification, element: <Notification />, children: [] },
  { id: 4, path: PATH.messages, element: <Messages />, children: [] },
  { id: 5, path: PATH.bookmarks, element: <Bookmarks />, children: [] },
  { id: 6, path: PATH.lists, element: <Lists />, children: [] },
  {
    id: 7,
    path: PATH.profile,
    element: <Profile />,
    children: [
      { id: 9, path: PATH.profileTweets, element: <Tweets />, children: [] },
      { id: 10, path: PATH.profileTweetsReplies, element: <TweetsReplies />, children: [] },
      { id: 11, path: PATH.profileMedia, element: <Media />, children: [] },
      { id: 12, path: PATH.profileLikes, element: <Likes />, children: [] },
    ],
  },
  { id: 8, path: PATH.more, element: <More />, children: [] },
];

export const loginRoutes = [
  {
    id: 1,
    path: PATH.home,
    element: (
      <Suspense fallback={<PageLoading />}>
        <Login />
      </Suspense>
    ),
    children: [],
  },
  {
    id: 2,
    path: PATH.register,
    element: (
      <Suspense fallback={<PageLoading />}>
        <Register />
      </Suspense>
    ),
    children: [],
  },
];
