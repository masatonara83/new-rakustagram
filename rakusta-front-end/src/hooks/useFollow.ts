import axios from "axios"
import { useCallback, useState } from "react"
import { User } from "../types/api/user"
import { Api } from "../URL/BackendApi"

export const UseAnotherUserList = () => {
  const api = Api
  const [notFollowUserList, setNotFollowUserList] = useState<Array<User>>()

  const getNotFollowList = useCallback((userId: number) => {
    axios.get<Array<User>>(api + `/follow/not/${userId}`).then((res) => {
      setNotFollowUserList(res.data)
    })
  },[])
  return {getNotFollowList, notFollowUserList}
}