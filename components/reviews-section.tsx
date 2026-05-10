"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Анна Михайлова",
    role: "Ресторанный критик",
    text: "Берёза — это место, где русская душа встречается с высокой кухней. Каждое блюдо здесь — это маленький шедевр, созданный с любовью и уважением к традициям. Бефстроганов просто божественен!",
    rating: 5
  },
  {
    id: 2,
    name: "Дмитрий Соколов",
    role: "Постоянный гость",
    text: "Мы с женой отмечали здесь годовщину свадьбы. Атмосфера, обслуживание, кухня — всё было на высшем уровне. Особенно впечатлили пельмени с трюфелем. Теперь это наше любимое место в Москве.",
    rating: 5
  },
  {
    id: 3,
    name: "Елена Петрова",
    role: "Гурман",
    text: "Наконец-то в Москве появился ресторан, где можно попробовать настоящую русскую кухню в современном прочтении. Интерьер с берёзовыми мотивами создаёт невероятно уютную атмосферу.",
    rating: 5
  },
  {
    id: 4,
    name: "Алексей Волков",
    role: "Бизнесмен",
    text: "Идеальное место для деловых встреч и семейных ужинов. Внимание к деталям впечатляет: от сервировки до подачи блюд. Борщ по-московски — лучший, что я пробовал.",
    rating: 5
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-gold text-sm uppercase tracking-[0.3em] mb-6">
            Отзывы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Что говорят <span className="text-gold">наши гости</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card border border-border p-8 lg:p-12 text-center">
                    <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />
                    
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>

                    <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed mb-8 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    <div>
                      <p className="text-gold font-medium text-lg">{review.name}</p>
                      <p className="text-foreground/50 text-sm uppercase tracking-wider mt-1">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="p-3 border border-border hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-gold w-6" : "bg-foreground/30"
                  }`}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-3 border border-border hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
