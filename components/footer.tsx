import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold tracking-wide text-gold">
            БЕРЁЗА
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            <Link
              href="#about"
              className="text-sm uppercase tracking-[0.15em] text-foreground/60 hover:text-gold transition-colors duration-300"
            >
              О нас
            </Link>
            <Link
              href="#menu"
              className="text-sm uppercase tracking-[0.15em] text-foreground/60 hover:text-gold transition-colors duration-300"
            >
              Меню
            </Link>
            <Link
              href="#reservation"
              className="text-sm uppercase tracking-[0.15em] text-foreground/60 hover:text-gold transition-colors duration-300"
            >
              Бронирование
            </Link>
            <Link
              href="#contacts"
              className="text-sm uppercase tracking-[0.15em] text-foreground/60 hover:text-gold transition-colors duration-300"
            >
              Контакты
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-foreground/40">
            © {new Date().getFullYear()} Берёза. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
