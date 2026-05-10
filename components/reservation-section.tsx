"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Users } from "lucide-react"

export function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    wishes: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="reservation" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-gold text-sm uppercase tracking-[0.3em] mb-6">
              Бронирование
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Забронируйте <span className="text-gold">столик</span>
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-6" />
            <p className="text-foreground/60 max-w-xl mx-auto">
              Мы ждём вас в уютной атмосфере нашего ресторана. Забронируйте столик 
              заранее, чтобы мы могли подготовить всё для вашего идеального вечера.
            </p>
          </div>

          {/* Form */}
          <div className="bg-card border border-border p-8 lg:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light mb-4 text-gold">Спасибо за бронирование!</h3>
                <p className="text-foreground/60">
                  Мы свяжемся с вами в ближайшее время для подтверждения.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-foreground/60 mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-border focus:border-gold h-12"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-foreground/60 mb-2">
                      Телефон *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-input border-border focus:border-gold h-12"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-foreground/60 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-input border-border focus:border-gold h-12"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-foreground/60 mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Дата *
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="bg-input border-border focus:border-gold h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-foreground/60 mb-2">
                      <Clock className="inline w-4 h-4 mr-2" />
                      Время *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full h-12 bg-input border border-border rounded-md px-3 text-foreground focus:border-gold focus:outline-none"
                    >
                      <option value="">Выберите</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                      <option value="22:00">22:00</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-wider text-foreground/60 mb-2">
                      <Users className="inline w-4 h-4 mr-2" />
                      Гостей *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full h-12 bg-input border border-border rounded-md px-3 text-foreground focus:border-gold focus:outline-none"
                    >
                      <option value="">Выберите</option>
                      <option value="1">1 гость</option>
                      <option value="2">2 гостя</option>
                      <option value="3">3 гостя</option>
                      <option value="4">4 гостя</option>
                      <option value="5">5 гостей</option>
                      <option value="6">6 гостей</option>
                      <option value="7+">7+ гостей</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-wider text-foreground/60 mb-2">
                    Особые пожелания
                  </label>
                  <textarea
                    name="wishes"
                    value={formData.wishes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:border-gold focus:outline-none resize-none"
                    placeholder="Аллергии, особые случаи, предпочтения по столику..."
                  />
                </div>

                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    className="bg-gold hover:bg-gold-dark text-primary-foreground uppercase tracking-[0.15em] text-sm px-12 py-6 transition-all duration-300"
                  >
                    Забронировать
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
