import "../styles/Login.css";
import { FormEvent, useState } from "react";
import { encrypt, validUserLogin } from "../utils/util";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../services/cutomer";

function Login() {

    const navigate = useNavigate()

    // useState
    const [username, setUsername] = useState('emilys');
    const [password, setPassword] = useState('emilyspass');
    const [errorMessage, setErrorMessage] = useState('');

    const userLogin = (event:FormEvent) => {
        event.preventDefault(); // form gonderimini durdur.
        const status = validUserLogin(username, password) 
        if (status){
            setErrorMessage('') // donecek olan status kodunu sifirlamak amaci ile ilk once bosaltiriz.
            login(username,password).then(res => {
                const dt = res.data
                const stUser = JSON.stringify(dt)
                const encUser = encrypt(stUser)
                localStorage.setItem('user', encUser)
                navigate('/dashboard', {replace: true})
            }).catch(err => {
                console.log("error", err.response.status)
                console.log(err.message)
                setErrorMessage(err.message)
                console.log(errorMessage)
            }).finally(() => { 
                console.log("finish")
                //mesela loading falan varsa onu bitirebilirik burada.
                //then ve catch zorunlu olmasi gerekir ama finally zorunlu degil.
            })
            console.log("this line call")
        }
    }

    return (
      <>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <h2 className="text-center">User Login</h2>
            {errorMessage  &&
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> {errorMessage}
                    <button onClick={() => setErrorMessage('')} type="button" className="btn-close" aria-label="Close"></button>
                </div>
            }
            <form onSubmit={userLogin}>
              <div className="mb-3">
                <input
                  defaultValue={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="form-control"
                  placeholder="Username..."
                />
              </div>
              <div className="mb-3">
                <input
                  defaultValue={username}
                  onChange={(event) => setPassword(event.target.value)}
                  className="form-control"
                  type="password"
                  placeholder="Password..."
                />
              </div>
              <div className="mb-3">
                <button className="w-100 btn btn-success">Send</button>
                <NavLink className="btn btn-danger mt-1" to="/register">
                  Register
                </NavLink>
              </div>
            </form>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </>
    );
}

export default Login