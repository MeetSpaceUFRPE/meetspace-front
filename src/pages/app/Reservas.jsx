import React from 'react'
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";

const Reservas = () => {
  return (
    <div>
      <ButtonBack path={"/home"} style="fixed top-24 left-4 z-50" />
      <Header sectionName={"Reservas"} />
    </div>
  )
}

export default Reservas