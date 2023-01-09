function LoadingForDataFetching() {
  return (
    <div className="flex w-full 2xl:w-96 h-[120px] my-2 p-2 border-solid border-2 rounded-2xl border-gray-100 items-center">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-2xl bg-slate-700 w-28 h-20" />
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 w-48 bg-slate-700 rounded" />
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2" />
            <div className="h-2 bg-slate-700 rounded col-span-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingForDataFetching;
