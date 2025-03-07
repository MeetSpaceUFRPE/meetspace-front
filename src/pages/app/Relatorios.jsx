import React, { useState, useEffect } from "react";
import { Card, DatePicker, Divider, Row, Col, Tag, notification } from "antd";
import { getDailySchedule, getReservationsByPeriod, getReservationFrequency, getAverageOccupancy } from '../../services/reportService';
import dayjs from 'dayjs';
import Header from '../../components/Header';
import ButtonBack from '../../components/ButtonBack';
import { Loading3QuartersOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";

const Relatorios = () => {
    const { id } = useParams();
    const [startDate, setStartDate] = useState(dayjs().format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(dayjs().format("YYYY-MM-DD"));
    const [reservations, setReservations] = useState([]);
    const [todayReservations, setTodayReservations] = useState([]);
    const [frequency, setFrequency] = useState(0);
    const [occupancy, setOccupancy] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchStatistics(startDate, endDate);
    }, [startDate, endDate]);
    
    const fetchStatistics = async (startDate, endDate) => {
        try {
            setLoading(true);
            const { frequency } = await getReservationFrequency(id, startDate, endDate);
            const { averageOccupancy } = await getAverageOccupancy(id, startDate, endDate);
            const todayReservations = await getDailySchedule(id, dayjs().format("YYYY-MM-DD"));
            const reservations = await getReservationsByPeriod(id, startDate, endDate);
            setTodayReservations(todayReservations);
            setReservations(reservations);
            setFrequency(frequency);
            setOccupancy(averageOccupancy);
        } catch (error) {
            console.error("Erro ao buscar estatísticas", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
                <Header sectionName={"Cronograma da Sala"} />
                
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
                    <ButtonBack path={"/salas"} style="left-0 md:left-4 my-8 z-100" />    
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <Loading3QuartersOutlined className="text-4xl text-[#D84040] animate-spin" />
                        <p className="text-center text-gray-500">Carregando...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-10">
            <Header sectionName={"Cronograma da Sala"} />

            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
              <ButtonBack path={"/salas"} style="left-0 md:left-4 my-8 z-100" />
            
              {/* TITULO */}
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-[#D84040]">Cronograma Diário</h1>
              </div>

              {/* RESERVAS DE HOJE */}
              <Row gutter={[16, 16]}>
                {todayReservations.length === 0 ? (
                  <Col span={24} className="text-center text-gray-500">
                    Nenhuma reserva para hoje.
                  </Col>
                ) : (
                  todayReservations.map((res, index) => (
                    <Col span={24} key={index} className="flex justify-center">
                        <Card className="p-2 bg-[#D84040] text-white rounded-lg shadow-lg hover:shadow-2xl w-1/2">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <ClockCircleOutlined className="mr-2 text-lg" />
                                    <span className="font-bold text-lg">{res.turno.toUpperCase()} ({res.data})</span>
                                </div>
                            </div>
                        </Card>
                    </Col>
                  ))
                )}

                <Col span={24}><Divider /></Col>

                {/* RESERVAS NO PERIODO */}
                <Col span={24} className="text-center">
                    <h1 className="text-3xl font-bold text-[#D84040]">Reservas no Período</h1>
                </Col>
                
                {/* ESTATISTICAS */}
                <Col span={24} className="text-center text-[#D84040] font-semibold text-lg">
                    <Tag color="blue" className="text-lg rounded-md">Reservas: {frequency}</Tag>
                    <Tag color="purple" className="text-lg rounded-md">Ocupação Média: {occupancy.toFixed(2)}</Tag>
                </Col>

                {/* FILTRO DE DATA */}
                <Col span={24} className="flex justify-center gap-4 my-4">
                  <div className="flex items-center">
                      <span className="font-semibold mr-2">De:</span>
                      <DatePicker defaultValue={dayjs()} onChange={(date) => setStartDate(dayjs(date).format("YYYY-MM-DD"))} />
                  </div>
                  <div className="flex items-center">
                      <span className="font-semibold mr-2">Até:</span>
                      <DatePicker defaultValue={dayjs()} onChange={(date) => setEndDate(dayjs(date).format("YYYY-MM-DD"))} />
                  </div>
                </Col>

                {/* Lista de Reservas por Período */}
                {reservations.length === 0 ? (
                    <Col span={24} className="text-center text-gray-500">
                        Nenhuma reserva encontrada.
                    </Col>
                ) : (
                    reservations.map((res, index) => (
                        <Col span={24} key={index} className="flex justify-center">
                            <Card className="p-2 bg-[#D84040] text-white rounded-lg shadow-lg hover:shadow-2xl w-1/2">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <ClockCircleOutlined className="mr-2 text-lg" />
                                        <span className="font-bold text-lg">{res.turno.toUpperCase()} ({res.data})</span>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))
                )}
              </Row>
          </div>
        </div>
    );
};

export default Relatorios;