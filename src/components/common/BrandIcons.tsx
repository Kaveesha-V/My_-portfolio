import React from 'react';

interface BrandIconProps {
  className?: string;
}

// 1. React - Official React Cyan #61DAFB
export const ReactBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
  </svg>
);

// 2. HTML5 - Official HTML5 Orange #E34F26
export const HtmlBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.8 2H20.2L18.7 18.8L12 20.8L5.3 18.8L3.8 2Z" fill="#E34F26" />
    <path d="M12 3.6V19.1L17.4 17.6L18.5 3.6H12Z" fill="#EF652A" />
    <path d="M7.6 6.8H16.4L16.2 9.2H10.1L10.3 11.6H15.9L15.3 15.6L12 16.5L8.7 15.6L8.5 13.3H6.2L6.6 17.8L12 19.3L17.4 17.8L18.3 6.8H7.6Z" fill="white" />
  </svg>
);

// 3. CSS3 - Official CSS3 Blue #1572B6
export const CssBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.8 2H20.2L18.7 18.8L12 20.8L5.3 18.8L3.8 2Z" fill="#1572B6" />
    <path d="M12 3.6V19.1L17.4 17.6L18.5 3.6H12Z" fill="#33A9DC" />
    <path d="M7.6 6.8H16.4L16.2 9.2H10.1L10.3 11.6H15.9L15.3 15.6L12 16.5L8.7 15.6L8.5 13.3H6.2L6.6 17.8L12 19.3L17.4 17.8L18.3 6.8H7.6Z" fill="white" />
  </svg>
);

// 4. Python - Official Python Blue #3776AB & Yellow #FFD43B
export const PythonBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.8 2C6.8 2 7 4.2 7 4.2V6.4H12.2V7.1H5.1C5.1 5.1 2.8 5.6 2.8 10.6C2.8 15.6 4.9 15.3 4.9 15.3H6.4V13.1C6.4 13.1 6.3 10.5 8.9 10.5H14.1C14.1 10.5 16.5 10.6 16.5 8.3V4.2C16.5 4.2 16.7 2 11.8 2ZM9.5 3.5C10 3.5 10.4 3.9 10.4 4.4C10.4 4.9 10 5.3 9.5 5.3C9 5.3 8.6 4.9 8.6 4.4C8.6 3.9 9 3.5 9.5 3.5Z" fill="#3776AB" />
    <path d="M12.2 22C17.2 22 17 19.8 17 19.8V17.6H11.8V16.9H18.9C18.9 16.9 21.2 16.4 21.2 11.4C21.2 6.4 19.1 6.7 19.1 6.7H17.6V8.9C17.6 8.9 17.7 11.5 15.1 11.5H9.9C9.9 11.5 7.5 11.4 7.5 13.7V17.8C7.5 17.8 7.3 22 12.2 22ZM14.5 20.5C14 20.5 13.6 20.1 13.6 19.6C13.6 19.1 14 18.7 14.5 18.7C15 18.7 15.4 19.1 15.4 19.6C15.4 20.1 15 20.5 14.5 20.5Z" fill="#FFD43B" />
  </svg>
);

// 5. C++ - Official ISO C++ Blue Hexagon Logo #00599C
export const CPlusPlusBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2.5 7.5V16.5L12 22L21.5 16.5V7.5L12 2Z" fill="#00599C" />
    <path d="M8.5 14.5C7 14.5 5.8 13.3 5.8 11.8C5.8 10.3 7 9.1 8.5 9.1C9.6 9.1 10.5 9.7 11 10.6L9.5 11.4C9.3 11 8.9 10.7 8.5 10.7C7.9 10.7 7.4 11.2 7.4 11.8C7.4 12.4 7.9 12.9 8.5 12.9C8.9 12.9 9.3 12.6 9.5 12.2L11 13C10.5 13.9 9.6 14.5 8.5 14.5ZM13 12.4H14.2V13.6H15.4V12.4H16.6V11.2H15.4V10H14.2V11.2H13V12.4ZM17.2 12.4H18.4V13.6H19.6V12.4H20.8V11.2H19.6V10H18.4V11.2H17.2V12.4Z" fill="white" />
  </svg>
);

