import { profile } from '../data/profile.js';

export function Contact() {
  return `
    <section id="contact" class="py-24 border-b-4 border-black bg-bg-primary relative overflow-hidden">
      <!-- Background decorative checkerboard strip -->
      <div class="absolute bottom-0 left-0 w-full h-8 bg-checkerboard-yellow border-t-4 border-black opacity-10"></div>
      
      <div class="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div class="text-center mb-16">
          <div class="inline-block bg-pop-pink text-white border-3 border-black px-3 py-1 font-heading font-black text-xs md:text-sm uppercase tracking-wider rotate-[-2deg] mb-3 shadow-[3px_3px_0px_#000]">
            // REACH OUT
          </div>
          <h2 class="text-3xl md:text-5xl font-heading font-black uppercase tracking-wider text-pop-yellow text-shadow-pop-black">
            ช่องทางการติดต่อ
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <!-- Contact Channels with Copy Buttons (Scrapbook cards) -->
          <div class="space-y-6">
            <h3 class="font-heading font-black text-xl tracking-wider text-pop-pink text-shadow-pop-black mb-6 uppercase">// CHANNELS</h3>
            
            <!-- Phone Card -->
            <div class="polaroid-card polaroid-left-slight bg-paper-cream border-4 border-black p-5 shadow-pop-black flex items-center justify-between gap-4 cursor-pointer text-black">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 border-2 border-black bg-pop-yellow flex items-center justify-center text-black shadow-[2px_2px_0px_#000] font-heading font-black">
                  📞
                </div>
                <div>
                  <span class="text-[10px] text-pop-navy font-black uppercase tracking-wider block">เบอร์โทรศัพท์</span>
                  <span class="text-base text-black font-mono font-black" id="phone-text">${profile.phone}</span>
                </div>
              </div>
              <button 
                class="copy-btn px-4 py-2 bg-pop-pink text-black border-2 border-black font-heading font-black text-xs shadow-[2px_2px_0px_#000] hover:bg-pop-yellow hover:scale-105 transition duration-150 cursor-pointer"
                data-copy-target="phone-text"
              >
                คัดลอก
              </button>
            </div>

            <!-- Email Card -->
            <div class="polaroid-card polaroid-right-slight bg-paper-cream border-4 border-black p-5 shadow-pop-black flex items-center justify-between gap-4 cursor-pointer text-black">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 border-2 border-black bg-pop-pink flex items-center justify-center text-white shadow-[2px_2px_0px_#000] font-heading font-black">
                  ✉️
                </div>
                <div>
                  <span class="text-[10px] text-pop-navy font-black uppercase tracking-wider block">อีเมล</span>
                  <span class="text-sm md:text-base text-black font-mono font-black" id="email-text">${profile.email}</span>
                </div>
              </div>
              <button 
                class="copy-btn px-4 py-2 bg-pop-yellow text-black border-2 border-black font-heading font-black text-xs shadow-[2px_2px_0px_#000] hover:bg-pop-pink hover:scale-105 transition duration-150 cursor-pointer"
                data-copy-target="email-text"
              >
                คัดลอก
              </button>
            </div>

            <!-- LINE Card -->
            <div class="polaroid-card polaroid-left-slight bg-paper-cream border-4 border-black p-5 shadow-pop-black flex items-center justify-between gap-4 cursor-pointer text-black">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 border-2 border-black bg-pop-cyan flex items-center justify-center text-black shadow-[2px_2px_0px_#000] font-heading font-black">
                  💬
                </div>
                <div>
                  <span class="text-[10px] text-pop-navy font-black uppercase tracking-wider block">LINE ID</span>
                  <span class="text-base text-black font-mono font-black" id="line-text">${profile.line}</span>
                </div>
              </div>
              <button 
                class="copy-btn px-4 py-2 bg-pop-pink text-black border-2 border-black font-heading font-black text-xs shadow-[2px_2px_0px_#000] hover:bg-pop-yellow hover:scale-105 transition duration-150 cursor-pointer"
                data-copy-target="line-text"
              >
                คัดลอก
              </button>
            </div>

          </div>

          <!-- Social links / Creative handles -->
          <div class="polaroid-card polaroid-right-slight bg-paper-cream border-4 border-black p-6 md:p-8 shadow-pop-navy text-black cursor-pointer">
            <h3 class="font-heading font-black text-xl tracking-wider text-black mb-6">// ONLINE PROFILES</h3>
            
            <p class="text-slate-800 text-sm md:text-base leading-relaxed mb-8 font-medium">
              สามารถรับชมผลงานวิดีโอเพิ่มเติม หรือพูดคุยแลกเปลี่ยนผลงานการสร้างสรรค์ของผมผ่านทางช่องทางโซเชียลมีเดียต่อไปนี้ได้ครับ
            </p>

            <div class="grid grid-cols-2 gap-4">
              <!-- Instagram -->
              <a 
                href="https://www.instagram.com/thanadol_newd/" 
                target="_blank" 
                class="flex items-center gap-3 p-4 bg-white hover:bg-pop-pink/10 border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition duration-150"
              >
                <div class="text-pop-pink">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span class="text-xs font-black tracking-wider text-black uppercase font-heading">INSTAGRAM</span>
              </a>

              <!-- Facebook -->
              <a 
                href="https://www.facebook.com/miko.linka.75" 
                target="_blank" 
                class="flex items-center gap-3 p-4 bg-white hover:bg-pop-cyan/10 border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition duration-150"
              >
                <div class="text-pop-navy">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <span class="text-xs font-black tracking-wider text-black uppercase font-heading">FACEBOOK</span>
              </a>


              <!-- YouTube -->
              <a 
                href="https://www.youtube.com/@%E0%B8%81%E0%B8%B8%E0%B9%8A%E0%B8%A2%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B8%94%E0%B8%B1%E0%B8%81%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99" 
                target="_blank" 
                class="flex items-center gap-3 p-4 bg-white hover:bg-pop-red/10 border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition duration-150"
              >
                <div class="text-pop-red">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span class="text-xs font-black tracking-wider text-black uppercase font-heading">กุ๊ย โปรดักชั่น</span>
              </a>
        </div>
      </div>
    </section>
  `;
}
