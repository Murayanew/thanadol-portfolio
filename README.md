# Thanadol Portfolio - Video Editor & Motion Graphic Artist

เว็บไซต์พอร์ตโฟลิโอแบบหน้าเดียว (Single-Page Responsive Portfolio) สำหรับ **ธนดล จิตรการนทีกิจ (Thanadol Jitkarnnateekit)** นักตัดต่อวิดีโอและโมชันกราฟิกอาร์ติสต์ พัฒนาโดยใช้เทคโนโลยี **Vite + Vanilla JS + Tailwind CSS v4**

## โครงสร้างโครงการ (Project Structure)
```text
thanadol-portfolio/
├── public/                 # เก็บไฟล์ static assets เช่น รูปภาพ
│   └── assets/             # รูปภาพโปรไฟล์และภาพพอร์ตโฟลิโอ (.png/.jpg)
├── src/
│   ├── components/         # คอมโพเนนต์แชร์ เช่น Navbar, Modal
│   ├── data/
│   │   └── projects.js     # ไฟล์ฐานข้อมูลผลงานหลัก (ห้ามแก้โค้ด HTML/JS อื่น)
│   ├── sections/           # ส่วนการแสดงผลย่อย (Hero, About, Experience, etc.)
│   ├── main.js             # ไฟล์หลักประกอบและควบคุมเหตุการณ์ (Entrypoint)
│   └── style.css           # สไตล์ชีตรวม ตั้งค่าธีมสีและ L-corners
├── index.html              # ไฟล์ HTML หลักมีคีย์เวิร์ด SEO และ Meta Tags
├── package.json            # ไฟล์จัดการแพ็กเกจ Node.js
└── vite.config.js          # ไฟล์ตั้งค่าการบิวด์ของ Vite
```

---

## การรันโครงการบนระบบจำลอง (Local Development)

ตรวจสอบให้แน่ใจว่าติดตั้ง **Node.js (v18+)** แล้ว จากนั้นทำตามขั้นตอนด้านล่าง:

1. **ติดตั้ง Dependencies:**
   ```bash
   npm install
   ```

2. **เปิด Development Server:**
   ```bash
   npm run dev
   ```

3. **บิวด์เว็บเพื่องาน Production (ตรวจสอบความผิดพลาด):**
   ```bash
   npm run build
   ```

---

## วิธีเพิ่มผลงานใหม่ในหน้าพอร์ตโฟลิโอ

ระบบถูกสร้างขึ้นมาเพื่อให้ง่ายต่อการอัพเดทผลงานในอนาคต **โดยไม่จำเป็นต้องแก้ไขโค้ดโครงสร้าง HTML หรือ Component ใดๆ**
คุณเพียงแค่แก้ไขไฟล์ฐานข้อมูล [src/data/projects.js](file:///e:/antigravity/thanadol-portfolio/src/data/projects.js) เท่านั้น!

### ขั้นตอนการเพิ่มงาน:
1. นำไฟล์ภาพพรีวิวผลงาน (แนะนำอัตราส่วน 16:9 ขนาดประมาณ 640x360 หรือ 1280x720 พิกเซล) ไปใส่ไว้ในโฟลเดอร์ `public/assets/` เช่น `public/assets/project-new.png`
2. เปิดไฟล์ [src/data/projects.js](file:///e:/antigravity/thanadol-portfolio/src/data/projects.js)
3. เพิ่มอ็อบเจกต์ (Object) เข้าไปในอาร์เรย์ `projects` ด้านบนสุดหรือด้านล่างสุด ตามฟอร์แมตนี้:

```javascript
{
  title: "ชื่อโปรเจกต์งานโฆษณา / ผลงานตัดต่อใหม่",
  role: ["ตำแหน่งของคุณในโปรเจกต์", "เช่น Video Editor", "Motion Graphic"],
  thumbnail: "assets/project-new.png", // อ้างอิงพาธจากโฟลเดอร์ public
  link: "https://vimeo.com/xxxxx" // ลิงก์ไปยังวิดีโอผลงานจริง (เช่น YouTube/Vimeo)
}
```

> [!NOTE]
> - หากงานนั้น**ไม่มีลิงก์ปลายทาง** (เช่น เป็นดราฟต์ลับหรือโชว์แค่รูปภาพ) ให้คุณใส่ `link: ""` หรือเว้นว่างไว้ ระบบจะทำหน้าที่ซ่อนปุ่ม "ดูผลงานจริง" ในป็อปอัป Modal ให้โดยอัตโนมัติเพื่อป้องกันลิงก์เสีย

---

## การอัปโหลดเผยแพร่ (Deployment Guide)

### 1. deploy บน Vercel (แนะนำ)
- ลงทะเบียนใช้งานบน [Vercel.com](https://vercel.com)
- เชื่อมต่อ Repository ของ GitHub หรือทำการอัปโหลดโฟลเดอร์นี้ตรงๆ
- Vercel จะตรวจจับการตั้งค่าของ Vite และทำการ Deploy ให้อัตโนมัติ

### 2. deploy บน GitHub Pages
มีไฟล์ `vite.config.js` ที่ตั้งค่า `base: './'` ไว้เรียบร้อยแล้ว ทำให้สามารถทำตามขั้นตอนได้ดังนี้:
1. ติดตั้งแพ็กเกจ `gh-pages` เพื่อช่วยอัปโหลด:
   ```bash
   npm install gh-pages --save-dev
   ```
2. เพิ่มสคริปต์ใน `package.json` ที่หัวข้อ `"scripts"`:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. รันคำสั่ง deploy:
   ```bash
   npm run deploy
   ```
