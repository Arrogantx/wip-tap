import React, { useState } from 'react';
import { PencilIcon, TrashIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface Client {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

export default function ClientManagement() {
  const [clients, setClients] = useState<Client[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      joinDate: '2023-12-01',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'inactive',
      joinDate: '2023-11-15',
    },
  ]);

  const handleStatusToggle = (id: string) => {
    setClients(prev => prev.map(client => 
      client.id === id 
        ? { ...client, status: client.status === 'active' ? 'inactive' : 'active' }
        : client
    ));
    toast.success('Client status updated');
  };

  const handleDelete = (id: string) => {
    setClients(prev => prev.filter(client => client.id !== id));
    toast.success('Client removed successfully');
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Client Management</h2>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          <UserPlusIcon className="h-5 w-5" />
          Add New Client
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Join Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clients.map((client) => (
              <tr key={client.id}>
                <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleStatusToggle(client.id)}
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      client.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {client.status}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(client.joinDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => handleDelete(client.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}