import React from 'react';
import { Award, Users, BookOpen, Globe, LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  number: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Award, number: "100+", label: "Years of Excellence" },
  { icon: Users, number: "50,000+", label: "Active Students" },
  { icon: BookOpen, number: "3,000+", label: "Expert Faculty" },
  { icon: Globe, number: "150+", label: "Global Partners" }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-900 bg-opacity-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group ">
              <div className="flex justify-center mb-4 transition-colors group-hover:scale-110 transform duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <p className="text-4xl lg:text-5xl font-bold text-blue-900 mb-2 ">{stat.number}</p>
              <p className="text-black font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}