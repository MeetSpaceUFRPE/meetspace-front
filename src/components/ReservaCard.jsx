import React from "react";
import { Col, Divider, Row } from "antd";
import { TeamOutlined, BuildOutlined } from "@ant-design/icons";
import { Button } from "antd/es/radio";

const ReservaCard = ({ nome, localizacao, capacidade, data, turno }) => {
    return (
        <div className="p-5 text-[#D84040] rounded-lg h-full shadow-lg hover:shadow-2xl cursor-pointer" >
            <Row>
                <Col xs={24} md={12}>
                    <div>
                        <span className="font-bold text-lg">{String(nome).toUpperCase()}</span><br />
                        <span className="font-semibold text-normal text-[#726666]">{localizacao}º andar</span>
                    </div>
                </Col>
                <Col span={12} className="font-semibold text-right text-[#726666]">
                    <span>Data: {data}</span><br />
                    <span>Turno: {turno}</span>
                </Col>
            </Row>
            <Row className="w-full mt-4 font-semibold" align={'middle'} justify={'center'}>
                <Col span={12} className="flex justify-start items-center content-center">
                    <div className="flex items-center">
                        <TeamOutlined className="mr-1" />
                        <h1 className="text-[#726666]">{capacidade} pessoas</h1>
                    </div>
                </Col>
                <Col span={12} className="flex justify-end items-center">
                    <Button type="default" className="bg-[#D84040] text-[#ffffff] hover:text-[#D84040] hover:bg-[#ffffff] hover:border-[#D84040]">Cancelar</Button>
                </Col>
            </Row>
        </div>
    );
};

export default ReservaCard;
