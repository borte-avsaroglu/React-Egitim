import React, { useContext, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'
import { Context } from '../utils/AppContext'

function Likes() {

  const [status, setStatus] = useState(true);

  //useRef
  const nameRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (nameRef && nameRef.current) {
      nameRef.current.focus()
      nameRef.current.style.backgroundColor = 'red';
    }
  }, []);

  //useContext
  const context = useContext(Context);
  const newName = () => {
    if (status) {
      setStatus(false)
      context.setName("Berke Bilmem");
    }
  };

  //useRedux
  const selector = useSelector((items: StateType) => items.LikesReducer);

  return (
    <>
      <h2>Likes</h2>
      <div>{JSON.stringify(selector)}</div>
      <div className="row">
        <div className="col-sm-3">
          <input
            ref={nameRef}
            type="text"
            placeholder="Name..."
            className="form-control mt-3"
          />
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={status ? newName : () => {}}>
        New Name
      </button>
    </>
  );
}

export default Likes
