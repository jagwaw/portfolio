#!/usr/bin/env python3
"""Generate both resume variants into public/ as .docx (editable) and .pdf (download).

  frontend  -> XCResume-vue-frontend.{docx,pdf}   (kept at the old URL so links already sent keep working)
  fullstack -> XCResume-fullstack.{docx,pdf}

Edit the CONTENT section below, then run:  npm run resume
"""

from __future__ import annotations

import io
import sys
from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Inches, Pt, RGBColor
from fpdf import FPDF
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PROFILE_SOURCE = ROOT / "assets" / "img" / "xc.jpg"
PUBLIC = ROOT / "public"
OUT_PHOTO_JPEG = PUBLIC / "images" / "xc-resume-2x2.jpg"
PHOTO_INCHES = 1.1
PHOTO_ORIGIN_X = 0.47
PHOTO_ORIGIN_Y = 0.40

# --------------------------------------------------------------------------- CONTENT

NAME = "Exiequielle John Frias (XC)"
CONTACT_LINE = (
    "Manila, Philippines  |  frias.exiequiellejohn@gmail.com  |  xcworks.vercel.app  |  "
    "linkedin.com/in/exiequielle-john  |  github.com/jagwaw"
)

BILLEASE = {
    "company": "BillEase",
    "role": "Software Engineer",
    "dates": "Feb 2024 - Present",
    "context": "Consumer lending and payments app for a Philippine fintech. Nuxt, Vue, TypeScript, Vuex, Tailwind, Python.",
}
BILLEASE_BULLETS = {
    "core": "Core contributor to the consumer lending web app: 3,400+ commits across KYC onboarding, payments, and credit products.",
    "liveness": "Replaced a third-party biometric liveness vendor with an in-house detection pipeline (face detection, pose gating, remotely tunable thresholds), removing a per-verification vendor cost.",
    "credit": "Led the frontend build of a new Credit Line product: activation, funding-source selection, OTP-gated payments, statements, and deep-link entry points across four purchase flows.",
    "recovery": "Redesigned Account Recovery end to end, adding invisible bot protection with a fallback challenge and security telemetry.",
    "tokens": "Drove the migration from an ad-hoc color palette to a Figma-driven design-token system (TypeScript -> CSS variables -> Tailwind), ending years of style drift.",
    "refresh": "Owned the design refresh across payments, notifications, e-wallet, auto-renew, and Pay Now.",
    "compression": "Built client-side image compression for KYC uploads so large phone photos no longer fail, with a legibility floor that keeps documents readable for reviewers.",
    "spec": "Introduced the team's change-spec practice (proposal, task checklist, and implementation record per feature), now the standard for new work.",
    "python": "Maintain production Python/Django REST APIs: bug fixes, endpoint improvements, and business analytics events across sign-up, bills, cash loan, promo, and credit line.",
}

PENBROTHERS = {
    "company": "Penbrothers (Client: Gamesys / Bally's)",
    "role": "Frontend Developer",
    "dates": "Oct 2021 - Jan 2024",
    "context": "Customer-facing websites for a global online gaming company, with European and US teams.",
    "bullets": [
        "Built and maintained responsive, mobile-first interfaces for high-traffic gaming sites.",
        "Owned technical SEO: fixed site speed, mobile responsiveness, and crawlability issues, and reported SEO performance to the team.",
        "Set up Google Analytics and Dynatrace, built KPI dashboards, and shipped fixes for bottlenecks found in real-user data.",
        "Analyzed A/B test results to recommend improvements; wrote unit tests and took part in code reviews across time zones.",
    ],
}

NARRASOFT = {
    "company": "NarraSoft (Client: Panoply.io)",
    "role": "Python Developer",
    "dates": "May 2021 - Oct 2021",
    "context": "Cloud data warehouse platform.",
    "bullets": [
        "Fixed bugs and improved existing features across the platform's Python codebase.",
        "Debugged and maintained data source integrations pulling from third-party providers.",
    ],
}

