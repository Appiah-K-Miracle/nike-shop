import {
  
  Hero,
  CustomerReviews,
  PopularProducts,
  Subscribe,
  SpecialOffers,
  Services,
  SuperQuality,
  Footer,
} from "./components";
import Nav from "./utils/Nav";

const App = () => (
  <main className="relative bg-primary">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding ">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-[#0f131a]">
      <Footer />
    </section>
  </main>
);

export default App;