// 6. Java - Official Oracle Java Coffee Logo #5382A1 & #ED8B00
export const JavaBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.8 18.8C8.8 18.8 9.9 19.3 12.2 19.3C14.7 19.3 16.4 18.3 16.4 18.3C16.4 18.3 15.6 18.9 13.7 19.1C11.6 19.4 9.6 19.1 8.8 18.8Z" fill="#ED8B00" />
    <path d="M7.7 16.3C7.7 16.3 9.2 17 12.3 17C15.2 17 17 16.2 17 16.2C17 16.2 16 16.8 13.8 17.1C11.2 17.4 8.7 17 7.7 16.3Z" fill="#ED8B00" />
    <path d="M14.5 13.8C15.8 14.5 17.3 14.7 17.3 14.7C17.3 14.7 16.2 15 14.4 14.8C12.3 14.6 10.3 13.8 8.4 14.4C8.4 14.4 9.6 13.7 12.1 13.7C13 13.7 13.9 13.7 14.5 13.8Z" fill="#ED8B00" />
    <path d="M12.9 2.5C12.9 2.5 14.5 4.3 12.5 7.1C10.7 9.5 12.9 11.2 12.9 11.2C12.9 11.2 10.3 10.3 11 8.1C11.7 5.7 12.9 2.5 12.9 2.5Z" fill="#5382A1" />
    <path d="M15.4 6C15.4 6 16.4 7.3 14.7 9.8C13.4 11.6 15 13 15 13C15 13 13.4 12.1 14.2 10.4C15 8.5 15.4 6 15.4 6Z" fill="#5382A1" />
  </svg>
);

// 7. Linux - Official Tux / Yellow #FCC624 & Black #111827
export const LinuxBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.2 2 7 4.2 7 7C7 8.2 7.4 9.3 8.1 10.1C6.3 11.5 5 13.6 5 16C5 19.3 8.1 22 12 22C15.9 22 19 19.3 19 16C19 13.6 17.7 11.5 15.9 10.1C16.6 9.3 17 8.2 17 7C17 4.2 14.8 2 12 2Z" fill="#FCC624" />
    <circle cx="10" cy="6.5" r="1.2" fill="#111827" />
    <circle cx="14" cy="6.5" r="1.2" fill="#111827" />
    <path d="M10.5 8.5C10.5 8.5 11.2 9.8 12 9.8C12.8 9.8 13.5 8.5 13.5 8.5H10.5Z" fill="#E65100" />
    <path d="M8.5 14C8.5 14 10 17.5 12 17.5C14 17.5 15.5 14 15.5 14C15.5 14 14.5 19 12 19C9.5 19 8.5 14 8.5 14Z" fill="#FFFFFF" />
  </svg>
);

// 8. MySQL - Official MySQL Dolphin Emblem #00758F & #F29111
export const MySqlBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C7 3 3 5 3 7.5V16.5C3 19 7 21 12 21C17 21 21 19 21 16.5V7.5C21 5 17 3 12 3Z" fill="#00758F" />
    <ellipse cx="12" cy="7.5" rx="9" ry="4.5" fill="#0089A5" />
    <path d="M17.5 10C17.5 10 16 9 14 10.5C12.5 11.6 11 14 11 16C11 16.5 11.5 17 12 17C13 17 15 15.5 16 14C17 12.5 17.5 10 17.5 10Z" fill="#F29111" />
  </svg>
);

