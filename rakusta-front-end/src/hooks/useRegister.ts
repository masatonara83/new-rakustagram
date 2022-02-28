import axios from "axios"
import { useCallback, useState } from "react"
import { User } from "../types/api/user"
import { Api } from "../URL/BackendApi"
import { useLoginUser } from "./useLoginUser"
import { UseMassage } from "./useMessage"

type Props = {
  userMailAddress: string;
  userFullName: string;
  userName: string;
  password: string;
}

export const UseRegister = () => {

  const [loading, setLoading] = useState(false)
  const {setLoginUser} = useLoginUser()
  const {showMessage} = UseMassage()
  
  const api = Api
  const userRegister = useCallback((form: Props) => {
    setLoading(true)
    axios.post<User>(api + "/register", form).then((res) => {
      setLoginUser(res.data)
      showMessage({title: "登録しました", status: "success"})
    }).catch(() => {
      showMessage({title: "登録に失敗しました", status: "error"})
      setLoading(false)
    })
  },[])
  return {userRegister, loading}
}