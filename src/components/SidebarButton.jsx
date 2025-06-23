import React from 'react';

export default function SidebarButton({ icon: Icon, label }) {
  return (
    <button className="flex items-center gap-3 px-3 py-2 bg-zinc-700 rounded transition-colors duration-200 hover:bg-zinc-600">
      <Icon className="w-6 h-6 text-zinc-400" />
      <span className="text-sm">{label}</span>
    </button>
  );
}
