let a = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Harash username hacked...",
    "Instagram username hacked...",
    "Instagram password hacked...",
    "Connection failed. Retrying...",
    "Phone number hacked...",
    "Connecting to server 2...",
    "Facebook password hacked...",
    "Facebook username hacked...",
    "Connected Successfully...",
    "Email ID hacked...",
    "Email ID password hacked...",
    "Username iamharash...",
    "Trying Brute Force...",
    "200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful..."
]

const b = async(second) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(true)

        },second * 1000)
    })
}

const showHack = async(message)=>{
    await b(2)
    text.innerHTML = text.innerHTML + message + "<br>"

}

(async () => {
    for (let i = 0; i < a.length; i++) {
            await showHack(a[i])
    }
})()