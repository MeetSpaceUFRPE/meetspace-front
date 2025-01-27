import React from "react";
import { Col, Divider, Row } from "antd";
import { TeamOutlined, BuildOutlined } from "@ant-design/icons";

const SalaCard = ({ nome, localizacao, capacidade, onClick }) => {
    return (
        <div className="p-5 bg-[#D84040]  text-white rounded-lg h-full shadow-lg hover:shadow-2xl cursor-pointer" onClick={onClick}>
            <Row>
                <Col span={24}>
                    <div className="font-bold text-lg">{String(nome).toUpperCase()}</div>
                </Col>
            </Row>
            <Row className="w-full mt-4 font-semibold" align={'bottom'}>
                <Col span={12}>
                    <div className="flex items-center">
                        <BuildOutlined className="mr-1" />
                        <div>{localizacao}º andar</div>
                    </div>
                </Col>
                <Col span={12} className="flex justify-end items-center">
                    <div className="flex items-center">
                        <TeamOutlined className="mr-1"/>
                        <h1>{capacidade} pessoas</h1>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SalaCard;
