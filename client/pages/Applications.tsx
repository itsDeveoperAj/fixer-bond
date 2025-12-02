import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Applications() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Applications</h1>
          <p className="text-xl text-blue-100 mt-2">
            Real-world use cases and success stories
          </p>
        </div>
      </section>

      {/* Suitable Surfaces */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Suitable Surfaces
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tiles */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-secondary shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔲</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Ceramic Tiles</h3>
              <p className="text-muted-foreground mb-4">
                Perfect for indoor and outdoor tile installations with superior bonding strength
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Wall tiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Floor tiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Large format tiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Glazed tiles</span>
                </div>
              </div>
            </div>

            {/* Stone */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-secondary shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🪨</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Natural Stone</h3>
              <p className="text-muted-foreground mb-4">
                Excellent adhesion for marble, granite, slate, and limestone applications
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Marble installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Granite surfaces</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Stone cladding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Stone repairs</span>
                </div>
              </div>
            </div>

            {/* Concrete */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-secondary shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Concrete</h3>
              <p className="text-muted-foreground mb-4">
                Industrial strength bonding for concrete structures and repairs
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Concrete bonding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Structural repairs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Floor preparation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Crack filling</span>
                </div>
              </div>
            </div>

            {/* Walls */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-secondary shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🧱</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Walls</h3>
              <p className="text-muted-foreground mb-4">
                Reliable bonding for interior and exterior wall applications
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Interior walls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Exterior cladding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Wall panel mounting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Facade repairs</span>
                </div>
              </div>
            </div>

            {/* Floors */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-secondary shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Floors</h3>
              <p className="text-muted-foreground mb-4">
                Durable flooring solutions for residential and commercial spaces
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Tile flooring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Stone floors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">High-traffic areas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Wet room floors</span>
                </div>
              </div>
            </div>

            {/* Special Applications */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-secondary shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Special Uses</h3>
              <p className="text-muted-foreground mb-4">
                Versatile enough for unique and specialized applications
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Pool work</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Kitchen backsplash</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Bathroom fixtures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">Artistic installations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Real-World Use Cases
          </h2>

          {/* Use Case 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-foreground mb-4">Residential Bathroom</h3>
              <p className="text-muted-foreground mb-4">
                A homeowner needed to tile their bathroom walls and ensure complete waterproofing to prevent mold and water damage.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                <p className="text-sm text-muted-foreground">
                  High moisture environment with potential for water seepage behind tiles
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                <p className="text-sm text-muted-foreground">
                  Fixer Bond Chemical provided superior waterproofing and strong adhesion, keeping the bathroom protected for years
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">❌</div>
                    <p className="text-xs text-muted-foreground">Before</p>
                  </div>
                </div>
                <div className="bg-green-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">✅</div>
                    <p className="text-xs text-muted-foreground">After</p>
                  </div>
                </div>
                <p className="col-span-2 text-center text-sm text-muted-foreground mt-2">
                  Professional waterproofed bathroom installation
                </p>
              </div>
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center justify-center order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-orange-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔨</div>
                    <p className="text-xs text-muted-foreground">Damaged</p>
                  </div>
                </div>
                <div className="bg-blue-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💪</div>
                    <p className="text-xs text-muted-foreground">Repaired</p>
                  </div>
                </div>
                <p className="col-span-2 text-center text-sm text-muted-foreground mt-2">
                  Structural repair and restoration
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md order-1 md:order-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">Commercial Building Repair</h3>
              <p className="text-muted-foreground mb-4">
                A commercial building had cracked concrete pillars and damaged facade that needed immediate repair.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                <p className="text-sm text-muted-foreground">
                  Structural integrity compromised, required strong bonding without business interruption
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                <p className="text-sm text-muted-foreground">
                  Fixer Bond's rapid strength development enabled quick repairs while maintaining structural standards
                </p>
              </div>
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-foreground mb-4">Pool Construction</h3>
              <p className="text-muted-foreground mb-4">
                A contractor was building a custom swimming pool and needed waterproof tile bonding for pool surfaces.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                <p className="text-sm text-muted-foreground">
                  Constant water exposure, chemical treatment, and temperature changes require exceptional durability
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                <p className="text-sm text-muted-foreground">
                  Fixer Bond's chemical resistance and waterproofing properties made it the ideal choice for pool work
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-yellow-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏗️</div>
                    <p className="text-xs text-muted-foreground">Under Construction</p>
                  </div>
                </div>
                <div className="bg-cyan-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏊</div>
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                </div>
                <p className="col-span-2 text-center text-sm text-muted-foreground mt-2">
                  Professional pool installation
                </p>
              </div>
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-red-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💧</div>
                    <p className="text-xs text-muted-foreground">Water Damage</p>
                  </div>
                </div>
                <div className="bg-purple-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🛡️</div>
                    <p className="text-xs text-muted-foreground">Protected</p>
                  </div>
                </div>
                <p className="col-span-2 text-center text-sm text-muted-foreground mt-2">
                  Waterproofing solution
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md order-1 md:order-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">Basement Waterproofing</h3>
              <p className="text-muted-foreground mb-4">
                A homeowner had persistent moisture problems in their basement with cracks in the foundation.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                <p className="text-sm text-muted-foreground">
                  Moisture seeping through cracks, causing mold growth and structural concerns
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                <p className="text-sm text-muted-foreground">
                  Fixer Bond sealed cracks and provided complete waterproofing protection, solving the moisture problem permanently
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waterproofing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Waterproofing Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-foreground mb-4">Interior Waterproofing</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Bathrooms and wet rooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Kitchen areas and backsplashes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Basement walls and floors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Laundry rooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Sauna and steam rooms</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-foreground mb-4">Exterior Waterproofing</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Exterior facade tiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Pool and water features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Balconies and terraces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Parking structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Building foundations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose Fixer Bond Chemical for your next project and experience superior results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/specifications"
              className="inline-flex items-center justify-center bg-white text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors border border-secondary"
            >
              View Specifications
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
