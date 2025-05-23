import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(more/3.png)",
      }}
    >
      <div className="hero-overlay flex justify-end md:px-20">
        <div className="hero-content text-neutral-content">
          <div className="max-w-5xl text-start">
            <h1 className="mb-5 text-5xl font-bold rancho">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5 rancho">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn text-2xl bg-base-300 hover:bg-base-200 text-secondary border-none outline-none rounded-xs rancho">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
