export function Skills() {
  const hardSkills = [
    "Video Editing (Premiere Pro, CapCut)",
    "Motion Graphics (After Effects, Animate)",
    "Color Grading (DaVinci Resolve, Lumetri)",
    "Sound Design & Audio Post-Production",
    "VFX, Green Screen Keying & Rotoscoping",
    "3D Animation & Brand Motion Design",
    "Storyboarding & Narrative Pacing"
  ];

  const softSkills = [
    "การสื่อสารและการทำความเข้าใจบรีฟลูกค้า",
    "การทำงานร่วมกับผู้กำกับและฝ่ายสร้างสรรค์ (Teamwork)",
    "การบริหารจัดการเวลาและส่งงานตรงกำหนด (Time Management)",
    "การแก้ปัญหาเฉพาะหน้าและความยืดหยุ่นในงาน",
    "ความละเอียดรอบคอบในวิชวลและเสียง (Attention to Detail)",
    "การพัฒนาตัวเองและเรียนรู้เทคนิคใหม่ๆ ตลอดเวลา",
    "การควบคุมอารมณ์และทำงานภายใต้แรงกดดันได้ดี"
  ];

  const popColors = [
    "bg-pop-pink text-white",
    "bg-pop-yellow text-black",
    "bg-pop-cyan text-black",
    "bg-pop-red text-white",
    "bg-pop-navy text-white",
    "bg-emerald-400 text-black",
    "bg-orange-400 text-black"
  ];

  const renderChecklist = (skills, startIndex) => {
    return skills.map((skill, idx) => {
      const colorClass = popColors[(startIndex + idx) % popColors.length];
      return `
        <li class="flex items-center gap-3.5 py-1 group/item">
          <!-- Pop Art Checklist Icon -->
          <div class="flex-shrink-0 w-6 h-6 rounded-none border-2 border-black ${colorClass} flex items-center justify-center shadow-[1.5px_1.5px_0px_#000] group-hover/item:scale-110 transition duration-100">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span class="text-black text-sm md:text-base font-semibold leading-relaxed">${skill}</span>
        </li>
      `;
    }).join('');
  };

  return `
    <section id="skills" class="py-24 border-b-4 border-black bg-bg-primary relative">
      <div class="max-w-6xl mx-auto px-4 md:px-8">
        
        <div class="mb-16 text-center">
          <div class="inline-block bg-pop-cyan text-black border-3 border-black px-3 py-1 font-heading font-black text-xs md:text-sm uppercase tracking-wider rotate-[-1.5deg] mb-3 shadow-[3px_3px_0px_#000]">
            // ABILITIES & SKILLS
          </div>
          <h2 class="text-3xl md:text-5xl font-heading font-black uppercase tracking-wider text-pop-yellow text-shadow-pop-black">
            ทักษะความสามารถ
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <!-- Column 1: Hard Skills -->
          <div class="polaroid-card polaroid-left-slight bg-paper-cream border-4 border-black p-6 md:p-8 shadow-pop-navy flex flex-col justify-between cursor-pointer">
            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-9 h-9 border-2 border-black bg-pop-yellow flex items-center justify-center text-black shadow-[2px_2px_0px_#000]">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h3 class="text-2xl font-heading font-black uppercase tracking-wider text-black">Hard Skills</h3>
              </div>
              <ul class="space-y-4">
                ${renderChecklist(hardSkills, 0)}
              </ul>
            </div>
          </div>

          <!-- Column 2: Soft Skills -->
          <div class="polaroid-card polaroid-right-slight bg-paper-cream border-4 border-black p-6 md:p-8 shadow-pop-pink flex flex-col justify-between cursor-pointer">
            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-9 h-9 border-2 border-black bg-pop-pink flex items-center justify-center text-white shadow-[2px_2px_0px_#000]">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-heading font-black uppercase tracking-wider text-black">Soft Skills</h3>
              </div>
              <ul class="space-y-4">
                ${renderChecklist(softSkills, 3)}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
