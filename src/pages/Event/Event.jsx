import "../../components/css/Scroll.css"

export const Event = () => {
  return (
    <div className="container mx-auto my-10 p-4 max-h-full overflow-y-scroll">
      <div className="relative border-l border-gray-200">
        {/* Card 1 */}
        <div className="mb-8 flex items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-purple-500 shadow-xl w-8 h-8 rounded-full"></div>
          <div className="order-1 bg-purple-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
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
          <div className="z-20 flex items-center order-1 bg-purple-500 shadow-xl w-8 h-8 rounded-full"></div>
          <div className="order-1 bg-purple-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">2007</h3>
            <h4 className="text-lg font-semibold text-white">Title 2</h4>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
