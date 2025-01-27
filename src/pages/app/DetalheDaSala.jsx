import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import ButtonBack from "../../components/ButtonBack";
import { Card, DatePicker, Divider } from 'antd';
import { Row, Col } from 'antd';
import { TeamOutlined, BuildOutlined } from "@ant-design/icons";
import { Tag } from 'antd';
import { Button } from 'antd';
import dayjs from 'dayjs';

const DetalheDaSala = () => {
  const { id } = useParams();
  const [sala, setSala] = useState({ nome: "Sala Exemplo", localizacao: 3, capacidade: 30 });
  const [disponibilidade, setDisponibilidade] = useState([
    {
      turno: 'manha',
      disponivel: true,
    },
    {
      turno: 'tarde',
      disponivel: false,
    },
    {
      turno: 'noite',
      disponivel: true,
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <Header sectionName={"Detalhes da Sala"} />

      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <div className="relative">
          <div className="absolute">
            <ButtonBack path={"/home"} style="left-0 md:left-4 my-8 z-100" />
          </div>
        </div>

        <Row className="h-auto flex justify-center content-center md:px-24 my-12" gutter={[16, 16]}>
          <Col span={24}>
            <h1 className="text-2xl font-bold text-[#D84040] z-0 text-center">{String(sala.nome).toUpperCase()}</h1>
          </Col>
          
          <Col span={12} className="flex justify-start items-center gap-2">
            <BuildOutlined className="text-xl text-gray-600" />
            <div>{sala.localizacao}º andar</div>
          </Col>
          <Col span={12} className="flex justify-end items-center gap-2">
            <TeamOutlined className="text-xl text-gray-600" />
            <h1>{sala.capacidade} pessoas</h1>
          </Col>

          <Col span={24} className="flex items-center gap-2">
            <DatePicker placeholder='Selecione a data' defaultValue={dayjs()} />
          </Col>
          <Col span={24}>
            <Divider/>
          </Col>          
          <Col span={24}>
            <h1 className="text-xl font-bold text-[#D84040] z-0 text-left">Disponibilidade</h1>
          </Col>

          <Col span={24} className="mt-2 w-full">
            {disponibilidade.map((data, index) => (
              <Card
                key={index}
                className="w-full mb-4 p-0 md:p-4 shadow border border-2 hover:shadow-lg rounded-lg"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                  <span className="font-bold text-[#D84040] text-md text-left">
                    {String((data.turno == 'manha' ? "manhã" : data.turno)).toUpperCase()}<br />
                    <span className='font-normal text-sm'>
                      {data.turno === "manha" ? ("08h - 12h")
                        :
                        ((data.turno === "tarde") ?
                          ("13h - 17h")
                          :
                          ("18h - 22h"))}
                    </span>
                  </span>

                  <span className="text-right md:text-center">
                    {data.disponivel ? (
                      <Tag color="green">Disponível</Tag>
                    ) : (
                      <Tag color="red">Indisponível</Tag>
                    )}
                  </span>

                  <div className="text-left md:text-right">
                    <Button
                      type="default"
                      disabled={!data.disponivel}
                      className="bg-[#D84040] mt-2 md:mt-0 text-white hover:text-[#D84040] hover:bg-white hover:border-[#D84040]"
                    >
                      Reservar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DetalheDaSala;