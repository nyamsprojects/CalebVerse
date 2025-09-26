import { motion } from 'framer-motion';
import { Code, Mail, Phone, MapPin, GraduationCap, Github, Linkedin, Twitter, ExternalLink, Menu, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const skills = [
    {
      category: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      color: 'from-cyber-cyan to-secondary',
      items: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 }
      ]
    },
    {
      category: 'Backend',
      icon: <Code className="w-6 h-6" />,
      color: 'from-secondary to-accent',
      items: [
        { name: 'Node.js', level: 92 },
        { name: 'Python', level: 88 },
        { name: 'PostgreSQL', level: 80 }
      ]
    },
    {
      category: 'DevOps',
      icon: <Code className="w-6 h-6" />,
      color: 'from-accent to-cyber-cyan',
      items: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 82 },
        { name: 'Kubernetes', level: 75 }
      ]
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    },
    {
      title: 'Task Manager Pro',
      description: 'Collaborative project management tool with real-time updates and team features.',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    },
    {
      title: 'AI Analytics Hub',
      description: 'Machine learning dashboard for predictive analytics and data visualization.',
      tech: ['Python', 'TensorFlow', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen"
    >
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-30 glass-effect border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyber-cyan to-secondary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-background font-bold" />
              </div>
              <div>
                <h1 className="font-cyber font-bold text-xl text-foreground">CALEB.DEV</h1>
                <p className="font-mono text-xs text-muted-foreground">Digital Command Center</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-cyber-cyan transition-colors duration-300" data-testid="link-about">ABOUT</button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-cyber-cyan transition-colors duration-300" data-testid="link-projects">PROJECTS</button>
              <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-cyber-cyan transition-colors duration-300" data-testid="link-skills">SKILLS</button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-cyber-cyan transition-colors duration-300" data-testid="link-contact">CONTACT</button>
            </div>
            
            <Button variant="ghost" size="sm" className="md:hidden text-cyber-cyan" data-testid="button-menu">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4">
                <p className="font-mono text-cyber-cyan text-sm">// SYSTEM STATUS: ONLINE</p>
                <h1 className="font-cyber text-4xl md:text-6xl font-bold text-foreground">
                  CALEB <span className="text-cyber-cyan">ANDERSON</span>
                </h1>
                <h2 className="font-cyber text-xl md:text-2xl text-secondary">
                  FULL-STACK DEVELOPER
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Architecting digital experiences with cutting-edge technologies. 
                  Specializing in React, Node.js, and cloud infrastructure.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button className="px-6 py-3 bg-cyber-cyan text-background font-cyber font-bold hover:bg-secondary" data-testid="button-view-projects">
                  VIEW PROJECTS
                </Button>
                <Button variant="outline" className="px-6 py-3 border-cyber-cyan text-cyber-cyan font-cyber font-bold hover:bg-cyber-cyan hover:text-background" data-testid="button-download-cv">
                  DOWNLOAD CV
                </Button>
              </div>
              
              <div className="flex space-x-6">
                <a href="#" className="text-2xl text-muted-foreground hover:text-cyber-cyan transition-colors duration-300" data-testid="link-github">
                  <Github />
                </a>
                <a href="#" className="text-2xl text-muted-foreground hover:text-cyber-cyan transition-colors duration-300" data-testid="link-linkedin">
                  <Linkedin />
                </a>
                <a href="#" className="text-2xl text-muted-foreground hover:text-cyber-cyan transition-colors duration-300" data-testid="link-twitter">
                  <Twitter />
                </a>
                <a href="#" className="text-2xl text-muted-foreground hover:text-cyber-cyan transition-colors duration-300" data-testid="link-email">
                  <Mail />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan to-secondary rounded-full opacity-20 animate-pulse-glow" />
                <div className="absolute inset-4 glass-effect neon-border rounded-full flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                    alt="Caleb Anderson - Professional Headshot" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cyber text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-cyber-cyan">//</span> ABOUT_ME
            </h2>
            <p className="font-mono text-muted-foreground">System specifications and capabilities</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect neon-border">
                <CardContent className="p-6">
                  <h3 className="font-cyber text-xl font-bold text-cyber-cyan mb-4">Core Functions</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a passionate full-stack developer with 5+ years of experience building 
                    scalable web applications. My expertise spans modern frontend frameworks, 
                    backend architectures, and cloud deployment strategies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open-source projects, or mentoring junior developers in the community.
                  </p>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyber-cyan to-secondary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-cyber font-bold text-foreground">San Francisco, CA</p>
                    <p className="font-mono text-sm text-muted-foreground">Current Location</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyber-cyan to-secondary rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-cyber font-bold text-foreground">Computer Science, Stanford</p>
                    <p className="font-mono text-sm text-muted-foreground">B.S. Degree</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect neon-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-cyber font-bold text-cyber-cyan mb-2">50+</div>
                  <p className="font-mono text-sm text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect neon-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-cyber font-bold text-secondary mb-2">5+</div>
                  <p className="font-mono text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect neon-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-cyber font-bold text-accent mb-2">25+</div>
                  <p className="font-mono text-sm text-muted-foreground">Technologies</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect neon-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-cyber font-bold text-cyber-cyan mb-2">100%</div>
                  <p className="font-mono text-sm text-muted-foreground">Client Satisfaction</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 grid-bg opacity-5" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cyber text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-cyber-cyan">//</span> TECH_STACK
            </h2>
            <p className="font-mono text-muted-foreground">Arsenal of cutting-edge technologies</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect neon-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${skillGroup.color} rounded-lg flex items-center justify-center mr-4`}>
                        {skillGroup.icon}
                      </div>
                      <h3 className="font-cyber text-xl font-bold text-foreground">{skillGroup.category}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {skillGroup.items.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center">
                            <span className="font-mono text-sm text-foreground">{skill.name}</span>
                            <span className="font-mono text-sm text-cyber-cyan">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-card rounded-full h-2 mt-1">
                            <motion.div 
                              className={`bg-gradient-to-r ${skillGroup.color} h-2 rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cyber text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-cyber-cyan">//</span> PROJECTS
            </h2>
            <p className="font-mono text-muted-foreground">Featured digital experiences</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-effect neon-border overflow-hidden group cursor-pointer">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-cyber text-xl font-bold text-foreground">{project.title}</h3>
                      <div className="flex space-x-2">
                        <a href="#" className="text-cyber-cyan hover:text-secondary transition-colors" data-testid={`link-github-${index}`}>
                          <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-cyber-cyan hover:text-secondary transition-colors" data-testid={`link-external-${index}`}>
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={tech} 
                          className={`px-2 py-1 text-background text-xs font-mono rounded ${
                            techIndex === 0 ? 'bg-cyber-cyan' : 
                            techIndex === 1 ? 'bg-secondary' : 'bg-accent'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button className="px-8 py-3 bg-gradient-to-r from-cyber-cyan to-secondary text-background font-cyber font-bold hover:scale-105 transition-all duration-300" data-testid="button-view-all-projects">
              VIEW ALL PROJECTS
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 grid-bg opacity-5" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cyber text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-cyber-cyan">//</span> CONTACT
            </h2>
            <p className="font-mono text-muted-foreground">Establish secure connection</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect neon-border">
                <CardContent className="p-6">
                  <h3 className="font-cyber text-xl font-bold text-cyber-cyan mb-6">Get In Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyber-cyan to-secondary rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <p className="font-cyber font-bold text-foreground">caleb@example.com</p>
                        <p className="font-mono text-sm text-muted-foreground">Primary Contact</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <p className="font-cyber font-bold text-foreground">+1 (555) 123-4567</p>
                        <p className="font-mono text-sm text-muted-foreground">Voice Channel</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-cyber-cyan rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <p className="font-cyber font-bold text-foreground">San Francisco, CA</p>
                        <p className="font-mono text-sm text-muted-foreground">Physical Location</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex space-x-4">
                <a href="#" className="flex-1 glass-effect neon-border rounded-lg p-4 text-center hover:bg-cyber-cyan hover:text-background transition-all duration-300 group" data-testid="link-social-github">
                  <Github className="w-6 h-6 mx-auto mb-2 group-hover:text-background" />
                  <p className="font-mono text-sm">GitHub</p>
                </a>
                <a href="#" className="flex-1 glass-effect neon-border rounded-lg p-4 text-center hover:bg-cyber-cyan hover:text-background transition-all duration-300 group" data-testid="link-social-linkedin">
                  <Linkedin className="w-6 h-6 mx-auto mb-2 group-hover:text-background" />
                  <p className="font-mono text-sm">LinkedIn</p>
                </a>
                <a href="#" className="flex-1 glass-effect neon-border rounded-lg p-4 text-center hover:bg-cyber-cyan hover:text-background transition-all duration-300 group" data-testid="link-social-twitter">
                  <Twitter className="w-6 h-6 mx-auto mb-2 group-hover:text-background" />
                  <p className="font-mono text-sm">Twitter</p>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect neon-border">
                <CardContent className="p-6">
                  <h3 className="font-cyber text-xl font-bold text-cyber-cyan mb-6">Send Message</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block font-mono text-sm text-muted-foreground mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground font-mono focus:border-cyber-cyan focus:outline-none transition-colors"
                        placeholder="Enter your name"
                        data-testid="input-name"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-mono text-sm text-muted-foreground mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground font-mono focus:border-cyber-cyan focus:outline-none transition-colors"
                        placeholder="your@email.com"
                        data-testid="input-email"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-mono text-sm text-muted-foreground mb-2">Subject</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground font-mono focus:border-cyber-cyan focus:outline-none transition-colors"
                        placeholder="Project inquiry"
                        data-testid="input-subject"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-mono text-sm text-muted-foreground mb-2">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground font-mono focus:border-cyber-cyan focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                        data-testid="textarea-message"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyber-cyan to-secondary text-background font-cyber font-bold hover:scale-105 transition-all duration-300"
                      data-testid="button-submit-message"
                    >
                      TRANSMIT MESSAGE
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-cyber-cyan to-secondary rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-background" />
              </div>
              <span className="font-cyber font-bold text-xl text-foreground">CALEB.DEV</span>
            </div>
            
            <p className="font-mono text-sm text-muted-foreground mb-4">
              © 2024 Caleb Anderson. All systems operational.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a href="#" className="font-mono text-sm text-muted-foreground hover:text-cyber-cyan transition-colors duration-300" data-testid="link-privacy">Privacy</a>
              <a href="#" className="font-mono text-sm text-muted-foreground hover:text-cyber-cyan transition-colors duration-300" data-testid="link-terms">Terms</a>
              <a href="#" className="font-mono text-sm text-muted-foreground hover:text-cyber-cyan transition-colors duration-300" data-testid="link-sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