REMOTE_STAFF = {
    "company": "Remote Staff",
    "role": "Junior Full-Stack Developer",
    "dates": "Jul 2018 - May 2021",
    "context": "Internal products for a remote staffing company, working directly with the business team and Australian clients.",
    "bullets": [
        "Built Remote Classroom end to end: a pandemic-era platform for schools with student activity tracking, screen capture, time tracking, and task management.",
        "Designed and built its REST APIs in Flask with PostgreSQL and SQLAlchemy.",
        "Migrated a legacy Python 2.7 API to Python 3.7, rebuilding it on FastAPI.",
        "Rebuilt the client-facing candidate page (v2) and built the company's pricing page.",
    ],
}

EDUCATION = ("Bachelor of Science in Information Technology", "Lyceum of the Philippines University - Manila  |  2014 - 2018")
CERTS = "LinkedIn Learning: React.js Essential Training; React.js: Building an Interface"

VARIANTS: dict[str, dict] = {
    "frontend": {
        "file": "XCResume-vue-frontend",
        "title": "AI-Native Frontend Engineer  |  Vue, Nuxt, TypeScript",
        "summary": (
            "Frontend-leaning engineer with 8+ years shipping production web apps. At BillEase, a Philippine "
            "fintech, I build KYC, payments, and credit products in Vue/Nuxt and TypeScript: I replaced a "
            "biometric vendor with an in-house liveness pipeline, led the frontend of a new credit line product, "
            "and drove a Figma-driven design-token migration. I build with Claude Code, Cursor, and MCP every day, "
            "and I'm comfortable in Python APIs when a feature spans the stack."
        ),
        "skills": [
            ("Frontend", "Vue.js, Nuxt.js 2 & 3, TypeScript, JavaScript (ES6+), Vuex, Vue Router, Tailwind CSS, SCSS, Vuetify, Firebase, WebSocket, React"),
            ("AI-assisted dev", "Claude Code, Cursor, MCP (Figma, ClickUp), spec-driven agentic workflows"),
            ("Web performance", "Technical SEO, Core Web Vitals, Google Analytics, Dynatrace, A/B testing"),
            ("Backend", "Python, Django REST Framework, FastAPI, Flask, PostgreSQL, REST APIs"),
            ("Tools", "Git, GitLab CI, Docker, Figma, Postman, JIRA, ClickUp"),
        ],
        "billease": ["core", "liveness", "credit", "recovery", "tokens", "refresh", "compression", "spec"],
    },
    "fullstack": {
        "file": "XCResume-fullstack",
        "title": "Full-Stack Engineer  |  Vue/Nuxt + Python",
        "summary": (
            "Full-stack engineer with 8+ years across Vue/Nuxt frontends and Python backends. I've written Python "
            "professionally since 2018: Flask and PostgreSQL APIs, a Python 2.7 to 3.7 migration onto FastAPI, and "
            "production Django REST APIs at BillEase, a Philippine fintech, where I also build KYC, payments, and "
            "credit products end to end. I build with Claude Code, Cursor, and MCP every day."
        ),
        "skills": [
            ("Backend", "Python, Django REST Framework, Django, FastAPI, Flask, SQLAlchemy, REST APIs"),
            ("Frontend", "Vue.js, Nuxt.js, TypeScript, Vuex, Tailwind CSS, Firebase, WebSocket, React"),
            ("Data & infra", "PostgreSQL, MySQL, Redis, Docker, Nginx, AWS, GitLab CI, Linux"),
            ("AI-assisted dev", "Claude Code, Cursor, MCP (Figma, ClickUp), spec-driven agentic workflows"),
        ],
        "billease": ["core", "python", "liveness", "credit", "recovery", "tokens", "spec"],
    },
}

# --------------------------------------------------------------------------- RENDERING

ACCENT = (76, 29, 149)  # deep violet, matches the site


def jobs_for(variant: dict) -> list[dict]:
    billease = dict(BILLEASE, bullets=[BILLEASE_BULLETS[k] for k in variant["billease"]])
    return [billease, PENBROTHERS, NARRASOFT, REMOTE_STAFF]


