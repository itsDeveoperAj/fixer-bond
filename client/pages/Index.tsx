import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Zap, Shield, Droplets, Wrench } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Stronger Bonds for Stronger Construction
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Fixer Bond Chemical - The professional choice for durable, reliable bonding solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="bg-blue-600 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🧪</div>
                <p className="text-blue-100">Product image placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Fixer Bond?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engineered for maximum performance and durability in demanding construction environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">High Strength</h3>
              <p className="text-muted-foreground">
                Delivers maximum bonding strength with exceptional durability for long-lasting results
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">💧</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Waterproof</h3>
              <p className="text-muted-foreground">
                Complete water resistance protects structures from moisture damage and environmental stresses
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Long-Lasting</h3>
              <p className="text-muted-foreground">
                Extended shelf life and superior longevity mean lasting performance in diverse conditions
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Multipurpose</h3>
              <p className="text-muted-foreground">
                Perfect for tiles, stone, concrete, repairs, and waterproofing applications across all surfaces
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Overview */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">Versatile Applications</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Fixer Bond Chemical works perfectly on a variety of surfaces and use cases
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Application 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Construction</h3>
              <p className="text-muted-foreground">
                Ideal for concrete bonding, mortar joints, and structural adhesive applications
              </p>
            </div>

            {/* Application 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔨</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Repairs</h3>
              <p className="text-muted-foreground">
                Perfect for fixing cracks, filling gaps, and restoring damaged structures
              </p>
            </div>

            {/* Application 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Waterproofing</h3>
              <p className="text-muted-foreground">
                Provides complete water resistance for basements, bathrooms, and exposed surfaces
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/applications"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore All Applications <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Experience Superior Bonding?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of professionals who trust Fixer Bond Chemical for their most demanding projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/specifications"
              className="inline-flex items-center justify-center bg-secondary text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors"
            >
              View Specifications
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
