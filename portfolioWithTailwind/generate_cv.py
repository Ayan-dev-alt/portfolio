from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

pdf_path = 'M-Ayan-Ali-CV.pdf'
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=A4,
    rightMargin=40,
    leftMargin=40,
    topMargin=40,
    bottomMargin=40,
)

styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name='TitleBold',
        parent=styles['Title'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=colors.HexColor('#1f2937'),
    )
)
styles.add(
    ParagraphStyle(
        name='Section',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=18,
        textColor=colors.HexColor('#4f46e5'),
        spaceBefore=14,
        spaceAfter=8,
    )
)
styles.add(
    ParagraphStyle(
        name='Body',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=10.5,
        leading=16,
        textColor=colors.HexColor('#111827'),
    )
)
styles.add(
    ParagraphStyle(
        name='Tiny',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=15,
        textColor=colors.HexColor('#374151'),
    )
)

story = []
story.append(Paragraph('M Ayan Ali', styles['TitleBold']))
story.append(Paragraph('Frontend Web Developer', styles['Body']))
story.append(
    Paragraph(
        'Email: ayanalim051@gmail.com | Phone: 03172121220 | Karachi, Pakistan',
        styles['Tiny'],
    )
)
story.append(Spacer(1, 15))

story.append(Paragraph('Profile', styles['Section']))
story.append(
    Paragraph(
        'Passionate frontend developer focused on building responsive, modern, and user-friendly web applications. Skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, and Redux Toolkit. Currently expanding knowledge in backend development to grow into a full-stack developer.',
        styles['Body'],
    )
)
story.append(Spacer(1, 12))

story.append(Paragraph('Skills', styles['Section']))
skills = [
    'HTML5, CSS3, JavaScript',
    'React JS',
    'Tailwind CSS',
    'Bootstrap',
    'Redux Toolkit',
    'Responsive Web Design',
    'Frontend UI/UX',
    'Backend learning: Node.js, APIs, databases',
]
story.append(
    ListFlowable(
        [
            ListItem(Paragraph(skill, styles['Body']), bulletType='bullet', bulletColor=colors.HexColor('#4f46e5'))
            for skill in skills
        ],
        bulletType='bullet',
        leftIndent=18,
        bulletColor=colors.HexColor('#4f46e5'),
    )
)
story.append(Spacer(1, 12))

story.append(Paragraph('Projects', styles['Section']))
projects = [
    'E-Commerce Website — Responsive online shopping interface with product listing, cart, and filters.',
    'Admin Dashboard — Modern analytics dashboard with cards, charts, and student management UI.',
    'Quiz Application — Interactive quiz app with timer, scoring, and responsive design.',
]
story.append(
    ListFlowable(
        [
            ListItem(Paragraph(project, styles['Body']), bulletType='bullet', bulletColor=colors.HexColor('#4f46e5'))
            for project in projects
        ],
        bulletType='bullet',
        leftIndent=18,
        bulletColor=colors.HexColor('#4f46e5'),
    )
)
story.append(Spacer(1, 12))

story.append(Paragraph('Experience & Strengths', styles['Section']))
story.append(
    Paragraph(
        '• Built modern frontend interfaces with strong attention to design consistency and usability.\n• Developed responsive pages optimized for mobile, tablet, and desktop devices.\n• Focused on clean code structure, accessible UI elements, and efficient user experience.\n• Continuously learning backend technologies to become a more capable full-stack developer.',
        styles['Body'],
    )
)
story.append(Spacer(1, 12))

story.append(Paragraph('Education / Learning', styles['Section']))
story.append(
    Paragraph(
        'Self-driven learner and web development enthusiast with hands-on practice in frontend technologies and continuous growth in backend fundamentals.',
        styles['Body'],
    )
)

doc.build(story)
print(f'CV created: {pdf_path}')
