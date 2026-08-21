export function CatalogSection(title, icon, items, gridId) {
  const cardsHtml = items.map((item, idx) => {
    // Alternate polaroid rotation tilt
    const tilt = idx % 2 === 0 ? "polaroid-left" : "polaroid-right";
    
    const tagColors = [
      "bg-pop-pink text-white",
      "bg-pop-yellow text-black",
      "bg-pop-cyan text-black",
      "bg-pop-red text-white",
      "bg-pop-navy text-white",
      "bg-emerald-400 text-black",
      "bg-orange-400 text-black"
    ];
    
    const tagsHtml = item.tags.map((tag, tIdx) => {
      const color = tagColors[(tIdx + idx) % tagColors.length];
      return `<span class="px-2.5 py-0.5 text-[10px] font-black border-2 border-black ${color} rounded-full shadow-[1.5px_1.5px_0px_#000] uppercase tracking-wide">${tag}</span>`;
    }).join('');

    const isPhoto = gridId === 'photo-grid';
    let coverHtml = '';
    if (isPhoto) {
      const camColors = ["bg-pop-pink text-white", "bg-pop-yellow text-black", "bg-pop-cyan text-black", "bg-pop-red text-white"];
      const camColor = camColors[idx % camColors.length];
      
      coverHtml = `
        <div class="flex justify-center w-full mb-2">
          <div class="relative overflow-hidden bg-pop-navy border-3 border-black w-fit flex items-center justify-center p-1.5 shadow-[2px_2px_0px_#000]">
            <!-- Polaroid Item Number Tag -->
            <div class="absolute top-2 left-2 z-10 border-2 border-black px-1.5 py-0.5 bg-pop-yellow text-black font-heading font-black text-[9px] shadow-[1.5px_1.5px_0px_#000] rotate-[-3deg]">
              #${idx + 1}
            </div>
            
            <img src="${item.cover}" alt="${item.title}" class="max-w-full h-auto max-h-44 md:max-h-52 block object-contain" loading="lazy" />
            
            <!-- Cute pop art camera badge on bottom-right of the photo -->
            <div class="absolute bottom-1 right-1 z-20 w-8 h-8 rounded-full border-2 border-black ${camColor} flex items-center justify-center shadow-[1.5px_1.5px_0px_#000] rotate-[8deg]">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>

            <!-- Zoom Hover Overlay -->
            <div class="absolute inset-0 bg-pop-pink/30 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
              <span class="bg-white text-black border-2 border-black px-2.5 py-1 font-heading font-black text-[10px] shadow-[2px_2px_0px_#000] rotate-[3deg] uppercase">
                ดูรายละเอียด
              </span>
            </div>
          </div>
        </div>
      `;
    } else {
      coverHtml = `
        <div class="relative overflow-hidden aspect-video bg-pop-navy border-3 border-black mb-4">
          <!-- Polaroid Item Number Tag -->
          <div class="absolute top-2 left-2 z-10 border-2 border-black px-2 py-0.5 bg-pop-yellow text-black font-heading font-black text-xs shadow-[2px_2px_0px_#000] rotate-[-3deg]">
            #${idx + 1}
          </div>
          
          <img src="${item.cover}" alt="${item.title}" class="w-full h-full object-cover" loading="lazy" />
          
          <!-- Zoom Hover Overlay -->
          <div class="absolute inset-0 bg-pop-pink/30 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
            <span class="bg-white text-black border-2 border-black px-3 py-1.5 font-heading font-black text-xs shadow-[2.5px_2.5px_0px_#000] rotate-[3deg] uppercase">
              ${item.link && item.link.trim() !== '' ? 'ดูผลงานจริง' : 'ดูรายละเอียด'}
            </span>
          </div>
        </div>
      `;
    }

    if (isPhoto) {
      return `
        <div class="project-card polaroid-card ${tilt} bg-white border-4 border-black p-4 shadow-pop-black flex flex-col justify-center cursor-pointer" data-grid-id="${gridId}" data-index="${idx}">
          ${coverHtml}
          <!-- Cute polaroid blank bottom scribble space -->
          <div class="h-6 flex items-center justify-center mt-2">
            <span class="w-16 h-1 bg-black/15 rounded-full"></span>
          </div>
        </div>
      `;
    }

    return `
      <div class="project-card polaroid-card ${tilt} bg-white border-4 border-black p-4 shadow-pop-black flex flex-col justify-between cursor-pointer" data-grid-id="${gridId}" data-index="${idx}">
        <div>
          ${coverHtml}
          
          <!-- Polaroid Details -->
          <h4 class="font-heading font-black text-lg text-black uppercase mb-1 leading-snug line-clamp-2">${item.title}</h4>
          <p class="text-xs text-slate-700 font-semibold leading-relaxed mb-4 line-clamp-2">${item.description || ''}</p>
        </div>
        
        <!-- Colorful Tags row -->
        <div class="flex flex-wrap gap-1.5 mt-auto">
          ${tagsHtml}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="catalog-block mt-8">
      <!-- Title Block (#CATALOGS Header style) -->
      <div class="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 border-3 border-black bg-pop-yellow flex items-center justify-center text-black text-2xl shadow-[3px_3px_0px_#000] font-heading font-black rotate-[-4deg]">
            ${icon === 'film' ? '🎬' : '📷'}
          </div>
          <h3 class="text-2xl md:text-3xl font-heading font-black uppercase text-pop-yellow text-shadow-pop-black tracking-wider">${title}</h3>
        </div>
        <div class="font-heading font-black text-pop-pink tracking-widest text-base sm:text-lg text-shadow-pop-black uppercase">
          #CATALOGS // ${items.length} ITEMS
        </div>
      </div>

      <!-- Polaroid Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" id="${gridId}">
        ${cardsHtml}
      </div>
    </div>
  `;
}

export function Portfolio(videoWorks, photoWorks) {
  return `
    <section id="portfolio" class="py-16 md:py-24 border-b-4 border-black bg-bg-primary relative">
      <!-- Decorative background grids -->
      <div class="absolute top-0 left-0 w-full h-8 bg-checkerboard-red border-b-4 border-black opacity-10"></div>
      
      <div class="max-w-6xl mx-auto px-4 md:px-8">
        
        <!-- Header -->
        <div class="mb-16 text-center lg:text-left">
          <div class="inline-block bg-pop-pink text-white border-3 border-black px-3 py-1 font-heading font-black text-xs md:text-sm uppercase tracking-wider rotate-[-2deg] mb-3 shadow-[3px_3px_0px_#000]">
            // SHOWCASE DIARY
          </div>
          <h2 class="text-3xl md:text-5xl font-heading font-black uppercase tracking-wider text-pop-yellow text-shadow-pop-black">
            แฟ้มสะสมผลงานทั้งหมด
          </h2>
        </div>

        <!-- Video Catalog Grid -->
        ${CatalogSection("🎬 VIDEO EDITING", "film", videoWorks, "video-grid")}
        
        <!-- Retro Divider -->
        <div class="my-20 border-t-8 border-dashed border-black/35 relative">
          <div class="absolute -top-5 left-[50%] -translate-x-[50%] bg-pop-yellow text-black border-2 border-black font-heading font-black px-4 py-1 text-xs uppercase shadow-[2px_2px_0px_#000]">
            KEEP SCROLLING ⬇️
          </div>
        </div>

        <!-- Photo Catalog Grid -->
        ${CatalogSection("📷 PHOTOGRAPHY", "camera", photoWorks, "photo-grid")}

      </div>
    </section>
  `;
}
