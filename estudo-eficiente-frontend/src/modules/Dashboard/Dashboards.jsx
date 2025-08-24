import React from "react";
import PageLayout from "../../components/Layouts/PageLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { BookOpen, Users, Calendar, TrendingUp } from "lucide-react";

const Dashboards = () => {
  const stats = [
    {
      title: "Total de Matérias",
      value: "12",
      description: "Matérias cadastradas",
      icon: BookOpen,
      trend: "+2 este mês",
    },
    {
      title: "Estudantes Ativos",
      value: "1,234",
      description: "Usuários ativos",
      icon: Users,
      trend: "+12% desde o mês passado",
    },
    {
      title: "Sessões de Estudo",
      value: "8,429",
      description: "Sessões este mês",
      icon: Calendar,
      trend: "+18% desde o mês passado",
    },
    {
      title: "Taxa de Conclusão",
      value: "78%",
      description: "Média de conclusão",
      icon: TrendingUp,
      trend: "+5% desde o mês passado",
    },
  ];

  return (
    <PageLayout
      title="Dashboard"
      subtitle="Visão geral do sistema de estudo eficiente"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <IconComponent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.trend}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Progresso de Estudos</CardTitle>
            <CardDescription>
              Acompanhamento das atividades de estudo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Gráfico de progresso será implementado aqui
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>Últimas atividades do sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Nova matéria adicionada
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Física Quântica - há 2 horas
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Sessão de estudo concluída
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Matemática - há 3 horas
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Novo usuário cadastrado
                  </p>
                  <p className="text-sm text-muted-foreground">
                    João Silva - há 5 horas
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Dashboards;
