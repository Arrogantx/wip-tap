import React from 'react';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

interface Project {
  id: string;
  name: string;
  status: 'In Progress' | 'Review' | 'Completed';
  progress: number;
  dueDate: string;
  hours: number;
}

export default function ProjectsList() {
  const projects: Project[] = [
    {
      id: '1',
      name: 'Website Redesign',
      status: 'In Progress',
      progress: 75,
      dueDate: '2024-01-15',
      hours: 45,
    },
    {
      id: '2',
      name: 'Mobile App Development',
      status: 'Review',
      progress: 90,
      dueDate: '2024-01-20',
      hours: 120,
    },
    {
      id: '3',
      name: 'Brand Identity',
      status: 'Completed',
      progress: 100,
      dueDate: '2024-01-10',
      hours: 28,
    },
  ];

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Review': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-green-100 text-green-800';
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Active Projects
      </h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">{project.name}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{new Date(project.dueDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{project.hours}h</span>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-indigo-600">
                    Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-indigo-600">
                    {project.progress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-indigo-50">
                <div
                  style={{ width: `${project.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-600 to-purple-600"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}