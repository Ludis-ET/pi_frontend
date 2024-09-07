import "../../components/css/Scroll.css"

export const Event = () => {
  return (
    <div className="container mx-auto my-10 p-4 max-h-full overflow-y-scroll">
      <div className="relative border-l border-gray-200">
        {/* Card 1 */}
        <div className="mb-8 flex items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full"></div>
          <div className="order-1 bg-blue-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">2002</h3>
            <h4 className="text-lg font-semibold text-white">Title 1</h4>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              itaque hic.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="mb-8 flex items-center justify-between flex-row-reverse">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-yellow-500 shadow-xl w-8 h-8 rounded-full"></div>
          <div className="order-1 bg-yellow-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">2007</h3>
            <h4 className="text-lg font-semibold text-white">Title 2</h4>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="mb-8 flex items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-pink-500 shadow-xl w-8 h-8 rounded-full"></div>
          <div className="order-1 bg-pink-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">2012</h3>
            <h4 className="text-lg font-semibold text-white">Title 3</h4>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              Fuga minima soluta placeat iure totam repellendus ea delectus.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="mb-8 flex items-center justify-between flex-row-reverse">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full"></div>
          <div className="order-1 bg-blue-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">2017</h3>
            <h4 className="text-lg font-semibold text-white">Title 4</h4>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              Impedit, cumque.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="mb-8 flex items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-teal-500 shadow-xl w-8 h-8 rounded-full"></div>
          <div className="order-1 bg-teal-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">2022</h3>
            <h4 className="text-lg font-semibold text-white">Title 5</h4>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              Lorem ipsum dolor sit amet, odit non.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
