export function Modal() {
  return `
    <div id="project-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-primary/95 opacity-0 pointer-events-none transition-all duration-300 backdrop-blur-sm">
      <!-- Modal Content Wrapper (Scrapbook Polaroid Card style) -->
      <div id="modal-wrapper" class="relative w-full max-w-2xl bg-paper-cream border-4 border-black p-5 shadow-pop-black transition-all duration-300 scale-95 opacity-0 flex flex-col justify-between text-black">
        
        <!-- Close Button (Top Right Overlay) -->
        <button id="modal-close" class="absolute top-4 right-4 z-10 w-10 h-10 border-2 border-black bg-pop-pink hover:bg-pop-yellow text-black flex items-center justify-center transition duration-150 cursor-pointer shadow-[2px_2px_0px_#000]">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Image Container -->
        <div class="flex justify-center mb-6 w-full">
          <div class="relative bg-pop-navy border-3 border-black overflow-hidden shadow-[2px_2px_0px_#000]">
            <img id="modal-img" src="" alt="" class="max-w-full max-h-[60vh] md:max-h-[65vh] block object-contain" />
          </div>
        </div>

        <!-- Details -->
        <div>
          <!-- Dynamic Role Badges -->
          <div id="modal-roles" class="flex flex-wrap gap-2 mb-4">
          </div>
          
          <h3 id="modal-title" class="font-heading font-black text-2xl uppercase tracking-wider text-black mb-3">
            Project Title
          </h3>
          
          <p id="modal-description" class="text-sm text-slate-800 font-medium leading-relaxed mb-6">
            Description details will go here...
          </p>

          <div class="flex justify-between items-center gap-4 border-t-3 border-black pt-6">
            <!-- View Live Link Button -->
            <a 
              id="modal-link" 
              href="" 
              target="_blank" 
              class="inline-flex items-center gap-2 px-6 py-3 border-2 border-black bg-pop-yellow text-black font-heading font-black text-xs uppercase shadow-[2.5px_2.5px_0px_#000] hover:bg-pop-pink hover:scale-105 transition duration-150"
            >
              <span>ดูผลงานจริง</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            <!-- Heart Like Button -->
            <button 
              id="modal-like-btn" 
              class="inline-flex items-center gap-2 px-6 py-3 border-2 border-black bg-pop-pink text-black font-heading font-black text-xs uppercase shadow-[2.5px_2.5px_0px_#000] hover:bg-pop-yellow hover:scale-105 transition duration-150 cursor-pointer"
            >
              <svg id="heart-icon" class="w-4 h-4 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span id="like-text">ถูกใจสิ่งนี้</span>
            </button>
            
            <button 
              id="modal-close-footer" 
              class="px-5 py-3 border-2 border-black bg-white text-black hover:bg-pop-pink/10 text-xs font-heading font-black uppercase shadow-[2.5px_2.5px_0px_#000] transition duration-150 cursor-pointer"
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>

      </div>
    </div>
  `;
}
