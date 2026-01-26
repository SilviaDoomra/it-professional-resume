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
  Award
} from "lucide-react";

export default function Home() {
  const experiences = [
    {
      company: "Meta",
      role: "Senior Infrastructure Engineer",
      period: "2019 - Present",
      color: "blue",
      icon: Cloud,
      achievements: [
        "Led migration of privacy infrastructure to multi-region architecture serving 3B+ users",
        "Designed and implemented real-time data compliance system processing 500M events/day",
        "Reduced infrastructure costs by 40% through optimization of cloud resource allocation"
      ]
    },
    {
      company: "Amazon Web Services",
      role: "Principal Database Engineer",
      period: "2015 - 2019",
      color: "magenta",
      icon: Database,
      achievements: [
        "Architected DynamoDB global tables feature supporting multi-region replication",
        "Built automated database migration tools reducing downtime by 95%",
        "Mentored team of 12 engineers on distributed systems best practices"
      ]
    },
    {
      company: "Microsoft",
      role: "Cloud Infrastructure Specialist",
      period: "2010 - 2015",
      color: "yellow",
      icon: Server,
      achievements: [
        "Designed Azure storage encryption system processing 10PB+ data",
        "Implemented zero-trust security model for cloud infrastructure",
        "Led cross-functional team delivering GDPR compliance features"
      ]
    }
  ];

  const skills = [
    { category: "Cloud Infrastructure", items: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker"], icon: Cloud, color: "blue" },
    { category: "Databases", items: ["PostgreSQL", "DynamoDB", "MongoDB", "Redis", "Cassandra", "MySQL"], icon: Database, color: "magenta" },
    { category: "Privacy & Security", items: ["GDPR", "CCPA", "Zero Trust", "Encryption", "IAM", "SOC2"], icon: Shield, color: "yellow" },
    { category: "Programming", items: ["Python", "Go", "Java", "TypeScript", "Rust", "SQL"], icon: Code, color: "blue" }
  ];

  const certifications = [
    "AWS Certified Solutions Architect - Professional",
    "Google Cloud Professional Cloud Architect",
    "Certified Information Systems Security Professional (CISSP)",
    "Kubernetes Certified Administrator (CKA)"
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
                  SENIOR IT PROFESSIONAL
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">BUILDING</span>
                  <br />
                  <span className="text-[#0066FF]">SCALABLE</span>
                  <br />
                  <span className="text-[#FF0080]">SYSTEMS</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                  15+ years architecting cloud infrastructure, database systems, and privacy solutions 
                  at Microsoft, AWS, and Meta. Specializing in distributed systems that scale to billions of users.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white font-bold">
                  <Mail className="mr-2 h-5 w-5" />
                  CONTACT ME
                </Button>
                <Button size="lg" variant="outline" className="border-[#FF0080] text-[#FF0080] hover:bg-[#FF0080]/10 font-bold">
                  <Download className="mr-2 h-5 w-5" />
                  DOWNLOAD CV
                </Button>
              </div>

              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-[#0066FF] transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-[#0066FF] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
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
                    <Cloud className="h-8 w-8 text-[#0066FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">CLOUD INFRASTRUCTURE</h3>
                    <p className="text-muted-foreground">Architecting scalable, resilient systems on AWS, Azure, and GCP</p>
                  </div>
                </div>
              </Card>

              <Card 
                className="p-6 bg-card/50 backdrop-blur-sm border-[#FF0080]/30 hover:border-[#FF0080] transition-all duration-300 animate-float"
                style={{ animationDelay: '1.3s', transform: 'rotate(-3deg)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF0080]/20 rounded-lg">
                    <Database className="h-8 w-8 text-[#FF0080]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">DATABASE SYSTEMS</h3>
                    <p className="text-muted-foreground">Designing high-performance distributed database solutions</p>
                  </div>
                </div>
              </Card>

              <Card 
                className="p-6 bg-card/50 backdrop-blur-sm border-[#FFE600]/30 hover:border-[#FFE600] transition-all duration-300 animate-float"
                style={{ animationDelay: '2.6s', transform: 'rotate(1deg)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FFE600]/20 rounded-lg">
                    <Shield className="h-8 w-8 text-[#FFE600]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">PRIVACY & SECURITY</h3>
                    <p className="text-muted-foreground">Implementing GDPR, CCPA compliance and zero-trust architecture</p>
                  </div>
                </div>
              </Card>
            </div>
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
              Building mission-critical infrastructure at the world's leading technology companies
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const colorMap: Record<string, string> = {
                blue: '#0066FF',
                magenta: '#FF0080',
                yellow: '#FFE600'
              };
              const color = colorMap[exp.color];
              
              return (
                <Card 
                  key={index}
                  className="p-8 bg-card/50 backdrop-blur-sm border-l-4 hover:scale-[1.01] transition-all duration-300"
                  style={{ 
                    borderLeftColor: color,
                    transform: `rotate(${index % 2 === 0 ? 1 : -1}deg)`
                  }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div 
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: `${color}20` }}
                      >
                        <Icon className="h-12 w-12" style={{ color }} />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                          <p className="text-lg font-semibold" style={{ color }}>{exp.role}</p>
                        </div>
                        <Badge variant="outline" className="border-muted-foreground text-muted-foreground w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div 
                              className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: color }}
                            />
                            <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="mb-16">
            <Badge className="bg-[#0066FF] text-white hover:bg-[#0066FF]/90 mb-4">TECHNICAL EXPERTISE</Badge>
            <h2 className="text-5xl font-bold text-white mb-4">SKILLS</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Deep expertise across cloud platforms, database technologies, and security frameworks
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
                        className="text-sm px-3 py-1 font-mono"
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

      {/* Certifications Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="mb-16">
            <Badge className="bg-[#FFE600] text-[#1E1E24] hover:bg-[#FFE600]/90 mb-4 font-bold">CREDENTIALS</Badge>
            <h2 className="text-5xl font-bold text-white mb-4">CERTIFICATIONS</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-[#FFE600]/30 hover:border-[#FFE600] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <Award className="h-6 w-6 text-[#FFE600] flex-shrink-0" />
                  <p className="text-foreground font-medium">{cert}</p>
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
              © 2026 Senior IT Professional. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-[#0066FF] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#0066FF] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#0066FF] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
