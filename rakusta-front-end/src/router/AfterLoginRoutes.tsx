import { TimeLine } from "../components/pages/TimeLine";
import { UserEdit } from "../components/pages/UserEdit";
import { UserImageChange } from "../components/pages/UserImageChange";
import { UserPasswordChange } from "../components/pages/UserPasswordChange";
import { UserShowPage } from "../components/pages/UserShow";

export const afterLoginRoutes = [
  {
    path: '/',
    exact: true,
    children: <TimeLine />
  },
  {
    path: '/user/:id',
    exact: false,
    children: <UserShowPage />
  },
  {
    path: '/account/edit',
    exact: false,
    children: <UserEdit />
  },
  {
    path: '/account/image',
    exact: false,
    children: <UserImageChange />
  },
  {
    path: '/account/password',
    exact: false,
    children: <UserPasswordChange />
  },
]