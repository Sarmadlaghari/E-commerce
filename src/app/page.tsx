import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-white border-b-2 border-gray-300 p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="space-x-2 mb-4 md:mb-0">
            <span className="text-red-500 text-3xl font-bold">
              <Link href="/">Little</Link>
            </span>
            <span className="text-3xl font-bold text-black hover:text-red-500">
              <Link href="/">Fashion</Link>
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center space-x-4 md:space-x-8">
            <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8">
              <li>
                <Link className="text-lg text-black hover:text-red-500" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-lg text-black hover:text-red-500" href="/story">
                  Story
                </Link>
              </li>
              <li>
                <Link className="text-lg text-black hover:text-red-500" href="/products">
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Space between header and cover image */}
      <div className="mt-8"></div>

      {/* Hero Section */}
      <section className="relative w-full h-[577.2px] border-4 border-gray-300 mx-auto rounded-lg overflow-hidden">
        <div>
          <img className="absolute top-0 left-0 inset-0 w-full h-full object-cover" src="/image.jpeg" alt="hero" />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
            <h1 className="text-4xl font-bold mb-4">Talk to Us</h1>
            <p className="text-lg mb-6">
                Little Fashion brings you the latest trends in fashion. From casual to formal, we offer styles for every occasion. 
            </p>
            <button className="bg-amber-600 text-white py-2 px-6 rounded-lg hover:bg-amber-700 transition duration-300">
              Work With Us
            </button>
          </div>
        </div>
      </section>

      {/* Space between sections */}
      <div className="mt-8"></div>

      {/* Content Section Below Hero */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side (Text) */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Get started with <span className="text-red-500">Little</span> Fashion
            </h2>
            <p className="text-xl mb-4 text-gray-600">
              <span className="font-bold text-red-500">Good Design</span> Ideas for <span className="font-bold text-red-500"> your</span> fashion
            </p>
            <p className="text-gray-500 mb-4">
              Little Fashion templates come with sign-in/sign-up pages, product listing, product detail, about, FAQs, and a contact page. You can feel free to add more components as needed.
            </p>
            <p className="text-gray-500 text-3xl">
              Since this HTML template is based on Bootstrap CSS library, you can feel free to add more components as you need.
            </p>
          </div>

          {/* Right side (Image) */}
          <div>
            <img
              src="/image1.jpeg" // Replace with your actual image path
              alt="Fashion Image"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Space for the next section */}
      <div className="mt-8"></div>

      {/* Featured Products Section */}
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-4xl font-bold text-center mb-8">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <span className="absolute top-2 left-2 bg-white text-black font-bold py-1 px-2 text-sm">
              New Arrival
            </span>
            <span className="absolute top-2 right-2 text-red-500 text-lg">❤️</span>
            <img
              src="/tree.jpeg" // Replace with your actual image path
              alt="Tree Pot"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-black">Tree Pot</h3>
              <p className="text-gray-500 mb-2">Original package design from house</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">$25</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <span className="absolute top-2 left-2 bg-white text-black font-bold py-1 px-2 text-sm">
              New Arrival
            </span>
            <span className="absolute top-2 right-2 text-red-500 text-lg">❤️</span>
            <img
              src="/fashion.jpeg" // Replace with your actual image path
              alt="Fashion Set"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-black">Fashion Set</h3>
              <p className="text-gray-500 mb-2">Costume Package</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">$35</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <span className="absolute top-2 left-2 bg-white text-black font-bold py-1 px-2 text-sm">
              New Arrival
            </span>
            <span className="absolute top-2 right-2 text-red-500 text-lg">❤️</span>
            <img
              src="/juice.jpeg" // Replace with your actual image path
              alt="Juice Drinks"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-black">Juice Drinks</h3>
              <p className="text-gray-500 mb-2">Nature made another world</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">$45</span>
              </div>
            </div>
          </div>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-8">
          <Link
            href="/products"
            className="bg-amber-600 text-white py-2 px-6 rounded-lg hover:bg-amber-700 transition duration-300 mt-4"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Space between View All Products and Footer */}
      <div className="mt-16"></div> {/* Add gap here */}

      {/* Footer Section */}
<footer className="bg-black text-white py-16 rounded-lg border border-gray-700">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="text-lg font-bold flex-1 md:flex-initial text-left">
      <span className="hover:text-red-500 text-gray-300 transition-colors duration-300 text-2xl">Little</span>
      <span className="text-white text-2xl"> Fashion</span>
    </div>
    <div className="text-sm text-center flex-1 md:flex-initial">
      <p>
        Copyright © 2045 <span className="font-bold">Little Fashion</span>
      </p>
      <p>Developed by Sarmad Ali</p>
    </div>
    <div className="text-center flex-1 md:flex-initial">
      <p className="font-bold">Sitemap</p>
      <ul className="space-y-1 text-gray-300">
        <li>
          <Link className="hover:text-red-500 transition-colors duration-300" href="/">Home</Link>
        </li>
        <li>
          <Link className="hover:text-red-500 transition-colors duration-300" href="/products">Products</Link>
        </li>
        <li>
          <Link className="hover:text-red-500 transition-colors duration-300" href="/story">Story</Link>
        </li>
        <li>
          <Link className="hover:text-red-500 transition-colors duration-300" href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    <div className="text-center flex-1 md:flex-initial mt-4 md:mt-0">
      <p className="font-bold">Contact Us</p>
      <ul className="space-y-1 text-gray-300">
        <li>
          <Link className="hover:text-red-500 transition-colors duration-300" href="/contact/email">Email Us</Link>
        </li>
        <li>
          <Link className="hover:text-red-500 transition-colors duration-300" href="/contact/faq">FAQ</Link>
        </li>
        <li>
          <Link className="hover:text-red-500 transition-colors duration-300" href="/contact/support">Support</Link>
        </li>
      </ul>
    </div>
  </div>
</footer>


    </>
  );
}
