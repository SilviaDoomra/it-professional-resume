/**
 * Executive Linen Design System
 * Movement: Scandinavian Minimalism × Executive Consulting
 * Colors: Warm cream (#FAF8F4) bg, Forest green (#1B4332) primary, Gold (#C9A84C) accent
 * Typography: Cormorant Garamond (display) + Lato (body) + Playfair Display Italic (quotes)
 * Layout: Full-width alternating sections, generous whitespace, gold dividers, sidebar hero
 */

import { useEffect, useRef, useState } from "react";
import {
  Cloud,
  Database,
  Shield,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Award,
  BookOpen,
  Heart,
  Users,
  Star,
  Globe,
  Briefcase,
  FileText,
  Download,
} from "lucide-react";

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const GREEN = "#1B4332";
const GOLD = "#C9A84C";
const CREAM = "#FAF8F4";
const CHARCOAL = "#2D2D2D";
const MUTED = "#6B6B6B";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663316708108/fXaBcEaSTfhVaUWCuoEzxk/exec-hero-bg-FQ89QoftLkFwBGe5K5ecm7.webp";
const PORTRAIT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663316708108/fXaBcEaSTfhVaUWCuoEzxk/exec-portrait-frame-M7aD5vyzYShyfwYaojQxjF.webp";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Articles", href: "#articles" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "15+", label: "Years of Experience" },
  { value: "3", label: "Big Tech Companies" },
  { value: "9", label: "LinkedIn Recommendations" },
  { value: "8K", label: "LinkedIn Followers" },
];

const ACHIEVEMENTS = [
  "Built safeguards for business users data, avoiding an adverse action (>9 figures $) proposed by the European Commission.",
  "Spearheaded migration of 90% of privacy workflows at Meta to the Federation Platform, scaling usage from Privacy to Risk.",
  "Launched Microsoft's Data Residency Program — 100% global regulatory compliance for Azure across seven high-priority markets including Singapore, Brazil, China, and the EU (Schrems II).",
  "Orchestrated the successful Micro Regions launch at Microsoft, delivering mission-critical resilience and unlocking new Azure markets.",
  "Conceived and executed the Azure-to-Azure Workload Migration Program (now Azure Resource Move), enabling seamless migrations for thousands of enterprise customers.",
  "Delivered seven high-impact features for Amazon RDS PostgreSQL in six months, directly increasing customer retention.",
  "Founded and scaled the AWS Database Blog to #4 rank among all AWS technical blogs, growing community reach by 400%.",
  "Open-sourced elastic database client libraries — the first open-source launch by the SQL organization at Microsoft.",
];

