/**
 * Kinetic Data Architecture Design
 * - Charcoal base (#1E1E24) with electric blue (#0066FF), hot magenta (#FF0080), laser yellow (#FFE600)
 * - Modular cards with off-axis rotation (0.5–3 deg), floating animation, gradient borders
 * - Archivo Black headings (uppercase), Manrope body, Fira Code for tech labels
 * - All content sourced from resume doc + LinkedIn profile
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Database,
  Shield,
  Mail,
  Phone,
  Download,
  Server,
  Code,
  Award,
  TrendingUp,
  BookOpen,
  Heart,
  Globe,
  Star,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Target,
  Users,
  Layers,
  Lock,
  FileText,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Articles", href: "#articles" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Contact", href: "#contact" },
];

const ACHIEVEMENTS = [
  {
    color: "blue",
    text: "Built safeguards for business users data, avoiding an adverse action (>9 figures $) and burdensome controls proposed by the European Commission.",
  },
  {
    color: "magenta",
    text: "Spearheaded migration of 90% of privacy workflows at Meta to the Federation Platform — driving enterprise-wide adoption and instituting a sustainable governance model.",
  },
  {
    color: "yellow",
    text: "Launched and scaled Microsoft's Data Residency Program, delivering 100% global regulatory compliance for Azure across seven high-priority markets including Singapore, Brazil, China, and the EU (Schrems II).",
  },
  {
    color: "blue",
    text: "Orchestrated the successful Micro Regions launch at Microsoft, delivering mission-critical resilience and unlocking new Azure markets, leading to increased customer acquisition.",
  },
  {
    color: "magenta",
    text: "Conceived, drove, and executed the Azure-to-Azure Workload Migration Program (now Azure Resource Move), enabling seamless migrations for thousands of enterprise customers.",
  },
  {
    color: "yellow",
    text: "Delivered seven high-impact features for Amazon RDS PostgreSQL in just six months, directly increasing customer retention.",
  },
  {
    color: "blue",
    text: "Founded, scaled, and led editorial vision for the AWS Database Blog, achieving #4 rank among all AWS technical blogs and substantially growing developer engagement.",
  },
  {
    color: "magenta",
    text: "Open-sourced elastic database client libraries — accountable for launch, community adoption, and developer enablement across GitHub, benefiting thousands in the ecosystem.",
  },
];

const EXPERIENCES = [
  {
    company: "Meta",
    color: "blue",
    icon: Shield,
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
          "Drove adoption and migration of 90% of privacy workflows to the Federation Platform, scaling usage from Privacy to Risk (Privacy, Security, Compliance).",
          "Led Privacy workstream quality initiative, aligning work efforts to Meta's evolving business priorities and regulatory requirements.",
          "Initiated and facilitated the TPM Knowledge Sharing Series, upskilling the privacy program management community and standardizing best practices company-wide.",
        ],
      },
    ],
  },
  {
    company: "Microsoft",
    color: "magenta",
    icon: Cloud,
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
          "Open-sourced elastic scale libraries — the very first open-source launch by the SQL organization.",
          "Drove developer adoption on GitHub and elevated community engagement.",
          "Acted as technical ambassador in industry forums, influencing the Azure SQL product roadmap.",
        ],
      },
      {
        title: "Windows Ecosystem Partner and Customer Engagement – Program Manager Lead",
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
          "Designed automation framework, resulting in reduction of test code by 50%.",
        ],
      },
      {
        title: "Remote Desktop Licensing – SDET",
        period: "June 2008 – April 2011",
        bullets: [
          "Created next-generation test automation framework, improving code coverage and execution speed by 60% (reducing execution time from 2.5 days to 1.25 days).",
          "Authored over 30 technical posts for MSDN blogs, cultivating sustained engagement in Microsoft's developer community.",
        ],
      },
    ],
  },
  {
    company: "Amazon Web Services",
    color: "yellow",
    icon: Database,
    roles: [
      {
        title: "Amazon RDS PostgreSQL – Sr. Product Manager",
        period: "July 2016 – July 2018",
        bullets: [
          "Owned and executed the full product roadmap for RDS PostgreSQL, increasing YoY revenue by double digits.",
          "Orchestrated large-scale customer migrations from on-premises/Oracle to RDS, launching seven new features (including logical replication, FedRAMP, HIPAA) in just six months.",
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
    color: "blue",
    description:
      "Led the EU Data Boundary initiative ensuring Microsoft services meet European data residency and sovereignty requirements under Schrems II.",
    url: "https://www.microsoft.com/en-us/trust-center/privacy/european-data-boundary-eudb",
  },
  {
    name: "Data Residency in Azure",
    company: "Microsoft",
    date: "Dec 2018",
    color: "magenta",
    description:
      "Ensure Microsoft and its services meet data residency requirements for various geographies in the world — Singapore, Brazil, Hong Kong, China, and more.",
    url: "https://azure.microsoft.com/en-us/explore/global-infrastructure/data-residency/",
  },
  {
    name: "Cross-Region Migration Guidance",
    company: "Microsoft",
    date: "Jan 2019 – Jul 2019",
    color: "yellow",
    description:
      "Authored and published comprehensive Azure cross-region migration guidance on GitHub, enabling enterprise customers to migrate workloads seamlessly.",
    url: "https://github.com/Azure/Azure-Migration-Guidance",
  },
  {
    name: "AWS Database Blog",
    company: "Amazon Web Services",
    date: "Jul 2016 – Aug 2018",
    color: "blue",
    description:
      "Founded and scaled the AWS Database Blog from scratch to a #4-ranked AWS technical blog, growing developer community reach by 400%+.",
    url: "https://aws.amazon.com/blogs/database/",
  },
];

const SKILLS = [
  {
    category: "Program Management",
    items: ["Cross-functional Leadership", "Strategic Planning", "Stakeholder Alignment", "Risk Management", "Agile / Scrum", "OKRs"],
    icon: Target,
    color: "blue",
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Azure", "AWS", "Data Residency", "Cloud Migration", "Compliance", "Multi-region Architecture"],
    icon: Cloud,
    color: "magenta",
  },
  {
    category: "Privacy & Compliance",
    items: ["GDPR", "CCPA", "Regulatory Response", "Data Governance", "Privacy Strategy", "Risk Assessment", "Zero Trust"],
    icon: Shield,
    color: "yellow",
  },
  {
    category: "Product & Engineering",
    items: ["Product Roadmap", "Database Systems", "Open Source", "Developer Relations", "Technical Writing", "SQL", "PostgreSQL"],
    icon: Code,
    color: "blue",
  },
];

const CERTIFICATIONS = [
  { name: "Executive Presence for Women", issuer: "LinkedIn", date: "Nov 2018" },
  { name: "Dale Carnegie Course: Skills for Success", issuer: "Dale Carnegie", date: "Oct 2014" },
];

const ARTICLES = [
  {
    title: "Privacy Trends 2023: Navigating the Evolving Landscape",
    date: "May 23, 2023",
    summary:
      "An in-depth look at key privacy trends shaping 2023 — from heightened data protection and strengthening regulations to Privacy by Design, privacy-enhancing technologies, and individual empowerment.",
    reactions: 12,
    url: "https://www.linkedin.com/pulse/privacy-trends-2023-navigating-evolving-landscape-silvia-doomra/",
    color: "blue",
  },
  {
    title: "Designing Simple Scorecards",
    date: "Dec 10, 2022",
    summary:
      "Practical guidance on building scorecards for program reporting — distilling complex multi-project status into clear, actionable metrics for leadership and stakeholders.",
    reactions: 16,
    url: "https://www.linkedin.com/pulse/designing-simple-scorecards-silvia-doomra/",
    color: "magenta",
  },
  {
    title: "Dilemmas of a First-Time Manager – People or Product Manager",
    date: "Nov 22, 2017",
    summary:
      "Reflections on the real tensions first-time managers face when balancing people leadership with product delivery — drawing on personal experience in the tech industry.",
    reactions: 43,
    comments: 4,
    url: "https://www.linkedin.com/pulse/dilemmas-first-time-manager-people-product-silvia-doomra/",
    color: "yellow",
  },
];

const RECOMMENDATIONS = [
  {
    author: "Chandra Achalla",
    role: "Manager, Azure Privacy",
    text: "I had the pleasure to have Silvia as part of my team during my time in the Azure Privacy. She is goal oriented and driven by goals. She worked on one of most complex projects (Data Residency) and faced each challenge as a new opportunity to learn. Silvia grasps new concepts quickly and is excellent communicator to a wide range of audience — execs, engineers and lawyers. She is also one of the most responsible, kind and hard working managers. I could see how committed she was to learning and improving herself. She will be an asset any organization.",
    color: "blue",
  },
  {
    author: "LinkedIn Colleague",
    role: "Partner & Peer, Privacy Team",
    text: "I had the great pleasure and fortune working with Silvia as a partner and later as a peer on the same team. She is a great leader who is empathetic and cares about growing her team. She has great strategic insights and is well respected across the organization for privacy and data residency. She is easy to work with and owns her solution end to end.",
    color: "magenta",
  },
];

const VOLUNTEER = [
  {
    role: "Council Member",
    org: "Women and Allies of Azure Global (WAAG)",
    period: "Jan 2020 – Present",
    icon: Users,
    color: "blue",
    detail: "Active council member supporting women and allies in Azure engineering globally.",
  },
  {
    role: "Panelist – Navigating the Balancing Act of Priorities and Time",
    org: "Women in Science and Engineering (WISE), University of Washington",
    period: "Mar 2018 – Present",
    icon: Star,
    color: "magenta",
    detail: "Panelist sharing insights on time management and career prioritization for women in STEM.",
  },
  {
    role: "TEALS CS Teacher",
    org: "North Quincy High School",
    period: "Aug 2015 – Present",
    icon: BookOpen,
    color: "yellow",
    detail:
      "Teaching Intro CS to high school students. Featured in news and videos for opening opportunities for rural teens through Microsoft's TEALS program.",
  },
  {
    role: "Judge",
    org: "Microsoft Imagine Cup",
    period: "Apr 2013 – Present",
    icon: Award,
    color: "blue",
    detail: "Judging global student technology competition at imaginecup.com.",
  },
  {
    role: "Mentor & Sponsor",
    org: "Global Give Back Circle in Collaboration with Magic Bus",
    period: "Jan 2016 – Present",
    icon: Heart,
    color: "magenta",
    detail: "Mentored and sponsored a girl in India for her higher education.",
  },
  {
    role: "Teacher",
    org: "ILP (Indian Literacy Project), Hyderabad",
    period: "May 2010 – Jul 2010",
    icon: BookOpen,
    color: "yellow",
    detail: "Organized summer camps for rural kids and taught Mathematics and English.",
  },
];

const LANGUAGES = ["English", "Hindi", "Punjabi", "French"];

const EDUCATION = [
  {
    degree: "Master of Science",
    field: "University of San Francisco",
    year: "Current",
    color: "blue",
  },
  {
    degree: "MBA, Product Management",
    field: "University of Phoenix",
    year: "2012 – 2014",
    color: "magenta",
  },
  {
    degree: "BE, Information Technology",
    field: "Punjab Engineering College (D.U.), Chandigarh, India",
    year: "2004 – 2008",
    color: "yellow",
  },
];

// ─── COLOR HELPERS ────────────────────────────────────────────────────────────

const C: Record<string, string> = {
  blue: "#0066FF",
  magenta: "#FF0080",
  yellow: "#FFE600",
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function SectionBadge({ color, label }: { color: string; label: string }) {
  const bg = color === "yellow" ? C.yellow : color === "magenta" ? C.magenta : C.blue;
  const fg = color === "yellow" ? "#1E1E24" : "#ffffff";
  return (
    <Badge
      className="mb-4 text-sm px-4 py-1 font-bold"
      style={{ backgroundColor: bg, color: fg, border: "none" }}
    >
      {label}
    </Badge>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-16">
      <h2 className="text-5xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-muted-foreground max-w-2xl">{subtitle}</p>}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [expandedExp, setExpandedExp] = useState<Record<string, boolean>>({});

  const toggleExp = (key: string) =>
    setExpandedExp((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background circuit pattern */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663316708108/fXaBcEaSTfhVaUWCuoEzxk/tech-pattern_1c27b21e.png)",
          backgroundSize: "512px 512px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* ── STICKY NAV ──────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-14">
          <span className="font-bold text-white tracking-widest text-sm" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            SD
          </span>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-semibold text-muted-foreground hover:text-white transition-colors tracking-widest uppercase"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a href="mailto:contact@silviadoomra.com">
            <Button size="sm" className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white font-bold text-xs">
              HIRE ME
            </Button>
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section id="about" className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663316708108/fXaBcEaSTfhVaUWCuoEzxk/hero-bg_24ad6063.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-8">
              <SectionBadge color="blue" label="TECHNICAL PROGRAM MANAGER · 15+ YEARS" />
              <h1 className="text-7xl lg:text-8xl font-bold leading-[0.95]">
                <span className="text-white">SILVIA</span>
                <br />
                <span style={{ color: C.blue }}>DOOMRA</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Dynamic TPM with 15+ years driving global product delivery and operational excellence at{" "}
                <span className="text-white font-semibold">Meta</span>,{" "}
                <span className="text-white font-semibold">Microsoft</span>, and{" "}
                <span className="text-white font-semibold">AWS</span>. Transforming complex, high-ambiguity challenges into strategic, measurable outcomes.
              </p>
              <blockquote
                className="pl-4 italic text-muted-foreground text-sm"
                style={{ borderLeft: `4px solid ${C.magenta}` }}
              >
                "Change is the law, Growth is optional: Choose wisely." — Dr. Kiran Bedi
              </blockquote>

              <div className="flex flex-wrap gap-4">
                <a href="mailto:contact@silviadoomra.com">
                  <Button size="lg" className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white font-bold">
                    <Mail className="mr-2 h-5 w-5" /> CONTACT ME
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="font-bold" style={{ borderColor: C.magenta, color: C.magenta }}>
                  <Download className="mr-2 h-5 w-5" /> DOWNLOAD CV
                </Button>
              </div>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="mailto:contact@silviadoomra.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" style={{ color: C.blue }} /> contact@silviadoomra.com
                </a>
                <a href="tel:425-802-0705" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" style={{ color: C.blue }} /> 425-802-0705
                </a>
                <span className="flex items-center gap-2">
                  <Globe className="h-4 w-4" style={{ color: C.blue }} /> Greater Seattle Area
                </span>
              </div>
            </div>

            {/* Right: expertise pillars */}
            <div className="grid grid-cols-1 gap-5">
              {[
                { icon: Shield, color: "blue", title: "PRIVACY & COMPLIANCE", desc: "Leading global privacy strategy and regulatory compliance at Meta, Microsoft, and AWS", delay: "0s", rot: "2deg" },
                { icon: Cloud, color: "magenta", title: "CLOUD INFRASTRUCTURE", desc: "Architecting data residency programs and multi-region cloud solutions at scale", delay: "1.3s", rot: "-3deg" },
                { icon: Database, color: "yellow", title: "PRODUCT MANAGEMENT", desc: "Delivering high-impact database and cloud products, growing revenue double digits YoY", delay: "2.6s", rot: "1.5deg" },
              ].map(({ icon: Icon, color, title, desc, delay, rot }) => (
                <Card
                  key={title}
                  className="p-6 bg-card/50 backdrop-blur-sm transition-all duration-300 animate-float"
                  style={{
                    animationDelay: delay,
                    transform: `rotate(${rot})`,
                    borderColor: `${C[color]}40`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: `${C[color]}20` }}>
                      <Icon className="h-8 w-8" style={{ color: C[color] }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-white">{title}</h3>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY ACHIEVEMENTS ────────────────────────────────────────────────── */}
      <section id="achievements" className="py-24 bg-card/10">
        <div className="container">
          <SectionBadge color="yellow" label="IMPACT" />
          <SectionHeading
            title="KEY ACHIEVEMENTS"
            subtitle="Delivering measurable business outcomes and driving strategic initiatives at scale"
          />
          <div className="grid md:grid-cols-2 gap-5">
            {ACHIEVEMENTS.map((a, i) => (
              <Card
                key={i}
                className="p-6 bg-card/50 backdrop-blur-sm border-l-4 hover:scale-[1.01] transition-all duration-300"
                style={{
                  borderLeftColor: C[a.color],
                  transform: `rotate(${i % 2 === 0 ? 0.8 : -0.8}deg)`,
                }}
              >
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: C[a.color] }} />
                  <p className="text-sm text-foreground leading-relaxed">{a.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ──────────────────────────────────────────────────────── */}
      <section id="experience" className="py-24">
        <div className="container">
          <SectionBadge color="magenta" label="CAREER JOURNEY" />
          <SectionHeading
            title="EXPERIENCE"
            subtitle="Building mission-critical infrastructure and privacy solutions at the world's leading technology companies"
          />

          <div className="space-y-16">
            {EXPERIENCES.map((company) => {
              const Icon = company.icon;
              const color = C[company.color];
              return (
                <div key={company.company}>
                  {/* Company header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-xl" style={{ backgroundColor: `${color}20` }}>
                      <Icon className="h-10 w-10" style={{ color }} />
                    </div>
                    <h3 className="text-4xl font-bold text-white">{company.company}</h3>
                  </div>

                  <div className="space-y-5 ml-8 border-l-2 pl-8" style={{ borderColor: `${color}40` }}>
                    {company.roles.map((role, ri) => {
                      const key = `${company.company}-${ri}`;
                      const expanded = expandedExp[key];
                      const showToggle = role.bullets.length > 3;
                      const visibleBullets = expanded ? role.bullets : role.bullets.slice(0, 3);
                      return (
                        <Card
                          key={ri}
                          className="p-7 bg-card/50 backdrop-blur-sm hover:scale-[1.005] transition-all duration-300"
                          style={{
                            borderColor: `${color}25`,
                            transform: `rotate(${ri % 2 === 0 ? 0.4 : -0.4}deg)`,
                          }}
                        >
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
                            <h4 className="text-lg font-bold text-white leading-tight max-w-xl">{role.title}</h4>
                            <Badge variant="outline" className="border-muted-foreground text-muted-foreground w-fit flex-shrink-0 text-xs">
                              {role.period}
                            </Badge>
                          </div>
                          <ul className="space-y-2">
                            {visibleBullets.map((b, bi) => (
                              <li key={bi} className="flex items-start gap-3">
                                <div className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                                <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                              </li>
                            ))}
                          </ul>
                          {showToggle && (
                            <button
                              onClick={() => toggleExp(key)}
                              className="mt-4 flex items-center gap-1 text-xs font-semibold transition-colors"
                              style={{ color }}
                            >
                              {expanded ? <><ChevronUp className="h-4 w-4" /> Show less</> : <><ChevronDown className="h-4 w-4" /> Show more</>}
                            </button>
                          )}
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ───────────────────────────────────────────────── */}
      <section id="projects" className="py-24 bg-card/10">
        <div className="container">
          <SectionBadge color="blue" label="FEATURED WORK" />
          <SectionHeading
            title="PROJECTS"
            subtitle="High-impact initiatives shaping cloud compliance, data residency, and developer ecosystems"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <Card
                key={i}
                className="p-7 bg-card/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 group"
                style={{
                  borderColor: `${C[p.color]}30`,
                  transform: `rotate(${i % 2 === 0 ? 1.5 : -1.5}deg)`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs" style={{ borderColor: C[p.color], color: C[p.color] }}>
                        {p.company}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{p.date}</span>
                    </div>
                  </div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24">
        <div className="container">
          <SectionBadge color="blue" label="EXPERTISE" />
          <SectionHeading
            title="SKILLS"
            subtitle="Cross-functional leadership spanning program management, cloud infrastructure, and privacy compliance"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS.map((sg, i) => {
              const Icon = sg.icon;
              const color = C[sg.color];
              return (
                <Card
                  key={i}
                  className="p-8 bg-card/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
                  style={{ transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)`, borderColor: `${color}30` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: `${color}20` }}>
                      <Icon className="h-8 w-8" style={{ color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{sg.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sg.items.map((skill, si) => (
                      <Badge
                        key={si}
                        variant="outline"
                        className="text-sm px-3 py-1"
                        style={{ borderColor: color, color }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDATIONS ─────────────────────────────────────────────────── */}
      <section id="recommendations" className="py-24 bg-card/10">
        <div className="container">
          <SectionBadge color="magenta" label="SOCIAL PROOF" />
          <SectionHeading title="RECOMMENDATIONS" subtitle="What colleagues and managers say about working with Silvia" />
          <div className="grid md:grid-cols-2 gap-8">
            {RECOMMENDATIONS.map((r, i) => (
              <Card
                key={i}
                className="p-8 bg-card/50 backdrop-blur-sm hover:scale-[1.01] transition-all duration-300"
                style={{
                  borderColor: `${C[r.color]}30`,
                  transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)`,
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="h-4 w-4 fill-current" style={{ color: C[r.color] }} />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  "{r.text}"
                </blockquote>
                <div>
                  <p className="font-bold text-white">{r.author}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center">
            9 total recommendations on{" "}
            <a
              href="https://www.linkedin.com/in/silviadoomra/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      {/* ── ARTICLES ────────────────────────────────────────────────────────── */}
      <section id="articles" className="py-24">
        <div className="container">
          <SectionBadge color="yellow" label="THOUGHT LEADERSHIP" />
          <SectionHeading title="ARTICLES" subtitle="Published insights on privacy, program management, and leadership" />
          <div className="grid md:grid-cols-3 gap-6">
            {ARTICLES.map((a, i) => (
              <a
                key={i}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card
                  className="p-7 bg-card/50 backdrop-blur-sm h-full hover:scale-[1.03] transition-all duration-300 border-t-4"
                  style={{
                    borderTopColor: C[a.color],
                    transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)`,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground font-mono">{a.date}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:underline">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.summary}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono" style={{ color: C[a.color] }}>
                      {a.reactions} reactions
                    </span>
                    {a.comments && (
                      <span className="text-xs text-muted-foreground">· {a.comments} comments</span>
                    )}
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-card/10">
        <div className="container">
          <SectionBadge color="blue" label="CREDENTIALS" />
          <SectionHeading title="CERTIFICATIONS" />
          <div className="grid md:grid-cols-2 gap-5">
            {CERTIFICATIONS.map((cert, i) => (
              <Card
                key={i}
                className="p-6 bg-card/50 backdrop-blur-sm hover:border-[#0066FF] transition-all duration-300"
                style={{ borderColor: `${C.blue}30` }}
              >
                <div className="flex items-center gap-4">
                  <Award className="h-6 w-6 flex-shrink-0" style={{ color: C.blue }} />
                  <div>
                    <p className="font-bold text-white">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOLUNTEER ───────────────────────────────────────────────────────── */}
      <section id="volunteer" className="py-24">
        <div className="container">
          <SectionBadge color="magenta" label="GIVING BACK" />
          <SectionHeading title="VOLUNTEER WORK" subtitle="Committed to education, diversity, and community empowerment" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VOLUNTEER.map((v, i) => {
              const Icon = v.icon;
              const color = C[v.color];
              return (
                <Card
                  key={i}
                  className="p-6 bg-card/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
                  style={{
                    borderColor: `${color}30`,
                    transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)`,
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: `${color}20` }}>
                      <Icon className="h-5 w-5" style={{ color }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm leading-snug">{v.role}</h4>
                      <p className="text-xs font-semibold mt-0.5" style={{ color }}>{v.org}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs mb-3 border-muted-foreground text-muted-foreground">
                    {v.period}
                  </Badge>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.detail}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EDUCATION + LANGUAGES ───────────────────────────────────────────── */}
      <section className="py-24 bg-card/10">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Education */}
            <div className="lg:col-span-2">
              <SectionBadge color="yellow" label="ACADEMIC BACKGROUND" />
              <SectionHeading title="EDUCATION" />
              <div className="space-y-5">
                {EDUCATION.map((edu, i) => (
                  <Card
                    key={i}
                    className="p-7 bg-card/50 backdrop-blur-sm hover:scale-[1.01] transition-all duration-300"
                    style={{
                      borderColor: `${C[edu.color]}30`,
                      transform: `rotate(${i % 2 === 0 ? 0.8 : -0.8}deg)`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <Award className="h-7 w-7 flex-shrink-0 mt-1" style={{ color: C[edu.color] }} />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{edu.field}</p>
                        <Badge variant="outline" className="border-muted-foreground text-muted-foreground text-xs">
                          {edu.year}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <SectionBadge color="blue" label="LANGUAGES" />
              <SectionHeading title="LANGUAGES" />
              <div className="space-y-3">
                {LANGUAGES.map((lang, i) => {
                  const colors = ["blue", "magenta", "yellow", "blue"];
                  const color = C[colors[i]];
                  return (
                    <Card
                      key={i}
                      className="p-5 bg-card/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
                      style={{ borderColor: `${color}30` }}
                    >
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5" style={{ color }} />
                        <span className="font-bold text-white">{lang}</span>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663316708108/fXaBcEaSTfhVaUWCuoEzxk/hero-bg_24ad6063.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container relative z-10 text-center">
          <SectionBadge color="blue" label="GET IN TOUCH" />
          <h2 className="text-5xl font-bold text-white mb-4">LET'S CONNECT</h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Open to new opportunities, speaking engagements, mentorship, and collaboration on privacy and cloud initiatives.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:contact@silviadoomra.com">
              <Button size="lg" className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white font-bold">
                <Mail className="mr-2 h-5 w-5" /> EMAIL ME
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/silviadoomra/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="font-bold" style={{ borderColor: C.magenta, color: C.magenta }}>
                <ExternalLink className="mr-2 h-5 w-5" /> LINKEDIN
              </Button>
            </a>
            <a href="https://silviadoomra.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="font-bold" style={{ borderColor: C.yellow, color: C.yellow }}>
                <Globe className="mr-2 h-5 w-5" /> WEBSITE
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="py-10 border-t border-border">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Silvia Doomra. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:contact@silviadoomra.com" className="text-muted-foreground hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:425-802-0705" className="text-muted-foreground hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/silviadoomra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
