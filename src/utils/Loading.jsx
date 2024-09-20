export const Loading = () => {
  return (
    <div className="text-center w-full h-full flex justify-center flex-col items-center">
      <div className=" w-32 h-32 border-4 border-dashed rounded-full animate-spin border-purple-500 mx-auto"></div>
      <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      <p className="text-zinc-600 dark:text-zinc-400">
       Fetching Data
      </p>
    </div>
  );
}
