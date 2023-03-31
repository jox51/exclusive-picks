import React from "react"
import Hero from "../components/Hero"
import Info from "../components/Info"
import DataTable from "../components/DataTable"
import Footer from "../components/Footer"
import AccessAlert from "../components/AccessAlert"
import { useSelector } from "react-redux"
import DataTableAlt from "../components/DataTableAlt"

const Landing = () => {
  const { loginResp } = useSelector((store) => store.edges)
  return (
    <section>
      <Hero />
      <Info />
      {loginResp.msg === "login success" ? <DataTable /> : <AccessAlert />}
      <DataTableAlt />
      <Footer />
    </section>
  )
}

export default Landing
