import { SuccessPage } from "../components/pages/SuccessPage";
import { TimeLine } from "../components/pages/TimeLine";
import { UserEdit } from "../components/pages/user/UserEdit";
import { UserFirstFollow } from "../components/pages/user/UserFirstFollow";
import { UserImageChange } from "../components/pages/user/UserImageChange";
import { UserImageSet } from "../components/pages/user/UserImageSet";
import { UserPasswordChange } from "../components/pages/user/UserPasswordChange";
import { UserShowPage } from "../components/pages/user/UserShow";

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
  {
    path: '/singUp/success',
    exact: false,
    children: <SuccessPage />
  },
  {
    path: '/imageSet',
    exact: false,
    children: <UserImageSet />
  },
  {
    path: '/first-follow',
    exact: false,
    children: <UserFirstFollow />
  }
]