const EXPERIENCES = [
  {
    company: "Meta",
    period: "Oct 2022 – Present",
    color: GREEN,
    roles: [
      {
        title: "Privacy Areas – Competition – Technical Program Manager Lead",
        period: "Sept 2024 – Present",
        bullets: [
          "Led organizational privacy strategy for Competitive Data Use (CDU), Cross-product Data Practices, and Cross-Promotion, influencing compliance for multiple product suites.",
          "Delivered AI guidance enabling an AI-first approach, accelerating product velocity by 10×.",
          "Built safeguards for business users data, avoiding an adverse action (>9 figures $) proposed by the European Commission.",
          "Championed org-wide engagement and belonging, increasing cross-team participation by 40%+ through innovative community initiatives.",
          "Co-led Risk-wide Engineering Excellence (EngEx) initiatives, operationalizing new maturity models.",
        ],
      },
      {
        title: "Regulatory Response Foundations – Technical Program Manager",
        period: "Oct 2022 – Sept 2024",
        bullets: [
          "Drove adoption and migration of 90% of privacy workflows to the Federation Platform, scaling usage from Privacy to Risk.",
          "Led Privacy workstream quality initiative, aligning work efforts to Meta's evolving business priorities and regulatory requirements.",
          "Initiated and facilitated the TPM Knowledge Sharing Series, upskilling the privacy program management community company-wide.",
        ],
      },
    ],
  },
  {
    company: "Microsoft",
    period: "June 2008 – Sept 2022",
    color: GREEN,
    roles: [
      {
        title: "Geo Expansion & Data Residency in Azure Privacy – Principal TPM Manager",
        period: "July 2018 – Sept 2022",
        bullets: [
          "Founded and directed the multi-million-dollar Data Residency Program, delivering global cloud compliance in seven new markets (Singapore, Brazil South, Hong Kong, EU Data Boundary / Schrems II).",
          "Personally influenced executive and C-level decision-making to accelerate product readiness across 500+ services.",
          "Led Azure region decommissioning and cross-region migration, achieving zero customer attrition in all transitions.",
        ],
      },
      {
        title: "Azure SQL Database Elastic Scale – Senior Program Manager",
        period: "March 2015 – June 2016",
        bullets: [
          "Open-sourced elastic scale libraries — the first open-source launch by the SQL organization.",
          "Drove developer adoption on GitHub and elevated community engagement.",
          "Acted as technical ambassador in industry forums, influencing the Azure SQL product roadmap.",
        ],
      },
      {
        title: "Windows Ecosystem Partner & Customer Engagement – Program Manager Lead",
        period: "January 2013 – March 2015",
        bullets: [
          "Led global device certification and compliance for Windows and Windows Phone, ensuring 100% regulatory and Mobile Operator approval for 50+ OEM SKUs.",
          "Streamlined problem escalation and partner resolution for high-impact launches, including Reliance Jio's national deployment.",
        ],
      },
      {
        title: "Visual Studio Extensibility – SDET II",
        period: "April 2011 – January 2013",
        bullets: [
          "Led a globally distributed QA team, automating stress testing frameworks and reducing execution time.",
          "Designed automation framework, resulting in 50% reduction of test code.",
        ],
      },
      {
        title: "Remote Desktop Licensing – SDET",
        period: "June 2008 – April 2011",
        bullets: [
          "Created next-generation test automation framework, improving code coverage and execution speed by 60%.",
          "Authored over 30 technical posts for MSDN blogs, cultivating sustained engagement in Microsoft's developer community.",
        ],
      },
    ],
  },
  {
    company: "Amazon Web Services",
    period: "July 2016 – July 2018",
    color: GREEN,
    roles: [
      {
        title: "Amazon RDS PostgreSQL – Sr. Product Manager",
        period: "July 2016 – July 2018",
        bullets: [
          "Owned and executed the full product roadmap for RDS PostgreSQL, increasing YoY revenue by double digits.",
          "Orchestrated large-scale customer migrations from on-premises/Oracle to RDS, launching seven new features (including logical replication, FedRAMP, HIPAA) in six months.",
          "Represented and evangelized RDS for PostgreSQL at EBCs, customer meetings, partner summits, and conferences.",
        ],
      },
      {
        title: "AWS Database Blog Owner",
        period: "July 2016 – July 2018",
        bullets: [
          "Conceived, built, and scaled AWS Database Blog, setting editorial vision and growing it to a top-4 AWS technical blog.",
          "Enlarged community reach by over 400% through strategic content planning and execution.",
        ],
      },
    ],
  },
];

