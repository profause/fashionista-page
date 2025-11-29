import { Download, Smartphone, TrendingUp, Heart, Users, Sparkles } from 'lucide-react';

export default function Home() {
     return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Fashionista</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">About</a>
            <a href="#download" className="px-6 py-2.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all hover:shadow-lg">
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                Your Personal Style Companion
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your Perfect Style with <span className="text-orange-500">Fashionista</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with fashion trends, explore curated looks, and build your dream wardrobe. Join thousands of style enthusiasts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:shadow-xl">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">App Store</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all hover:shadow-xl">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Google Play</span>
                </button>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative">
              <div className="relative mx-auto w-[300px] h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[50px] blur-3xl opacity-30"></div>
                <div className="relative bg-white rounded-[50px] shadow-2xl overflow-hidden border-8 border-gray-900">
                  <div className="bg-orange-500 h-full flex flex-col items-center justify-center px-8">
                    <div className="w-24 h-24 mb-8 opacity-80">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M50 20 L30 40 L40 40 L40 70 L60 70 L60 40 L70 40 Z" fill="currentColor" className="text-gray-900" />
                      </svg>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 text-center">Fashionista</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Shine
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed for fashion lovers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Trending Styles</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay ahead with real-time fashion trends and discover what's hot in the style world.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Save Favorites</h3>
              <p className="text-gray-600 leading-relaxed">
                Curate your personal collection of looks and outfits that inspire you.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect & Share</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a vibrant community of fashion enthusiasts and share your unique style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your Closet, Reimagined
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Browse through endless style inspiration, from classic elegance to bold statements. Fashionista helps you organize your wardrobe and discover looks that match your personality.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Personalized trend recommendations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Virtual closet organization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Style matching with clients</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-[280px]">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[40px] blur-2xl opacity-20"></div>
                <div className="relative bg-white rounded-[40px] shadow-2xl overflow-hidden border-4 border-gray-200">
                  <img
                    src="https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Fashion app interface"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">500K+</div>
              <div className="text-xl text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">1M+</div>
              <div className="text-xl text-gray-300">Styles Shared</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">50K+</div>
              <div className="text-xl text-gray-300">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-6 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Style?
          </h2>
          <p className="text-xl text-orange-100 mb-10">
            Download Fashionista today and join the fashion revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all hover:shadow-xl font-semibold">
              <Smartphone className="w-5 h-5" />
              <span>Download for iOS</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:shadow-xl font-semibold">
              <Smartphone className="w-5 h-5" />
              <span>Download for Android</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Fashionista</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Fashionista. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
  