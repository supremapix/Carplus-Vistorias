/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { NEIGHBORHOODS_SEO, CITIES_SEO } from '../data';

type FilterType = 'all' | 'bairros' | 'rmc';

// Helper function to turn name into exact SEO sitemap slug
function getSlug(name: string): string {
  const normalized = name.trim().toLowerCase();
  if (normalized.startsWith('cic') || normalized.includes('cidade industrial')) {
    return 'cic';
  }
  if (normalized === 'alto boqueirão') {
    return 'alto-boqueirado';
  }
  if (normalized === 'caiuá' || normalized === 'caiua') {
    return 'caiqua';
  }
  return normalized
    .normalize('NFD')                     // separates letters from accents
    .replace(/[\u0300-\u036f]/g, '')     // removes accents
    .replace(/[^a-z0-9\s-]/g, '')        // removes anything that is not alphanumeric, a space, or a hyphen
    .trim()
    .replace(/\s+/g, '-');               // replaces spaces with hyphens
}

export default function CityExplorer() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Combine both arrays with tags
  const allItems = useMemo(() => {
    const bairros = NEIGHBORHOODS_SEO.map(item => ({
      ...item,
      type: 'bairros' as const,
      typeName: 'Bairro de Curitiba',
      icon: 'fa-map-pin'
    }));

    const rmc = CITIES_SEO.map(item => ({
      ...item,
      type: 'rmc' as const,
      typeName: 'Região Metropolitana',
      icon: 'fa-city'
    }));

    return [...bairros, ...rmc];
  }, []);

  // Filter based on selected tab and search match
  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesTab = filter === 'all' || item.type === filter;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [allItems, filter, searchQuery]);

  return (
    <div className="w-full">
      {/* Search and Filters Hub */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-primary text-dark font-bold shadow-lg shadow-primary/20'
                : 'bg-zinc-800 text-white font-bold hover:bg-zinc-700 hover:text-primary'
            }`}
          >
            Todos ({allItems.length})
          </button>
          <button
            onClick={() => setFilter('bairros')}
            className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              filter === 'bairros'
                ? 'bg-primary text-dark font-bold shadow-lg shadow-primary/20'
                : 'bg-zinc-800 text-white font-bold hover:bg-zinc-700 hover:text-primary'
            }`}
          >
            Bairros de Curitiba ({NEIGHBORHOODS_SEO.length})
          </button>
          <button
            onClick={() => setFilter('rmc')}
            className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              filter === 'rmc'
                ? 'bg-primary text-dark font-bold shadow-lg shadow-primary/20'
                : 'bg-zinc-800 text-white font-bold hover:bg-zinc-700 hover:text-primary'
            }`}
          >
            Região Metropolitana ({CITIES_SEO.length})
          </button>
        </div>

        {/* Text Search Input */}
        <div className="relative w-full md:w-72">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-300">
            <i className="fa-solid fa-magnifying-glass text-sm"></i>
          </span>
          <input
            type="text"
            placeholder="Buscar por bairro ou cidade..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-300 focus:outline-none focus:border-primary transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-300 hover:text-white"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>
          )}
        </div>
      </div>

      {/* Grid Results */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isSede = 'isSede' in item && item.isSede;
            const slug = getSlug(item.name);
            return (
              <div
                key={item.name}
                className={`bg-zinc-900 border overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isSede 
                    ? 'border-primary/50 shadow-lg shadow-primary/5 ring-1 ring-primary/20' 
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Card Header with direct page link */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-lg flex items-center justify-center ${isSede ? 'bg-primary/20 text-primary' : 'bg-zinc-800 text-white'}`}>
                      <i className={`fa-solid ${item.icon} text-base`}></i>
                    </span>
                    <div>
                      <a href={`/vistoria-cautelar-${slug}.html`} className="group/title block">
                        <h3 className="font-display font-semibold text-lg text-white leading-tight group-hover/title:text-primary transition-colors flex items-center gap-1.5">
                          {item.name}
                          <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-zinc-500 opacity-60 group-hover/title:opacity-100 group-hover/title:text-primary transition-opacity"></i>
                        </h3>
                      </a>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-200 block mt-0.5">
                        {item.typeName}
                      </span>
                    </div>
                  </div>

                  {isSede && (
                    <span className="text-[10px] bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      Sede
                    </span>
                  )}
                </div>

                {/* Card Description */}
                <p className="text-white text-sm text-justify leading-relaxed font-semibold">
                  {item.description}
                </p>

                {/* Action CTA link (Quick whatsapp schedule & Direct link to the SEO page) */}
                <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between gap-2">
                  <a
                    href={`/vistoria-cautelar-${slug}.html`}
                    className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 hover:text-primary flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <i className="fa-solid fa-file-invoice text-zinc-500 text-[11px]"></i> Ver Página
                  </a>
                  
                  <a
                    href={`https://wa.me/5541988740258?text=Ol%C3%A1!%20Desejo%20agendar%20uma%20vistoria%20cautelar%20para%20ve%C3%ADculo%20em%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:text-primary-light font-bold flex items-center gap-1 group bg-primary/10 border border-primary/20 hover:border-primary px-3 py-1.5 rounded-lg transition-all"
                  >
                    Agendar <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-zinc-900/40 border border-zinc-800 rounded-xl max-w-xl mx-auto p-8">
          <i className="fa-solid fa-triangle-exclamation text-primary text-3xl mb-4"></i>
          <h3 className="font-display font-bold text-xl text-white mb-2">Sem resultados encontrados</h3>
          <p className="text-white text-sm text-center font-bold">
            Não encontramos bairros ou cidades correspondentes para "{searchQuery}". Tente pesquisar com outro nome.
          </p>
        </div>
      )}
    </div>
  );
}
