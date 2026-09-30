from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER

out='public/M-Ayan-Ali-CV.pdf'
styles=getSampleStyleSheet()
title=ParagraphStyle('Title',parent=styles['Title'],alignment=TA_CENTER,fontSize=24,spaceAfter=5)
sub=ParagraphStyle('Sub',parent=styles['Normal'],alignment=TA_CENTER,fontSize=12,spaceAfter=12)
body=ParagraphStyle('Body',parent=styles['BodyText'],fontSize=9.5,leading=14,spaceAfter=7)
h2=ParagraphStyle('H2',parent=styles['Heading2'],fontSize=13,spaceBefore=8,spaceAfter=5)
doc=SimpleDocTemplate(out,pagesize=A4,rightMargin=42,leftMargin=42,topMargin=38,bottomMargin=38)
story=[Paragraph('M Ayan Ali',title),Paragraph('Frontend Web Developer',sub),Paragraph('ayanalim051@gmail.com | 03172121220 | Karachi, Pakistan',sub)]
story += [Paragraph('PROFILE',h2),Paragraph('Passionate frontend developer focused on building responsive, modern, and user-friendly web applications. Skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, and Redux Toolkit. Currently expanding knowledge in backend development to grow into a full-stack developer.',body)]
story += [Paragraph('SKILLS',h2),Paragraph('HTML5, CSS3, JavaScript, React JS, Tailwind CSS, Bootstrap, Redux Toolkit, Responsive Web Design, Frontend UI/UX, Backend learning: Node.js, APIs, databases.',body)]
story += [Paragraph('PROJECTS',h2),Paragraph('<b>E-Commerce Website</b> — Responsive shopping interface with modern layouts and product-focused UI.',body),Paragraph('<b>Admin Dashboard</b> — Clean dashboard concept with responsive navigation, cards and data-focused interface.',body),Paragraph('<b>Quiz Application</b> — Interactive quiz experience with dynamic questions and responsive UI.',body)]
story += [Paragraph('EXPERIENCE & STRENGTHS',h2),Paragraph('Built modern frontend interfaces, responsive pages and reusable UI components with attention to clean code, accessibility and user experience. Currently learning backend fundamentals.',body),Paragraph('EDUCATION / LEARNING',h2),Paragraph('Self-driven learner with hands-on frontend practice and ongoing backend fundamentals study.',body)]
doc.build(story)
