import React, { useEffect } from 'react'
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";
import { useState } from 'react'
import { Col, Row } from 'antd';
import ReservaCard from '../../components/ReservaCard';
import { getUserBookings } from '../../services/bookingService';
import { getRooms } from '../../services/roomService';

const Reservas = () => {
    // array de reservas
    const [array, setArray] = useState([]);

    const fetchBookings = async () => {
      try {
        let bookings = await getUserBookings();
        const salas = await fetchAllRooms();

        for (let reserva of bookings) {
          reserva.sala = salas.find(sala => sala.id === reserva.salaId);
        }

        setArray(bookings); console.log(bookings);
      } catch (error) {
        console.error("Erro ao buscar reservas:", error);
      }
    }

    const fetchAllRooms = async () => {
      try {
        const rooms = await getRooms();
        return rooms;
      } catch (error) {
        console.error("Erro ao buscar salas:", error);
      }
    };

    useEffect(() => {
      fetchBookings();
    }, []);

    return (
    <div>
      <ButtonBack path={"/home"} style="fixed top-24 left-4 z-50" />
      <Header sectionName={"Reservas"} />
      <Row className='h-auto flex justify-center content-center md:px-24 my-28' gutter={[16, 16]}>
        {array.map((reserva) => {
          return <Col xs={20} md={10} lg={9}>
            <ReservaCard
              id={reserva.id}
              nome={reserva.sala.nome}
              capacidade={reserva.sala.capacidade}
              localizacao={reserva.sala.localizacao}
              data={reserva.data}
              turno={reserva.turno}
              reservadaEm={reserva.createdAt}
              fetchBookings={fetchBookings}
            />
          </Col>
        })}
      </Row>
    </div>
  )
}

export default Reservas