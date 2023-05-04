const base_url="http://localhost:8000/"

export const login= (userId,password)=>{
    fetch(base_url+"user/login", {
        method: 'POST',
        credentials:"include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userId,
          password: password
        })
      })
    .then((response)=>response.json())
    .then((data)=>{
        if(data.isConnected==true){
            localStorage.setItem("userId",data.userId)
            if(localStorage.getItem("userId")){
                window.location.href = '/home'; 
            }
           
        }
        else{
            console.log(data)
            window.alert("Authentification Failed!")
        }
    })
    .catch((err)=>{
        console.log(err)
        window.alert("Error with the server")})

}

export const check_user= ()=>{
    if(localStorage.getItem("userId")){
        const userId=localStorage.getItem("userId")
        fetch(base_url+"user/check_user", {
            method: "POST",
            credentials:"include",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify( {
                userId:userId})
        
        })
        .then((response)=>response.json())
        .then((data)=>{
            return data
        })
        .catch((err)=>{
            console.log(err)
            window.alert("You are not login")
        })}

}

export const get_profil= ()=>{
    if(localStorage.getItem("userId")){
    fetch(base_url+"user/profil", {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then((response)=>response.json())
    .then((data)=>{
        return data
    })
    .catch((err)=>{
        console.log(err)
        window.alert("Error with the server")})}

}
