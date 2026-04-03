import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, Star, Truck, Gem, Repeat, Heart } from "lucide-react"

const services = [
  {
    icon: ShoppingBag,
    title: "Женские сумки",
    description:
      "Элегантные и практичные модели для повседневного использования и особых случаев. От классических шоперов до вечерних клатчей — каждая сумка создана с заботой о деталях и стиле.",
  },
  {
    icon: Gem,
    title: "Кожаные изделия",
    description:
      "Только натуральная кожа высшего сорта от проверенных производителей. Мягкая фактура, прочные швы, фурнитура премиум-класса — вещи, которые служат годами и становятся лучше с возрастом.",
  },
  {
    icon: Star,
    title: "Авторские коллекции",
    description:
      "Уникальные модели от мастеров из Уфы, Санкт-Петербурга и Москвы. Каждая коллекция отражает характер своего города и создается в ограниченном тираже.",
  },
  {
    icon: Truck,
    title: "Доставка по России",
    description:
      "Быстрая и надёжная доставка в любую точку страны. Бережная упаковка, отслеживание заказа в реальном времени и гарантия сохранности каждого изделия.",
  },
  {
    icon: Repeat,
    title: "Лёгкий возврат",
    description:
      "Не подошёл размер или цвет — обменяем или вернём деньги без лишних вопросов. Мы ценим ваше время и хотим, чтобы каждая покупка приносила только радость.",
  },
  {
    icon: Heart,
    title: "Индивидуальный заказ",
    description:
      "Хотите сумку под ваш стиль? Подберём модель, цвет, материал и фурнитуру. Создадим именно то, о чём вы мечтали, с гравировкой или монограммой.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наш ассортимент
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для тех, кто ценит <span className="text-primary">стиль</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Широкий выбор сумок на любой случай жизни — от строгих деловых моделей до ярких повседневных образов.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}