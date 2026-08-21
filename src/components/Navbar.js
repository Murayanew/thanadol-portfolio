export function Navbar() {
  return `
    <header id="main-header" class="sticky top-0 z-50 w-full bg-paper-cream border-b-4 border-black text-black py-3 transition-all duration-300">
      <div class="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#profile" class="font-heading font-black tracking-wider text-xl md:text-2xl text-black hover:text-pop-pink transition duration-150 flex flex-col leading-none">
          <span>ธนดล.J</span>
          <span class="text-pop-navy font-bold font-body text-[10px] md:text-xs tracking-wider uppercase mt-1">// EDITOR & MOTION</span>
        </a>
        
        <nav class="flex items-center gap-1.5 md:gap-3 bg-white border-3 border-black rounded-full px-2 py-1 shadow-[3px_3px_0px_#000]">
          <a href="#profile" class="nav-link px-3 md:px-5 py-1 rounded-full text-xs md:text-sm font-semibold transition duration-150 text-black border-2 border-transparent hover:border-black hover:bg-pop-pink/10" data-section="profile">Profile</a>
          <a href="#experience" class="nav-link px-3 md:px-5 py-1 rounded-full text-xs md:text-sm font-semibold transition duration-150 text-black border-2 border-transparent hover:border-black hover:bg-pop-pink/10" data-section="experience">Experience</a>
          <a href="#portfolio" class="nav-link px-3 md:px-5 py-1 rounded-full text-xs md:text-sm font-semibold transition duration-150 text-black border-2 border-transparent hover:border-black hover:bg-pop-pink/10" data-section="portfolio">Portfolio</a>
          <a href="#contact" class="nav-link px-3 md:px-5 py-1 rounded-full text-xs md:text-sm font-semibold transition duration-150 text-black border-2 border-transparent hover:border-black hover:bg-pop-pink/10" data-section="contact">Contact</a>
        </nav>
      </div>
    </header>
  `;
}
