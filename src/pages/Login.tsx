import { FormEvent, useState } from "react";
import { validUserLogin } from "../utils/util";


function Login() {

    // useState
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const userLogin = (event:FormEvent) => {
        event.preventDefault(); // form gonderimini durdur.
        if (validUserLogin(username, password)){
            console.log("Form Send", username, password)
        }
    }

    return (
        <>
        <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h2 className="text-center">User Login</h2>
                    <form onSubmit={userLogin}>
                        <div className="mb-3">
                            <input onChange={(event) => setUsername(event.target.value)} className="form-control" placeholder="Username..." />
                        </div>
                        <div className="mb-3">
                            <input onChange={(event) => setPassword(event.target.value)} className="form-control" type="password" placeholder="Password..." />
                        </div>
                        <div className="mb-3">
                            <button className="w-100 btn btn-success">Send</button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4"></div>
        </div>
        </>
    );
}

export default Login