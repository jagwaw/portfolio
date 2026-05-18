#!/usr/bin/env python3
"""Generate public/XCResume2026.docx from portfolio content."""

from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt

ROOT = Path(__file__).resolve().parents[1]
OUT_DOCX = ROOT / "public" / "XCResume2026.docx"


def add_heading(doc: Document, text: str) -> None:
    p = doc.add_paragraph()
    run = p.add_run(text.upper())
    run.bold = True
    run.font.size = Pt(11)
    p.paragraph_format.space_before = Pt(10)
    p.paragraph_format.space_after = Pt(4)


def add_bullets(doc: Document, items: list[str]) -> None:
    for item in items:
        doc.add_paragraph(item, style="List Bullet")


def build() -> None:
    doc = Document()

    # Name & contact
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

    # Summary
    add_heading(doc, "Summary")
    doc.add_paragraph(
        "Frontend Engineer with 8+ years of experience shipping production UI in fintech and "
        "product teams. Specialized in Vue, Nuxt, and TypeScript — from onboarding and "
        "verification flows to component systems that scale. Comfortable across the stack "
        "with Python and REST APIs when products need it."
    )

    # Skills
    add_heading(doc, "Technical Skills")
    skills = [
        ("Frontend", "Vue.js, Nuxt.js 2 & 3, TypeScript, JavaScript, Tailwind CSS, SASS/SCSS, Vuex/Pinia, GSAP, PWA, WebSocket, responsive UI"),
        ("Tools & AI", "Git, Figma, Cursor, Claude, ChatGPT, Postman, JIRA, Confluence, Bitbucket, ClickUp"),
        ("Backend", "REST API, FastAPI, Python, Django, PHP, Symfony, SQLAlchemy, JWT"),
        ("Databases", "PostgreSQL, MySQL, MongoDB, Redis"),
        ("DevOps", "Docker, NGINX, Linux, AWS"),
    ]
    for label, items in skills:
        p = doc.add_paragraph()
        p.add_run(f"{label}: ").bold = True
        p.add_run(items)

    # Experience
    add_heading(doc, "Professional Experience")
    jobs = [
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
    for job in jobs:
        h = doc.add_paragraph()
        h.add_run(job["header"]).bold = True
        d = doc.add_paragraph(job["dates"])
        d.paragraph_format.space_after = Pt(2)
        add_bullets(doc, job["bullets"])

    # Education
    add_heading(doc, "Education")
    edu = doc.add_paragraph()
    edu.add_run("Bachelor of Science in Information Technology").bold = True
    doc.add_paragraph("Lyceum of the Philippines University — Manila  |  2014 – 2018")

    OUT_DOCX.parent.mkdir(parents=True, exist_ok=True)
    doc.save(OUT_DOCX)
    print(f"Wrote {OUT_DOCX}")


if __name__ == "__main__":
    build()
