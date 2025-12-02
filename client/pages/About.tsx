import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Check, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About Fixer Bond Chemical</h1>
          <p className="text-xl text-blue-100 mt-2">
            Premium bonding solutions for the construction industry
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                The Trusted Choice for Construction Professionals
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Fixer Bond Chemical is a high-strength bonding agent engineered specifically for the construction industry. With decades of expertise in chemical formulation, we've developed a product that delivers exceptional performance in the most demanding applications.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're bonding tiles, waterproofing structures, or repairing concrete, Fixer Bond provides the reliability and durability that professionals demand.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🧬</div>
                <p className="text-muted-foreground">Product science illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Superior */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Why Fixer Bond is Superior
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Advantage 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Superior Adhesion
                  </h3>
                  <p className="text-muted-foreground">
                    Our formulation creates unparalleled bonding strength that holds even under extreme stress and environmental conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Water Resistant
                  </h3>
                  <p className="text-muted-foreground">
                    Complete waterproofing protection prevents moisture infiltration and water damage in wet environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Long Durability
                  </h3>
                  <p className="text-muted-foreground">
                    Tested to last for decades, maintaining structural integrity through temperature fluctuations and stress cycles.
                  </p>
                </div>
              </div>
            </div>

            {/* Advantage 4 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Versatile Application
                  </h3>
                  <p className="text-muted-foreground">
                    Works seamlessly on tiles, stone, concrete, wood, and numerous other surfaces with consistent results.
                  </p>
                </div>
              </div>
            </div>

            {/* Advantage 5 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Cost Effective
                  </h3>
                  <p className="text-muted-foreground">
                    Premium quality at competitive prices, delivering excellent value without compromising on performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Advantage 6 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Easy to Use
                  </h3>
                  <p className="text-muted-foreground">
                    Simple mixing ratios and straightforward application process save time and reduce errors on the job site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            How Fixer Bond Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Mixing</h3>
              <p className="text-muted-foreground text-sm">
                Mix the bonding agent with water in the specified ratio for optimal consistency
              </p>
              {/* Connector */}
              <div className="hidden md:block absolute top-6 left-16 w-8 h-1 bg-primary opacity-30"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Application</h3>
              <p className="text-muted-foreground text-sm">
                Apply to clean, dry surfaces using a trowel or recommended application tool
              </p>
              {/* Connector */}
              <div className="hidden md:block absolute top-6 left-16 w-8 h-1 bg-primary opacity-30"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Bonding</h3>
              <p className="text-muted-foreground text-sm">
                The chemical bonds rapidly with the substrate, creating an unbreakable connection
              </p>
              {/* Connector */}
              <div className="hidden md:block absolute top-6 left-16 w-8 h-1 bg-primary opacity-30"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Curing</h3>
              <p className="text-muted-foreground text-sm">
                Allow proper curing time for maximum strength and durability in your application
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where It's Used */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Where Fixer Bond is Used
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Residential</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Tile installations</li>
                <li>• Concrete repairs</li>
                <li>• Waterproofing bathrooms</li>
                <li>• Flooring adhesive</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Commercial</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Large-scale projects</li>
                <li>• Industrial structures</li>
                <li>• High-traffic areas</li>
                <li>• Exterior applications</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Repairs</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Crack filling</li>
                <li>• Foundation repairs</li>
                <li>• Structural bonding</li>
                <li>• Restoration work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Learn More Details?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Check out our technical specifications and real-world applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/specifications"
              className="inline-flex items-center justify-center bg-secondary text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors"
            >
              View Specifications
            </Link>
            <Link
              to="/applications"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              See Applications <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
