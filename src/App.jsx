import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import WhyChooseUs from './components/WhyChooseUs'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <WhyChooseUs />
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
