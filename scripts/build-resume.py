#!/usr/bin/env python3
"""Generate public/XCResume2026.docx (editable) and XCResume2026.pdf (download)."""

from __future__ import annotations

import sys
from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt
from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
OUT_DOCX = ROOT / "public" / "XCResume2026.docx"
OUT_PDF = ROOT / "public" / "XCResume2026.pdf"

SUMMARY = (
    "Frontend Engineer with 8+ years of experience shipping production UI in fintech and "
    "product teams. Specialized in Vue, Nuxt, and TypeScript — from onboarding and "
    "verification flows to component systems that scale. Comfortable across the stack "
    "with Python and REST APIs when products need it."
)

SKILLS: list[tuple[str, str]] = [
    ("Frontend", "Vue.js, Nuxt.js 2 & 3, TypeScript, JavaScript, Tailwind CSS, SASS/SCSS, Vuex/Pinia, GSAP, PWA, WebSocket, responsive UI"),
    ("Tools & AI", "Git, Figma, Cursor, Claude, ChatGPT, Postman, JIRA, Confluence, Bitbucket, ClickUp"),
    ("Backend", "REST API, FastAPI, Python, Django, PHP, Symfony, SQLAlchemy, JWT"),
    ("Databases", "PostgreSQL, MySQL, MongoDB, Redis"),
    ("DevOps", "Docker, NGINX, Linux, AWS"),
]

JOBS: list[dict] = [
    {
        "header": "BillEase — Frontend Software Engineer",
        "dates": "Feb 2024 – Present",
        "bullets": [
            "Implemented redesigned flows for Account Recovery v2 and sign-up registration",
            "Integrated liveness detection using in-house Innovatrics SDK on the frontend",
            "Built Chat Notification UI, Bills Upload AI UI, and Pay Now Installments UI",
            "Developed FOMO feature and Mobile Load Promo Feature for user engagement campaigns",
            "Led frontend implementation of TOTP Retirement, migrating users to updated auth flows",
            "Built Activation 2.0 UI, improving onboarding and account activation experience",
        ],
    },
    {
        "header": "Penbrothers (Client: Gamesys / Bally's) — Frontend Developer",
        "dates": "Oct 2021 – Jan 2024",
        "bullets": [
            "Maintained and improved client-facing websites for a global gaming company",
            "Designed and implemented mobile-first features for better user experience",
            "Collaborated with European and American stakeholders on requirements, reviews, and frontend delivery",
        ],
    },
    {
        "header": "Narrasoft (Client: Panoply.io) — Python Developer",
        "dates": "May 2021 – Oct 2021",
        "bullets": [
            "Worked on a cloud-based data warehouse platform for an Asia-based client team",
            "Created and modified data source integrations from multiple providers",
            "Collaborated with Asian stakeholders on requirements, delivery, and technical decisions",
            "Wrote clean, testable, PEP-compliant Python code for features and bug fixes",
        ],
    },
    {
        "header": "Remote Staff — Junior Full-Stack Developer",
        "dates": "Jul 2018 – May 2021",
        "bullets": [
            "Collaborated with Australian clients on requirements and delivery for remote product work",
            "Built a remote classroom platform tracking real-time user activity",
            "Developed project and task management systems for clients, staff, teachers, and students",
            "Delivered AngularJS + Python (Falcon/FastAPI) apps; containerized APIs with Docker for deployment",
        ],
    },
]


def pdf_safe(text: str) -> str:
    return (
        text.replace("\u2014", "-")
        .replace("\u2013", "-")
        .replace("\u2019", "'")
        .encode("latin-1", "replace")
        .decode("latin-1")
    )


def add_heading_docx(doc: Document, text: str) -> None:
    p = doc.add_paragraph()
    run = p.add_run(text.upper())
    run.bold = True
    run.font.size = Pt(11)
    p.paragraph_format.space_before = Pt(10)
    p.paragraph_format.space_after = Pt(4)


def add_bullets_docx(doc: Document, items: list[str]) -> None:
    for item in items:
        doc.add_paragraph(item, style="List Bullet")