// 9. PostgreSQL - Official PostgreSQL Elephant Logo #4169E1 & #336791
export const PostgreSqlBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="#336791" />
    <path d="M15.5 8.5C14.2 7.5 12.5 7 10.8 7.3C9 7.6 7.5 8.8 6.8 10.5C6.1 12.2 6.3 14.1 7.4 15.6C8.5 17.1 10.2 18 12 18C14 18 15.8 16.9 16.8 15.2C17.8 13.5 17.9 11.4 17 9.8L15.5 8.5Z" fill="#4169E1" />
    <circle cx="10" cy="10" r="1.2" fill="#FFFFFF" />
    <path d="M12 14C13 14 14.5 14.8 15 16" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// 10. SQL - Official Database SQL Icon #336791
export const SqlBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C7 3 3 4.8 3 7V17C3 19.2 7 21 12 21C17 21 21 19.2 21 17V7C21 4.8 17 3 12 3Z" fill="#336791" />
    <path d="M21 7C21 9.2 17 11 12 11C7 11 3 9.2 3 7" stroke="#60A5FA" strokeWidth="1.5" />
    <path d="M21 12C21 14.2 17 16 12 16C7 16 3 14.2 3 12" stroke="#60A5FA" strokeWidth="1.5" />
  </svg>
);

// 11. Adobe Photoshop - Official Ps Emblem #31A8FF & #001E36
export const PhotoshopBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" x="2" y="2" rx="4" fill="#001E36" stroke="#31A8FF" strokeWidth="1.5" />
    <path d="M6.5 7H9.5C11 7 12 7.8 12 9.2C12 10.6 11 11.5 9.5 11.5H8V16H6.5V7ZM8 8.5V10H9.3C10.1 10 10.6 9.6 10.6 9.2C10.6 8.8 10.1 8.5 9.3 8.5H8Z" fill="#31A8FF" />
    <path d="M13 16C12.5 15.6 12.2 14.9 12.2 14.1C12.2 12.8 13.2 12.1 14.7 12.1C15.3 12.1 15.8 12.2 16.2 12.4V12.2C16.2 11.5 15.6 11.1 14.7 11.1C14 11.1 13.4 11.4 13.1 11.7L12.4 10.7C13 10.2 13.9 9.8 15 9.8C16.8 9.8 17.7 10.8 17.7 12.4V16H16.2V15.2C15.7 15.8 14.8 16.2 13.9 16.2C13.5 16.2 13.2 16.1 13 16ZM16.2 13.6C15.8 13.4 15.4 13.3 14.9 13.3C14.1 13.3 13.6 13.6 13.6 14.2C13.6 14.7 14 15 14.6 15C15.5 15 16.2 14.5 16.2 13.6Z" fill="#31A8FF" />
  </svg>
);

// 12. Adobe Illustrator - Official Ai Emblem #FF9A00 & #330000
export const IllustratorBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" x="2" y="2" rx="4" fill="#330000" stroke="#FF9A00" strokeWidth="1.5" />
    <path d="M6.2 16L9.4 7H11L14.2 16H12.5L11.8 13.8H8.6L7.9 16H6.2ZM9.1 12.4H11.3L10.2 9.1L9.1 12.4Z" fill="#FF9A00" />
    <path d="M15.5 8.2C16 8.2 16.4 7.8 16.4 7.3C16.4 6.8 16 6.4 15.5 6.4C15 6.4 14.6 6.8 14.6 7.3C14.6 7.8 15 8.2 15.5 8.2ZM14.8 16H16.3V9.8H14.8V16Z" fill="#FF9A00" />
  </svg>
);

// 13. Adobe After Effects - Official Ae Emblem #9999FF & #00005B
export const AfterEffectsBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" x="2" y="2" rx="4" fill="#00005B" stroke="#9999FF" strokeWidth="1.5" />
    <path d="M6 16L9.2 7H10.8L14 16H12.3L11.6 13.8H8.4L7.7 16H6ZM8.9 12.4H11.1L10 9.1L8.9 12.4Z" fill="#9999FF" />
    <path d="M15 13.5C15 15.1 16.1 16.1 17.7 16.1C18.6 16.1 19.4 15.7 19.8 15.3L19.2 14.2C18.8 14.5 18.3 14.8 17.7 14.8C16.8 14.8 16.3 14.2 16.3 13.4H20V12.7C20 11 18.9 9.8 17.4 9.8C15.9 9.8 15 11.1 15 13.5ZM17.4 11.1C18.2 11.1 18.6 11.7 18.6 12.4H16.3C16.4 11.6 16.8 11.1 17.4 11.1Z" fill="#9999FF" />
  </svg>
);