def crop_profile_photo() -> bytes:
    img = Image.open(PROFILE_SOURCE).convert("RGB")
    w, h = img.size
    side = min(w, h)
    left = max(0, min(w * PHOTO_ORIGIN_X - side / 2, w - side))
    top = max(0, min(h * PHOTO_ORIGIN_Y - side / 2, h - side))
    square = img.crop((int(left), int(top), int(left + side), int(top + side))).resize((600, 600), Image.Resampling.LANCZOS)
    OUT_PHOTO_JPEG.parent.mkdir(parents=True, exist_ok=True)
    square.save(OUT_PHOTO_JPEG, format="JPEG", quality=92, optimize=True)
    buf = io.BytesIO()
    square.save(buf, format="JPEG", quality=92, optimize=True)
    return buf.getvalue()


def pdf_safe(text: str) -> str:
    return (
        text.replace("—", "-").replace("–", "-").replace("’", "'")
        .replace("→", "->").replace("·", "|")
        .encode("latin-1", "replace").decode("latin-1")
    )


# ---- DOCX

def docx_heading(doc: Document, text: str) -> None:
    p = doc.add_paragraph()
    r = p.add_run(text.upper())
    r.bold = True
    r.font.size = Pt(10.5)
    r.font.color.rgb = RGBColor(*ACCENT)
    p.paragraph_format.space_before = Pt(8)
    p.paragraph_format.space_after = Pt(2)


def build_docx(variant: dict, photo: bytes) -> Path:
    doc = Document()
    for s in doc.sections:
        s.left_margin = s.right_margin = Inches(0.7)
        s.top_margin = s.bottom_margin = Inches(0.6)
    style = doc.styles["Normal"]
    style.font.name = "Calibri"
    style.font.size = Pt(10)
    style.paragraph_format.space_after = Pt(1)

    table = doc.add_table(rows=1, cols=2)
    left, right = table.rows[0].cells
    left.width, right.width = Inches(1.3), Inches(5.8)
    left.paragraphs[0].add_run().add_picture(io.BytesIO(photo), width=Inches(PHOTO_INCHES))
    n = right.paragraphs[0].add_run(NAME)
    n.bold, n.font.size = True, Pt(18)
    t = right.add_paragraph().add_run(variant["title"])
    t.font.size, t.font.color.rgb = Pt(11.5), RGBColor(*ACCENT)
    right.add_paragraph().add_run(CONTACT_LINE).font.size = Pt(9)

    docx_heading(doc, "Summary")
    doc.add_paragraph(variant["summary"])

    docx_heading(doc, "Skills")
    for label, items in variant["skills"]:
        p = doc.add_paragraph()
        p.add_run(f"{label}: ").bold = True
        p.add_run(items)

    docx_heading(doc, "Experience")
    for job in jobs_for(variant):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(5)
        p.add_run(f"{job['role']}  |  {job['company']}").bold = True
        p.add_run(f"    {job['dates']}").italic = True
        c = doc.add_paragraph().add_run(job["context"])
        c.italic, c.font.size = True, Pt(9)
        for b in job["bullets"]:
            bp = doc.add_paragraph(b, style="List Bullet")
            bp.paragraph_format.space_after = Pt(1)

    docx_heading(doc, "Education & Certifications")
    p = doc.add_paragraph()
    p.add_run(EDUCATION[0]).bold = True
    p.add_run(f"  |  {EDUCATION[1]}")
    doc.add_paragraph(CERTS)

    out = PUBLIC / f"{variant['file']}.docx"
    doc.save(out)
    return out


# ---- PDF

