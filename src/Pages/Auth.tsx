import LoginForm from "../components/Form"


const Auth = () => {
  return (
    <div className="login-container">
        <div className="form-container">
           <div className="form-container-parts form-part-1">
                <h1>TO DO</h1>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="" />
           </div>
           <div className="form-container-parts form-part-2">
                <h1>Login</h1>
                <LoginForm/>
            </div> 
        </div>
    </div>
  )
}

export default Auth