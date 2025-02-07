import React, { useState } from "react";
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";
import { Input, Button, Select, notification } from "antd";
import { createRoom } from "../../services/roomService";

const { Option } = Select;

const CriarSala = () => {
  const [nome, setNome] = useState("");
  const [capacidade, setCapacidade] = useState();
  const [localizacao, setLocalizacao] = useState("");
  const [recursos, setRecursos] = useState("");

  const handleCreateRoom = async () => {
    if (!validateFields()) return;

    try {
      await createRoom({ nome, capacidade, localizacao, recursos: recursos.split(",") });  
      notification.success({
        message: "Sucesso",
        description: "Sala criada com sucesso!",
        placement: "top",
      });
    }
    catch (error) {
      notification.error({
        message: "Erro",
        description: "Erro ao criar sala. Verifique os dados e tente novamente.",
        placement: "top",
      });
      console.error("Erro ao criar sala:", error);
    }
  };

  const validateFields = () => {
    if (!nome || !capacidade || !localizacao) {
      notification.warning({
        message: "Campos obrigatórios",
        description: "Preencha todos os campos.",
        placement: "top",
      });
      return false;
    }
    return true;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <ButtonBack path={"/home"} style="fixed top-24 left-4 z-50" />

      <Header sectionName={"Cadastrar Sala"} />

      <h1 className="text-2xl font-semibold mb-6">Cadastrar Sala</h1>
      <div className="w-80 space-y-4">
        <Input placeholder="Nome da sala" className="rounded" value={nome} onChange={(e) => setNome(e.target.value)} />
        <Select placeholder="Selecione o andar" className="w-full rounded" onChange={(value) => setLocalizacao(value)}>
          <Option value="1">1º andar</Option>
          <Option value="2">2º andar</Option>
          <Option value="3">3º andar</Option>
        </Select>
        <Input placeholder="Capacidade total" className="rounded" type="number" value={capacidade} onChange={(e) => setCapacidade(e.target.value)} />
        <Input placeholder="Recursos (separados por vírgula)" className="rounded" value={recursos} onChange={(e) => setRecursos(e.target.value.replace(/[^a-zA-Z0-9,]/g, ''))} />
        <Button type="primary" className="w-full bg-red-600 hover:bg-red-500" onClick={handleCreateRoom} onSubmit={handleCreateRoom}>
          Cadastrar
        </Button>
      </div>
    </div>
  );
};

export default CriarSala;
