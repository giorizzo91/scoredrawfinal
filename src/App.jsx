
import { motion } from 'framer-motion'

const products = [
  {
    title: 'Football Legends',
    subtitle: 'Minimal football artwork inspired by iconic moments.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop',
    price: '£29.99',
  },
  {
    title: 'Football Diaries',
    subtitle: 'Premium journals for football fans and collectors.',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1600&auto=format&fit=crop',
    price: '£14.99',
  },
  {
    title: 'World Cup Icons',
    subtitle: 'Elegant football culture pieces inspired by history.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600&auto=format&fit=crop',
    price: '£34.99',
  },
]

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">
            ScoreDrawArt
          </h1>

          <nav className="hidden md:flex gap-10 text-sm text-black/60">
            <a href="#products">Collections</a>
            <a href="#story">Story</a>
            <a href="#newsletter">Newsletter</a>
          </nav>

          <a
            href="https://www.etsy.com/shop/ScoreDrawArt"
            className="bg-black text-white px-6 py-3 rounded-full shadow-xl hover:scale-[1.03] transition"
          >
            Shop
          </a>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center bg-[#f5f5f7] px-8 md:px-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1800&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-10 scale-105"
        />

        <div className="relative z-10 max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.35em] text-black/40 text-sm mb-8"
          >
            Premium Football Culture
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[8rem] font-semibold tracking-tight leading-[0.9] mb-10"
          >
            Minimal Football Art.
            <br />
            Inspired By Legends.
          </motion.h1>

          <p className="text-2xl text-black/60 max-w-3xl leading-relaxed mb-12 font-light">
            A refined football culture brand combining iconic moments,
            legendary players and premium collectible artwork into a modern,
            minimalist experience.
          </p>

          <div className="flex gap-5 flex-wrap">
            <button className="bg-black text-white px-10 py-5 rounded-full shadow-2xl hover:scale-[1.03] transition">
              Browse Collection
            </button>

            <button className="border border-black/10 bg-white/80 backdrop-blur-xl px-10 py-5 rounded-full shadow-lg hover:bg-black hover:text-white transition">
              View Best Sellers
            </button>
          </div>
        </div>
      </section>

      <section id="products" className="py-32 px-8 md:px-20">
        <div className="mb-16">
          <p className="uppercase tracking-[0.35em] text-black/40 text-sm mb-4">
            Collections
          </p>

          <h2 className="text-6xl font-semibold tracking-tight max-w-4xl leading-tight">
            Designed with the same attention to detail as premium technology products.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-[36px] overflow-hidden border border-black/5 shadow-[0_20px_80px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-500"
            >
              <img
                src={product.image}
                className="w-full h-[460px] object-cover hover:scale-105 transition duration-700"
              />

              <div className="p-10">
                <h3 className="text-4xl font-semibold tracking-tight mb-5 leading-tight">
                  {product.title}
                </h3>

                <p className="text-black/60 text-lg leading-relaxed mb-8">
                  {product.subtitle}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">{product.price}</p>

                  <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="py-40 px-8 md:px-20 bg-[#f5f5f7] text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-black/40 text-sm mb-6">
            The Philosophy
          </p>

          <h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-tight mb-10">
            Football nostalgia,
            <br />
            reimagined with modern minimalism.
          </h2>

          <p className="text-2xl text-black/60 leading-relaxed font-light">
            ScoreDrawArt is built for football fans who appreciate premium design,
            iconic sporting history and beautifully crafted artwork.
          </p>
        </div>
      </section>

      <section id="newsletter" className="py-36 px-8 md:px-20">
        <div className="max-w-6xl mx-auto rounded-[48px] bg-[#f5f5f7] border border-black/5 p-16 md:p-24 text-center shadow-[0_30px_100px_rgba(0,0,0,0.06)]">
          <p className="uppercase tracking-[0.35em] text-black/40 text-sm mb-5">
            Newsletter
          </p>

          <h2 className="text-6xl font-semibold tracking-tight mb-8 leading-tight">
            Stay connected to football culture.
          </h2>

          <p className="text-2xl text-black/60 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Receive exclusive releases, collector drops and premium football-inspired content.
          </p>

          <div className="flex flex-col md:flex-row gap-5 max-w-3xl mx-auto">
            <input
              placeholder="Enter your email"
              className="flex-1 bg-white border border-black/5 rounded-full px-8 py-6 text-lg outline-none shadow-sm"
            />

            <button className="bg-black text-white px-10 py-6 rounded-full text-lg shadow-xl hover:scale-[1.03] transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 py-16 px-8 md:px-20 text-black/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              ScoreDrawArt
            </h3>

            <p className="max-w-md text-lg leading-relaxed">
              Premium football-inspired artwork crafted with a minimalist aesthetic.
            </p>
          </div>

          <div>
            © 2026 ScoreDrawArt
          </div>
        </div>
      </footer>
    </div>
  )
}
