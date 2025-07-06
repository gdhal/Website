import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, X, Send, Code, Briefcase, Settings, Globe } from 'lucide-react'

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with a service like Formspree, Netlify Forms, etc.
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
    setIsContactModalOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="section-padding py-6 glass-effect fixed w-full top-0 z-40">
        <div className="container-max">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">Gurvir Dhaliwal</h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding pt-32 pb-20">
        <div className="container-max">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center">
                <Settings className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold gradient-text mb-4">
                Gurvir Dhaliwal
              </h2>
              <p className="text-2xl text-gray-700 font-medium mb-4">
                Embedded Mechatronics • Robotics • Factory Automation
              </p>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Technical sales professional with 6+ years at Electromate, specializing in industrial automation equipment. 
                Former Senior R&D Technologist at LMI Technologies with expertise in 3D imaging sensors and embedded systems.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
                <a href="#" className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Linkedin className="w-6 h-6 text-gray-700" />
                </a>
                <a href="https://electromate.com" className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Globe className="w-6 h-6 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold gradient-text mb-4">About Me</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              I'm an embedded mechatronics engineer with a passion for robotics and factory automation. 
              With dual diplomas from BCIT in Electrical & Computer Engineering Technology, I bring both 
              technical depth and business acumen to complex automation challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl glass-effect animate-slide-up">
              <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Technical Sales</h4>
              <p className="text-gray-600">6+ years of technical sales and field support for industrial automation equipment, liaising with engineers on high-value contracts.</p>
            </div>
            <div className="text-center p-6 rounded-xl glass-effect animate-slide-up">
              <Code className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">R&D Innovation</h4>
              <p className="text-gray-600">Senior R&D Technologist experience developing and prototyping advanced 3D imaging sensors at LMI Technologies.</p>
            </div>
            <div className="text-center p-6 rounded-xl glass-effect animate-slide-up">
              <Settings className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Systems Integration</h4>
              <p className="text-gray-600">Custom systems design and integration expertise, with 3+ years of self-employment serving local businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding py-20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold gradient-text mb-4">Technical Skills</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Core competencies spanning embedded systems, industrial automation, and software development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-3 text-blue-600">Programming & Embedded</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>C/C++</span>
                  <span className="text-green-600">●●●●●</span>
                </div>
                <div className="flex justify-between">
                  <span>Arduino</span>
                  <span className="text-green-600">●●●●●</span>
                </div>
                <div className="flex justify-between">
                  <span>MATLAB</span>
                  <span className="text-green-600">●●●●○</span>
                </div>
                <div className="flex justify-between">
                  <span>PIC/HCS12</span>
                  <span className="text-green-600">●●●●○</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-3 text-purple-600">Industrial & Automation</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>PLC Control</span>
                  <span className="text-green-600">●●●●●</span>
                </div>
                <div className="flex justify-between">
                  <span>Electrical Design</span>
                  <span className="text-green-600">●●●●●</span>
                </div>
                <div className="flex justify-between">
                  <span>Power Systems</span>
                  <span className="text-green-600">●●●●○</span>
                </div>
                <div className="flex justify-between">
                  <span>Fault Analysis</span>
                  <span className="text-green-600">●●●●○</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-3 text-indigo-600">Software & Systems</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>HTML/Web</span>
                  <span className="text-green-600">●●●●○</span>
                </div>
                <div className="flex justify-between">
                  <span>Unix/Linux</span>
                  <span className="text-green-600">●●●●○</span>
                </div>
                <div className="flex justify-between">
                  <span>MS Office Suite</span>
                  <span className="text-green-600">●●●●●</span>
                </div>
                <div className="flex justify-between">
                  <span>Git/Version Control</span>
                  <span className="text-green-600">●●●○○</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-3 text-orange-600">Professional Skills</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Technical Sales</span>
                  <span className="text-green-600">●●●●●</span>
                </div>
                <div className="flex justify-between">
                  <span>Public Speaking</span>
                  <span className="text-green-600">●●●●●</span>
                </div>
                <div className="flex justify-between">
                  <span>Problem Solving</span>
                  <span className="text-green-600">●●●●●</span>
                </div>
                <div className="flex justify-between">
                  <span>Customer Service</span>
                  <span className="text-green-600">●●●●●</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-3 text-red-600">Education</h4>
              <div className="space-y-3">
                <div>
                  <div className="font-medium">BCIT - Electrical & Computer Engineering Technology</div>
                  <div className="text-sm text-gray-600">Computer Control Option</div>
                </div>
                <div>
                  <div className="font-medium">BCIT - Electrical & Computer Engineering Technology</div>
                  <div className="text-sm text-gray-600">Industrial Control & Electrical Power Option</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-3 text-green-600">Certifications & Activities</h4>
              <div className="space-y-2">
                <div className="text-sm">• Active IEEE Member</div>
                <div className="text-sm">• Intramural Sports Participation</div>
                <div className="text-sm">• American Red Cross Volunteer</div>
                <div className="text-sm">• Civil Rights & Community Outreach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold gradient-text mb-4">Professional Experience</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A track record of technical excellence and business impact across multiple industries.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-semibold mb-2">Outside Technical Sales</h4>
                    <p className="text-xl text-blue-600 font-medium">Electromate</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">May 2019 – Present</p>
                    <p className="text-sm text-gray-500">Remote, BC • 6+ years</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <p className="text-gray-700">Technical sales & field support of industrial automation equipment</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <p className="text-gray-700">Liaise with engineers to identify solutions and close high-value contracts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-semibold mb-2">Senior R&D Technologist</h4>
                    <p className="text-xl text-purple-600 font-medium">LMI Technologies</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">Oct 2014 – May 2019</p>
                    <p className="text-sm text-gray-500">Burnaby, BC • 4 years 8 months</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-3">•</span>
                    <p className="text-gray-700">Developed and prototyped advanced 3D imaging sensors</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-3">•</span>
                    <p className="text-gray-700">Worked cross-functionally with engineering and product teams to implement new features</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-semibold mb-2">Systems & Sales (Self-employed)</h4>
                    <p className="text-xl text-indigo-600 font-medium">1028591 B.C. Ltd</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">May 2013 – Oct 2016</p>
                    <p className="text-sm text-gray-500">Langley, BC • 3 years 6 months</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-indigo-600 mr-3">•</span>
                    <p className="text-gray-700">Custom systems design and integration for local businesses</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 mr-3">•</span>
                    <p className="text-gray-700">Full-cycle client engagement: proposal → deployment → support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <h4 className="text-xl font-semibold mb-2">Sales Associate</h4>
                <p className="text-lg text-orange-600 font-medium mb-2">The Home Depot</p>
                <p className="text-gray-600 mb-3">Aug 2009 – Nov 2013 • Surrey, BC</p>
                <p className="text-gray-700">Customer support and product demonstrations in home improvement retail</p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <h4 className="text-xl font-semibold mb-2">Assistant Manager</h4>
                <p className="text-lg text-green-600 font-medium mb-2">Sam's Distributors</p>
                <p className="text-gray-600 mb-3">Jun 2007 – May 2008 • Fresno, CA</p>
                <p className="text-gray-700">Managed warehouse operations, inventory, shipping/receiving, and onsite sales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding py-12 bg-gray-900 text-white">
        <div className="container-max">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Let's Connect</h4>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new opportunities in embedded systems, robotics, and industrial automation.
            </p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Get In Touch
            </button>
            <div className="flex justify-center space-x-6 mt-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://electromate.com" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 mt-8 text-sm">
              © 2024 Gurvir Dhaliwal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full animate-slide-up">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold gradient-text">Contact Me</h3>
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsContactModalOpen(false)}
                    className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">You can also reach me directly:</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    [Your Professional Email]
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    [Your Phone Number]
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    British Columbia, Canada
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App 