def build_docx() -> None:
    doc = Document()

    name = doc.add_paragraph()
    name_run = name.add_run("Exiequielle John Frias (XC)")
    name_run.bold = True
    name_run.font.size = Pt(16)
    name.alignment = WD_ALIGN_PARAGRAPH.CENTER

    title = doc.add_paragraph()
    title_run = title.add_run("Frontend Engineer")
    title_run.font.size = Pt(12)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER

    contact = doc.add_paragraph()
    contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
    contact.add_run(
        "Manila, Philippines  |  frias.exiequiellejohn@gmail.com  |  "
        "linkedin.com/in/exiequielle-john  |  github.com/jagwaw"
    ).font.size = Pt(10)

    add_heading_docx(doc, "Summary")
    doc.add_paragraph(SUMMARY)

    add_heading_docx(doc, "Technical Skills")
    for label, items in SKILLS:
        p = doc.add_paragraph()
        p.add_run(f"{label}: ").bold = True
        p.add_run(items)

    add_heading_docx(doc, "Professional Experience")
    for job in JOBS:
        h = doc.add_paragraph()
        h.add_run(job["header"]).bold = True
        d = doc.add_paragraph(job["dates"])
        d.paragraph_format.space_after = Pt(2)
        add_bullets_docx(doc, job["bullets"])

    add_heading_docx(doc, "Education")
    edu = doc.add_paragraph()
    edu.add_run("Bachelor of Science in Information Technology").bold = True
    doc.add_paragraph("Lyceum of the Philippines University — Manila  |  2014 – 2018")

    OUT_DOCX.parent.mkdir(parents=True, exist_ok=True)
    doc.save(OUT_DOCX)
    print(f"Wrote {OUT_DOCX}")


class ResumePDF(FPDF):
    def __init__(self) -> None:
        super().__init__()
        self.set_auto_page_break(auto=True, margin=14)
        self.set_margins(18, 14, 18)

    def section_heading(self, text: str) -> None:
        self.ln(4)
        self.set_font("Helvetica", "B", 10)
        self.multi_cell(0, 5, pdf_safe(text.upper()))
        self.ln(1)

    def body_text(self, text: str, bold: bool = False) -> None:
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "B" if bold else "", 10)
        self.multi_cell(self.epw, 4.5, pdf_safe(text))

    def bullet(self, text: str) -> None:
        self.set_font("Helvetica", "", 9)
        self.set_x(self.l_margin + 4)
        self.multi_cell(self.epw - 4, 4.2, pdf_safe(f"- {text}"))


def build_pdf() -> None:
    pdf = ResumePDF()
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 16)
    pdf.cell(0, 8, pdf_safe("Exiequielle John Frias (XC)"), align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 12)
    pdf.cell(0, 6, pdf_safe("Frontend Engineer"), align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 9)
    pdf.multi_cell(
        0,
        4,
        pdf_safe(
            "Manila, Philippines  |  frias.exiequiellejohn@gmail.com  |  "
            "linkedin.com/in/exiequielle-john  |  github.com/jagwaw"
        ),
        align="C",
    )
    pdf.ln(2)

    pdf.section_heading("Summary")
    pdf.body_text(SUMMARY)

    pdf.section_heading("Technical Skills")
    for label, items in SKILLS:
        pdf.set_x(pdf.l_margin)
        pdf.set_font("Helvetica", "B", 10)
        label_w = pdf.get_string_width(pdf_safe(f"{label}: ")) + 1
        pdf.cell(label_w, 4.5, pdf_safe(f"{label}: "), new_x="END")
        pdf.set_font("Helvetica", "", 10)
        pdf.multi_cell(pdf.epw - label_w, 4.5, pdf_safe(items))

    pdf.section_heading("Professional Experience")
    for job in JOBS:
        pdf.ln(1)
        pdf.body_text(job["header"], bold=True)
        pdf.set_x(pdf.l_margin)
        pdf.set_font("Helvetica", "I", 9)
        pdf.multi_cell(pdf.epw, 4, pdf_safe(job["dates"]))
        for bullet in job["bullets"]:
            pdf.bullet(bullet)

    pdf.section_heading("Education")
    pdf.body_text("Bachelor of Science in Information Technology", bold=True)
    pdf.body_text("Lyceum of the Philippines University — Manila  |  2014 – 2018")

    OUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT_PDF))
    print(f"Wrote {OUT_PDF}")


def main() -> None:
    build_docx()
    build_pdf()


if __name__ == "__main__":
    main()
    sys.exit(0)
