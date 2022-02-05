
// Creat Cookie
const createCookies = () => {
    const key = document.getElementById("createInputKey").value
    const value = document.getElementById("createInputValue").value
    const createDate = document.getElementById("createDate").value
    const name = document.getElementById("name").value
    
    const y = Number(createDate.slice(0,4))
    const m = Number(createDate.slice(5,7))-1
    const d = Number(createDate.slice(8,10))  
    const expiryDate = new Date(y, m, d).toUTCString()
    console.log("Page is Ready")
    document.cookie = `${key}=${value}; expires=${expiryDate};  path=/` 

}













