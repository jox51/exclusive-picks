import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loginUser } from "../features/edges/edgesSlice"

const LoginModal = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState({
    email: "",
    password: ""
  })

  const handleOnChange = (e) => {
    setValue((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
  }

  const handleRegister = () => {
    dispatch(loginUser(value))
  }
  return (
    <>
      <input type="checkbox" id="login-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="login-modal"
            className="btn btn-sm btn-circle btn-info absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="font-bold text-center text-2xl">Login Here</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email :</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="input input-bordered w-full max-w-xs"
              value={value.email}
              onChange={(e) => handleOnChange(e)}
              id="email"
            />
            <label className="label">
              <span className="label-text">Password :</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs"
              value={value.password}
              onChange={(e) => handleOnChange(e)}
              id="password"
            />
            <button
              type="submit"
              onClick={handleRegister}
              className="btn btn-info my-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginModal
