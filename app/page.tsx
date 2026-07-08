import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import StatsBar from '../components/home/StatsBar'
import FeaturedBuilds from '../components/home/FeaturedBuilds'
import BuildLog from '../components/home/BuildLog'
import CTASection from '../components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden bg-void pt-[76px]">
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              'radial-gradient(900px 500px at 75% -5%, rgba(64,72,190,.20), transparent 65%), radial-gradient(700px 420px at 8% 22%, rgba(90,40,200,.12), transparent 60%)',
          }}
        />

        <Hero />

        <div className="relative z-[1] mt-6">
          <StatsBar />
        </div>

        <section
          id="builds"
          className="relative z-[1] mx-auto mt-7 grid max-w-[1440px] scroll-mt-24 grid-cols-1 items-stretch gap-6 px-6 md:px-9 lg:grid-cols-[1fr_440px]"
        >
          <FeaturedBuilds />
          <BuildLog />
        </section>

        <div className="relative z-[1] mt-7 mb-12">
          <CTASection />
        </div>
      </main>
    </>
  )
}
