function Header({ topic, topicName }) {
  return (
    <>
      {topic && (
        <div className=" px-12 mx-auto max-w-7xl mt-[100px]">
          <div className="px-0.5 md:px-7 pt-6 mx-auto flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
              {topicName}
            </h3>
          </div>
        </div>
      )}

      {!topic && (
        <div class="p-6">
          <div class="mx-auto">
            <div
              class="relative z-20 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
              style={{
                backgroundImage:
                  "linear-gradient(to left bottom, #f87171, #f55979, #ee4085, #e12896, #cb18a9, #bd12b5, #aa16c1, #921fce, #881ed5, #7d1fdc, #6e21e3, #5c24eb)",
              }}
            >
              <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0 mt-14">
                <div class="lg:self-center">
                  <h2 class="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                    <span class="block">
                      This is a title for your call to action card
                    </span>
                  </h2>
                  <p class="mt-4 text-base leading-6 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p class="mt-4 text-base leading-6 text-dark-blue-800"></p>
                  <a
                    href="#"
                    target="_blank"
                    style={{ backgroundColor: "#000" }}
                    class="mt-8 border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium text-white transition duration-150 ease-in-out"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    class="ml-4 mt-8 text-white font-bold text-sm underline"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div class="relative pb-3/5 -mt-6 md:pb-1/2">
                <img
                  class="absolute inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-10 lg:translate-y-20"
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxsYXB0b3B8ZW58MHwwfHx8MTY5NzQ0ODQ4M3ww&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Background"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;