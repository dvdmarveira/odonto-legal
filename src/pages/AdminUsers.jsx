import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MagnifyingGlass,
  Plus,
  PencilSimple,
  Trash,
  UserCircle,
} from "@phosphor-icons/react";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Simula o carregamento de usuários de uma API
  useEffect(() => {
    // Em produção, esta seria uma chamada para uma API real
    setTimeout(() => {
      const mockUsers = [
        {
          id: 1,
          name: "Admin User",
          email: "admin@odontolegal.com",
          role: "Administrador",
          status: "Ativo",
        },
        {
          id: 2,
          name: "John Doe",
          email: "john@odontolegal.com",
          role: "Dentista",
          status: "Ativo",
        },
        {
          id: 3,
          name: "Jane Smith",
          email: "jane@odontolegal.com",
          role: "Dentista",
          status: "Inativo",
        },
        {
          id: 4,
          name: "Carlos Silva",
          email: "carlos@odontolegal.com",
          role: "Técnico",
          status: "Ativo",
        },
        {
          id: 5,
          name: "Maria Santos",
          email: "maria@odontolegal.com",
          role: "Assistente",
          status: "Ativo",
        },
      ];
      setUsers(mockUsers);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filtro de usuários com base no termo de pesquisa
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = () => {
    navigate("/admin/users/new");
  };

  const handleEditUser = (userId) => {
    navigate(`/admin/users/${userId}`);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Tem certeza de que deseja excluir este usuário?")) {
      // Em produção, esta seria uma chamada para uma API real
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-blue_primary">
            Usuários do Sistema
          </h2>
          <button
            className="btn-primary flex items-center"
            onClick={handleAddUser}
          >
            <Plus size={20} weight="bold" className="mr-2" />
            Novo Usuário
          </button>
        </div>

        <div className="mt-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlass size={20} className="text-gray_primary" />
          </div>
          <input
            type="text"
            className="input-field pl-10 w-full"
            placeholder="Buscar usuários por nome, email ou perfil..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="p-6 text-center">
          <p>Carregando usuários...</p>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="p-6 text-center">
          <p>Nenhum usuário encontrado.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usuário
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Perfil
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue_primary rounded-full flex items-center justify-center">
                        <UserCircle
                          size={24}
                          weight="fill"
                          className="text-white"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === "Ativo"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditUser(user.id)}
                        className="text-blue_primary hover:text-blue_secondary"
                      >
                        <PencilSimple size={20} weight="fill" />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red_secondary hover:text-red-700"
                      >
                        <Trash size={20} weight="fill" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
