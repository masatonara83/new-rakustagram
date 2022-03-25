import axios from "axios"
import { useCallback, useState } from "react"
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { LoginForm } from "../types/api/loginForm";
import { User } from "../types/api/user"
import { useLoginUser } from "./useLoginUser";
import { UseMassage } from "./useMessage";

export const UseAuth = () => {
  const history = useHistory();
  const {showMessage} = UseMassage();
  const {setLoginUser} = useLoginUser()
  const [setCookie] = useCookies(['id'])

  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("")

  const login = useCallback((loginForm: LoginForm) => {
    setLoading(true)
    axios.post<User>('http://localhost:8080/api/v1/login/', loginForm)
    .then((res) => {
      if(res.data) {
        setLoginUser(res.data)
        setId(res.data.userName)
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