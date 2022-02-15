import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom"
import { User } from "../types/api/user";

export const UseUserProfile = () => {
  const history = useHistory();
  const [selectUser , setSelectUser] = useState<User>();

  const getUser = useCallback((userId: number) => {
    axios.get<User>(`http://localhost:8080/api/v1/user/${userId}`)
    .then((res) => {
     setSelectUser(res.data)
    })
  },[history]);
  return {getUser, selectUser}
}