import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface ContentSection {
  id: string;
  title: string;
  content: string;
}

export default function ContentEditor() {
  const [sections, setSections] = useState<ContentSection[]>([
    { id: 'welcome', title: 'Welcome Message', content: 'Welcome to our platform' },
    { id: 'about', title: 'About Us', content: 'About our company' },
    { id: 'features', title: 'Features', content: 'Our platform features' },
  ]);

  const handleContentUpdate = (id: string, content: string) => {
    setSections(prev => prev.map(section => 
      section.id === id ? { ...section, content } : section
    ));
  };

  const handleSave = () => {
    // In a real app, this would save to a backend
    toast.success('Content updated successfully');
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Edit Site Content</h2>
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save All Changes
        </button>
      </div>
      <div className="space-y-6">
        {sections.map(section => (
          <div key={section.id} className="space-y-2">
            <label className="block font-medium text-gray-700">
              {section.title}
            </label>
            <textarea
              value={section.content}
              onChange={(e) => handleContentUpdate(section.id, e.target.value)}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>
        ))}
      </div>
    </section>
  );
}