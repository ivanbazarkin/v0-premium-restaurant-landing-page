import Image from "next/image"

const menuItems = [
  {
    id: 1,
    name: "Бефстроганов с белыми грибами",
    description: "Нежнейшая говядина в сливочном соусе с лесными грибами и домашней лапшой",
    price: "2 800",
    image: "/images/dish-1.jpg",
    category: "Горячее"
  },
  {
    id: 2,
    name: "Блины с икрой осетровых",
    description: "Тонкие гречневые блины с чёрной икрой, крем-фреш и укропом",
    price: "4 200",
    image: "/images/dish-2.jpg",
    category: "Закуски"
  },
  {
    id: 3,
    name: "Утиная грудка с ягодным соусом",
    description: "Томлёная утка с брусничным соусом, карамелизированной грушей и пюре из сельдерея",
    price: "3 400",
    image: "/images/dish-3.jpg",
    category: "Горячее"
  },
  {
    id: 4,
    name: "Пельмени с трюфелем",
    description: "Домашние пельмени из мраморной говядины с трюфельным кремом и пармезаном",
    price: "2 600",
    image: "/images/dish-4.jpg",
    category: "Горячее"
  },
  {
    id: 5,
    name: "Борщ по-московски",
    description: "Классический борщ на наваристом бульоне с телячьей грудинкой и сметаной",
    price: "1 200",
    image: "/images/dish-5.jpg",
    category: "Супы"
  },
  {
    id: 6,
    name: "Наполеон с заварным кремом",
    description: "Хрустящее слоёное тесто с нежным ванильным кремом и карамельной глазурью",
    price: "980",
    image: "/images/dish-6.jpg",
    category: "Десерты"
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-gold text-sm uppercase tracking-[0.3em] mb-6">
            Меню
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Избранные <span className="text-gold">блюда</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6" />
          <p className="text-foreground/60 max-w-xl mx-auto">
            Откройте для себя авторские интерпретации классических русских блюд
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group bg-card border border-border hover:border-gold/30 transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold/90 text-primary-foreground text-xs uppercase tracking-wider px-3 py-1">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-gold text-xl font-light">
                    {item.price} ₽
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground/50 text-sm uppercase tracking-[0.2em]">
            Полное меню доступно в ресторане
          </p>
        </div>
      </div>
    </section>
  )
}
