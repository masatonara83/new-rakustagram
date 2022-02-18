import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom"
import { User } from "../types/api/user";
import { Api } from "../URL/BackendApi";
import { UseMassage } from "./useMessage";

type Profile = {
    userId: number | undefined,
    userName: string,
    userFullName: string,
    userMailAddress: string,
    userOverview: string,
}

type Password = {
  userId: number | undefined,
  password: string,
  newPassword: string
}

export const UsePutUserProfile = () => {
  const api = Api
  const {showMessage} = UseMassage()
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const putUserProfile = useCallback((props: Profile) => {
    const {userId, userName, userFullName, userMailAddress, userOverview} = props

    const user = {
      userId: userId,
      userName: userName,
      userFullName: userFullName,
      userMailAddress: userMailAddress,
      userOverview: userOverview,
    }
    setLoading(true)
    axios.put<User>(api + `/user/profile/${userId}`,user).then((res) => {
      showMessage({title: "プロフィールを更新しました", status: "success"})
      history.push('/rakustagram/account/edit')
      setLoading(false)
    }).catch(() => {
      showMessage({title: "更新に失敗しました", status: "error"})
      setLoading(false)
    })
  }, [])

  const putUserImage = useCallback((data) => {
    setLoading(true);
    console.log(data)
    axios.put(api+ '/user/image', data).then((res) => {
      showMessage({title: "プロフィールを更新しました", status: "success"})
      history.push('/rakustagram/account/image')
      setLoading(false);
    }).catch(() => {
      showMessage({title: "更新に失敗しました", status: "error"})
      setLoading(false)
    })
  }, [])

  const putUserPassword = useCallback((passwordForm: Password) => {
    setLoading(true);
    axios.put(api+ '/user/password', passwordForm).then((res) => {
      showMessage({title: "パスワードを変更しました", status: "success"})
      history.push('/rakustagram/account/password')
      setLoading(false)
    }).catch(() => {
      showMessage({title: "変更に失敗しました", status: "error"})
      setLoading(false)
    })
  },[])
  return {loading, putUserProfile,putUserImage, putUserPassword}
}