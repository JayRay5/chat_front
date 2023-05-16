
const base_url="http://localhost:8000/"

/*
export const login= async (userId,password)=>{
    try {
        const response = await fetch(base_url+"user/login", {
            method: 'POST',
            credentials:"include",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userId: userId,
              password: password
            })
          });
        const data = await response.json();
        console.log(data);
        if(data.isConnected==true){
            localStorage.setItem("userId",data.userId)
            window.location.href = '/home'; 
        }
        else{
            console.log(data)
            window.alert("Authentification Failed!")
        }
    } catch (error) {
        console.log(error)
        window.alert("Error with the server")
    }
}
*/



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
    .then((response)=>{
        console.log(response)
        return response.json()})
    .then((data)=>{
        window.alert(data)
        if(data.isConnected==true){
            localStorage.setItem("userId",data.userId)
            window.location.href = '/home'; 
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



export const get_chats= ()=>{
    if(localStorage.getItem("userId")){
    return fetch(base_url+"chat/all", {
        credentials:"include",
        headers: {
            'Content-Type': 'application/json'
        }
  })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data.rows)
        return data.rows
    })
    .catch((err)=>{
        console.log(err)
        window.alert("Error with the server")})
    }

    else{
        window.location.href='http://localhost:3000'
    }

}

export const create_chat= (name,userId)=>{
    if(localStorage.getItem("userId")){
    fetch(base_url+"chat/new", {
        method: 'POST',
        credentials:"include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            userId: userId
        })
      })
    .then((response)=>{
        return response.json()})
    .then((data)=>{
        console.log(data)
        return data
    })
    .catch((err)=>{
        console.log(err)
        window.alert("Error with the server")})
    }
    else{
        window.location.href='http://localhost:3000'
    }
}

export const get_chat= (chatId)=>{
    console.log("cc")
    if(localStorage.getItem("userId")){
        console.log("cc2")
    fetch(base_url+`${chatId}`, {
        method:"GET",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json'
        }
  })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        return data
    })
    .catch((err)=>{
        console.log(err)})
    }

    else{
        window.location.href='http://localhost:3000'
    }

}

export const get_users= ()=>{
    if(localStorage.getItem("userId")){
    fetch(base_url+"user/all", {
        credentials:"include",
        headers: {
            'Content-Type': 'application/json'
        }
  })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        return data
    })
    .catch((err)=>{
        console.log(err)
        window.alert("Error with the server")})
    }

    else{
        window.location.href='http://localhost:3000'
    }

}

export const write_message= (messageValue)=>{
    if(localStorage.getItem("userId")){
    fetch(base_url+"chat/chat/new_message", {
        method: 'POST',
        credentials:"include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messageValue:messageValue
        })
      })
    .then((response)=>{
        return response.json()})
    .then((data)=>{
        return data
    })
    .catch((err)=>{
        console.log(err)
        window.alert("Error with the server")})
    }
    else{
        window.location.href='http://localhost:3000'
    }
}

export const chat_add_user= (userId)=>{
    if(localStorage.getItem("userId")){
    fetch(base_url+"chat/chat/add_user", {
        method: 'POST',
        credentials:"include",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId:userId
        })
      })
    .then((response)=>{
        console.log(response.json())
        return response.json()})
    .then((data)=>{
        console.log(data)
        window.alert("User added!")
    })
    .catch((err)=>{
        console.log(err)
        window.alert("Error with the server")})
    }
    else{
        window.location.href='http://localhost:3000'
    }
}

export const log_out=()=>{
    console.log("cc")
    fetch(base_url+"user/logout", {
        method: 'GET',
        credentials:"include",
        headers: {
          'Content-Type': 'application/json'
        }})
    .then(()=>{
        window.location.href='http://localhost:3000'
    })
    .catch((err)=>console.log(err))

}