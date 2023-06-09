import React from "react"
import Hero from "../components/Hero"
import Info from "../components/Info"
import DataTable from "../components/DataTable"
import AltDataTable from "../components/AltDataTable"
import Footer from "../components/Footer"
import AccessAlert from "../components/AccessAlert"
import { useSelector } from "react-redux"

const Landing = () => {
  const { loginResp } = useSelector((store) => store.edges)
  return (
    <section>
      <Hero />
      <Info />
      {loginResp.msg === "login success" ? <AltDataTable /> : <AccessAlert />}

      <Footer />
    </section>
  )
}

export default Landing
