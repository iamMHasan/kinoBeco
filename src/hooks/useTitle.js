import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `${title} - KenoBeco`
    },[title])
}
export default useTitle;