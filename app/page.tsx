import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MenuSection } from "@/components/menu-section"
import { ReservationSection } from "@/components/reservation-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ReservationSection />
      <ReviewsSection />
      <ContactsSection />
      <Footer />
    </main>
  )
}
