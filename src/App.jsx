import React, { useReducer, useRef, useState } from "react";
import NewPostComp from "./Components/NewPostComp";
import "./App.css"

export default function App() {

  function newPost(state) {
    return { id: Date.now(), name: state, toggle: true }
  }

  const reducer = (name, action) => {
    switch (action.type) {
      case "Add_Post":
        return [...name, newPost(action.payload.name)]
      case "TOGGLE":
        return name.map(post =>{
          if(post.id == action.payload.id){
            return {...post, toggle: !post.toggle}
          }
          else{
            return post
          }
        })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: "Add_Post", payload: { name: state } })
    setState("")
  }

  const focus = () => {
    inputRef.current.focus()
  }

  const [state, setState] = useState("")
  const [name, dispatch] = useReducer(reducer, [])
  const inputRef = useRef(null)

  return (
    <>
    <div id="top"></div>
      <form onSubmit={handleSubmit}>
        <input ref = {inputRef} type="text" placeholder='Type somthing here'value={state} onChange={(e) => { setState(e.target.value) }} />
        <button type="submit">Add Post</button>
      </form>
      
      {name.map((post) => 
          <NewPostComp key = {post.id} post={post} dispatch={dispatch} />
        )}
      <button class = "focusBtn" onClick={focus}>Get Back To Writing</button>
    </>
  )
}