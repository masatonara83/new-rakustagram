import axios from "axios";
import { useCallback, useState, VFC } from "react";
import { useHistory } from "react-router-dom";
import { UseMassage } from "./useMessage";

export const UseArticlePost =() => {
  const history = useHistory()
  const {showMessage} = UseMassage();
  const [loading, setLoading] = useState(false);

  const articlePost = useCallback((data) => {
    setLoading(true)
    console.log(data);
    axios.post("http://localhost:8080/api/v1/article/",data)
    .then( () => {
      history.push("/timeline")
    }).catch(() => {
      showMessage({title: "投稿に失敗しました", status: "error"})
      setLoading(false)
    })
  }, [])
  return{loading, articlePost}
};