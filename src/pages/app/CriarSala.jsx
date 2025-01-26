import React from "react";
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";

import { Input, Button, Select } from "antd";

const { Option } = Select;

const CriarSala = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <ButtonBack path={"/home"} style="fixed top-24 left-4 z-50" />

      <Header sectionName={"Cadastrar Sala"} />

      <h1 className="text-2xl font-semibold mb-6">Cadastrar Sala</h1>
      <div className="w-80 space-y-4">
        <Input placeholder="Nome da sala" className="rounded" />
        <Select placeholder="Selecione o andar" className="w-full rounded">
          <Option value="1">1º andar</Option>
          <Option value="2">2º andar</Option>
          <Option value="3">3º andar</Option>
        </Select>
        <Input placeholder="Capacidade total" className="rounded" />
        <Button type="primary" className="w-full bg-red-600 hover:bg-red-500">
          Cadastrar
        </Button>
      </div>
    </div>
  );
};

export default CriarSala;
