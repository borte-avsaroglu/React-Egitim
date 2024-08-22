import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'

function Likes() {

    //useRedux
    const selector = useSelector((items: StateType) => items.LikesReducer)
    
  return (
    <>
      <h2>Likes</h2>
      <div>{JSON.stringify(selector)}</div>
    </>
  )
}

export default Likes
