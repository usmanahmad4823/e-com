import React from "react";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-black text-white py-8 rounded-lg m-6 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-xs">
          Welcome to <span className="font-semibold">ELECTRONICZ</span>, your trusted 
          destination for the latest gadgets, electronics, and accessories.
        </p>
      </section>

      {/* About Company */}
      <section className="max-w-[1200px] mx-auto py-8 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://img.freepik.com/free-vector/electronics-store-concept-illustration_114360-7949.jpg"
            alt="About Electronicz"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-7 mb-4">
            At <strong>ELECTRONICZ</strong>, we are passionate about technology. Our goal 
            is to bring you the newest and most reliable electronic products at 
            competitive prices. Whether you're looking for smartphones, 
            laptops, wearables, or accessories, we’ve got you covered.
          </p>
          <p className="text-gray-600 leading-7">
            Since our beginning, we’ve been committed to building trust through 
            high-quality products, secure shopping experiences, and excellent 
            customer service.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-8 px-6">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Our Mission</h3>
            <p className="text-gray-600 leading-7">
              Our mission is to make technology accessible to everyone. We 
              believe in simplifying shopping by offering authentic products, 
              easy navigation, and fast delivery services. Customer satisfaction 
              is at the heart of everything we do.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">Our Vision</h3>
            <p className="text-gray-600 leading-7">
              Our vision is to become Pakistan’s most trusted and leading 
              electronics marketplace where customers can find everything from 
              daily gadgets to premium electronics in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-[1200px] mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-blue-500">Quality Products</h4>
            <p className="text-gray-600 text-sm leading-6">
              100% authentic and latest gadgets sourced from trusted suppliers.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-indigo-500">Secure Shopping</h4>
            <p className="text-gray-600 text-sm leading-6">
              Shop with confidence through our secure payment and privacy-first system.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-green-500">Fast Delivery</h4>
            <p className="text-gray-600 text-sm leading-6">
              Get your orders delivered quickly with reliable shipping services.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className=" py-16 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">PAKISTAN 1ST BRAND</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Behind ELECTRONICZ is a dedicated team of tech enthusiasts, 
            developers, and customer service professionals, all working 
            together to make your experience smooth and enjoyable.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
