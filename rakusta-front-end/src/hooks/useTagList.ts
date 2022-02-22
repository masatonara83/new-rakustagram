import axios from "axios"
import { useCallback, useState } from "react"
import { Article } from "../types/api/article"
import { Api } from "../URL/BackendApi"

export const TagList = () => {
  const api = Api
  const [tagWithArticle, setTagWithArticle] = useState<Array<Article>>([])

  const getTagWithArticle = useCallback((tagName: string) => {
    axios.get<Array<Article>>(api + `/tag/${tagName}`).then((res) => {
      setTagWithArticle(res.data)
    })
  }, [])
  return {getTagWithArticle, tagWithArticle}
}