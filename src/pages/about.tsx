import { Sparkles, Heart, Users, TrendingUp, Smartphone } from 'lucide-react';

export default function About() {
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
            <a href="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</a>
            <a href="/privacy" className="text-gray-600 hover:text-orange-500 transition-colors">Privacy</a>
            <a href="#download" className="px-6 py-2.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all hover:shadow-lg">
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Redefining Fashion Discovery
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            At Fashionista, we believe that style is a powerful form of self-expression. Our mission is to empower everyone to discover and embrace their unique fashion identity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're on a mission to make fashion discovery effortless and enjoyable. By combining cutting-edge technology with a passion for style, we help you find looks that inspire confidence.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Heart className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Authentic Style</h3>
                  <p className="text-gray-600">Celebrating individuality in fashion</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Community First</h3>
                  <p className="text-gray-600">Connecting fashion enthusiasts</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 shadow-lg">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">1M+</h3>
                    <p className="text-gray-500">Active Users</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Daily Active Users</span>
                    <span className="font-medium">150K+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Outfits Shared</span>
                    <span className="font-medium">5M+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">5-star Ratings</span>
                    <span className="font-medium">500K+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Elevate Your Style?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of fashion enthusiasts who trust Fashionista for their daily style inspiration.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:shadow-xl">
              <Smartphone className="w-5 h-5" />
              <span className="font-semibold">Download the App</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
  