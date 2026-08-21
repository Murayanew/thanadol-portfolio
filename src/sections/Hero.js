import { profile } from '../data/profile.js';

export function Hero() {
  const marqueeText = "VISUAL DESIGN • EDITING • MOTION GRAPHIC • POST-PRODUCTION • ";
  const fullMarquee = Array(8).fill(marqueeText).join("");

  return `
    <section id="profile" class="relative bg-bg-primary pt-12 pb-24 border-b-4 border-black overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      
      <!-- Top Marquee -->
      <div class="absolute top-0 left-0 w-full bg-pop-yellow text-black border-b-4 border-black py-2.5 z-10 select-none">
        <div class="marquee-container">
          <div class="marquee-content font-heading font-black text-base md:text-xl uppercase tracking-widest">
            ${fullMarquee}
          </div>
        </div>
      </div>

      <!-- Checkerboard Background Strip (Top) -->
      <div class="absolute top-12 left-0 w-full h-8 bg-checkerboard-red border-b-4 border-black z-0"></div>

      <!-- FLOATING STICKERS -->
      <!-- Star (Yellow) -->
      <div class="absolute top-28 left-6 md:left-24 w-16 h-16 text-pop-yellow animate-float z-10 drop-shadow-[3px_3px_0px_#000]">
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full stroke-black stroke-[1.5]">
          <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"/>
        </svg>
      </div>

      <!-- Lightning (Pink) -->
      <div class="absolute top-36 right-6 md:right-32 w-12 h-20 text-pop-pink animate-float-delayed z-10 drop-shadow-[3px_3px_0px_#000]">
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full stroke-black stroke-[1.5]">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      </div>

      <!-- Smiley Face (Cyan) -->
      <div class="absolute bottom-20 left-10 md:left-36 w-16 h-16 text-pop-cyan animate-float-delayed z-10">
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full stroke-black stroke-[1.5] drop-shadow-[3px_3px_0px_#000]">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="8" cy="9" r="1.5" fill="#000" stroke="none"/>
          <circle cx="16" cy="9" r="1.5" fill="#000" stroke="none"/>
          <path d="M7 14s3 3 5 3 5-3 5-3" stroke="#000" stroke-width="2" stroke-linecap="round" fill="none"/>
        </svg>
      </div>

      <!-- Paper Airplane (Yellow-Green/Cream) -->
      <div class="absolute bottom-28 right-12 md:right-40 w-16 h-16 text-paper-cream animate-float z-10">
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full stroke-black stroke-[1.5] drop-shadow-[3px_3px_0px_#000]">
          <polygon points="3 12 22 2 13 22 11 13 3 12"/>
        </svg>
      </div>

      <!-- Main Layout Container -->
      <div class="relative max-w-6xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mt-24 z-10 w-full">
        
        <!-- Polaroid Profile Container (Left Column) -->
        <div class="relative flex-shrink-0">
          <!-- Speech Bubble overlay -->
          <div class="absolute -top-12 -right-8 bg-pop-pink text-white border-3 border-black px-4 py-2 rounded-2xl font-heading font-black text-xs md:text-sm shadow-[3px_3px_0px_#000] rotate-[8deg] z-20 bubble-bottom-left uppercase">
            LET'S CUT! 🎬
          </div>

          <!-- Polaroid Polaroid Image -->
          <div class="polaroid-card polaroid-left w-72 h-96 sm:w-80 sm:h-[26rem] bg-paper-cream border-4 border-black p-5 shadow-pop-black flex flex-col justify-between cursor-pointer">
            <div class="w-full h-72 sm:h-[20rem] border-3 border-black overflow-hidden bg-pop-navy">
              <img 
                src="/images/profile/Resume Work Minimal Professional CV - illustrationimage.png" 
                alt="${profile.name}" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="text-center font-heading font-black text-black text-base sm:text-lg tracking-wider uppercase mt-3">
              Thanadol Jk
            </div>
          </div>
        </div>

        <!-- Name and Role (Right Column) -->
        <div class="text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl">
          <div class="bg-pop-navy text-pop-yellow border-3 border-black px-3 py-1 font-heading font-black text-xs md:text-sm shadow-[3px_3px_0px_#000] uppercase tracking-wider mb-4 rotate-[-2deg]">
            // MOTION & VIDEO EDITOR
          </div>
          
          <h1 class="text-4xl sm:text-6xl md:text-7xl font-heading font-black uppercase text-pop-yellow text-shadow-pop-navy leading-none mb-3">
            ${profile.name}
          </h1>
          
          <p class="text-lg md:text-xl font-medium text-pop-cyan uppercase tracking-wider mb-6 text-shadow-pop-black">
            EDITOR - MOTION GRAPHIC ARTIST
          </p>

          <p class="text-text-secondary text-sm md:text-base font-light leading-relaxed mb-8 text-center lg:text-left">
            ยินดีต้อนรับทุกคนสู่เว็บไซต์ Portfolio ของผมงานแต่ละอย่างใช้ความทุ่มเทและความตั้งใจความทะเยอทะยานของผมจนออกมาเป็นผลงานที่ผมภูมิใจต่างๆในนี้
          </p>

          <!-- Contact Mini Row -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full mb-8">
            <span class="bg-paper-cream text-black border-2 border-black px-3 py-1 text-xs font-mono font-bold shadow-[2px_2px_0px_#000]">📞 ${profile.phone}</span>
            <span class="bg-paper-cream text-black border-2 border-black px-3 py-1 text-xs font-mono font-bold shadow-[2px_2px_0px_#000]">✉️ ${profile.email}</span>
            <span class="bg-paper-cream text-black border-2 border-black px-3 py-1 text-xs font-mono font-bold shadow-[2px_2px_0px_#000]">💬 LINE: ${profile.line}</span>
            
            <!-- Instagram -->
            <a href="https://instagram.com/${profile.instagram}" target="_blank" class="bg-pop-pink text-black border-2 border-black p-1 text-xs font-bold shadow-[2px_2px_0px_#000] hover:scale-105 transition duration-100 flex items-center justify-center w-7 h-7" title="Instagram">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <!-- Facebook -->
            <a href="https://facebook.com/${profile.facebook}" target="_blank" class="bg-pop-cyan text-black border-2 border-black p-1 text-xs font-bold shadow-[2px_2px_0px_#000] hover:scale-105 transition duration-100 flex items-center justify-center w-7 h-7" title="Facebook">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>

          <!-- CTA Button Group -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full flex-wrap mt-2">
            <!-- View Works Button -->
            <a 
              href="#portfolio" 
              class="w-full sm:w-auto px-8 py-4 bg-pop-pink text-black border-3 border-black font-heading font-black uppercase tracking-wider shadow-pop-yellow hover:scale-105 hover:bg-pop-yellow transition duration-150 flex items-center justify-center gap-3"
            >
              <span>เปิดชมสมุดผลงาน</span>
              <svg class="w-5 h-5 animate-bounce-horizontal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <!-- Download Resume/CV Button -->
            <!-- WARNING: MUST PLACE THE ACTUAL Thanadol-Resume.pdf FILE IN public/files/ DIRECTORY -->
            <a 
              href="/files/Thanadol-Resume.pdf" 
              download 
              class="w-full sm:w-auto px-8 py-4 bg-white hover:bg-pop-cyan text-black border-3 border-black font-heading font-black uppercase tracking-wider shadow-[4px_4px_0px_#000] hover:scale-105 transition duration-150 flex items-center justify-center gap-3"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>ดาวน์โหลด Resume / CV</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Checkerboard Background Strip (Bottom) -->
      <div class="absolute bottom-10 left-0 w-full h-8 bg-checkerboard-yellow border-t-4 border-black z-0"></div>

      <!-- Bottom Marquee -->
      <div class="absolute bottom-0 left-0 w-full bg-pop-pink text-black border-t-4 border-black py-2.5 z-10 select-none">
        <div class="marquee-container">
          <div class="marquee-content font-heading font-black text-base md:text-xl uppercase tracking-widest">
            ${fullMarquee}
          </div>
        </div>
      </div>
      
    </section>
  `;
}
