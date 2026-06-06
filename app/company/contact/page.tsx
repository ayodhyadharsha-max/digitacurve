'use client'

import { useState } from 'react'
import { MapPin, Mail, ArrowRight, CheckCircle2 } from 'lucide-react'

const offices = [
  {
    country: 'United States',
    role: 'Main Office',
    address: '1001 Avenida Pico Suite C -256, San Clemente, CA 92673',
    flag: '🇺🇸',
  },
  {
    country: 'United States',
    role: 'Branch Office',
    address: '173 E Columbine LN, Westfield, Indiana 46074-9741',
    flag: '🇺🇸',
  },
  {
    country: 'India',
    role: 'Corporate Office',
    address: 'H-11, First Floor, Sector 62, Noida, Uttar Pradesh 201301',
    flag: '🇮🇳',
  },
  {
    country: 'Ontario, Canada',
    role: 'Canada Office',
    address: '6-425 Hespeler Road, Cambridge, Unit 303, N1R8J6',
    flag: '🇨🇦',
  },
  {
    country: 'Melbourne, Australia',
    role: 'Australia Office',
    address: '10 Suffolk Place Aintree, Victoria, Australia - 3336',
    flag: '🇦🇺',
  },
  {
    country: 'Ireland',
    role: 'Ireland Office',
    address: '5 Gleann Dara, Tully, Ballinamore Co Leitrim, Ireland',
    flag: '🇮🇪',
  },
]

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'project' | 'career' | 'general'>('project')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    interest: 'Website Design & Development',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(null)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'access_key': process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '7e356166-b322-41d7-a244-7e9bdf676cd8',
          'from_name': 'Digitacurve Contact Form',
          'Name': `${formData.firstName} ${formData.lastName}`,
          'Email': formData.email,
          'Phone': formData.phone || 'N/A',
          'Company': formData.company || 'N/A',
          'Interest': formData.interest || 'N/A',
          'Inquiry Type': activeTab || 'General Inquiry',
          'Message': formData.message,
          'subject': `New Contact Lead: ${formData.interest || activeTab || 'General'} - ${formData.firstName} ${formData.lastName}`,
        }),
      })
      
      const data = await response.json()
      if (response.ok && data.success === true) {
        setSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          interest: 'Website Design & Development',
          message: '',
        })
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err: any) {
      console.error('Contact submission error:', err)
      setError('Failed to send message. Please check your internet connection and try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-black overflow-hidden border-b border-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-5">
              <span className="w-6 h-px bg-blue-400 inline-block" />
              Contact Us
              <span className="w-6 h-px bg-blue-400 inline-block" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Have a project in mind that you think we&apos;d be a great fit for? We&apos;d love to know what you&apos;re thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Address Info */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7 bg-[#0a0a0a] border border-[#2a2a2a] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              
              {/* Tab Selector */}
              <div className="mb-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Let&apos;s Talk About :</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'project', label: 'New Project' },
                    { id: 'career', label: 'Joining Our Team' },
                    { id: 'general', label: 'General Enquiries' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-all ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-purple-500/25'
                          : 'bg-[#111] text-gray-400 border-[#2a2a2a] hover:border-white/20'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-4 animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400 text-sm max-w-sm">
                    Thank you for reaching out to Digitacurve. An expert from our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Company Name (Optional)</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="My Company Inc."
                    />
                  </div>

                  {activeTab === 'project' && (
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Your Enquiry About</label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option>Website Design & Development</option>
                        <option>Search Engine Optimization (SEO)</option>
                        <option>Pay Per Click (PPC)</option>
                        <option>Social Media Manager</option>
                        <option>Digital & IT Consulting</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Briefly describe your requirements..."
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Messages
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Address and Info Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="p-6 sm:p-8 bg-[#0a0a0a] border border-[#2a2a2a] rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-2">Connect Directly</h3>
                <p className="text-gray-500 text-sm mb-6">Skip the form and email or call us directly. We respond within 24 hours.</p>
                <div className="space-y-4">
                  <a href="mailto:sales@digitacurve.com" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-[#111] flex items-center justify-center border border-[#2a2a2a] group-hover:border-blue-500/40 transition-colors">
                      <Mail size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Email Us</p>
                      <p className="text-sm text-white group-hover:text-blue-400 transition-colors">sales@digitacurve.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-950/40 to-purple-950/20 border border-blue-950/40 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-2">Our Availability</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Building an enterprise-level site doesn&apos;t need to be a nightmare or cost you thousands. Felix is purpose-built.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
                  <span className="text-xs text-green-400 font-bold uppercase tracking-wider">Available Worldwide</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Locations Directory */}
      <section className="py-20 bg-[#050505] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              We&apos;re <span className="gradient-text">Global</span> and Growing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map(office => (
              <div
                key={office.address}
                className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111] hover:border-[#444] transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-2xl">{office.flag}</span>
                  <div>
                    <h4 className="text-white font-bold text-base">{office.country}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{office.role}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <MapPin size={14} className="text-gray-600 shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-xs leading-relaxed">{office.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
