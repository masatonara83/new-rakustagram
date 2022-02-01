import axios from "axios"
import { useCallback, useState } from "react"
import { Article } from "../types/api/article"
import { UseMassage } from "./useMessage"

export const UseTimeLine = () => {
  const[articleList, setArticlesList] = useState<Array<Article>>();
  const {showMessage} = UseMassage();

  const getFollowArticles = useCallback((id: number) => {
    axios.get<Array<Article>>(`http://localhost:8080/api/v1/article/${id}`)
    .then((res) => {
      console.log(res.data)
      setArticlesList(res.data)
    }).catch(() => showMessage({title: "取得に失敗しました", status: "error"}))
  },[])
  return {getFollowArticles, articleList}
}