class ResumePDF(FPDF):
    def __init__(self) -> None:
        super().__init__(format="A4")
        self.set_auto_page_break(auto=True, margin=12)
        self.set_margins(16, 12, 16)

    def heading(self, text: str) -> None:
        self.ln(2.2)
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(*ACCENT)
        self.cell(0, 5, pdf_safe(text.upper()), new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(*ACCENT)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.set_text_color(20, 20, 20)
        self.ln(1.5)

    def para(self, text: str, size: float = 9.5, style: str = "", h: float = 4.1) -> None:
        self.set_x(self.l_margin)
        self.set_font("Helvetica", style, size)
        self.multi_cell(self.epw, h, pdf_safe(text), align="L")

    def bullet(self, text: str) -> None:
        self.set_font("Helvetica", "", 9.2)
        y = self.get_y()
        self.set_xy(self.l_margin + 1.5, y)
        self.cell(3, 3.95, "-")
        self.set_xy(self.l_margin + 4.5, y)
        self.multi_cell(self.epw - 4.5, 3.95, pdf_safe(text), align="L")


def build_pdf(variant: dict) -> Path:
    pdf = ResumePDF()
    pdf.add_page()
    photo_mm = PHOTO_INCHES * 25.4
    top = pdf.t_margin
    pdf.image(str(OUT_PHOTO_JPEG), x=pdf.l_margin, y=top, w=photo_mm, h=photo_mm)
    x = pdf.l_margin + photo_mm + 6
    w = pdf.w - pdf.r_margin - x
    pdf.set_xy(x, top + 2)
    pdf.set_font("Helvetica", "B", 18)
    pdf.cell(w, 8, pdf_safe(NAME), new_x="LEFT", new_y="NEXT")
    pdf.set_font("Helvetica", "", 11.5)
    pdf.set_text_color(*ACCENT)
    pdf.cell(w, 6.5, pdf_safe(variant["title"]), new_x="LEFT", new_y="NEXT")
    pdf.set_text_color(60, 60, 60)
    pdf.set_font("Helvetica", "", 8.6)
    pdf.multi_cell(w, 4.2, pdf_safe(CONTACT_LINE), align="L")
    pdf.set_text_color(20, 20, 20)
    pdf.set_y(max(pdf.get_y(), top + photo_mm) + 1)

    pdf.heading("Summary")
    pdf.para(variant["summary"])

    pdf.heading("Skills")
    for label, items in variant["skills"]:
        pdf.set_x(pdf.l_margin)
        pdf.set_font("Helvetica", "B", 9.3)
        lw = pdf.get_string_width(pdf_safe(f"{label}: ")) + 1
        pdf.cell(lw, 4.1, pdf_safe(f"{label}: "), new_x="END")
        pdf.set_font("Helvetica", "", 9.3)
        pdf.multi_cell(pdf.epw - lw, 4.1, pdf_safe(items), align="L")

    pdf.heading("Experience")
    for i, job in enumerate(jobs_for(variant)):
        if i:
            pdf.ln(1.4)
        pdf.set_x(pdf.l_margin)
        pdf.set_font("Helvetica", "B", 10)
        head = pdf_safe(f"{job['role']}  |  {job['company']}")
        pdf.cell(pdf.epw - 40, 5, head)
        pdf.set_font("Helvetica", "I", 9)
        pdf.cell(40, 5, pdf_safe(job["dates"]), align="R", new_x="LMARGIN", new_y="NEXT")
        pdf.set_text_color(90, 90, 90)
        pdf.para(job["context"], size=8.6, style="I", h=4)
        pdf.set_text_color(20, 20, 20)
        for b in job["bullets"]:
            pdf.bullet(b)

    pdf.heading("Education & Certifications")
    pdf.set_x(pdf.l_margin)
    pdf.set_font("Helvetica", "B", 9.5)
    ew = pdf.get_string_width(pdf_safe(EDUCATION[0])) + 1
    pdf.cell(ew, 4.5, pdf_safe(EDUCATION[0]), new_x="END")
    pdf.set_font("Helvetica", "", 9.5)
    pdf.cell(0, 4.5, pdf_safe(f"  |  {EDUCATION[1]}"), new_x="LMARGIN", new_y="NEXT")
    pdf.para(CERTS, size=9)

    out = PUBLIC / f"{variant['file']}.pdf"
    pdf.output(str(out))
    return out


def main() -> None:
    photo = crop_profile_photo()
    for key, variant in VARIANTS.items():
        d = build_docx(variant, photo)
        p = build_pdf(variant)
        print(f"[{key}] wrote {d.name} and {p.name}")


if __name__ == "__main__":
    main()
    sys.exit(0)
