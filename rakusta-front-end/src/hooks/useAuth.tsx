import axios from "axios"
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom";
import { LoginForm } from "../types/api/loginForm";
import { User } from "../types/api/user"
import { useLoginUser } from "./useLoginUser";
import { UseMassage } from "./useMessage";

export const UseAuth = () => {
  const history = useHistory();
  const {showMessage} = UseMassage();
  const {setLoginUser} = useLoginUser()
  const [userId, setUserId] = useState(0)

  const [loading, setLoading] = useState(false);

  const login = useCallback((loginForm: LoginForm) => {
    const {userMailAddress, password} = loginForm;
    setLoading(true)
    axios.get<User>('http://localhost:8080/api/v1/login/', {
      params: {
        userMailAddress: userMailAddress,
        password: password
      }
    })
    .then((res) => {
      if(res.data) {
        setLoginUser(res.data)
        showMessage({title: "ログインに成功しました", status: "success"});
        history.push("/rakustagram")
      } else {
        showMessage({title: "ユーザーが見つかりません", status: "error"});
        setLoading(false)
      }
    }).catch(() => {
      showMessage({title: "ログインできません", status: "error"})
      setLoading(false)
    });
  }, [setLoginUser,showMessage,history]);
  return {login, loading}
};