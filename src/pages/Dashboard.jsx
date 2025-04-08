import { useState, useEffect } from "react";
import {
  ChartLine,
  Users,
  Briefcase,
  ClipboardText,
} from "@phosphor-icons/react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCases: 0,
    activeCases: 0,
    totalUsers: 0,
    totalReports: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulação de carregamento de dados
    setTimeout(() => {
      setStats({
        totalCases: 145,
        activeCases: 38,
        totalUsers: 24,
        totalReports: 89,
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  const StatCard = ({ icon, title, value, bgColor }) => (
    <div className={`${bgColor} rounded-lg shadow-md p-6 flex flex-col`}>
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-white text-lg font-semibold ml-2">{title}</h3>
      </div>
      <p className="text-white text-3xl font-bold">{value}</p>
    </div>
  );

  if (isLoading) {
    return <div className="text-center p-8">Carregando...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<Briefcase size={24} weight="fill" className="text-white" />}
          title="Total de Casos"
          value={stats.totalCases}
          bgColor="bg-blue_primary"
        />
        <StatCard
          icon={<Briefcase size={24} weight="fill" className="text-white" />}
          title="Casos Ativos"
          value={stats.activeCases}
          bgColor="bg-blue_secondary"
        />
        <StatCard
          icon={<Users size={24} weight="fill" className="text-white" />}
          title="Usuários"
          value={stats.totalUsers}
          bgColor="bg-blue_primary"
        />
        <StatCard
          icon={
            <ClipboardText size={24} weight="fill" className="text-white" />
          }
          title="Relatórios"
          value={stats.totalReports}
          bgColor="bg-blue_secondary"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <ChartLine size={24} weight="fill" className="text-blue_primary" />
          <h3 className="text-blue_primary text-lg font-semibold ml-2">
            Casos Recentes
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome do Caso
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dentista Responsável
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data de Criação
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  #001
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Identificação Positiva
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Dr. João Silva
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  05/04/2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Em andamento
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  #002
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Análise de Mordida
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Dra. Maria Oliveira
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  03/04/2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Em andamento
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  #003
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Estimativa de Idade
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Dr. Carlos Santos
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  01/04/2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Completo
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
