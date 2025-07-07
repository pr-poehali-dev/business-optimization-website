import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [bannerText, setBannerText] = useState(
    "Оптимизируем ваши налоги до 1% с полным сопровождением под ключ",
  );
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    question: "",
  });
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({
    business: "",
    activity: "",
    revenue: "",
  });

  const services = [
    {
      title: "Регистрация бизнеса под ключ в Калмыкии",
      description:
        "Быстро и профессионально зарегистрируем ваш бизнес в регионе с выгодной налоговой ставкой УСН 1%. Полное сопровождение на всех этапах: от подготовки документов до получения свидетельства",
      price: "от 50 000 рублей",
      icon: "Building",
    },
    {
      title: "Сопровождение бизнеса в Калмыкии",
      description:
        "Возьмём на себя все вопросы: от бухгалтерии и налоговой отчетности до взаимодействия с государственными органами. Вы сосредотачиваетесь на развитии, мы — на рутине",
      price: "от 50 000 рублей/месяц",
      icon: "Users",
    },
    {
      title: "Продажа и аренда офисно-торговых помещений",
      description:
        "Предлагаем собственные помещения для вашего бизнеса: офисы и торговые площади в центре Калмыкии. Продажа или аренда — выбирайте удобный формат",
      price: "Продажа от 1 000 000 рублей\nАренда от 15 000 рублей/месяц",
      icon: "Store",
    },
    {
      title: "Продажа частной недвижимости и прописка",
      description:
        "Приобретайте наши объекты недвижимости с возможностью прописки для оптимизации бизнес-процессов. Надежные активы для вашего комфорта и безопасности",
      price: "от 1 000 000 рублей",
      icon: "Home",
    },
    {
      title: "Создание структуры бизнеса для минимизации налогов",
      description:
        "Разработаем законную схему дробления бизнеса, которая позволит существенно снизить налоговую нагрузку и перевести ваш бизнес на УСН 1%",
      price: "от 300 000 рублей",
      icon: "TreePine",
    },
    {
      title: "Бизнес-консультирование",
      description:
        "Поможем адаптировать ваш бизнес к новым условиям: от смены формата деятельности до оптимизации процессов. Индивидуальный подход и практичные решения",
      price: "от 100 000 рублей",
      icon: "MessageCircle",
    },
  ];

  const advantages = [
    "Переводим на УСН 1% в кратчайшие сроки",
    "Поддерживаем связь с клиентами 24/7",
    "Работаем без посредников и предоплат",
    "Взаимодействуем с государственными и муниципальными органами",
    "Гарантируем законность и прозрачность",
    "Полное сопровождение под ключ",
    "Вариант оформления сделки на выбор: дистанционно/очно",
    "Мы БЕСПЛАТНО проконсультируем по всем вопросам!",
    "Продаем только собственные активы (гарантированная быстрая и безопасная сделка)",
  ];

  const benefits = [
    {
      title: "+5% от выручки пассивного дохода ежегодно",
      description:
        "Вы будете платить всего 1% с доходов. Это в 6 раз меньше обычной ставки! Получите дополнительные инвестиции в собственный бизнес.",
      icon: "TrendingUp",
    },
    {
      title: "Освобождение от первички на расходы",
      description:
        "Вам больше не понадобится составлять и собирать первичные документы, чтобы подтвердить затраты",
      icon: "FileText",
    },
    {
      title: "Экономия на налогах до 22,5 млн. руб. в год",
      description:
        "Мы уделяем серьезное внимание налоговой оптимизации и налоговой безопасности наших клиентов и легально минимизируем налоговые риски.",
      icon: "DollarSign",
    },
  ];

  const whyUs = [
    {
      title: "Мы — не посредники!",
      description:
        "Мы предприниматели, юристы и собственники помещений в Калмыкии, знающие рынок изнутри",
      icon: "Users",
    },
    {
      title: "Продаем только свои активы",
      description:
        "Это гарантирует быстрые и безопасные сделки без скрытых комиссий",
      icon: "Shield",
    },
    {
      title: "Переводим на УСН 1% в кратчайшие сроки",
      description: "Оптимизируем налоги законно и эффективно",
      icon: "Zap",
    },
    {
      title: "Связь 24/7",
      description: "Мы всегда на связи, чтобы ответить на ваши вопросы",
      icon: "Phone",
    },
    {
      title: "Работаем без посредников и предоплат",
      description: "Прозрачные условия и честное сотрудничество",
      icon: "Handshake",
    },
    {
      title: "Взаимодействуем с органами власти",
      description: "Берем на себя все бюрократические вопросы",
      icon: "Building2",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleQuizNext = () => {
    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-premium-teal to-premium-light text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/704d994d-327d-4129-9d0d-7c1f19556f4e.jpg"
            alt="Business team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-premium-teal/80 to-premium-light/80"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-8 animate-fade-in">
              Оптимизация бизнеса в Калмыкии
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 animate-scale-in">
              <p className="text-xl mb-6">{bannerText}</p>
              <Button
                size="lg"
                className="bg-orange-primary text-white hover:bg-orange-hover text-lg px-8 py-4 font-semibold"
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-premium-teal mb-8">
              Вы стремитесь развивать бизнес, минимизировать затраты и работать
              в комфортных условиях?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Мы, финансовая компания «Мир Бизнеса», предлагаем комплексные
                решения для вашего бизнеса в Республике Калмыкия — регионе с
                уникальными налоговыми преимуществами и развитой
                инфраструктурой. Специально для вас, предпринимателей на УСН (6%
                или 15%) с выручкой от 18 млн рублей в год, мы подготовили пакет
                услуг, который поможет оптимизировать налоги, укрепить бизнес и
                обеспечить его стабильный рост.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-4 bg-premium-accent/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-montserrat text-center text-premium-teal mb-16">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-premium-teal rounded-full mt-2"></div>
                  <p className="text-gray-700 font-medium">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-montserrat text-center text-premium-teal mb-16">
            Каталог услуг
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-premium-teal/10 rounded-lg mb-4">
                    <Icon
                      name={service.icon}
                      className="w-8 h-8 text-premium-teal"
                    />
                  </div>
                  <CardTitle className="text-xl font-montserrat text-premium-teal leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-4">
                    <div className="bg-premium-accent/30 p-4 rounded-lg">
                      <p className="font-semibold text-premium-teal whitespace-pre-line">
                        {service.price}
                      </p>
                    </div>
                    <Button className="w-full bg-orange-primary hover:bg-orange-hover">
                      Оставить заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              *Цены указаны ориентировочно и могут корректироваться в
              зависимости от объема услуг и сложности задачи
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-montserrat text-premium-teal mb-4">
              Подберем решение для вашего бизнеса
            </h2>
            <p className="text-lg text-gray-600">
              Ответьте на несколько вопросов и получите персональные
              рекомендации
            </p>
          </div>

          <Card className="p-8">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-500">
                  Вопрос {quizStep} из 3
                </span>
                <div className="flex space-x-2">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full ${
                        step <= quizStep ? "bg-premium-teal" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-premium-teal h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(quizStep / 3) * 100}%` }}
                />
              </div>
            </div>

            {quizStep === 1 && (
              <div>
                <h3 className="text-2xl font-bold font-montserrat mb-6">
                  У вас действующее ИП/ООО или только планируете открыть?
                </h3>
                <RadioGroup
                  value={quizAnswers.business}
                  onValueChange={(value) =>
                    setQuizAnswers({ ...quizAnswers, business: value })
                  }
                >
                  <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem
                      value="current-kalmykia"
                      id="current-kalmykia"
                    />
                    <Label
                      htmlFor="current-kalmykia"
                      className="cursor-pointer"
                    >
                      действующее (регион Калмыкия)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value="current-other" id="current-other" />
                    <Label htmlFor="current-other" className="cursor-pointer">
                      действующее (другой регион России)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value="planning" id="planning" />
                    <Label htmlFor="planning" className="cursor-pointer">
                      планирую открыть
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {quizStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold font-montserrat mb-6">
                  Какой вид деятельности?
                </h3>
                <RadioGroup
                  value={quizAnswers.activity}
                  onValueChange={(value) =>
                    setQuizAnswers({ ...quizAnswers, activity: value })
                  }
                >
                  <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value="retail" id="retail" />
                    <Label htmlFor="retail" className="cursor-pointer">
                      розничная торговля (в т.ч. маркетплейсы)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value="services" id="services" />
                    <Label htmlFor="services" className="cursor-pointer">
                      услуги
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer">
                      другое
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {quizStep === 3 && (
              <div>
                <h3 className="text-2xl font-bold font-montserrat mb-6">
                  Годовой оборот?
                </h3>
                <RadioGroup
                  value={quizAnswers.revenue}
                  onValueChange={(value) =>
                    setQuizAnswers({ ...quizAnswers, revenue: value })
                  }
                >
                  <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value="up-to-18" id="up-to-18" />
                    <Label htmlFor="up-to-18" className="cursor-pointer">
                      до 18 млн рублей
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value="up-to-60" id="up-to-60" />
                    <Label htmlFor="up-to-60" className="cursor-pointer">
                      до 60 млн рублей
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value="up-to-150" id="up-to-150" />
                    <Label htmlFor="up-to-150" className="cursor-pointer">
                      до 150 млн рублей
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-gray-50">
                    <RadioGroupItem value="over-150" id="over-150" />
                    <Label htmlFor="over-150" className="cursor-pointer">
                      свыше 150 млн рублей
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setQuizStep(Math.max(1, quizStep - 1))}
                disabled={quizStep === 1}
              >
                Назад
              </Button>
              <Button
                onClick={handleQuizNext}
                className="bg-orange-primary hover:bg-orange-hover"
                disabled={
                  (quizStep === 1 && !quizAnswers.business) ||
                  (quizStep === 2 && !quizAnswers.activity) ||
                  (quizStep === 3 && !quizAnswers.revenue)
                }
              >
                {quizStep === 3 ? "Получить рекомендации" : "Далее"}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-montserrat text-center text-premium-teal mb-16">
            Что вы получите
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-premium-teal/10 rounded-full flex items-center justify-center">
                    <Icon
                      name={benefit.icon}
                      className="w-8 h-8 text-premium-teal"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-montserrat text-premium-teal mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-4 bg-premium-accent/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-montserrat text-center text-premium-teal mb-16">
            Почему мы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-premium-teal/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name={item.icon}
                      className="w-6 h-6 text-premium-teal"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-montserrat text-premium-teal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-montserrat text-premium-teal mb-8">
            Партнерство
          </h2>
          <Card className="p-8 bg-gradient-to-r from-premium-blue to-premium-light text-white">
            <h3 className="text-2xl font-bold font-montserrat mb-4">
              Реферальная программа
            </h3>
            <p className="text-lg mb-6">
              Рекомендуйте наши услуги владельцам бизнеса и получайте больше
              прибыли!
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
              <div className="text-3xl font-bold font-montserrat mb-2">10%</div>
              <div className="text-lg">
                от стоимости договора за каждого приведённого клиента!
              </div>
            </div>
            <Button className="bg-white text-premium-teal hover:bg-gray-100">
              Стать партнером
            </Button>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-montserrat text-premium-teal mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-gray-600">
              Оставьте заявку и наш специалист свяжется с вами в течение 15
              минут
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base font-medium">
                  Ваше имя
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base font-medium">
                  Номер телефона *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+7 (___) ___-__-__"
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="question" className="text-base font-medium">
                  Ваш вопрос
                </Label>
                <Textarea
                  id="question"
                  value={formData.question}
                  onChange={(e) =>
                    setFormData({ ...formData, question: e.target.value })
                  }
                  className="mt-2"
                  rows={4}
                  placeholder="Опишите ваш вопрос или задачу..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-primary hover:bg-orange-hover text-lg py-6"
              >
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-premium-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/ed416f67-9e35-4e8c-9c55-efc95b591116.jpg"
            alt="Office building"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-premium-teal/90"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold font-montserrat mb-4">
                Мир Бизнеса
              </h3>
              <p className="text-gray-300">
                Финансовая компания для оптимизации вашего бизнеса в Калмыкии
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-montserrat mb-4">
                Контакты
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>📞 +7 (XXX) XXX-XX-XX</p>
                <p>📧 info@mirbiznes.ru</p>
                <p>📍 г. Элиста, Калмыкия</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold font-montserrat mb-4">
                Режим работы
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>Пн-Пт: 9:00-18:00</p>
                <p>Сб-Вс: 10:00-16:00</p>
                <p>Консультации: 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
            <p>© 2024 Мир Бизнеса. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
