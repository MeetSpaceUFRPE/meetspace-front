import React, { useState } from 'react'
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";
import { Col, Row } from 'antd';
import SalaCard from '../../components/SalaCard';
import { useNavigate } from "react-router-dom";

const Salas = () => {
  const navigate = useNavigate();
  // Recebe uma array de objetos referente à sala
  const [array, setArray] = useState([
    { id: 1, nome: "Sala de Reunião", capacidade: 20, localizacao: 1 },
    { id: 2, nome: "Auditório Central", capacidade: 100, localizacao: 2 },
    { id: 3, nome: "Laboratório de Informática", capacidade: 15, localizacao: 4 },
    { id: 4, nome: "Biblioteca", capacidade: 50, localizacao: 1 },
    { id: 5, nome: "Sala de Conferência", capacidade: 40, localizacao: 3 },
    { id: 6, nome: "Espaço Colaborativo", capacidade: 25, localizacao: 2 },
    { id: 7, nome: "Sala de Treinamento", capacidade: 35, localizacao: 5 },
    { id: 8, nome: "Anfiteatro", capacidade: 80, localizacao: 2 },
    { id: 9, nome: "Sala Privativa", capacidade: 10, localizacao: 3 },
    { id: 10, nome: "Hall de Entrada", capacidade: 60, localizacao: 1 },
  ]);
  
  return (
    <div className='h-screen'>
      <Header sectionName={"Salas"} />
          <ButtonBack path={"/home"} style="fixed left-4 top-16 z-50" />
      <Row className='h-auto flex justify-center content-center md:px-24 my-28' gutter={[16, 16]}>
        {array.map((sala) => {
          return <Col xs={20} md={10} lg={9}>
            <SalaCard nome={sala.nome} capacidade={sala.capacidade} localizacao={sala.localizacao} onClick={() => navigate(`/detalhe-da-sala/${sala.id}`)}/>
          </Col>
        })}
      </Row>
    </div>
  )
}

export default Salas