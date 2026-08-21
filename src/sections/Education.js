import { educations } from '../data/education.js';

export function Education() {
  const tiltClasses = ["polaroid-left-slight", "polaroid-right-slight", "polaroid-left-slight"];
  const badgeColors = ["bg-pop-pink text-white", "bg-pop-yellow text-black", "bg-pop-cyan text-black"];

  const itemsHtml = educations.map((stage, idx) => {
    const tilt = tiltClasses[idx % tiltClasses.length];
    const badgeColor = badgeColors[idx % badgeColors.length];

    const periodHtml = stage.period && stage.period.trim() !== ''
      ? `<span class="inline-block px-3 py-1 text-xs font-black border-2 border-black ${badgeColor} shadow-[2px_2px_0px_#000] font-mono mb-4 uppercase">${stage.period}</span>`
      : '';

    return `
      <div class="relative flex flex-col items-center text-center px-2 flex-1 group">
        
        <!-- Connection Line (Desktop) -->
        ${idx < educations.length - 1 ? `
          <div class="hidden md:block absolute top-6 left-[50%] right-[-50%] h-1 bg-black z-0"></div>
        ` : ''}
        
        <!-- Badge Number -->
        <div class="relative w-12 h-12 rounded-full bg-pop-pink border-3 border-black flex items-center justify-center mb-6 z-10 shadow-[3px_3px_0px_#000] font-heading font-black text-white text-lg group-hover:bg-pop-yellow group-hover:text-black transition duration-150">
          ${idx + 1}
        </div>

        <!-- Scrapbook Polaroid Card -->
        <div class="polaroid-card ${tilt} bg-paper-cream text-black border-4 border-black p-6 rounded-none w-full shadow-pop-black cursor-pointer">
          ${periodHtml}
          <h3 class="text-lg md:text-xl font-heading font-black tracking-wide text-black uppercase mb-2 leading-tight">${stage.school}</h3>
          <p class="text-sm text-slate-800 font-semibold leading-relaxed">${stage.degree}</p>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="education" class="py-24 border-b-4 border-black bg-bg-primary relative overflow-hidden">
      <!-- Decorative checkerboard background element -->
      <div class="absolute bottom-[-16px] left-0 w-full h-8 bg-checkerboard-red border-t-4 border-black opacity-10"></div>
      
      <div class="max-w-6xl mx-auto px-4 md:px-8">
        
        <div class="mb-16 text-center">
          <div class="inline-block bg-pop-yellow text-black border-3 border-black px-3 py-1 font-heading font-black text-xs md:text-sm uppercase tracking-wider rotate-[1.5deg] mb-3 shadow-[3px_3px_0px_#000]">
            // EDUCATION PATH
          </div>
          <h2 class="text-3xl md:text-5xl font-heading font-black uppercase tracking-wider text-pop-pink text-shadow-pop-black">
            ประวัติการศึกษา
          </h2>
        </div>

        <!-- Timeline Container (Horizontal on Desktop, Vertical on Mobile) -->
        <div class="flex flex-col md:flex-row gap-12 md:gap-4 relative">
          <!-- Connection Line (Mobile) -->
          <div class="md:hidden absolute top-6 bottom-6 left-[24px] w-1 bg-black z-0"></div>
          
          <div class="flex flex-col md:flex-row w-full gap-10 md:gap-4 md:items-start">
            ${itemsHtml}
          </div>
        </div>

      </div>
    </section>
  `;
}
