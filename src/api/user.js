
// export const getUserType = async userType => {
//     const userType ={
//         userType : userType
//     }
//     const url = `http://localhost:5000/${email}`

import { useEffect, useState } from "react"

//     const res = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(userType)
//     })
//     const data =await res.json()
//     return data
// }

export const useUserType = email => {
  const [loading, setLoading] = useState(false)
  const [userType, setUserType] = useState(null)
  useEffect(()=>{
    setLoading(true)
   if(email){
    fetch(`http://localhost:5000/user/${email}`)
    .then(res => res.json())
    .then(data => {
      setUserType(data.userType)
      setLoading(false)
    })
    .catch(err => console.log(err))
   }
  },[email])
  return [userType,loading]
}