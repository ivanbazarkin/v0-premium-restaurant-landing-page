import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Интерьер ресторана Берёза"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-gold/20" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="inline-block text-gold text-sm uppercase tracking-[0.3em] mb-6">
              О ресторане
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
              Традиции русской кухни
              <br />
              <span className="text-gold">в новом прочтении</span>
            </h2>

            <div className="w-16 h-px bg-gold mb-8" />

            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Ресторан «Берёза» — это место, где встречаются вековые традиции 
                русской гастрономии и современные кулинарные техники. Мы создали 
                пространство, где каждый гость может прикоснуться к истории 
                русской кухни через призму авторского видения.
              </p>
              <p>
                Наш шеф-повар использует только локальные сезонные продукты от 
                проверенных фермерских хозяйств. Каждое блюдо — это история, 
                рассказанная языком вкусов и ароматов, знакомых с детства, 
                но представленных в совершенно новом свете.
              </p>
              <p>
                Интерьер ресторана вдохновлён красотой русской природы: тёплые 
                тона дерева, мягкий свет и элегантные детали создают атмосферу 
                уюта и изысканности.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div className="text-center">
                <span className="block text-3xl lg:text-4xl text-gold font-light">12</span>
                <span className="text-sm uppercase tracking-wider text-foreground/50 mt-2 block">
                  лет опыта
                </span>
              </div>
              <div className="text-center">
                <span className="block text-3xl lg:text-4xl text-gold font-light">2</span>
                <span className="text-sm uppercase tracking-wider text-foreground/50 mt-2 block">
                  звезды Michelin
                </span>
              </div>
              <div className="text-center">
                <span className="block text-3xl lg:text-4xl text-gold font-light">50+</span>
                <span className="text-sm uppercase tracking-wider text-foreground/50 mt-2 block">
                  блюд в меню
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
