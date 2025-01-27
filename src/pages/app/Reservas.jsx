import React from 'react'
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";
import { useState } from 'react'
import { Col, Row } from 'antd';
import ReservaCard from '../../components/ReservaCard';

const Reservas = () => {
    // Recebe uma array de objetos referente à sala
    const [array, setArray] = useState([
      { nome: "Sala de Reunião", capacidade: 20, localizacao: 1 },
      { nome: "Auditório Central", capacidade: 100, localizacao: 2 },
      { nome: "Laboratório de Informática", capacidade: 15, localizacao: 4 },
      { nome: "Biblioteca", capacidade: 50, localizacao: 1 },
      { nome: "Sala de Conferência", capacidade: 40, localizacao: 3 },
      { nome: "Espaço Colaborativo", capacidade: 25, localizacao: 2 },
      { nome: "Sala de Treinamento", capacidade: 35, localizacao: 5 },
      { nome: "Anfiteatro", capacidade: 80, localizacao: 2 },
      { nome: "Sala Privativa", capacidade: 10, localizacao: 3 },
      { nome: "Hall de Entrada", capacidade: 60, localizacao: 1 },
    ]);

  return (
    <div>
      <ButtonBack path={"/home"} style="fixed top-24 left-4 z-50" />
      <Header sectionName={"Reservas"} />
      <Row className='h-auto flex justify-center content-center md:px-24 my-28' gutter={[16, 16]}>
        {array.map((sala) => {
          return <Col xs={20} md={10} lg={9}>
            <ReservaCard nome={sala.nome} capacidade={sala.capacidade} localizacao={sala.localizacao} data={"2025-04-24"} turno={"Tarde"}/>
          </Col>
        })}
      </Row>
    </div>
  )
}

export default Reservas