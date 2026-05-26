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
# Face framing for xc.jpg when re-cropping from source (slightly right in frame)
PHOTO_ORIGIN_X = 0.47
PHOTO_ORIGIN_Y = 0.40
OUT_DOCX = ROOT / "public" / "XCResume2026.docx"
OUT_PDF = ROOT / "public" / "XCResume2026.pdf"
OUT_PHOTO_JPEG = ROOT / "public" / "images" / "xc-resume-2x2.jpg"

CONTACT_LINE = (
    "Manila, Philippines  |  frias.exiequiellejohn@gmail.com  |  "
    "linkedin.com/in/exiequielle-john  |  github.com/jagwaw"
)

SUMMARY = (
    "Full Stack Developer with 8+ years of experience shipping fintech and product systems "
    "across Vue/Nuxt frontends, Django REST APIs, realtime services, async workers, and "
    "deployment pipelines. Comfortable owning features from polished UI through backend "
    "integration, CI/CD, and production serving."
)

SKILLS: list[tuple[str, str]] = [
    ("Frontend", "Vue.js, Nuxt.js 2 & 3, TypeScript, JavaScript, Tailwind CSS, SASS/SCSS, Vuex/Pinia, GSAP, PWA, WebSocket, responsive UI"),
    ("Tools & AI", "Git, Figma, Cursor, Claude, ChatGPT, Postman, JIRA, Confluence, Bitbucket, ClickUp"),
    ("Backend", "Python 3.9, Django 4.1, Django REST Framework 3.14, FastAPI, Django Channels, Daphne, Gunicorn, Celery, RabbitMQ, Kafka, REST APIs"),
    ("Databases", "PostgreSQL, Redis, MySQL, MongoDB"),
    ("CI/CD & Deployment", "GitLab CI, semantic-release, Ansible deployment scripts, systemd services, Docker, Docker Compose, Docker registry images, Nginx, AWS EC2/RDS/S3-style targets"),
]

JOBS: list[dict] = [
    {
        "header": "Billlease — Full Stack Developer",
        "dates": "Feb 2024 – Present",
        "bullets": [
            "Implemented redesigned flows for Account Recovery v2 and sign-up registration",
            "Built product features across Vue/Nuxt frontends and Django REST API integrations",
            "Worked with Django Channels, Daphne, Redis, Celery, RabbitMQ, and Kafka-backed services",
            "Supported GitLab CI, semantic-release, Docker registry images, and Ansible/systemd deployment scripts",
            "Integrated liveness detection using in-house Innovatrics SDK and backend verification flows",
            "Built Chat Notification UI, Bills Upload AI UI, Pay Now Installments UI, FOMO, and Mobile Load Promo features",
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
    """2x2 square from assets/img/xc.jpg (already square); resize for 2in @ 300 DPI print."""
    if not PROFILE_SOURCE.is_file():
        raise FileNotFoundError(f"Profile photo not found: {PROFILE_SOURCE}")

    img = Image.open(PROFILE_SOURCE).convert("RGB")
    width, height = img.size

    if width == height:
        square = img
    else:
        side = min(width, height)
        cx = width * PHOTO_ORIGIN_X
        cy = height * PHOTO_ORIGIN_Y
        left = max(0, min(cx - side / 2, width - side))
        top = max(0, min(cy - side / 2, height - side))
        square = img.crop((int(left), int(top), int(left + side), int(top + side)))

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

    photo_para = doc.add_paragraph()
    photo_para.alignment = WD_ALIGN_PARAGRAPH.CENTER
    photo_para.add_run().add_picture(
        photo_stream,
        width=Inches(PHOTO_INCHES),
        height=Inches(PHOTO_INCHES),
    )

    name = doc.add_paragraph()
    name_run = name.add_run("Exiequielle John Frias (XC)")
    name_run.bold = True
    name_run.font.size = Pt(16)
    name.alignment = WD_ALIGN_PARAGRAPH.CENTER

    title = doc.add_paragraph()
    title_run = title.add_run("Full Stack Developer")
    title_run.font.size = Pt(12)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER

    contact = doc.add_paragraph()
    contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
    contact.add_run(CONTACT_LINE).font.size = Pt(10)

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
    photo_x = (pdf.w - photo_mm) / 2
    photo_y = pdf.t_margin
    pdf.image(str(OUT_PHOTO_JPEG), x=photo_x, y=photo_y, w=photo_mm, h=photo_mm)

    pdf.set_y(photo_y + photo_mm + 4)
    pdf.set_font("Helvetica", "B", 16)
    pdf.cell(0, 8, pdf_safe("Exiequielle John Frias (XC)"), align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 12)
    pdf.cell(0, 6, pdf_safe("Full Stack Developer"), align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 9)
    pdf.multi_cell(0, 4, pdf_safe(CONTACT_LINE), align="C")
    pdf.ln(4)

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
    print(f"Photo: {OUT_PHOTO_JPEG}")
    print("If Preview still looks old: quit Preview, then reopen this PDF.")


def main() -> None:
    photo_jpeg = crop_profile_photo()
    build_docx(photo_jpeg)
    build_pdf(photo_jpeg)


if __name__ == "__main__":
    main()
    sys.exit(0)