// 14. Canva Pro - Official Canva Gradient Emblem #00C4CC & #7D2AE8
export const CanvaBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" x="2" y="2" rx="6" fill="url(#canvaGrad)" />
    <path d="M14.8 8.2C13.2 8.2 12.1 9.3 12.1 11C12.1 13.5 15.2 13.6 15.2 14.8C15.2 15.4 14.5 15.8 13.6 15.8C12.4 15.8 11.3 15.1 10.7 14.4L9.5 15.8C10.5 17 12 17.8 13.8 17.8C16 17.8 17.5 16.5 17.5 14.6C17.5 11.8 14.3 11.9 14.3 10.9C14.3 10.4 14.8 10.1 15.5 10.1C16.4 10.1 17.3 10.6 18 11.2L19 9.7C18 8.7 16.6 8.2 14.8 8.2Z" fill="white" />
    <defs>
      <linearGradient id="canvaGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00C4CC" />
        <stop offset="1" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
  </svg>
);

// 15. Graphic Designing Palette - Official Design Emblem #EC4899 & #8B5CF6
export const DesignPaletteBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C13.4 22 14.5 20.9 14.5 19.5C14.5 18.8 14.2 18.2 13.7 17.7C13.3 17.3 13 16.7 13 16C13 14.6 14.1 13.5 15.5 13.5H18C20.2 13.5 22 11.7 22 9.5C22 5.4 17.5 2 12 2Z" fill="url(#paletteGrad)" />
    <circle cx="6.5" cy="11.5" r="1.5" fill="#FF5252" />
    <circle cx="9.5" cy="6.5" r="1.5" fill="#FFD700" />
    <circle cx="14.5" cy="6.5" r="1.5" fill="#4CAF50" />
    <circle cx="17.5" cy="10.5" r="1.5" fill="#00E5FF" />
    <defs>
      <linearGradient id="paletteGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
  </svg>
);

// 16. Video Editing - #EA77FF
export const VideoEditingBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="16" x="2" y="4" rx="3" fill="#181824" stroke="#EA77FF" strokeWidth="1.5" />
    <path d="M9.5 8.5L16 12L9.5 15.5V8.5Z" fill="#EA77FF" />
  </svg>
);

// 17. Mobile App Dev / Android - Official Android Green #3DDC84
export const AndroidBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V10H6Z" fill="#3DDC84" />
    <path d="M7.5 6L6 3.5M16.5 6L18 3.5" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 9C6 6.2 8.7 4 12 4C15.3 4 18 6.2 18 9H6Z" fill="#3DDC84" />
    <circle cx="9" cy="7" r="1" fill="white" />
    <circle cx="15" cy="7" r="1" fill="white" />
  </svg>
);

// 18. Antigravity AI - Official AI Bot #00F0FF & #A855F7
export const AntigravityBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" fill="url(#antiGrad)" />
    <path d="M12 6L15.5 12L12 18L8.5 12L12 6Z" fill="#090A10" />
    <circle cx="12" cy="12" r="2" fill="#00F0FF" />
    <defs>
      <linearGradient id="antiGrad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00F0FF" />
        <stop offset="1" stopColor="#A855F7" />
      </linearGradient>
    </defs>
  </svg>
);

// 19. Web Development Globe - #38BDF8
export const WebDevBrandIcon: React.FC<BrandIconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#38BDF8" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#38BDF8" strokeWidth="1.5" />
    <path d="M3 12H21" stroke="#38BDF8" strokeWidth="1.5" />
  </svg>
);
