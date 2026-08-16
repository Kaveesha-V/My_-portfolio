/**
 * CV PDF Generator matching the user-uploaded template layout.
 * Generates an exact, pixel-perfect two-column CV PDF document for Kaveesha Vimukthi.
 */

export function generateResumePdf() {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to download your resume PDF.');
    return;
  }

  const profileImgUrl = window.location.origin + '/profile.jpg';

  const cvHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kaveesha Vimukthi - Resume CV</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 0;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #111827;
      background-color: #e2e8f0;
      line-height: 1.35;
      font-size: 11px;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    /* Screen Preview Control Bar */
    .preview-bar {
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: #0f172a;
      color: #ffffff;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    .preview-bar .title {
      font-size: 14px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .preview-bar .btn-group {
      display: flex;
      gap: 12px;
    }
    .preview-bar button {
      cursor: pointer;
      font-size: 13px;
      font-weight: 700;
      padding: 8px 18px;
      border-radius: 8px;
      border: none;
      transition: all 0.2s ease;
    }
    .btn-print {
      background: #88ec11;
      color: #0b0b0c;
    }
    .btn-print:hover {
      background: #70e000;
      transform: scale(1.03);
    }
    .btn-close {
      background: rgba(255,255,255,0.15);
      color: #ffffff;
    }
    .btn-close:hover {
      background: rgba(255,255,255,0.25);
    }

    .cv-wrapper {
      padding: 20px 0;
      display: flex;
      justify-content: center;
    }

    /* A4 Document Container */
    .cv-container {
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      background: #ffffff;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }

    /* TOP HEADER SECTION */
    .cv-header {
      display: flex;
      width: 100%;
      height: 105px;
      background-color: #193874;
      position: relative;
    }
    .header-left-bg {
      width: 32%;
      height: 100%;
      background-color: #193874;
      position: relative;
    }
    .header-right-bg {
      width: 68%;
      height: 100%;
      background-color: #193874;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 20px;
      padding-right: 20px;
    }
    .header-name {
      color: #ffffff;
      font-size: 26px;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      line-height: 1.15;
      margin-bottom: 5px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    .header-subtitle {
      color: #f1f5f9;
      font-size: 11.5px;
      font-weight: 500;
      letter-spacing: 0.02em;
    }

    /* Circular Avatar Overlapping */
    .avatar-wrapper {
      position: absolute;
      top: 22px;
      left: 22px;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background-color: #193874;
      border: 4px solid #193874;
      overflow: hidden;
      z-index: 20;
      box-shadow: 0 4px 14px rgba(0,0,0,0.25);
    }
    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 15%;
      border-radius: 50%;
    }

    /* MAIN BODY - TWO COLUMNS */
    .cv-body {
      display: flex;
      flex: 1;
      height: calc(297mm - 105px);
    }

    /* LEFT SIDEBAR COLUMN */
    .left-sidebar {
      width: 32%;
      background-color: #b7c8e2;
      padding: 68px 16px 16px 16px;
      display: flex;
      flex-direction: column;
      gap: 13px;
      color: #111827;
    }

    .sidebar-section {
      display: flex;
      flex-direction: column;
    }
    .sidebar-heading {
      font-size: 13px;
      font-weight: 900;
      color: #111827;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      line-height: 1.2;
    }
    .sidebar-divider {
      height: 1.5px;
      background-color: #111827;
      margin-top: 3px;
      margin-bottom: 7px;
      width: 100%;
    }

    /* Contact Details */
    .contact-item {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
      font-size: 10px;
      color: #111827;
      font-weight: 600;
      word-break: break-word;
      line-height: 1.25;
    }
    .contact-icon {
      width: 13px;
      height: 13px;
      fill: #111827;
      flex-shrink: 0;
    }

    /* Bulleted Lists in Left Sidebar */
    .sidebar-list {
      list-style-type: disc;
      padding-left: 14px;
    }
    .sidebar-list li {
      font-size: 10.5px;
      color: #111827;
      font-weight: 600;
      margin-bottom: 3.5px;
      line-height: 1.25;
    }

    /* Reference entries */
    .ref-entry {
      margin-bottom: 6px;
    }
    .ref-name {
      font-size: 10.5px;
      font-weight: 800;
      color: #111827;
      line-height: 1.2;
    }
    .ref-title {
      font-size: 9.5px;
      color: #1f2937;
      font-weight: 500;
      line-height: 1.2;
    }
    .ref-org {
      font-size: 9.5px;
      color: #1f2937;
      font-weight: 500;
      line-height: 1.2;
    }
    .ref-contact {
      font-size: 9.5px;
      color: #1f2937;
      font-weight: 500;
      line-height: 1.2;
    }

    /* RIGHT CONTENT COLUMN */
    .right-content {
      width: 68%;
      background-color: #ffffff;
      padding: 16px 20px 16px 14px;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    /* Continuous Timeline Container */
    .timeline-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    /* Vertical Continuous Line */
    .timeline-vertical-line {
      position: absolute;
      top: 14px;
      bottom: 24px;
      left: 12px;
      width: 1.5px;
      background-color: #4b5563;
      z-index: 1;
    }

    /* Timeline Section Item */
    .tl-section {
      position: relative;
      display: flex;
      flex-direction: column;
      z-index: 2;
    }

    /* Section Header with Icon Badge and Title */
    .tl-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 6px;
    }
    .tl-badge {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #111827;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      z-index: 3;
      box-shadow: 0 0 0 2px #ffffff;
    }
    .tl-badge svg {
      width: 13px;
      height: 13px;
      fill: #ffffff;
    }
    .tl-title-wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .tl-title {
      font-size: 13px;
      font-weight: 900;
      color: #111827;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      line-height: 1.2;
    }
    .tl-divider {
      height: 1.5px;
      background-color: #111827;
      width: 100%;
      margin-top: 3px;
    }

    /* Timeline Section Body */
    .tl-body {
      padding-left: 36px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    /* Timeline Sub-node with hollow circular bullet */
    .tl-node-item {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 2px;
    }
    .tl-node-dot {
      position: absolute;
      left: -27.5px;
      top: 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1.5px solid #4b5563;
      background-color: #ffffff;
      z-index: 3;
    }

    .tl-row-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      width: 100%;
    }
    .tl-item-title {
      font-size: 11.5px;
      font-weight: 800;
      color: #111827;
      line-height: 1.2;
    }
    .tl-item-date {
      font-size: 10.5px;
      font-weight: 700;
      color: #111827;
      text-align: right;
      white-space: nowrap;
    }
    .tl-item-subtitle {
      font-size: 10.5px;
      font-weight: 500;
      color: #1f2937;
      line-height: 1.25;
      margin-top: 1px;
    }
    .tl-item-desc {
      font-size: 10.5px;
      font-weight: 400;
      color: #1f2937;
      line-height: 1.35;
      margin-top: 1px;
    }

    .tl-bullets {
      list-style-type: disc;
      padding-left: 14px;
      margin-top: 2px;
    }
    .tl-bullets li {
      font-size: 10.5px;
      color: #1f2937;
      font-weight: 500;
      line-height: 1.3;
      margin-bottom: 2px;
    }

    /* Print Specific Rules */
    @media print {
      body {
        background-color: #ffffff;
        margin: 0;
        padding: 0;
      }
      .preview-bar {
        display: none !important;
      }
      .cv-wrapper {
        padding: 0;
      }
      .cv-container {
        box-shadow: none;
        width: 210mm;
        height: 297mm;
        max-height: 297mm;
        margin: 0;
        page-break-after: avoid;
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>

  <!-- Screen Top Control Bar (Hidden on Print) -->
  <div class="preview-bar">
    <div class="title">
      <span>📄 Kaveesha Vimukthi - Resume CV Preview</span>
    </div>
    <div class="btn-group">
      <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
      <button class="btn-close" onclick="window.close()">✕ Close</button>
    </div>
  </div>

  <div class="cv-wrapper">
    <div class="cv-container">
      
      <!-- TOP BLUE BANNER -->
      <div class="cv-header">
        <div class="header-left-bg"></div>
        <div class="header-right-bg">
          <h1 class="header-name">KAVEESHA VIMUKTHI</h1>
          <p class="header-subtitle">BSc (Hons) in IT | Aspiring Cybersecurity Analyst(Digital Forensic)</p>
        </div>

        <!-- Overlapping Profile Avatar -->
        <div class="avatar-wrapper">
          <img
            src="${profileImgUrl}"
            alt="Kaveesha Vimukthi"
            class="avatar-img"
            onerror="this.src='/profile.jpg'"
          />
        </div>
      </div>

      <!-- MAIN BODY (LEFT SIDEBAR & RIGHT CONTENT) -->
      <div class="cv-body">
        
        <!-- LEFT SIDEBAR -->
        <div class="left-sidebar">
          
          <!-- CONTACT -->
          <div class="sidebar-section">
            <h2 class="sidebar-heading">CONTACT</h2>
            <div class="sidebar-divider"></div>
            
            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/>
              </svg>
              <span>+94 702293667</span>
            </div>

            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>kaveeshavimukthi688@gmail.com</span>
            </div>

            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>No 60LA 1 ,Dambagahawela , Pallebedda</span>
            </div>

            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>https://bit.ly/kaveeshavimukthi_LinkedIn</span>
            </div>
          </div>

          <!-- TECHNICAL SKILLS -->
          <div class="sidebar-section">
            <h2 class="sidebar-heading">TECHNICAL SKILLS</h2>
            <div class="sidebar-divider"></div>
            <ul class="sidebar-list">
              <li>Java (Still learning)</li>
              <li>C++ (Still Learning)</li>
              <li>SQL (Still Learning)</li>
              <li>HTML (Still Learning)</li>
              <li>Web Development</li>
              <li>Mobile App Development (Still Learning)</li>
              <li>Graphic Designing</li>
              <li>Video Editing</li>
              <li>Canva Designing</li>
            </ul>
          </div>

          <!-- SOFT SKILLS -->
          <div class="sidebar-section">
            <h2 class="sidebar-heading">SOFT SKILLS</h2>
            <div class="sidebar-divider"></div>
            <ul class="sidebar-list">
              <li>Public Relations</li>
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Coordination(Event)</li>
            </ul>
          </div>

          <!-- LANGUAGES -->
          <div class="sidebar-section">
            <h2 class="sidebar-heading">LANGUAGES</h2>
            <div class="sidebar-divider"></div>
            <ul class="sidebar-list">
              <li>Sinhala(Native)</li>
              <li>English (Intermediate)</li>
            </ul>
          </div>

          <!-- REFERENCE -->
          <div class="sidebar-section">
            <h2 class="sidebar-heading">REFERENCE</h2>
            <div class="sidebar-divider"></div>
            
            <div class="ref-entry">
              <div class="ref-name">Dr.Dilani Wickramaarchchi</div>
              <div class="ref-title">Senior Lecturer</div>
              <div class="ref-org">University of Kelaniya Sri Lanka</div>
              <div class="ref-contact">+94 718032753</div>
              <div class="ref-contact">dilani@kln.ac.lk</div>
            </div>

            <div class="ref-entry">
              <div class="ref-name">Ms.Charitha Ishadhi</div>
              <div class="ref-title">Trainee Bank Manager</div>
              <div class="ref-org">Bank Of Ceylon Sri Lanka</div>
              <div class="ref-contact">+94 712355305</div>
              <div class="ref-contact">Charitha.ishadi@gmail.com</div>
            </div>
          </div>

        </div>

        <!-- RIGHT CONTENT (TIMELINE) -->
        <div class="right-content">
          <div class="timeline-wrap">
            <div class="timeline-vertical-line"></div>

            <!-- SECTION 1: PROFILE -->
            <div class="tl-section">
              <div class="tl-header">
                <div class="tl-badge">
                  <!-- User Profile Icon -->
                  <svg viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div class="tl-title-wrap">
                  <h2 class="tl-title">PROFILE</h2>
                  <div class="tl-divider"></div>
                </div>
              </div>
              <div class="tl-body">
                <p class="tl-item-desc" style="font-size: 11px; line-height: 1.45;">
                  BSc (Hons) in IT student at the University of Kelaniya (Industrial Management) . I am focused on Cybersecurity and Web Development and still learning more details of Java, C++ , and SQL. I enjoy solving complex problems, whether it's securing a network or coding game logic, and I’m looking to apply these skills in a practical environment.
                </p>
              </div>
            </div>

            <!-- SECTION 2: EDUCATION -->
            <div class="tl-section">
              <div class="tl-header">
                <div class="tl-badge">
                  <!-- Graduation Cap Icon -->
                  <svg viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                </div>
                <div class="tl-title-wrap">
                  <h2 class="tl-title">EDUCATION</h2>
                  <div class="tl-divider"></div>
                </div>
              </div>
              <div class="tl-body">
                
                <!-- Degree -->
                <div class="tl-node-item">
                  <div class="tl-node-dot"></div>
                  <div class="tl-row-header">
                    <span class="tl-item-title">Bachelor of Information Technology</span>
                    <span class="tl-item-date">2025-Present</span>
                  </div>
                  <span class="tl-item-subtitle">Department of Industrial Management | University of Kelaniya</span>
                </div>

                <!-- Google Cyber Security -->
                <div class="tl-node-item">
                  <div class="tl-node-dot"></div>
                  <div class="tl-row-header">
                    <span class="tl-item-title">Google Cyber Security</span>
                  </div>
                  <span class="tl-item-subtitle">Via Coursera</span>
                </div>

                <!-- Diploma -->
                <div class="tl-node-item">
                  <div class="tl-node-dot"></div>
                  <div class="tl-row-header">
                    <span class="tl-item-title">Diploma In English</span>
                    <span class="tl-item-date">2023-2024</span>
                  </div>
                  <span class="tl-item-subtitle">CODL | Sabaragamuwa University of Sri Lanka</span>
                </div>

              </div>
            </div>

            <!-- SECTION 3: WORK EXPERIENCE -->
            <div class="tl-section">
              <div class="tl-header">
                <div class="tl-badge">
                  <!-- Briefcase Icon -->
                  <svg viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                </div>
                <div class="tl-title-wrap">
                  <h2 class="tl-title">WORK EXPERIENCE</h2>
                  <div class="tl-divider"></div>
                </div>
              </div>
              <div class="tl-body">
                
                <div class="tl-node-item">
                  <div class="tl-node-dot"></div>
                  <div class="tl-row-header">
                    <span class="tl-item-title">Bank of Ceylon (BOC), Pallebedda</span>
                    <span class="tl-item-date">2024-2025</span>
                  </div>
                  <ul class="tl-bullets">
                    <li>Intern (School Leaver)</li>
                    <li>Gained experience in office operations and professional banking environments.</li>
                  </ul>
                </div>

              </div>
            </div>

            <!-- SECTION 4: PROJECTS -->
            <div class="tl-section">
              <div class="tl-header">
                <div class="tl-badge">
                  <!-- Projects Lightbulb/Idea Icon -->
                  <svg viewBox="0 0 24 24">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                  </svg>
                </div>
                <div class="tl-title-wrap">
                  <h2 class="tl-title">PROJECTS</h2>
                  <div class="tl-divider"></div>
                </div>
              </div>
              <div class="tl-body">
                
                <!-- 2D Game Develop -->
                <div class="tl-node-item">
                  <div class="tl-node-dot"></div>
                  <div class="tl-item-title">2D Game Develop</div>
                  <div class="tl-item-desc">Developed a 2D game in C++ using the raylib library</div>
                </div>

                <!-- Online Book Shop management System -->
                <div class="tl-node-item">
                  <div class="tl-node-dot"></div>
                  <div class="tl-item-title">Online Book Shop management System</div>
                  <div class="tl-item-desc">Developed an online bookshop management system using Java and SQL.</div>
                </div>

                <!-- Web Development Project -->
                <div class="tl-node-item">
                  <div class="tl-node-dot"></div>
                  <div class="tl-item-title">Web Development Project</div>
                  <div class="tl-item-desc">Developed responsive, scalable web applications.</div>
                </div>

              </div>
            </div>

            <!-- SECTION 5: EXTRACURRICULARS -->
            <div class="tl-section">
              <div class="tl-header">
                <div class="tl-badge">
                  <!-- Group / People Icon -->
                  <svg viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <div class="tl-title-wrap">
                  <h2 class="tl-title">EXTRACURRICULARS</h2>
                  <div class="tl-divider"></div>
                </div>
              </div>
              <div class="tl-body">
                
                <!-- Co-Director -->
                <div class="tl-node-item">
                  <div class="tl-node-dot"></div>
                  <div class="tl-item-title">Co-Director</div>
                  <div class="tl-item-subtitle">Digital Media Avenue | Rotaract UOK</div>
                </div>

                <!-- Member -->
                <div class="tl-node-item">
                  <div class="tl-node-dot"></div>
                  <div class="tl-item-title">Member</div>
                  <div class="tl-item-subtitle">Media Unit | IMSSA UOK</div>
                </div>

                <!-- Public Relation Coordinator -->
                <div class="tl-node-item">
                  <div class="tl-node-dot"></div>
                  <div class="tl-item-title">Public Relation Coordinator</div>
                  <div class="tl-item-subtitle">Rota Tomorrow Project- Team 06 | Rotaract UOK</div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>

  <script>
    // Automatic trigger after assets load
    window.onload = function() {
      // Optional slight delay so image renders completely
      setTimeout(function() {
        // window.print();
      }, 400);
    };
  </script>
</body>
</html>`;

  printWindow.document.open();
  printWindow.document.write(cvHtml);
  printWindow.document.close();
}
