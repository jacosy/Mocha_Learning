const AuthController = ()=>{
  
  const isAuthorized = (roles, neededRole) => {
    return roles.indexOf(neededRole) >= 0
  }

  const isAuthorizedAsync = (roles, neededRole, cb) => {
    setTimeout(() => {
      cb(roles.indexOf(neededRole) >= 0)
    }, 0) //2100);
  }

  const isAuthorizedPromise = (roles, neededRole) => {
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve(roles.indexOf(neededRole) >= 0)
      }, 0)
    })
    
  }

  return { isAuthorized, isAuthorizedAsync, isAuthorizedPromise }
}

module.exports = AuthController();