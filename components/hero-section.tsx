import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Интерьер ресторана Берёза"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block text-gold text-sm uppercase tracking-[0.4em] mb-4">
            Москва
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6 text-balance">
          <span className="text-gold">Берёза</span>
        </h1>
        
        <div className="w-24 h-px bg-gold mx-auto mb-8" />
        
        <p className="text-lg md:text-xl lg:text-2xl font-light text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Современная русская кухня в авторской интерпретации шеф-повара
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#reservation">
            <Button className="bg-gold hover:bg-gold-dark text-primary-foreground uppercase tracking-[0.15em] text-sm px-10 py-6 transition-all duration-300">
              Забронировать стол
            </Button>
          </Link>
          <Link href="#menu">
            <Button
              variant="outline"
              className="border-gold/50 text-foreground hover:bg-gold/10 hover:border-gold uppercase tracking-[0.15em] text-sm px-10 py-6 transition-all duration-300"
            >
              Смотреть меню
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/50">
          Листайте вниз
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  )
}
