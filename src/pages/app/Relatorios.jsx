import React, { useState, useEffect } from "react";
import { Card, DatePicker, Divider, Row, Col, Tag, notification } from "antd";
import { getDailySchedule, getReservationsByPeriod, getReservationFrequency, getAverageOccupancy } from '../../services/reportService';
import dayjs from 'dayjs';
import Header from '../../components/Header';
import ButtonBack from '../../components/ButtonBack';
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";

const Relatorios = () => {
    const { id } = useParams();
    const [startDate, setStartDate] = useState(dayjs().format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(dayjs().format("YYYY-MM-DD"));
    const [reservations, setReservations] = useState([]);
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
            const reservations = await getReservationsByPeriod(id, startDate, endDate);
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
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <Header sectionName={"Cronograma da Sala"} />
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
            <ButtonBack path={"/salas"} style="left-0 md:left-4 my-8 z-100" />
            
            <Row gutter={[16, 16]}>
              <Col span={24} className="text-center">
                <h1 className="text-2xl font-bold text-[#D84040]">Cronograma Diário</h1>
              </Col>
              <Col span={24} className="flex justify-center">
                De: <DatePicker defaultValue={dayjs()} onChange={(date) => setStartDate(dayjs(date).format("YYYY-MM-DD"))} />
                Até: <DatePicker defaultValue={dayjs()} onChange={(date) => setEndDate(dayjs(date).format("YYYY-MM-DD"))} />
              </Col>
              <Col span={24}><Divider /></Col>
              <Col span={12}><Tag color="blue">Frequência: {frequency}</Tag></Col>
              <Col span={12}><Tag color="purple">Ocupação Média: {occupancy}</Tag></Col>
              <Col span={24}><Divider /></Col>
              <Col span={24}>
                {reservations.length === 0 ? (
                  <p className="text-center text-gray-500">Nenhuma reserva encontrada.</p>
                ) : (
                  reservations.map((res, index) => (
                    <Card key={index} className="mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{res.turno} ({res.data})</span>
                      </div>
                    </Card>
                  ))
                )}
              </Col>
            </Row>
          </div>
        </div>
    );
};

export default Relatorios;