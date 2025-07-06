import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, X, Send, User, Code, Award, Briefcase } from 'lucide-react'

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
            <h1 className="text-2xl font-bold gradient-text">Your Name</h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
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
                <User className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold gradient-text mb-4">
                Hello, I'm [Your Name]
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                A passionate developer crafting digital experiences with modern technologies. 
                I build scalable applications and love solving complex problems.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
                <a href="#" className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Linkedin className="w-6 h-6 text-gray-700" />
                </a>
                <a href="#" className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Twitter className="w-6 h-6 text-gray-700" />
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm a software developer with a passion for creating efficient, scalable solutions. 
              With experience in full-stack development, I enjoy working with cutting-edge technologies 
              and collaborating with teams to deliver exceptional products.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl glass-effect animate-slide-up">
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Full Stack Development</h4>
              <p className="text-gray-600">Building end-to-end applications with modern frameworks and technologies.</p>
            </div>
            <div className="text-center p-6 rounded-xl glass-effect animate-slide-up">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Problem Solving</h4>
              <p className="text-gray-600">Analytical thinking and creative solutions to complex technical challenges.</p>
            </div>
            <div className="text-center p-6 rounded-xl glass-effect animate-slide-up">
              <Briefcase className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Team Collaboration</h4>
              <p className="text-gray-600">Working effectively in agile environments and cross-functional teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding py-20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold gradient-text mb-4">Skills & Technologies</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with regularly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'React', level: '90%' },
              { name: 'TypeScript', level: '85%' },
              { name: 'Node.js', level: '80%' },
              { name: 'Python', level: '75%' },
              { name: 'PostgreSQL', level: '80%' },
              { name: 'AWS', level: '70%' },
              { name: 'Docker', level: '75%' },
              { name: 'Git', level: '90%' }
            ].map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">Project {project}</h4>
                  <p className="text-gray-600 mb-4">
                    A brief description of your project, highlighting the key technologies used and the problem it solves.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Node.js</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                      View Project
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding py-12 bg-gray-900 text-white">
        <div className="container-max">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Let's Connect</h4>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new opportunities and interesting projects.
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
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 mt-8 text-sm">
              © 2024 Your Name. All rights reserved.
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
                    your.email@example.com
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    +1 (555) 123-4567
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    Your City, Your Country
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