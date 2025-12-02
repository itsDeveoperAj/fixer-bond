import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowRight } from "lucide-react";

export default function Specifications() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Technical Specifications</h1>
          <p className="text-xl text-blue-100 mt-2">
            Detailed product information for professional applications
          </p>
        </div>
      </section>

      {/* Specifications Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Chemical Composition</h2>

              <div className="bg-secondary rounded-lg p-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Primary Components</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex justify-between">
                      <span>Portland Cement</span>
                      <span className="font-medium">42%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Aggregate (Fine Sand)</span>
                      <span className="font-medium">35%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Polymer Resins</span>
                      <span className="font-medium">15%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Chemical Additives</span>
                      <span className="font-medium">8%</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Key Properties</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex justify-between">
                      <span>Bonding Strength</span>
                      <span className="font-medium">45-50 MPa</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Water Absorption</span>
                      <span className="font-medium">&lt;5%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Compressive Strength</span>
                      <span className="font-medium">35-40 MPa</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Flexibility (Elongation)</span>
                      <span className="font-medium">2-3%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Mixing Ratio</h2>

              <div className="bg-blue-50 border-l-4 border-primary rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Standard Mixing</h3>
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Bonding Agent
                    </label>
                    <div className="text-2xl font-bold text-primary">1 Part</div>
                  </div>
                  <div className="border-t border-secondary"></div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Water (Clean)
                    </label>
                    <div className="text-2xl font-bold text-primary">0.35 - 0.40 Parts</div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-8">
                <h3 className="font-semibold text-foreground mb-4">Coverage Area</h3>
                <table className="w-full text-sm">
                  <tbody className="space-y-3">
                    <tr className="border-b border-border">
                      <td className="py-3 text-muted-foreground">Standard tiles (20x20cm)</td>
                      <td className="py-3 text-foreground font-medium">5-6 m²/kg</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 text-muted-foreground">Large tiles (60x60cm)</td>
                      <td className="py-3 text-foreground font-medium">4-5 m²/kg</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 text-muted-foreground">Repairs (3mm thickness)</td>
                      <td className="py-3 text-foreground font-medium">3-4 m²/kg</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Waterproofing</td>
                      <td className="py-3 text-foreground font-medium">6-7 m²/kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage & Shelf Life */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-foreground mb-6">Storage Conditions</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Store in dry, cool place away from moisture and humidity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Ideal temperature range: 15-25°C (59-77°F)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Keep in original sealed containers until use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Avoid direct exposure to sunlight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Keep away from extreme temperatures</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-foreground mb-6">Shelf Life</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Under Proper Storage
                  </label>
                  <div className="text-3xl font-bold text-primary">24 Months</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    From date of manufacture
                  </p>
                </div>

                <div className="border-t border-secondary pt-4">
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Mixed Solution
                  </label>
                  <div className="text-3xl font-bold text-primary">2-4 Hours</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Use within 2-4 hours of mixing at 20°C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Application Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Surface Preparation</h3>
                  <p className="text-muted-foreground mb-3">
                    Clean the surface thoroughly to remove dust, dirt, loose particles, and grease
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Use wire brush for rough surfaces</li>
                    <li>✓ Wash with clean water and allow to dry</li>
                    <li>✓ For porous surfaces, pre-wet and drain excess water</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Mixing</h3>
                  <p className="text-muted-foreground mb-3">
                    Mix Fixer Bond with clean water in the correct ratio
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Use 1 part bonding agent to 0.35-0.40 parts water</li>
                    <li>✓ Mix until smooth and homogeneous</li>
                    <li>✓ Avoid lumps or inconsistencies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Application</h3>
                  <p className="text-muted-foreground mb-3">
                    Apply the mixed bonding agent to the surface
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Use notched trowel for even distribution</li>
                    <li>✓ Apply in thin, uniform layer</li>
                    <li>✓ Work in sections to prevent drying</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Installation</h3>
                  <p className="text-muted-foreground mb-3">
                    Place tiles or materials on the bonded surface
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Press firmly into place</li>
                    <li>✓ Use slight twisting motion for better adhesion</li>
                    <li>✓ Check alignment as you proceed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Grouting</h3>
                  <p className="text-muted-foreground mb-3">
                    After the bonding agent sets, apply grout
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Wait minimum 24 hours before grouting</li>
                    <li>✓ Use appropriate grout for your application</li>
                    <li>✓ Follow grout manufacturer instructions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold flex-shrink-0">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Curing</h3>
                  <p className="text-muted-foreground mb-3">
                    Allow proper curing time for maximum strength
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Minimum 24-48 hours before full load</li>
                    <li>✓ Avoid water exposure during curing</li>
                    <li>✓ Maintain proper temperature conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Precautions */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Safety Precautions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-xl font-semibold text-foreground">Personal Protection</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>• Wear safety glasses or goggles during application</li>
                <li>• Use chemical-resistant gloves when handling</li>
                <li>• Wear protective clothing to avoid skin contact</li>
                <li>• Use respiratory protection in poorly ventilated areas</li>
                <li>• Keep away from children and pets</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-xl font-semibold text-foreground">Emergency Response</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>• In case of skin contact, wash thoroughly with water</li>
                <li>• If ingested, seek medical attention immediately</li>
                <li>• For eye contact, rinse with water for 15 minutes</li>
                <li>• For inhalation, move to fresh air</li>
                <li>• Keep first aid kit readily available</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-xl font-semibold text-foreground">Environmental</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>• Do not pour down drains or water sources</li>
                <li>• Dispose according to local regulations</li>
                <li>• Keep away from water bodies</li>
                <li>• Use secondary containment for storage</li>
                <li>• Minimize dust generation during handling</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-xl font-semibold text-foreground">Work Site Safety</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>• Ensure proper ventilation in work areas</li>
                <li>• Keep work site organized and clean</li>
                <li>• Use appropriate tools and equipment</li>
                <li>• Follow all local building codes</li>
                <li>• Train all workers on safety procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need More Information?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Check out our real-world applications or contact us for support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/applications"
              className="inline-flex items-center justify-center bg-secondary text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors"
            >
              View Applications
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Support <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
