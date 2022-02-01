import axios from "axios"
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom";
import { LoginForm } from "../types/api/loginForm";
import { User } from "../types/api/user"
import { UseMassage } from "./useMessage";

export const UseAuth = () => {
  const history = useHistory();
  const [loginUser, setLoginUser] = useState("");
  const {showMessage} = UseMassage();

  const [loading, setLoading] = useState(false);

  const login = useCallback((loginForm: LoginForm) => {
    const {userMailAddress, userPassword} = loginForm;
    setLoading(true)
    axios.get<User>('http://localhost:8080/api/v1/login/', {
      params: {
        userMailAddress: userMailAddress,
        userPassword: userPassword
      }
    })
    .then((res) => {
      if(res.data) {
        showMessage({title: "ログインに成功しました", status: "success"});
        history.push("/timeline")
      } else {
        showMessage({title: "ユーザーが見つかりません", status: "error"});
        setLoading(false)
      }
    }).catch(() => {
      showMessage({title: "ログインできません", status: "error"})
      setLoading(false)
    });
  }, [setLoginUser]);
  return {login, loading}
};