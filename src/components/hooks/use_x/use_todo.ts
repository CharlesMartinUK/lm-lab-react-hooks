import { useState, useEffect } from "react";
import { isError } from "../../../helpers/is_error";

export const useTodo = <TResponse,>(url: string) => {

  const [data, setData] = useState<TResponse | undefined>()
  const [isFetching, setIsFetching] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        setIsFetching(false)
        if (response.status === 200) {
          const json = await response.json()
          setData(json)
        }
      } catch (error: unknown) {
        setIsFetching(false)
        if (isError(error)) {
          console.error(error.message)
        }
      }
    }
    fetchData()
  }, [url])

  return { data, isFetching }
}