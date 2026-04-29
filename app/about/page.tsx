import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
<<<<<<< HEAD
=======
import { siteImages } from "@/data/site-images";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
<<<<<<< HEAD
                <div className="eyebrow">About Us</div>
                <h1 className="section-title">A premium flavor partner with practical manufacturing depth.</h1>
                <p className="section-subtext" style={{ marginTop: 14 }}>
                  The Flavor Factory is a family-owned custom manufacturer focused on high quality liquid and powder flavor solutions. We support teams that need speed, consistency, and service they can count on.
                </p>
                <p className="section-subtext" style={{ marginTop: 12 }}>
                  Our approach is straightforward: understand your product target, recommend profiles that fit your process, and move quickly from first submission to production-ready flavor.
                </p>
                <div className="showcase-pills" style={{ marginTop: 16 }}>
                  {[
                    "40+ years of combined experience",
                    "Customer-first development support",
                    "Low minimum order quantities",
                    "Liquid and powder capabilities",
                  ].map((item) => <span key={item} className="soft-pill">{item}</span>)}
                </div>
              </div>
              <div className="sample-right">
                <img src="/images/flavor-factory/application-bakery.jpg" alt="Flavor lab team and ingredients" />
=======
                <div className="eyebrow">About</div>
                <h1 className="section-title">Flavor development with a practical point of view.</h1>
                <p className="section-subtext" style={{ marginTop: 14 }}>
                  The Flavor Factory develops liquid and powder flavor solutions for a wide range of products and applications. Clients come to us for custom development, flavor matching, responsive service, and a process that moves from idea to execution without unnecessary friction.
                </p>
                <p className="section-subtext" style={{ marginTop: 12 }}>
                  We’ve built the business around doing the work well, communicating clearly, and helping clients find the right flavor solution for the product they are actually making.
                </p>

                <div className="showcase-pills" style={{ marginTop: 16 }}>
                  {[
                    "40+ years of combined industry experience",
                    "Thousands of available flavor profiles",
                    "Customization for target taste and process",
                    "Fast, responsive development support",
                  ].map((item) => (
                    <span key={item} className="soft-pill">
                      {item}
                    </span>
                  ))}
                </div>
                <Button href="/request-samples" className="mt-24">
                  Request Samples
                </Button>
              </div>
              <div className="sample-right">
                <AppImage src={siteImages.aboutHero} alt="Premium ingredient and formulation setup" style={{ objectPosition: "center 35%" }} />
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
                <div className="sample-overlay" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
