import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { IUser } from '../models/IUser'

function Sample() {

  const location = useLocation()

  const [status, setStatus] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cidData, setCidData] = useState("");

  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  // console.log(params.id)

  const [dataUser, setDataUser] = useState<IUser>();
  useEffect(() =>{

    if(location.state){
      const user = location.state as IUser
      console.log(user.name)
      setDataUser(user)
    }
  
    const userId= searchParams.get("userID")
    const cid= searchParams.get("cid")

    if(userId){
      console.log(userId)
    }
    if(cid){
      console.log(cid)
      setCidData(cid)
    }

  }, []);

  useEffect(() => {
    setStatus(false);
    if(username === "ali"){
      setStatus(true);
    }
  }, [username]);

  return (
    <>
      <h2>
        {params.id}
        {cidData}
      </h2>
      {dataUser?.name && <h2>{dataUser.name.length}</h2>}
      <h3>
        {dataUser?.name}
        {dataUser?.surname}
      </h3>
      <input
        onChange={(evt) => setUsername(evt.target.value)}
        placeholder="username"
      />
      <input
        onChange={(evt) => setPassword(evt.target.value)}
        type="text"
        placeholder="password"
      />
      {/* {
        status == true ? <button className="btn btn-success">Send</button> : <button className="btn btn-danger">Dont Send</button> 
      } */}

      <button className={'btn ' + (status === true ? 'btn-success' : 'btn-danger')}>Send</button>
    </>
  );
}

export default Sample
