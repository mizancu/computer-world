import RootLayout from '@/components/layout/RootLayout';
import AllProducts from '@/components/ui/AllProducts';
import Head from 'next/head';
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Slider from "@/components/shared/Slider";

const HomePage = ({ allProducts }) => {
  console.log(allProducts);

  return (

    <div>
      <Head>
        <title>Computer World</title>
        <meta
          name="description"
          content="This is computer world products website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Slider />
      <AllProducts allProducts={allProducts} />
      <Footer />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products/");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allProducts: data
    }
  }
}