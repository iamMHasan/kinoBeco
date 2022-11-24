
// export const getUserType = async userType => {
//     const userType ={
//         userType : userType
//     }
//     const url = `http://localhost:5000/${email}`

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

export const setAuthToken = user => {
    const currentUser = {
      email: user.email,
    }
    //   Save user in db & get token
    fetch(`$http://localhost:5000/user/${user}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        //Save token in LocalStorage
        localStorage.setItem('kenoBeco-token', data.token)
      })
  }