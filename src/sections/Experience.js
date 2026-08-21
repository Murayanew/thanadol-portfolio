import { experiences } from '../data/experience.js';

export function Experience() {
  const tiltClasses = ["polaroid-left-slight", "polaroid-right-slight"];
  const badgeColors = [
    "bg-pop-pink text-white",
    "bg-pop-yellow text-black",
    "bg-pop-cyan text-black",
    "bg-pop-red text-white"
  ];

  const cardsHtml = experiences.map((job, idx) => {
    const tilt = tiltClasses[idx % tiltClasses.length];
    const badgeColor = badgeColors[idx % badgeColors.length];
    
    const periodHtml = job.period && job.period.trim() !== ''
      ? `<span class="inline-block px-3 py-1 text-xs font-black border-2 border-black ${badgeColor} shadow-[2px_2px_0px_#000] font-mono self-start sm:self-center">${job.period}</span>`
      : '';

    return `
      <div class="relative pl-8 sm:pl-12 group">
        <!-- Line circle point (Custom Pop Art badge) -->
        <div class="absolute left-[-6px] top-6 w-5 h-5 rounded-full border-3 border-black bg-pop-pink shadow-[2px_2px_0px_#000] group-hover:bg-pop-yellow transition duration-150 z-10"></div>
        
        <!-- Card Content -->
        <div class="polaroid-card ${tilt} bg-paper-cream text-black border-4 border-black p-6 md:p-8 shadow-pop-navy cursor-pointer">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div>
              <h3 class="text-xl font-heading font-black tracking-wide text-black uppercase leading-tight">${job.company}</h3>
              <p class="text-sm text-pop-navy font-bold mt-1">${job.position}</p>
            </div>
            ${periodHtml}
          </div>
          
          <ul class="space-y-2.5 text-black text-sm md:text-base font-medium">
            ${job.details.map(bullet => `
              <li class="flex items-start gap-2.5">
                <span class="text-pop-red text-lg leading-none mt-[-2px]">•</span>
                <span class="font-normal text-slate-800">${bullet}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="experience" class="py-24 border-b-4 border-black bg-bg-primary relative">
      <div class="max-w-4xl mx-auto px-4 md:px-8">
        
        <div class="mb-16 text-center">
          <div class="inline-block bg-pop-pink text-white border-3 border-black px-3 py-1 font-heading font-black text-xs md:text-sm uppercase tracking-wider rotate-[-2deg] mb-3 shadow-[3px_3px_0px_#000]">
            // WORK EXPERIENCES
          </div>
          <h2 class="text-3xl md:text-5xl font-heading font-black uppercase tracking-wider text-pop-yellow text-shadow-pop-black">
            ประสบการณ์การทำงาน
          </h2>
        </div>

        <!-- Vertical Timeline Container -->
        <div class="relative border-l-4 border-black space-y-12 ml-2 sm:ml-4">
          ${cardsHtml}
        </div>

      </div>
    </section>
  `;
}
