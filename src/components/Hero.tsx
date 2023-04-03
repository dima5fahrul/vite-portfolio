const Hero = () => {
  return (
    <section className="bg-white py-20 lg:py-48">
      <div className="relative grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mx-auto place-self-center lg:col-span-7">
          <h1 className="lg:max-w-2xl mb-4 text-4xl font-normal tracking-normal md:text-5xl xl:text-6xl">
            I'm Sam Moore, a designer based in Los Angeles, CA
          </h1>
          <p className="lg:max-w-2xl mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit donec morbi lectus nisi egestas proin amet rhoncus sceleris lorem feugiat amet hac ornar morbi lectus.
          </p>
        </div>
        <div className="lg:order-first lg:mt-0 lg:col-span-5 relative">
          <img src="/images/1.jpg" alt="hero" className="transition-all duration-700 opacity-0 animating-image" />
          <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
        </div>
        <div className="lg:absolute lg:-bottom-8 lg:right-4 lg:m-0 mt-5 w-24 h-24 rounded-full overflow-hidden">
          <button
            className="
              relative
              w-full
              h-full
              inline-flex
              items-center
              justify-center
              rounded-full
              border-2
              border-neutral-800
              after:absolute
              after:left-0
              after:top-0
              after:content-['']
              after:bg-neutral-900
              after:w-0
              after:h-full
              hover:after:w-full
              after:transition-all
              duration-700
              group
            "
          >
            <i className="absolute las la-angle-down text-4xl z-10 group-hover:text-white transition-all duration-500"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero