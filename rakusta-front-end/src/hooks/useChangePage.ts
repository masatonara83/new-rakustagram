import { useCallback } from "react"
import { useHistory } from "react-router-dom"

export const UseChangePage = () => {

  const history = useHistory();
  const onClickEdit = useCallback(() =>{
    history.push("/rakustagram/account/edit")
  },[])

  const onClickImageChange = useCallback(() => {
    history.push("/rakustagram/account/image")
  },[])

  const onClickPasswordChange = useCallback(() => {
    history.push("/rakustagram/account/password")
  },[])
  return {onClickEdit, onClickImageChange, onClickPasswordChange}
}