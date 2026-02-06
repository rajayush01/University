import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  icon: string;
  degrees: string;
  students: string;
  image: string;
}

export default function ProgramCard({ title, icon, degrees, students, image }: ProgramCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="text-slate-600 mb-4">{degrees}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600">{students}</span>
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-2 transition-all" />
        </div>
      </div>
    </div>
  );
}