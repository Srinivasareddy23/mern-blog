import React from "react";


function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen text-white">
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover, Learn, and Share
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Dive into a world of insightful blogs crafted to inspire and educate.
        </p>
        <a
          href="#latest-posts"
          className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-200 transition duration-300"
        >
          Explore Now
        </a>
      </section>

      <section className=" px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Featured Posts
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <img
              src="/Images/reacthooks.jpeg"
              alt="React Hooks"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Understanding React Hooks</h3>
              <p className="text-gray-700 mb-4">
                Learn the fundamentals of React Hooks and how they simplify state management in React applications.
              </p>
              <a
                href="#"
                className="text-purple-600 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>

          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <img
              src="/Images/oauth.jpeg"
              alt="OAuth Security"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Demystifying OAuth</h3>
              <p className="text-gray-700 mb-4">
                An in-depth look at OAuth, how it works, and why it's crucial for secure authentication.
              </p>
              <a
                href="#"
                className="text-purple-600 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="latest-posts" className="py-16 px-4 bg-gray-100 text-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Latest Posts
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <div
              key={post}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="/Images/images.jpeg"
                alt="Post Thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Post Title {post}</h3>
                <p className="text-gray-600 mb-4">
                  A short description of the blog post content.
                </p>
                <a
                  href="#"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
