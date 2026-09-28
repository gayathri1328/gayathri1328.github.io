const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions
  const { width, height } = page.getSize();

  const margin = 45;
  let y = height - margin;

  // Colors
  const primaryColor = rgb(0.12, 0.14, 0.35); // Deep Indigo/Navy
  const textColor = rgb(0.15, 0.15, 0.15);
  const subColor = rgb(0.35, 0.35, 0.4);
  const accentColor = rgb(0.45, 0.2, 0.7); // Purple accent
  const lineColor = rgb(0.8, 0.82, 0.88);

  // Header: Name
  page.drawText('GAYATHRI V.', {
    x: margin,
    y: y,
    size: 22,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 18;

  // Subtitle
  page.drawText('B.Tech in Artificial Intelligence & Data Science | Student & Developer', {
    x: margin,
    y: y,
    size: 10.5,
    font: helveticaBold,
    color: accentColor,
  });
  y -= 16;

  // Contact info row
  const contactText = 'Email: gayathri03042@gmail.com | gayathriv.ad25@bitsathy.ac.in | Phone / Location: Tamil Nadu, India';
  page.drawText(contactText, {
    x: margin,
    y: y,
    size: 8.5,
    font: helvetica,
    color: subColor,
  });
  y -= 13;

  const linksText = 'GitHub: github.com/gayathri1328 | LinkedIn: linkedin.com/in/gayathri-v-443078390';
  page.drawText(linksText, {
    x: margin,
    y: y,
    size: 8.5,
    font: helvetica,
    color: subColor,
  });
  y -= 16;

  // Horizontal divider
  page.drawLine({
    start: { x: margin, y: y },
    end: { x: width - margin, y: y },
    thickness: 1,
    color: lineColor,
  });
  y -= 18;

  // Helper for section header
  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: y,
      size: 11,
      font: helveticaBold,
      color: primaryColor,
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y: y },
      end: { x: width - margin, y: y },
      thickness: 0.75,
      color: accentColor,
    });
    y -= 14;
  }

  // 1. EDUCATION
  drawSectionHeader('Education');
  page.drawText('Bannari Amman Institute of Technology', {
    x: margin,
    y: y,
    size: 10,
    font: helveticaBold,
    color: textColor,
  });
  page.drawText('2025 – 2029', {
    x: width - margin - 60,
    y: y,
    size: 9.5,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 13;

  page.drawText('Bachelor of Technology - Artificial Intelligence & Data Science', {
    x: margin,
    y: y,
    size: 9,
    font: helvetica,
    color: textColor,
  });
  page.drawText('Current CGPA: 7.28 / 10.0', {
    x: width - margin - 110,
    y: y,
    size: 9,
    font: helveticaBold,
    color: accentColor,
  });
  y -= 12;

  page.drawText('Relevant Coursework: C, C++, Python, Data Structures, DBMS, Problem Solving, AI/ML Foundations.', {
    x: margin,
    y: y,
    size: 8.5,
    font: timesItalic,
    color: subColor,
  });
  y -= 18;

  // 2. TECHNICAL SKILLS
  drawSectionHeader('Technical Skills');
  const skills = [
    { label: 'Programming Languages', val: 'C, C++, Python, SQL' },
    { label: 'Web Technologies', val: 'HTML5, CSS3, JavaScript (ES6+), Responsive UI' },
    { label: 'AI & Data Science', val: 'Machine Learning, Computer Vision (YOLO), NLP, Generative AI, RAG Systems' },
    { label: 'Developer Tools & Cloud', val: 'Git, GitHub, VS Code, Supabase, Linux environment' },
  ];

  skills.forEach((s) => {
    page.drawText(`•  ${s.label}: `, {
      x: margin + 4,
      y: y,
      size: 8.8,
      font: helveticaBold,
      color: textColor,
    });
    const labelWidth = helveticaBold.widthOfTextAtSize(`•  ${s.label}: `, 8.8);
    page.drawText(s.val, {
      x: margin + 4 + labelWidth,
      y: y,
      size: 8.8,
      font: helvetica,
      color: textColor,
    });
    y -= 13;
  });
  y -= 8;

  // 3. FEATURED PROJECTS
  drawSectionHeader('Featured Projects');

  // Project 1: Fourbidden Logic
  page.drawText('Fourbidden Logic — Personalized Learning Resource Retriever (RAG / LLM)', {
    x: margin,
    y: y,
    size: 9.8,
    font: helveticaBold,
    color: primaryColor,
  });
  page.drawText('Live Demo: fourbidden-logic2.onrender.com', {
    x: width - margin - 180,
    y: y,
    size: 8.5,
    font: helvetica,
    color: accentColor,
  });
  y -= 12;
  page.drawText('• Built for INTELLIX LLM & AI Optimization Hackathon (Role: Team Leader).', {
    x: margin + 6,
    y: y,
    size: 8.5,
    font: helvetica,
    color: textColor,
  });
  y -= 11;
  page.drawText('• Architected semantic resource retrieval leveraging LLMs and RAG with Supabase vector storage for students.', {
    x: margin + 6,
    y: y,
    size: 8.5,
    font: helvetica,
    color: subColor,
  });
  y -= 15;

  // Project 2: SHENEX
  page.drawText('SHENEX — 360° Intelligent Computer Vision Occupancy & Pattern Analysis', {
    x: margin,
    y: y,
    size: 9.8,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 12;
  page.drawText('• Computer Vision pipeline using YOLO models to analyze 360° video, detect and track individuals in real time.', {
    x: margin + 6,
    y: y,
    size: 8.5,
    font: helvetica,
    color: textColor,
  });
  y -= 11;
  page.drawText('• Generates spatial heatmaps and dwell-time duration metrics to identify traffic bottlenecks in venue facilities.', {
    x: margin + 6,
    y: y,
    size: 8.5,
    font: helvetica,
    color: subColor,
  });
  y -= 15;

  // Project 3: NEXUS
  page.drawText('NEXUS — Intelligent Freight Procurement Decision Support System', {
    x: margin,
    y: y,
    size: 9.8,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 12;
  page.drawText('• AI decision-support engine answering: Which vessel? When? Which contract strategy? and Why?', {
    x: margin + 6,
    y: y,
    size: 8.5,
    font: helvetica,
    color: textColor,
  });
  y -= 11;
  page.drawText('• Formulated an 8-stage algorithmic pipeline: Data -> Forecast -> Feasibility -> Voyage -> Risk -> Cost -> Optimize -> Explain.', {
    x: margin + 6,
    y: y,
    size: 8.5,
    font: helvetica,
    color: subColor,
  });
  y -= 15;

  // Project 4: Study Buddy
  page.drawText('Study Buddy — Web-Based Student Productivity Dashboard', {
    x: margin,
    y: y,
    size: 9.8,
    font: helveticaBold,
    color: primaryColor,
  });
  page.drawText('Live: whimsical-kleicha-f847de.netlify.app', {
    x: width - margin - 180,
    y: y,
    size: 8.5,
    font: helvetica,
    color: accentColor,
  });
  y -= 12;
  page.drawText('• Designed and deployed responsive browser application helping students organize daily academic preparation.', {
    x: margin + 6,
    y: y,
    size: 8.5,
    font: helvetica,
    color: textColor,
  });
  y -= 15;

  // Project 5: FleetGuard AI
  page.drawText('FleetGuard AI — Heavy-Vehicle Telematics & Driver Safety System', {
    x: margin,
    y: y,
    size: 9.8,
    font: helveticaBold,
    color: primaryColor,
  });
  y -= 12;
  page.drawText('• Conceptualized IoT telematics and driver fatigue monitoring architecture using edge computer vision cues.', {
    x: margin + 6,
    y: y,
    size: 8.5,
    font: helvetica,
    color: textColor,
  });
  y -= 18;

  // 4. HACKATHONS & LEADERSHIP
  drawSectionHeader('Hackathons & Leadership');
  page.drawText('INTELLIX: LLM & AI Optimization Hackathon — Team Leader (Team: Fourbidden Logic)', {
    x: margin,
    y: y,
    size: 9.5,
    font: helveticaBold,
    color: textColor,
  });
  y -= 12;
  page.drawText('• Led technical design, scoping, and prompt/retrieval integration under intensive hackathon conditions.', {
    x: margin + 6,
    y: y,
    size: 8.5,
    font: helvetica,
    color: subColor,
  });
  y -= 18;

  // Footer note
  page.drawText('Authentic student portfolio profile of Gayathri V. | Bannari Amman Institute of Technology (2025–2029)', {
    x: margin,
    y: 28,
    size: 8,
    font: helvetica,
    color: subColor,
  });

  const pdfBytes = await pdfDoc.save();

  const outDir = path.join(__dirname, '..', 'public', 'resume');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, 'Gayathri_V_Resume.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log('Successfully generated valid PDF at:', outPath);
}

createResume().catch(console.error);
