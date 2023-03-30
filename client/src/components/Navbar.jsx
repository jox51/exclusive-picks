import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { logoutUser } from "../features/edges/edgesSlice"
import RegisterModal from "./RegisterModal"
import LoginModal from "./LoginModal"

const Navbar = () => {
  const dispatch = useDispatch()
  const { loading, registerResp, loginResp } = useSelector(
    (store) => store.edges
  )

  const logoutHandler = () => {
    dispatch(logoutUser())
  }
  return (
    <nav
      className="relative flex w-full flex-nowrap items-center justify-between bg-neutral-100 py-4 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <button
          className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent3"
          aria-controls="navbarSupportedContent3"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent3"
          data-te-collapse-item
        >
          <a className="text-xl text-black" href="#">
            Exclusive Picks
          </a>

          <ul
            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
            data-te-navbar-nav-ref
          >
            <li className="lg:px-2" data-te-nav-item-ref>
              <a
                className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                aria-current="page"
                href="#"
                data-te-nav-link-ref
              >
                Home
              </a>
            </li>
            <li className="lg:pr-2" data-te-nav-item-ref>
              <a
                className="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#features"
                data-te-nav-link-ref
              >
                Features
              </a>
            </li>
            <li className="lg:pr-2" data-te-nav-item-ref>
              <a
                className="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#"
                data-te-nav-link-ref
              ></a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end gap-2">
          {registerResp.msg === "User created successfully" ? (
            <button onClick={logoutHandler} className="btn btn-info">
              Logout
            </button>
          ) : (
            <label
              htmlFor="register-modal"
              className="btn btn-info"
              id="register"
            >
              Register
            </label>
          )}
          {!loading && <RegisterModal />}
          {loginResp.msg === "login success" ? (
            <button className="btn btn-info" onClick={logoutHandler}>
              Logout
            </button>
          ) : (
            <label htmlFor="login-modal" className="btn btn-info">
              Login
            </label>
          )}

          {!loading && <LoginModal />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
