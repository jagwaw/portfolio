#!/usr/bin/env python3
"""Generate public/XCResume2026.docx (editable) and XCResume2026.pdf (download)."""

from __future__ import annotations

import io
import sys
from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Inches, Pt
from fpdf import FPDF
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PROFILE_SOURCE = ROOT / "assets" / "img" / "xc.jpg"
PHOTO_INCHES = 2
# Matches AboutSection.vue: object-cover, scale 1.65, origin 50% 42%
PHOTO_ZOOM = 1.65
PHOTO_ORIGIN_X = 0.5
PHOTO_ORIGIN_Y = 0.42
OUT_DOCX = ROOT / "public" / "XCResume2026.docx"
OUT_PDF = ROOT / "public" / "XCResume2026.pdf"
OUT_PHOTO_JPEG = ROOT / "public" / "images" / "xc-resume-2x2.jpg"

CONTACT_LINE = (
    "Manila, Philippines  |  frias.exiequiellejohn@gmail.com  |  "
    "linkedin.com/in/exiequielle-john  |  github.com/jagwaw"
)

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
        "header": "Billlease — Frontend Software Engineer",
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


def crop_profile_photo() -> bytes:
    """Square crop aligned with portfolio About section framing; 300 DPI for 2in print."""
    if not PROFILE_SOURCE.is_file():
        raise FileNotFoundError(f"Profile photo not found: {PROFILE_SOURCE}")

    img = Image.open(PROFILE_SOURCE).convert("RGB")
    width, height = img.size
    base = min(width, height)
    crop_size = base / PHOTO_ZOOM
    cx = width * PHOTO_ORIGIN_X
    cy = height * PHOTO_ORIGIN_Y
    left = max(0, min(cx - crop_size / 2, width - crop_size))
    top = max(0, min(cy - crop_size / 2, height - crop_size))
    square = img.crop((int(left), int(top), int(left + crop_size), int(top + crop_size)))

    px = int(PHOTO_INCHES * 300)
    square = square.resize((px, px), Image.Resampling.LANCZOS)

    OUT_PHOTO_JPEG.parent.mkdir(parents=True, exist_ok=True)
    square.save(OUT_PHOTO_JPEG, format="JPEG", quality=92, optimize=True)

    buf = io.BytesIO()
    square.save(buf, format="JPEG", quality=92, optimize=True)
    return buf.getvalue()


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


def build_docx(photo_jpeg: bytes) -> None:
    doc = Document()
    photo_stream = io.BytesIO(photo_jpeg)

    header = doc.add_table(rows=1, cols=2)
    header.autofit = False
    text_cell, photo_cell = header.rows[0].cells
    text_cell.width = Inches(4.5)
    photo_cell.width = Inches(PHOTO_INCHES)

    name = text_cell.paragraphs[0]
    name_run = name.add_run("Exiequielle John Frias (XC)")
    name_run.bold = True
    name_run.font.size = Pt(16)

    title = text_cell.add_paragraph()
    title_run = title.add_run("Frontend Engineer")
    title_run.font.size = Pt(12)

    contact = text_cell.add_paragraph()
    contact.add_run(CONTACT_LINE).font.size = Pt(10)

    photo_para = photo_cell.paragraphs[0]
    photo_para.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    photo_para.add_run().add_picture(
        photo_stream,
        width=Inches(PHOTO_INCHES),
        height=Inches(PHOTO_INCHES),
    )

    doc.add_paragraph()

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


def build_pdf(photo_jpeg: bytes) -> None:
    pdf = ResumePDF()
    pdf.add_page()

    photo_mm = PHOTO_INCHES * 25.4
    photo_x = pdf.w - pdf.r_margin - photo_mm
    photo_y = pdf.t_margin
    # Use file path (more reliable across PDF viewers than BytesIO alone)
    pdf.image(str(OUT_PHOTO_JPEG), x=photo_x, y=photo_y, w=photo_mm, h=photo_mm)

    text_right = photo_x - 4
    text_w = text_right - pdf.l_margin

    pdf.set_xy(pdf.l_margin, photo_y)
    pdf.set_font("Helvetica", "B", 16)
    pdf.multi_cell(text_w, 7, pdf_safe("Exiequielle John Frias (XC)"))
    pdf.set_font("Helvetica", "", 12)
    pdf.multi_cell(text_w, 6, pdf_safe("Frontend Engineer"))
    pdf.set_font("Helvetica", "", 9)
    pdf.multi_cell(text_w, 4, pdf_safe(CONTACT_LINE))

    header_bottom = max(pdf.get_y(), photo_y + photo_mm)
    pdf.set_y(header_bottom + 4)

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
    photo_jpeg = crop_profile_photo()
    build_docx(photo_jpeg)
    build_pdf(photo_jpeg)


if __name__ == "__main__":
    main()
    sys.exit(0)
