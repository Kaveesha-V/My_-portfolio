/**
 * CV PDF Generator matching the user-uploaded template layout.
 * Generates a two-column CV PDF document for Kaveesha Vimukthi.
 */

export function generateResumePdf() {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to download your resume PDF.');
    return;
  }

  const cvHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Kaveesha Vimukthi - Resume CV</title>
  <style>
    @page {
      size: A4;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #111827;
      background-color: #ffffff;
      line-height: 1.5;
      font-size: 13px;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .cv-container {
      display: flex;
      width: 210mm;
      min-height: 297mm;
      margin: 0 auto;
      background: #ffffff;
    }
    /* Left Sidebar Column */
    .left-sidebar {
      width: 33%;
      background-color: #ffffff;
      padding: 36px 24px;
      border-right: 2px solid #e5e7eb;
    }
    .main-name {
      font-size: 26px;
      font-weight: 800;
      line-height: 1.15;
      color: #111827;
      margin-bottom: 4px;
      letter-spacing: -0.02em;
    }
    .main-title {
      font-size: 13px;
      font-weight: 600;
      color: #4b5563;
      margin-bottom: 24px;
      padding-bottom: 12px;
      border-bottom: 2px solid #111827;
    }
    .sidebar-section {
      margin-bottom: 24px;
    }
    .sidebar-title {
      font-size: 14px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .section-divider {
      height: 2px;
      background-color: #111827;
      margin-bottom: 12px;
    }
    .contact-item {
      margin-bottom: 8px;
      font-size: 11.5px;
      color: #374151;
      word-break: break-word;
    }
    .contact-label {
      font-weight: 700;
      color: #111827;
      display: block;
      margin-bottom: 1px;
    }
    .skill-list, .lang-list {
      list-style: none;
    }
    .skill-item, .lang-item {
      font-size: 12px;
      color: #374151;
      padding: 4px 0;
      border-bottom: 1px solid #f3f4f6;
      font-weight: 500;
    }

    /* Right Timeline Section */
    .right-content {
      width: 67%;
      padding: 36px 32px;
    }
    .timeline-block {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
      position: relative;
    }
    .timeline-icon-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 36px;
      shrink: 0;
    }
    .icon-box {
      width: 34px;
      height: 34px;
      border-radius: 6px;
      background-color: #f3f4f6;
      border: 1px solid #d1d5db;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      margin-bottom: 8px;
    }
    .vertical-line {
      width: 2px;
      flex-grow: 1;
      background-color: #d1d5db;
    }
    .timeline-body {
      flex: 1;
      padding-top: 4px;
    }
    .timeline-header-title {
      font-size: 16px;
      font-weight: 800;
      color: #111827;
      margin-bottom: 12px;
    }
    .exp-item {
      margin-bottom: 16px;
    }
    .exp-role {
      font-size: 13.5px;
      font-weight: 700;
      color: #111827;
    }
    .exp-meta {
      font-size: 11px;
      color: #6b7280;
      font-weight: 600;
      margin-bottom: 6px;
    }
    .exp-bullets {
      padding-left: 16px;
      margin-top: 4px;
    }
    .exp-bullets li {
      font-size: 11.5px;
      color: #374151;
      margin-bottom: 4px;
      line-height: 1.45;
    }

    @media print {
      body {
        margin: 0;
        background: #ffffff;
      }
      .cv-container {
        box-shadow: none;
        width: 100%;
      }
    }
  </style>
</head>
<body>

  <div class="cv-container">
    
    <!-- LEFT SIDEBAR COLUMN -->
    <div class="left-sidebar">
      <h1 class="main-name">Kaveesha<br>Vimukthi</h1>
      <div class="main-title">IT Undergraduate | Aspiring Cybersecurity Analyst</div>

      <!-- Contact Details -->
      <div class="sidebar-section">
        <div class="sidebar-title">Contact Details</div>
        <div class="section-divider"></div>

        <div class="contact-item">
          <span class="contact-label">Email</span>
          kaveeshavimukthi688@gmail.com
        </div>
        <div class="contact-item">
          <span class="contact-label">Location</span>
          Kelaniya, Sri Lanka (Open to Remote)
        </div>
        <div class="contact-item">
          <span class="contact-label">WhatsApp</span>
          +94 76 550 2806
        </div>
        <div class="contact-item">
          <span class="contact-label">GitHub</span>
          github.com/Kaveesha-V
        </div>
        <div class="contact-item">
          <span class="contact-label">LinkedIn</span>
          linkedin.com/in/kaveesha-vimukthi-544a08352
        </div>
      </div>

      <!-- Technical Skills -->
      <div class="sidebar-section">
        <div class="sidebar-title">Skills</div>
        <div class="section-divider"></div>
        <ul class="skill-list">
          <li class="skill-item">Web Development & React</li>
          <li class="skill-item">Cyber Security & Networking</li>
          <li class="skill-item">Java, C++, Python</li>
          <li class="skill-item">SQL, PostgreSQL, MySQL</li>
          <li class="skill-item">Linux Systems & CLI</li>
          <li class="skill-item">Graphic Design & Video Editing</li>
          <li class="skill-item">Photoshop, Illustrator, After Effects</li>
          <li class="skill-item">Canva Pro & Antigravity AI</li>
        </ul>
      </div>

      <!-- Languages -->
      <div class="sidebar-section">
        <div class="sidebar-title">Languages</div>
        <div class="section-divider"></div>
        <ul class="lang-list">
          <li class="lang-item">English (Professional)</li>
          <li class="lang-item">Sinhala (Native)</li>
        </ul>
      </div>
    </div>

    <!-- RIGHT TIMELINE CONTENT -->
    <div class="right-content">
      
      <!-- Summary Block -->
      <div class="timeline-block">
        <div class="timeline-icon-col">
          <div class="icon-box">👤</div>
          <div class="vertical-line"></div>
        </div>
        <div class="timeline-body">
          <div class="timeline-header-title">Summary</div>
          <p style="font-size: 12px; color: #374151; line-height: 1.55;">
            BSc (Hons) in IT student at the University of Kelaniya (Industrial Management). Focused on Cybersecurity, Web Development, and Game Development (C++/Raylib). Experienced in SQL databases, office administration at Bank of Ceylon (BOC), and freelance Graphic Design & Video Editing.
          </p>
        </div>
      </div>

      <!-- Work Experience Block -->
      <div class="timeline-block">
        <div class="timeline-icon-col">
          <div class="icon-box">💼</div>
          <div class="vertical-line"></div>
        </div>
        <div class="timeline-body">
          <div class="timeline-header-title">Work Experience</div>
          
          <div class="exp-item">
            <div class="exp-role">Part-time Graphic Designer & Video Editor</div>
            <div class="exp-meta">Freelance / Self-Employed &bull; 2025 &mdash; Present</div>
            <ul class="exp-bullets">
              <li>Created visual graphics, branding templates, poster designs, and social media banners using Photoshop, Illustrator, and Canva Pro.</li>
              <li>Produced promo video edits, motion cuts, and multimedia content using After Effects & video editing tools.</li>
              <li>Collaborated with clients to translate visual concepts into engaging multimedia assets.</li>
            </ul>
          </div>

          <div class="exp-item">
            <div class="exp-role">Intern (School Leaver)</div>
            <div class="exp-meta">Bank of Ceylon (BOC), Pallebedda &bull; 2024 &mdash; 2025</div>
            <ul class="exp-bullets">
              <li>Managed daily office administration tasks, customer support inquiries, and document processing.</li>
              <li>Gained deep experience in office operations and professional banking standards.</li>
              <li>Developed strong teamwork, problem-solving, and corporate communication skills.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education Block -->
      <div class="timeline-block">
        <div class="timeline-icon-col">
          <div class="icon-box">🎓</div>
          <div class="vertical-line"></div>
        </div>
        <div class="timeline-body">
          <div class="timeline-header-title">Education</div>
          <div class="exp-item">
            <div class="exp-role">BSc (Hons) in Information Technology</div>
            <div class="exp-meta">University of Kelaniya (Industrial Management) &bull; 2024 &mdash; Present</div>
          </div>
        </div>
      </div>

      <!-- Certifications Block -->
      <div class="timeline-block">
        <div class="timeline-icon-col">
          <div class="icon-box">📜</div>
        </div>
        <div class="timeline-body">
          <div class="timeline-header-title">Certifications & Qualifications</div>
          <div class="exp-item" style="margin-bottom: 8px;">
            <div class="exp-role">Google Cybersecurity Professional Certificate</div>
            <div class="exp-meta">Foundations of Cybersecurity &bull; Play It Safe: Security Risks &bull; Networks & Security</div>
          </div>
          <div class="exp-item">
            <div class="exp-role">Programming for Everybody (Python 3)</div>
            <div class="exp-meta">University of Michigan</div>
          </div>
        </div>
      </div>

    </div>

  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>`;

  printWindow.document.open();
  printWindow.document.write(cvHtml);
  printWindow.document.close();
}
