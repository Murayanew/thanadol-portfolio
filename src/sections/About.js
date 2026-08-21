export function About() {
  const softwareSkills = [
    {
      name: "Premiere Pro",
      level: "ชำนาญ",
      bgClass: "bg-pop-navy text-white",
      svg: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="3" fill="#180029" stroke="#9999FF" stroke-width="1.5"/>
              <text x="5" y="15.5" fill="#9999FF" font-family="'Inter', sans-serif" font-weight="900" font-size="10">Pr</text>
            </svg>`
    },
    {
      name: "After Effects",
      level: "ดี",
      bgClass: "bg-pop-pink text-black",
      svg: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="3" fill="#1C002B" stroke="#D199FF" stroke-width="1.5"/>
              <text x="5" y="15.5" fill="#D199FF" font-family="'Inter', sans-serif" font-weight="900" font-size="10">Ae</text>
            </svg>`
    },
    {
      name: "Illustrator",
      level: "ใช้เป็น",
      bgClass: "bg-pop-yellow text-black",
      svg: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="3" fill="#261200" stroke="#FF9A00" stroke-width="1.5"/>
              <text x="6" y="15.5" fill="#FF9A00" font-family="'Inter', sans-serif" font-weight="900" font-size="10">Ai</text>
            </svg>`
    },
    {
      name: "Photoshop",
      level: "ใช้เป็น",
      bgClass: "bg-pop-cyan text-black",
      svg: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="3" fill="#00182D" stroke="#00C8FF" stroke-width="1.5"/>
              <text x="5" y="15.5" fill="#00C8FF" font-family="'Inter', sans-serif" font-weight="900" font-size="10">Ps</text>
            </svg>`
    },
    {
      name: "Figma",
      level: "ดี",
      bgClass: "bg-white text-black",
      svg: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 2a3.5 3.5 0 0 0 0 7h3.5V2H7.5z" fill="#F24E1E"/>
              <path d="M16.5 2a3.5 3.5 0 0 0-3.5 3.5V9h3.5a3.5 3.5 0 0 0 0-7z" fill="#FF7262"/>
              <path d="M7.5 9a3.5 3.5 0 0 0 0 7h3.5V9H7.5z" fill="#A259FF"/>
              <path d="M7.5 16a3.5 3.5 0 0 0 3.5 3.5V16H7.5z" fill="#0ACF83"/>
              <path d="M13 9a3.5 3.5 0 1 0 3.5 3.5H13V9z" fill="#1ABCFE"/>
            </svg>`
    },
    {
      name: "CapCut",
      level: "ดี",
      bgClass: "bg-pop-red text-white",
      svg: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z" />
            </svg>`
    }
  ];

  const skillBadges = softwareSkills.map((skill, idx) => {
    const deg = idx % 2 === 0 ? "1" : "-1";
    return `
      <div class="${skill.bgClass} border-3 border-black p-3 flex flex-col items-center gap-1.5 shadow-[3px_3px_0px_#000] rotate-[${deg}deg] hover:rotate-0 hover:scale-105 transition duration-150">
        ${skill.svg}
        <span class="text-[10px] font-black uppercase tracking-wider text-center font-heading">${skill.name}</span>
        <span class="text-[9px] px-1.5 py-0.5 border border-black bg-white text-black font-bold rounded shadow-[1px_1px_0px_#000] select-none">
          ${skill.level}
        </span>
      </div>
    `;
  }).join('');

  return `
    <section id="about" class="py-16 md:py-24 border-b-4 border-black bg-bg-primary relative">
      <!-- Scrapbook Grid Lines -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Bio Paragraph (Notebook style card) -->
          <div class="lg:col-span-7 bg-paper-cream text-black border-4 border-black p-6 md:p-8 shadow-pop-navy polaroid-left-slight">
            <div class="mb-6 flex items-center gap-3">
              <div class="bg-pop-pink text-white border-2 border-black px-2 py-0.5 text-xs font-heading font-black rotate-[-3deg] uppercase">
                // ABOUT
              </div>
              <h2 class="text-3xl font-heading font-black uppercase tracking-wider text-black">ประวัติส่วนตัว</h2>
            </div>
            
            <p class="text-black text-base md:text-lg leading-relaxed mb-6 font-medium">
              สวัสดีครับ ผม <strong class="bg-pop-yellow px-1 py-0.5 border border-black shadow-[1.5px_1.5px_0px_#000]">"นิว"</strong> เป็น Video Editor และ Motion Graphic ที่ตัดต่อได้หลายแบบทั้งโฆษณา Vlog StoryTelling และอีกหลายๆแนว
            
            <p class="text-black text-base leading-relaxed font-normal">
            เป็นคนที่สนใจงานตัดต่อ ชอบศึกษาและติดตามเทคนิคการตัดต่อในรูปแบบต่างๆ ไม่ว่าจะ Long-Form หรือ Short-Form อยู่เสมอเพื่อให้เวลาทำงานจริงผลงานที่ออกมาตรงตามโจทย์ และตรงกับ Reference ที่ได้รับสามารถปรับเปลี่ยนวิธีการตัดต่อได้ตลอด
และยังสนใจเรื่อง Motion ต่างๆเพื่อเติมเต็มตัวคลิปอีกด้วย
            </p>
          </div>

          <!-- Software Skills Box (Scrapbook panel) -->
          <div class="lg:col-span-5 bg-paper-cream text-black border-4 border-black p-6 md:p-8 shadow-pop-black polaroid-right-slight">
            <div class="mb-6 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
              <span class="bg-pop-cyan text-black border-2 border-black px-2 py-0.5 text-xs font-heading font-black rotate-[2deg] uppercase">TOOLS</span>
              <h3 class="font-heading font-black text-xl tracking-wider uppercase">// SOFTWARE SKILLS</h3>
            </div>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              ${skillBadges}
            </div>
          </div>

        </div>
      </div>
    </section>

  `;
}
