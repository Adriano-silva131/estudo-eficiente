import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import PageLayout from "../../components/Layouts/PageLayout";
import { Plus, Search } from "lucide-react";
import { Input } from "../../components/ui/input";

const TipoMaterias = () => {
  const materias = [
    {
      id: 1,
      nome: "Matemática",
      professor: "Prof. João Silva",
      cargaHoraria: 120,
      status: "Ativa",
    },
    {
      id: 2,
      nome: "Português",
      professor: "Prof. Maria Santos",
      cargaHoraria: 100,
      status: "Ativa",
    },
    {
      id: 3,
      nome: "História",
      professor: "Prof. Carlos Oliveira",
      cargaHoraria: 80,
      status: "Inativa",
    },
    {
      id: 4,
      nome: "Física",
      professor: "Prof. Ana Costa",
      cargaHoraria: 150,
      status: "Ativa",
    },
  ];

  const handleAddMateria = () => {
    console.log("Adicionar nova matéria");
  };

  const headerActions = (
    <>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar matérias..." className="pl-8 w-64" />
        </div>
        <Button onClick={handleAddMateria}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Tipo de Matéria
        </Button>
      </div>
    </>
  );

  return (
    <PageLayout
      title="Tipos de Matérias"
      subtitle="Gerencie os tipos de matérias do sistema de estudo"
      headerActions={headerActions}
    >
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Nome da Matéria</TableHead>
              <TableHead>Professor</TableHead>
              <TableHead>Carga Horária</TableHead>
              <TableHead className="text-right">Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {materias.map((materia) => (
              <TableRow key={materia.id}>
                <TableCell className="font-medium">{materia.id}</TableCell>
                <TableCell>{materia.nome}</TableCell>
                <TableCell>{materia.professor}</TableCell>
                <TableCell>{materia.cargaHoraria}h</TableCell>
                <TableCell className="text-right">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      materia.status === "Ativa"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {materia.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    <Button variant="destructive" size="sm">
                      Excluir
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </PageLayout>
  );
};

export default TipoMaterias;
