/**
 * Kinetic Data Architecture Design
 * - Charcoal base (#1E1E24) with electric blue, hot magenta, laser yellow accents
 * - Modular card system with off-axis rotation (2-4 degrees)
 * - Continuous subtle animations and floating effects
 * - Archivo Black headings, Manrope body, Fira Code for technical text
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Database, 
  Shield, 
  Mail, 
  Github, 
  Linkedin, 
  Download,
  Server,
  Lock,
  Cpu,
  Network,
  Code,
  Award,
  Phone,
  Briefcase,
  Target,
  Users,
  TrendingUp,
  Layers
} from "lucide-react";

export default function Home() {
  const experiences = [
    {
      company: "Meta",
      roles: [
        {
          title: "Privacy Areas – Competition – Technical Program Manager Lead",
          period: "Sept 2024 – Present",
          achievements: [
            "Led organizational privacy strategy for Competitive Data Use (CDU), influencing compliance for multiple product suites",
            "Built safeguards for business users data and avoided an adverse action (>9 figures $) proposed by European Commission",
            "Delivered AI guidance enabling the organization to embrace an AI-first approach and accelerated product velocity by 10x",
            "Championed org-wide engagement, increasing cross-team participation by 40%+ through innovative community initiatives"
          ]
        },
        {
          title: "Regulatory Response Foundations – Technical Program Manager",
          period: "Oct 2022 – Sept 2024",
          achievements: [
            "Drove adoption and migration of 90% of privacy workflows to the Federation Platform",
            "Led Privacy workstream quality initiative, aligning privacy work efforts to Meta's evolving business priorities",
            "Initiated TPM Knowledge Sharing Series, upskilling the privacy program management community company-wide"
          ]
        }
      ],
      color: "blue",
      icon: Shield
    },
    {
      company: "Microsoft",
      roles: [
        {
          title: "Geo Expansion & Data Residency in Azure Privacy – Principal TPM Manager",
          period: "July 2018 – Sept 2022",
          achievements: [
            "Founded and directed the multi-million-dollar Data Residency Program, delivering global cloud compliance in seven new markets (Singapore, Brazil, Hong Kong, EU Data Boundary)",
            "Personally influenced executive and C-level decision-making to accelerate product readiness across 500+ services",
            "Led Azure region decommissioning and cross-region migration, achieving zero customer attrition in all transitions"
          ]
        },
        {
          title: "Azure SQL Database Elastic Scale – Senior Program Manager",
          period: "March 2015 – June 2016",
          achievements: [
            "Open-sourced elastic scale libraries - the very first open-source launch by SQL organization",
            "Drove developer adoption on GitHub and elevated community engagement",
            "Acted as technical ambassador in industry forums, influencing the Azure SQL product roadmap"
          ]
        },
        {
          title: "Windows Ecosystem Partner and Customer Engagement – Program Manager Lead",
          period: "January 2013 – March 2015",
          achievements: [
            "Led global device certification and compliance for Windows and Windows Phone, ensuring 100% regulatory approval for 50+ OEM SKUs",
            "Streamlined problem escalation and partner resolution for high-impact launches including Reliance Jio's national deployment"
          ]
        }
      ],
      color: "magenta",
      icon: Cloud
    },
    {
      company: "Amazon Web Services",
      roles: [
        {
          title: "Amazon RDS PostgreSQL – Sr. Product Manager",
          period: "July 2016 – July 2018",
          achievements: [
            "Owned and executed the full product roadmap for RDS PostgreSQL, increasing YoY revenue by double digits",
            "Orchestrated large-scale customer migrations from on-premises/Oracle to RDS, launching seven new features in just six months",
            "Represented and evangelized RDS for PostgreSQL at EBCs, customer meetings, partner summits, and conferences"
          ]
        },
        {
          title: "AWS Database Blog Owner",
          period: "July 2016 – July 2018",
          achievements: [
            "Conceived, built and scaled AWS Database Blog to a top-4 AWS technical blog",
            "Enlarged community reach by over 400% through strategic content planning and execution"
          ]
        }
      ],
      color: "yellow",
      icon: Database
    }
  ];

  const skills = [
    { 
      category: "Program Management", 
      items: ["Cross-functional Leadership", "Strategic Planning", "Stakeholder Alignment", "Risk Management", "Agile/Scrum"], 
      icon: Target, 
      color: "blue" 
    },
    { 
      category: "Cloud & Infrastructure", 
      items: ["Azure", "AWS", "Data Residency", "Cloud Migration", "Compliance", "Security"], 
      icon: Cloud, 
      color: "magenta" 
    },
    { 
      category: "Privacy & Compliance", 
      items: ["GDPR", "CCPA", "Regulatory Response", "Data Governance", "Privacy Strategy", "Risk Assessment"], 
      icon: Shield, 
      color: "yellow" 
    },
    { 
      category: "Product & Engineering", 
      items: ["Product Roadmap", "Database Systems", "Open Source", "Developer Relations", "Technical Writing"], 
      icon: Code, 
      color: "blue" 
    }
  ];

  const achievements = [
    "Built safeguards avoiding >9 figures $ adverse action proposed by European Commission",
    "Spearheaded migration of 90% of privacy workflow at Meta to the Federation Platform",
    "Launched Microsoft's Data Residency Program, delivering 100% global regulatory compliance across seven markets",
    "Delivered seven high-impact features for Amazon RDS PostgreSQL in six months, directly increasing customer retention",
    "Founded and scaled AWS Database Blog, achieving #4 rank among all AWS technical blogs",
    "Open-sourced elastic database client libraries, benefiting thousands in the developer ecosystem"
  ];

  const education = [
    { degree: "MBA, Product Management", school: "University of Phoenix", year: "2012-2014" },
    { degree: "BE, Information Technology", school: "Punjab Engineering College (D.U.), Chandigarh, India", year: "2004-2008" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/tech-pattern.png)',
          backgroundSize: '512px 512px',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Main content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#0066FF] text-white hover:bg-[#0066FF]/90 text-sm px-4 py-1">
                  TECHNICAL PROGRAM MANAGER
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">SILVIA</span>
                  <br />
                  <span className="text-[#0066FF]">DOOMRA</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Dynamic Technical Program Manager with 15+ years driving global product delivery and operational 
                  excellence at Meta, Microsoft, and AWS. Transforming complex challenges into strategic, 
                  measurable outcomes.
                </p>
                <blockquote className="border-l-4 border-[#FF0080] pl-4 italic text-muted-foreground">
                  "Change is the law, Growth is optional: Choose wisely." — Dr. Kiran Bedi
                </blockquote>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white font-bold"
                  onClick={() => window.location.href = 'mailto:contact@silviadoomra.com'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  CONTACT ME
                </Button>
                <Button size="lg" variant="outline" className="border-[#FF0080] text-[#FF0080] hover:bg-[#FF0080]/10 font-bold">
                  <Download className="mr-2 h-5 w-5" />
                  DOWNLOAD CV
                </Button>
              </div>

              <div className="flex flex-col gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#0066FF]" />
                  <a href="mailto:contact@silviadoomra.com" className="hover:text-[#0066FF] transition-colors">
                    contact@silviadoomra.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#0066FF]" />
                  <a href="tel:425-802-0705" className="hover:text-[#0066FF] transition-colors">
                    425-802-0705
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Expertise cards */}
            <div className="grid grid-cols-1 gap-6">
              <Card 
                className="p-6 bg-card/50 backdrop-blur-sm border-[#0066FF]/30 hover:border-[#0066FF] transition-all duration-300 animate-float"
                style={{ animationDelay: '0s', transform: 'rotate(2deg)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0066FF]/20 rounded-lg">
                    <Shield className="h-8 w-8 text-[#0066FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">PRIVACY & COMPLIANCE</h3>
                    <p className="text-muted-foreground">Leading global privacy strategy and regulatory compliance initiatives</p>
                  </div>
                </div>
              </Card>

              <Card 
                className="p-6 bg-card/50 backdrop-blur-sm border-[#FF0080]/30 hover:border-[#FF0080] transition-all duration-300 animate-float"
                style={{ animationDelay: '1.3s', transform: 'rotate(-3deg)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF0080]/20 rounded-lg">
                    <Cloud className="h-8 w-8 text-[#FF0080]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">CLOUD INFRASTRUCTURE</h3>
                    <p className="text-muted-foreground">Architecting data residency programs across Azure and AWS</p>
                  </div>
                </div>
              </Card>

              <Card 
                className="p-6 bg-card/50 backdrop-blur-sm border-[#FFE600]/30 hover:border-[#FFE600] transition-all duration-300 animate-float"
                style={{ animationDelay: '2.6s', transform: 'rotate(1deg)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFE600]/20 rounded-lg">
                    <Database className="h-8 w-8 text-[#FFE600]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">PRODUCT MANAGEMENT</h3>
                    <p className="text-muted-foreground">Delivering high-impact database and cloud products at scale</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-24 relative bg-card/20">
        <div className="container">
          <div className="mb-16">
            <Badge className="bg-[#FFE600] text-[#1E1E24] hover:bg-[#FFE600]/90 mb-4 font-bold">IMPACT</Badge>
            <h2 className="text-5xl font-bold text-white mb-4">KEY ACHIEVEMENTS</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Delivering measurable business outcomes and driving strategic initiatives at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-l-4 hover:scale-[1.01] transition-all duration-300"
                style={{ 
                  borderLeftColor: index % 3 === 0 ? '#0066FF' : index % 3 === 1 ? '#FF0080' : '#FFE600',
                  transform: `rotate(${index % 2 === 0 ? 1 : -1}deg)`
                }}
              >
                <div className="flex items-start gap-4">
                  <TrendingUp 
                    className="h-6 w-6 flex-shrink-0 mt-1" 
                    style={{ color: index % 3 === 0 ? '#0066FF' : index % 3 === 1 ? '#FF0080' : '#FFE600' }}
                  />
                  <p className="text-foreground leading-relaxed">{achievement}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="mb-16">
            <Badge className="bg-[#FF0080] text-white hover:bg-[#FF0080]/90 mb-4">CAREER JOURNEY</Badge>
            <h2 className="text-5xl font-bold text-white mb-4">EXPERIENCE</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Building mission-critical infrastructure and privacy solutions at the world's leading technology companies
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((company, companyIndex) => {
              const Icon = company.icon;
              const colorMap: Record<string, string> = {
                blue: '#0066FF',
                magenta: '#FF0080',
                yellow: '#FFE600'
              };
              const color = colorMap[company.color];
              
              return (
                <div key={companyIndex} className="space-y-6">
                  {/* Company Header */}
                  <div className="flex items-center gap-4">
                    <div 
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Icon className="h-10 w-10" style={{ color }} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{company.company}</h3>
                  </div>

                  {/* Roles within company */}
                  {company.roles.map((role, roleIndex) => (
                    <Card 
                      key={roleIndex}
                      className="p-8 bg-card/50 backdrop-blur-sm border-l-4 hover:scale-[1.01] transition-all duration-300 ml-8"
                      style={{ 
                        borderLeftColor: color,
                        transform: `rotate(${roleIndex % 2 === 0 ? 0.5 : -0.5}deg)`
                      }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{role.title}</h4>
                        </div>
                        <Badge variant="outline" className="border-muted-foreground text-muted-foreground w-fit">
                          {role.period}
                        </Badge>
                      </div>
                      
                      <ul className="space-y-3">
                        {role.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div 
                              className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: color }}
                            />
                            <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 relative bg-card/20">
        <div className="container">
          <div className="mb-16">
            <Badge className="bg-[#0066FF] text-white hover:bg-[#0066FF]/90 mb-4">EXPERTISE</Badge>
            <h2 className="text-5xl font-bold text-white mb-4">SKILLS</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Cross-functional leadership spanning program management, cloud infrastructure, and privacy compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              const colorMap: Record<string, string> = {
                blue: '#0066FF',
                magenta: '#FF0080',
                yellow: '#FFE600'
              };
              const color = colorMap[skillGroup.color];
              
              return (
                <Card 
                  key={index}
                  className="p-8 bg-card/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
                  style={{ 
                    transform: `rotate(${index % 2 === 0 ? 2 : -2}deg)`,
                    borderColor: `${color}30`
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Icon className="h-8 w-8" style={{ color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{skillGroup.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <Badge 
                        key={i}
                        variant="outline"
                        className="text-sm px-3 py-1"
                        style={{ 
                          borderColor: color,
                          color: color
                        }}
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

      {/* Education Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="mb-16">
            <Badge className="bg-[#FF0080] text-white hover:bg-[#FF0080]/90 mb-4">ACADEMIC BACKGROUND</Badge>
            <h2 className="text-5xl font-bold text-white mb-4">EDUCATION</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-[#FF0080]/30 hover:border-[#FF0080] transition-all duration-300"
                style={{ transform: `rotate(${index % 2 === 0 ? 1 : -1}deg)` }}
              >
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-[#FF0080] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-muted-foreground mb-1">{edu.school}</p>
                    <Badge variant="outline" className="border-muted-foreground text-muted-foreground">
                      {edu.year}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">
              © 2026 Silvia Doomra. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="mailto:contact@silviadoomra.com" className="text-muted-foreground hover:text-[#0066FF] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:425-802-0705" className="text-muted-foreground hover:text-[#0066FF] transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
