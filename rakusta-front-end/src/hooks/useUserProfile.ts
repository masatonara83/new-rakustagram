import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom"
import { User } from "../types/api/user";
import { UseMassage } from "./useMessage";

export const UseUserProfile = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false)
  const [selectUser , setSelectUser] = useState<User>();

  const {showMessage} = UseMassage()

  const getUser = useCallback((userId: number) => {
    setLoading(true)
    axios.get<User>(`http://localhost:8080/api/v1/user/${userId}`)
    .then((res) => {
     setSelectUser(res.data)
     setLoading(false)
    }).catch(() => {
      showMessage({title:"取得に失敗しました", status: "error"})
    })
  },[history]);
  return {getUser, selectUser, loading}
}