const PROJECTS = [
  {
    name: "EU Data Boundary",
    company: "Microsoft",
    date: "Jan 2021",
    description: "Led the EU Data Boundary initiative ensuring Microsoft services meet European data residency and sovereignty requirements under Schrems II.",
    url: "https://www.microsoft.com/en-us/trust-center/privacy/european-data-boundary-eudb",
  },
  {
    name: "Data Residency in Azure",
    company: "Microsoft",
    date: "Dec 2018",
    description: "Ensure Microsoft and its services meet data residency requirements for various geographies — Singapore, Brazil, Hong Kong, China, and more.",
    url: "https://azure.microsoft.com/en-us/explore/global-infrastructure/data-residency/",
  },
  {
    name: "Cross-Region Migration Guidance",
    company: "Microsoft",
    date: "Jan – Jul 2019",
    description: "Authored and published comprehensive Azure cross-region migration guidance on GitHub, enabling enterprise customers to migrate workloads seamlessly.",
    url: "https://github.com/Azure/Azure-Migration-Guidance",
  },
  {
    name: "AWS Database Blog",
    company: "Amazon Web Services",
    date: "Jul 2016 – Aug 2018",
    description: "Founded and scaled the AWS Database Blog from scratch to a #4-ranked AWS technical blog, growing developer community reach by 400%+.",
    url: "https://aws.amazon.com/blogs/database/",
  },
];

const SKILLS = [
  {
    category: "Program & Product Management",
    icon: Briefcase,
    items: ["Cross-functional Leadership", "Strategic Planning", "Stakeholder Alignment", "Risk Management", "Agile / Scrum", "OKRs", "Roadmap Ownership"],
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    items: ["Microsoft Azure", "Amazon Web Services", "Data Residency", "Cloud Migration", "Multi-region Architecture", "Compliance Engineering"],
  },
  {
    category: "Privacy & Regulatory",
    icon: Shield,
    items: ["GDPR", "CCPA", "Regulatory Response", "Data Governance", "Privacy Strategy", "Risk Assessment", "Zero Trust", "EU Data Boundary"],
  },
  {
    category: "Data & Engineering",
    icon: Database,
    items: ["Database Systems", "PostgreSQL", "SQL", "Open Source", "Developer Relations", "Technical Writing", "Test Automation"],
  },
];

const ARTICLES = [
  {
    title: "Privacy Trends 2023: Navigating the Evolving Landscape",
    date: "May 23, 2023",
    summary: "An in-depth look at key privacy trends shaping 2023 — from heightened data protection and strengthening regulations to Privacy by Design, privacy-enhancing technologies, and individual empowerment.",
    reactions: 12,
    url: "https://www.linkedin.com/pulse/privacy-trends-2023-navigating-evolving-landscape-silvia-doomra/",
  },
  {
    title: "Designing Simple Scorecards",
    date: "Dec 10, 2022",
    summary: "Practical guidance on building scorecards for program reporting — distilling complex multi-project status into clear, actionable metrics for leadership and stakeholders.",
    reactions: 16,
    url: "https://www.linkedin.com/pulse/designing-simple-scorecards-silvia-doomra/",
  },
  {
    title: "Dilemmas of a First-Time Manager – People or Product Manager",
    date: "Nov 22, 2017",
    summary: "Reflections on the real tensions first-time managers face when balancing people leadership with product delivery — drawing on personal experience in the tech industry.",
    reactions: 43,
    comments: 4,
    url: "https://www.linkedin.com/pulse/dilemmas-first-time-manager-people-product-silvia-doomra/",
  },
];

const RECOMMENDATIONS = [
  {
    author: "Chandra Achalla",
    role: "Manager, Azure Privacy — Microsoft",
    text: "I had the pleasure to have Silvia as part of my team during my time in the Azure Privacy. She is goal oriented and driven by goals. She worked on one of most complex projects (Data Residency) and faced each challenge as a new opportunity to learn. Silvia grasps new concepts quickly and is excellent communicator to a wide range of audience — execs, engineers and lawyers. She is also one of the most responsible, kind and hard working managers. She will be an asset to any organization.",
  },
  {
    author: "LinkedIn Colleague",
    role: "Partner & Peer, Privacy Team",
    text: "I had the great pleasure and fortune working with Silvia as a partner and later as a peer on the same team. She is a great leader who is empathetic and cares about growing her team. She has great strategic insights and is well respected across the organization for privacy and data residency. She is easy to work with and owns her solution end to end.",
  },
];

