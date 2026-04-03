import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Заказала сумку из коллекции «Петербург» — просто влюбилась! Кожа мягкая, швы аккуратные, запах натуральный. Уже получила кучу комплиментов на работе.",
    name: "Анастасия",
    role: "Покупатель, Москва",
  },
  {
    quote:
      "Искала подарок маме на день рождения и нашла этот магазин. Заказала индивидуальную сумку с монограммой — мама была в восторге! Качество превзошло все ожидания, буду заказывать ещё.",
    name: "Екатерина",
    role: "Покупатель, Казань",
  },
  {
    quote:
      "Очень понравился сервис! Помогли подобрать модель, быстро доставили, упаковка шикарная. Сумка из коллекции «Уфа» — это что-то особенное, видно авторский труд мастера.",
    name: "Марина",
    role: "Покупатель, Екатеринбург",
  },
  {
    quote:
      "Качество на уровне итальянских брендов, а цена в разы приятнее. Поддерживаю наших мастеров! Доставка пришла за 2 дня, всё целое и красиво упакованное.",
    name: "Ольга",
    role: "Покупатель, Санкт-Петербург",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши покупатели
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Более 1000 довольных покупательниц по всей России. Качество, которое говорит само за себя.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}