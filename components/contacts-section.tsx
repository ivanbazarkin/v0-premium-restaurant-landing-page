import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactsSection() {
  return (
    <section id="contacts" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-gold text-sm uppercase tracking-[0.3em] mb-6">
            Контакты
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Как нас <span className="text-gold">найти</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Адрес</h3>
                <p className="text-foreground/70 leading-relaxed">
                  г. Москва, ул. Большая Дмитровка, д. 15/2
                  <br />
                  <span className="text-sm text-foreground/50">
                    Станция метро «Театральная», 5 минут пешком
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Телефон</h3>
                <p className="text-foreground/70">
                  <a href="tel:+74951234567" className="hover:text-gold transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-foreground/70">
                  <a href="mailto:info@bereza-moscow.ru" className="hover:text-gold transition-colors">
                    info@bereza-moscow.ru
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Часы работы</h3>
                <div className="text-foreground/70 space-y-1">
                  <p>Понедельник — Четверг: 12:00 — 23:00</p>
                  <p>Пятница — Суббота: 12:00 — 00:00</p>
                  <p>Воскресенье: 12:00 — 22:00</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-lg font-medium mb-4">Мы в социальных сетях</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-colors duration-300"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.828.94z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-colors duration-300"
                  aria-label="VKontakte"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.189 1.365 1.26 2.18 1.817.616.422 1.084.33 1.084.33l2.178-.03s1.14-.071.6-.97c-.045-.073-.32-.661-1.644-1.87-1.387-1.267-1.2-1.062.47-3.255 1.016-1.335 1.423-2.149 1.296-2.498-.12-.331-.862-.244-.862-.244l-2.454.015s-.182-.025-.317.056c-.132.078-.218.261-.218.261s-.39 1.039-.91 1.92c-1.099 1.867-1.539 1.965-1.718 1.848-.418-.271-.313-1.09-.313-1.67 0-1.816.275-2.574-.537-2.771-.27-.066-.468-.109-1.158-.116-.883-.01-1.63.003-2.053.21-.282.137-.5.444-.368.462.163.022.533.1.729.366.253.343.244 1.115.244 1.115s.146 2.138-.339 2.403c-.332.182-.788-.19-1.767-1.89-.501-.87-.88-1.832-.88-1.832s-.073-.18-.203-.277c-.158-.117-.378-.153-.378-.153l-2.332.015s-.35.01-.478.162c-.115.136-.009.417-.009.417s1.832 4.285 3.906 6.446c1.9 1.982 4.058 1.852 4.058 1.852h.978z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] border border-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3847307055583!2d37.61447637691659!3d55.76126947289752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JHQvtC70YzRiNCw0Y8g0JTQvNC40YLRgNC-0LLQutCwLCAxNS8yLCDQnNC-0YHQutCy0LAsIDEyNTAwOQ!5e0!3m2!1sru!2sru!4v1699999999999!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Расположение ресторана Берёза на карте"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