const VOLUNTEER = [
  { role: "Council Member", org: "Women and Allies of Azure Global (WAAG)", period: "Jan 2020 – Present", icon: Users },
  { role: "Panelist – Navigating the Balancing Act of Priorities and Time", org: "Women in Science and Engineering (WISE), University of Washington", period: "Mar 2018 – Present", icon: Star },
  { role: "TEALS CS Teacher", org: "North Quincy High School", period: "Aug 2015 – Present", icon: BookOpen },
  { role: "Judge", org: "Microsoft Imagine Cup", period: "Apr 2013 – Present", icon: Award },
  { role: "Mentor & Sponsor", org: "Global Give Back Circle × Magic Bus", period: "Jan 2016 – Present", icon: Heart },
  { role: "Teacher", org: "ILP (Indian Literacy Project), Hyderabad", period: "May 2010 – Jul 2010", icon: BookOpen },
];

const EDUCATION = [
  { degree: "Master of Science", institution: "University of San Francisco", year: "Current" },
  { degree: "MBA, Product Management", institution: "University of Phoenix", year: "2012 – 2014" },
  { degree: "BE, Information Technology", institution: "Punjab Engineering College (D.U.), Chandigarh, India", year: "2004 – 2008" },
];

const CERTIFICATIONS = [
  { name: "Executive Presence for Women", issuer: "LinkedIn Learning", year: "Nov 2018" },
  { name: "Dale Carnegie Course: Skills for Success", issuer: "Dale Carnegie", year: "Oct 2014" },
];

const LANGUAGES = ["English", "Hindi", "Punjabi", "French"];

// ─── SCROLL ANIMATION HOOK ────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── COUNTER COMPONENT ───────────────────────────────────────────────────────

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const isNum = /^\d+/.test(value);
        if (!isNum) { setDisplayed(value); return; }
        const num = parseInt(value);
        const suffix = value.replace(/^\d+/, "");
        let start = 0;
        const step = Math.ceil(num / 30);
        const timer = setInterval(() => {
          start = Math.min(start + step, num);
          setDisplayed(start + suffix);
          if (start >= num) clearInterval(timer);
        }, 40);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-5xl font-bold mb-1"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
      >
        {displayed}
      </div>
      <div className="text-sm uppercase tracking-widest" style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}>
        {label}
      </div>
    </div>
  );
}

// ─── SECTION LABEL ────────────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-px flex-1" style={{ backgroundColor: GOLD, opacity: 0.5 }} />
      <span
        className="text-xs uppercase tracking-[0.25em] font-bold px-4"
        style={{ color: GOLD, fontFamily: "'Lato', sans-serif" }}
      >
        {text}
      </span>
      <div className="h-px flex-1" style={{ backgroundColor: GOLD, opacity: 0.5 }} />
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Home() {
  useScrollReveal();
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleRole = (key: string) =>
    setExpandedRoles((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, color: CHARCOAL }}>

      {/* ── NAVIGATION ────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: "rgba(250,248,244,0.95)", backdropFilter: "blur(12px)", borderColor: "rgba(201,168,76,0.2)" }}
      >
        <div className="container flex items-center justify-between h-16">
          <a href="#about" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: GREEN, fontFamily: "'Lato', sans-serif" }}>
              SD
            </div>
            <span className="hidden sm:block font-semibold text-sm tracking-wide" style={{ color: GREEN, fontFamily: "'Lato', sans-serif" }}>
              Silvia Doomra
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="nav-link text-xs uppercase tracking-widest font-semibold transition-colors"
                style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                {n.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:contact@silviadoomra.com"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: GREEN, fontFamily: "'Lato', sans-serif" }}
          >
            <Mail className="h-3.5 w-3.5" /> Contact
          </a>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: GREEN }}
          >
            <div className="w-5 h-0.5 mb-1" style={{ backgroundColor: GREEN }} />
            <div className="w-5 h-0.5 mb-1" style={{ backgroundColor: GREEN }} />
            <div className="w-5 h-0.5" style={{ backgroundColor: GREEN }} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t px-6 py-4 space-y-3" style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: CREAM }}>
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="block text-sm font-semibold uppercase tracking-widest"
                style={{ color: GREEN, fontFamily: "'Lato', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section id="about" className="relative overflow-hidden">
        {/* Background image, very subtle */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container relative z-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-5 gap-16 items-center">

            {/* Text — 3 cols */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <p
                  className="text-xs uppercase tracking-[0.3em] mb-4 font-semibold"
                  style={{ color: GOLD, fontFamily: "'Lato', sans-serif" }}
                >
                  Technical Program Manager · Greater Seattle Area
                </p>
                <h1
                  className="text-6xl lg:text-8xl leading-[0.95] mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: GREEN }}
                >
                  Silvia<br />
                  <span style={{ color: CHARCOAL }}>Doomra</span>
                </h1>
                <p className="text-lg leading-relaxed max-w-xl" style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}>
                  Dynamic TPM with 15+ years driving global product delivery and operational excellence at{" "}
                  <span style={{ color: CHARCOAL, fontWeight: 700 }}>Meta</span>,{" "}
                  <span style={{ color: CHARCOAL, fontWeight: 700 }}>Microsoft</span>, and{" "}
                  <span style={{ color: CHARCOAL, fontWeight: 700 }}>Amazon Web Services</span>.
                  Transforming complex, high-ambiguity challenges into strategic, measurable outcomes across privacy, cloud, and data.
                </p>
              </div>

              <blockquote
                className="text-xl italic leading-relaxed pl-5"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: GREEN,
                  borderLeft: `3px solid ${GOLD}`,
                }}
              >
                "Change is the law, Growth is optional: Choose wisely."
                <footer className="text-sm mt-2 not-italic" style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}>— Dr. Kiran Bedi</footer>
              </blockquote>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:contact@silviadoomra.com"
                  className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: GREEN, fontFamily: "'Lato', sans-serif" }}
                >
                  <Mail className="h-4 w-4" /> Get In Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/silviadoomra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${GOLD}`, color: GREEN, fontFamily: "'Lato', sans-serif" }}
                >
                  <ExternalLink className="h-4 w-4" /> LinkedIn
                </a>
              </div>

              <div className="flex flex-col gap-2 text-sm" style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}>
                <a href="mailto:contact@silviadoomra.com" className="flex items-center gap-2 hover:underline">
                  <Mail className="h-4 w-4" style={{ color: GOLD }} /> contact@silviadoomra.com
                </a>
                <a href="tel:425-802-0705" className="flex items-center gap-2 hover:underline">
                  <Phone className="h-4 w-4" style={{ color: GOLD }} /> 425-802-0705
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" style={{ color: GOLD }} /> Greater Seattle Area
                </span>
                <a href="https://silviadoomra.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                  <Globe className="h-4 w-4" style={{ color: GOLD }} /> silviadoomra.com
                </a>
              </div>
            </div>

            {/* Portrait — 2 cols */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Gold frame offset */}
                <div
                  className="absolute -top-4 -right-4 w-full h-full"
                  style={{ border: `2px solid ${GOLD}`, opacity: 0.5 }}
                />
                <img
                  src={PORTRAIT}
                  alt="Silvia Doomra — Senior Technical Program Manager"
                  className="relative z-10 w-72 lg:w-80 object-cover"
                  style={{ filter: "grayscale(15%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="py-16 border-y" style={{ borderColor: `${GOLD}30`, backgroundColor: "white" }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map((s) => (
              <Counter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY ACHIEVEMENTS ──────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <SectionLabel text="Impact & Achievements" />
          <h2
            className="text-5xl mb-16 fade-in-up"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
          >
            Measurable Outcomes
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-4 fade-in-up"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="mt-2 flex-shrink-0 w-5 h-5 flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: GOLD, fontFamily: "'Lato', sans-serif" }}
                >
                  {i + 1}
                </div>
                <p className="text-base leading-relaxed" style={{ color: CHARCOAL, fontFamily: "'Lato', sans-serif" }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────────────────────────── */}
      <section id="experience" className="py-24" style={{ backgroundColor: "white" }}>
        <div className="container">
          <SectionLabel text="Career History" />
          <h2
            className="text-5xl mb-16 fade-in-up"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
          >
            Professional Experience
          </h2>

          <div className="space-y-20">
            {EXPERIENCES.map((company, ci) => (
              <div key={ci} className="fade-in-up" style={{ transitionDelay: `${ci * 100}ms` }}>
                {/* Company header */}
                <div className="flex items-center gap-4 mb-8">
                  <div>
                    <h3
                      className="text-3xl"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN, fontWeight: 600 }}
                    >
                      {company.company}
                    </h3>
                    <p className="text-sm mt-0.5" style={{ color: GOLD, fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
                      {company.period}
                    </p>
                  </div>
                </div>

                {/* Roles */}
                <div className="space-y-6 pl-0 lg:pl-6 border-l-2" style={{ borderColor: `${GOLD}30` }}>
                  {company.roles.map((role, ri) => {
                    const key = `${ci}-${ri}`;
                    const expanded = expandedRoles[key];
                    const showToggle = role.bullets.length > 3;
                    const visible = expanded ? role.bullets : role.bullets.slice(0, 3);
                    return (
                      <div
                        key={ri}
                        className="relative pl-8 py-6 pr-6 transition-all duration-300"
                        style={{ backgroundColor: ri % 2 === 0 ? CREAM : "white", borderLeft: `3px solid ${GREEN}` }}
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-1 mb-4">
                          <h4
                            className="text-xl font-semibold leading-snug max-w-2xl"
                            style={{ fontFamily: "'Cormorant Garamond', serif", color: CHARCOAL }}
                          >
                            {role.title}
                          </h4>
                          <span
                            className="text-xs font-semibold uppercase tracking-wider flex-shrink-0 px-3 py-1 h-fit"
                            style={{ backgroundColor: `${GOLD}20`, color: GREEN, fontFamily: "'Lato', sans-serif" }}
                          >
                            {role.period}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {visible.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-3">
                              <div className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
                              <span className="text-sm leading-relaxed" style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}>{b}</span>
                            </li>
                          ))}
                        </ul>
                        {showToggle && (
                          <button
                            onClick={() => toggleRole(key)}
                            className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-70"
                            style={{ color: GREEN, fontFamily: "'Lato', sans-serif" }}
                          >
                            {expanded ? <><ChevronUp className="h-3.5 w-3.5" /> Show less</> : <><ChevronDown className="h-3.5 w-3.5" /> Show more</>}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <SectionLabel text="Featured Work" />
          <h2
            className="text-5xl mb-16 fade-in-up"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
          >
            Key Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white border transition-all duration-300 hover:shadow-lg fade-in-up"
                style={{ borderColor: `${GOLD}30`, transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-2xl mb-1 group-hover:underline"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
                    >
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-bold uppercase tracking-wider px-2 py-0.5"
                        style={{ backgroundColor: `${GREEN}15`, color: GREEN, fontFamily: "'Lato', sans-serif" }}
                      >
                        {p.company}
                      </span>
                      <span className="text-xs" style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}>{p.date}</span>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 flex-shrink-0 mt-1 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: GREEN }} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}>{p.description}</p>
                <div className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: GOLD }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ────────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24" style={{ backgroundColor: "white" }}>
        <div className="container">
          <SectionLabel text="Core Competencies" />
          <h2
            className="text-5xl mb-16 fade-in-up"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
          >
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {SKILLS.map((sg, i) => {
              const Icon = sg.icon;
              return (
                <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2" style={{ backgroundColor: `${GREEN}15` }}>
                      <Icon className="h-5 w-5" style={{ color: GREEN }} />
                    </div>
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
                    >
                      {sg.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sg.items.map((skill, si) => (
                      <span
                        key={si}
                        className="text-sm px-3 py-1.5 border transition-all hover:border-green-800"
                        style={{
                          borderColor: `${GOLD}50`,
                          color: CHARCOAL,
                          fontFamily: "'Lato', sans-serif",
                          backgroundColor: `${GOLD}08`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDATIONS ───────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: GREEN }}>
        <div className="container">
          <SectionLabel text="Testimonials" />
          <h2
            className="text-5xl mb-16 fade-in-up"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "white" }}
          >
            Recommendations
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {RECOMMENDATIONS.map((r, i) => (
              <div
                key={i}
                className="p-8 fade-in-up"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  borderLeft: `3px solid ${GOLD}`,
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="h-4 w-4 fill-current" style={{ color: GOLD }} />
                  ))}
                </div>
                <blockquote
                  className="text-lg italic leading-relaxed mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "rgba(255,255,255,0.9)" }}
                >
                  "{r.text}"
                </blockquote>
                <div>
                  <p className="font-bold text-white" style={{ fontFamily: "'Lato', sans-serif" }}>{r.author}</p>
                  <p className="text-sm" style={{ color: `${GOLD}CC`, fontFamily: "'Lato', sans-serif" }}>{r.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-sm" style={{ color: `${GOLD}99`, fontFamily: "'Lato', sans-serif" }}>
            9 total recommendations on{" "}
            <a href="https://www.linkedin.com/in/silviadoomra/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: GOLD }}>
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      {/* ── ARTICLES ──────────────────────────────────────────────────────── */}
      <section id="articles" className="py-24" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <SectionLabel text="Thought Leadership" />
          <h2
            className="text-5xl mb-16 fade-in-up"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
          >
            Published Articles
          </h2>
          <div className="space-y-6">
            {ARTICLES.map((a, i) => (
              <a
                key={i}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col lg:flex-row gap-6 p-8 bg-white border transition-all duration-300 hover:shadow-md fade-in-up"
                style={{ borderColor: `${GOLD}30`, transitionDelay: `${i * 80}ms` }}
              >
                <div className="lg:w-32 flex-shrink-0">
                  <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD, fontFamily: "'Lato', sans-serif" }}>
                    {a.date}
                  </p>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-2xl mb-3 group-hover:underline"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}>{a.summary}</p>
                  <span className="text-xs font-semibold" style={{ color: GOLD, fontFamily: "'Lato', sans-serif" }}>
                    {a.reactions} reactions{a.comments ? ` · ${a.comments} comments` : ""}
                  </span>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <ExternalLink className="h-4 w-4 opacity-30 group-hover:opacity-80 transition-opacity" style={{ color: GREEN }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOLUNTEER ─────────────────────────────────────────────────────── */}
      <section id="volunteer" className="py-24" style={{ backgroundColor: "white" }}>
        <div className="container">
          <SectionLabel text="Community" />
          <h2
            className="text-5xl mb-16 fade-in-up"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
          >
            Volunteer Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VOLUNTEER.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 border fade-in-up transition-all duration-300 hover:shadow-md"
                  style={{ borderColor: `${GOLD}30`, transitionDelay: `${i * 60}ms`, backgroundColor: CREAM }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 flex-shrink-0" style={{ backgroundColor: `${GREEN}15` }}>
                      <Icon className="h-4 w-4" style={{ color: GREEN }} />
                    </div>
                    <div>
                      <h4
                        className="text-base font-semibold leading-snug"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: CHARCOAL }}
                      >
                        {v.role}
                      </h4>
                      <p className="text-xs font-semibold mt-1" style={{ color: GREEN, fontFamily: "'Lato', sans-serif" }}>{v.org}</p>
                    </div>
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5"
                    style={{ backgroundColor: `${GOLD}20`, color: MUTED, fontFamily: "'Lato', sans-serif" }}
                  >
                    {v.period}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EDUCATION + CERTIFICATIONS + LANGUAGES ────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: CREAM }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Education */}
            <div className="lg:col-span-2">
              <SectionLabel text="Academic Background" />
              <h2
                className="text-5xl mb-10 fade-in-up"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
              >
                Education
              </h2>
              <div className="space-y-6">
                {EDUCATION.map((edu, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 p-6 bg-white border fade-in-up"
                    style={{ borderColor: `${GOLD}30`, transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="p-2 flex-shrink-0" style={{ backgroundColor: `${GREEN}15` }}>
                      <Award className="h-5 w-5" style={{ color: GREEN }} />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: CHARCOAL }}
                      >
                        {edu.degree}
                      </h3>
                      <p className="text-sm mt-0.5" style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}>{edu.institution}</p>
                      <span
                        className="text-xs font-semibold uppercase tracking-wider mt-2 inline-block px-2 py-0.5"
                        style={{ backgroundColor: `${GOLD}20`, color: GREEN, fontFamily: "'Lato', sans-serif" }}
                      >
                        {edu.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: Certifications + Languages */}
            <div className="space-y-12">
              <div>
                <SectionLabel text="Credentials" />
                <h2
                  className="text-4xl mb-8 fade-in-up"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
                >
                  Certifications
                </h2>
                <div className="space-y-4">
                  {CERTIFICATIONS.map((c, i) => (
                    <div
                      key={i}
                      className="p-5 bg-white border fade-in-up"
                      style={{ borderColor: `${GOLD}30`, transitionDelay: `${i * 80}ms` }}
                    >
                      <p className="font-semibold text-sm" style={{ color: CHARCOAL, fontFamily: "'Lato', sans-serif" }}>{c.name}</p>
                      <p className="text-xs mt-1" style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}>{c.issuer} · {c.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel text="Communication" />
                <h2
                  className="text-4xl mb-8 fade-in-up"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
                >
                  Languages
                </h2>
                <div className="flex flex-wrap gap-3">
                  {LANGUAGES.map((lang, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm font-semibold border"
                      style={{
                        borderColor: `${GOLD}50`,
                        color: GREEN,
                        fontFamily: "'Lato', sans-serif",
                        backgroundColor: `${GOLD}10`,
                      }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 relative overflow-hidden" style={{ backgroundColor: "white" }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container relative z-10 text-center">
          <SectionLabel text="Let's Connect" />
          <h2
            className="text-6xl mb-6 fade-in-up"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: GREEN }}
          >
            Open to New Opportunities
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-12 fade-in-up" style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}>
            Available for senior TPM and product leadership roles, speaking engagements, mentorship, and collaboration on privacy and cloud initiatives.
          </p>
          <div className="flex flex-wrap gap-4 justify-center fade-in-up">
            <a
              href="mailto:contact@silviadoomra.com"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN, fontFamily: "'Lato', sans-serif" }}
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/silviadoomra/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all hover:opacity-80"
              style={{ border: `1.5px solid ${GOLD}`, color: GREEN, fontFamily: "'Lato', sans-serif" }}
            >
              <ExternalLink className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://silviadoomra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all hover:opacity-80"
              style={{ border: `1.5px solid ${GREEN}`, color: GREEN, fontFamily: "'Lato', sans-serif" }}
            >
              <Globe className="h-4 w-4" /> Website
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="py-8 border-t" style={{ borderColor: `${GOLD}25`, backgroundColor: CREAM }}>
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: MUTED, fontFamily: "'Lato', sans-serif" }}>
            © 2026 Silvia Doomra. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:contact@silviadoomra.com" className="transition-opacity hover:opacity-60" style={{ color: MUTED }}>
              <Mail className="h-4 w-4" />
            </a>
            <a href="tel:425-802-0705" className="transition-opacity hover:opacity-60" style={{ color: MUTED }}>
              <Phone className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/silviadoomra/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60" style={{ color: MUTED }}>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
