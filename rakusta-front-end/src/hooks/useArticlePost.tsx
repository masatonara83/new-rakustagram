/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState} from "react";
import { useHistory } from "react-router-dom";
import { UseMassage } from "./useMessage";
import { UseTimeLine } from "./useTimeLine";

type Props = {
  data: FormData;
  onClose: () => void;
  onClickCloseNewPost: () => void
}

export const UseArticlePost =() => {
  const history = useHistory()
  const {showMessage} = UseMassage();
  const {getFollowArticles} = UseTimeLine()
  const [loading, setLoading] = useState(false);

  const articlePost = useCallback((props: Props) => {
    const { data, onClose, onClickCloseNewPost} = props
    setLoading(true)
    axios.post("http://localhost:8080/api/v1/article/",data)
    .then( (res) => {
      showMessage({title: "投稿にしました", status: "success"})
      getFollowArticles(5)
      onClose()
      onClickCloseNewPost()
      history.push("/rakustagram")
    }).catch(() => {
      showMessage({title: "投稿に失敗しました", status: "error"})
      setLoading(false)
    })
  }, [])
  return{loading, articlePost}
};