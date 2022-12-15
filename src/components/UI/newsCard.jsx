export default function NewsItem(params) {
  console.log(params.imageParam);
  return (
    <div
      className={`flex flex-col relative items-start justify-start aspect-[9/14] min-w-[60vw] py-[10px] px-[15px] rounded-[15px] first:ml-[15px]`}
    >
      <img
        src={`https://source.unsplash.com/random/${params.imageParam}x${params.imageParam}`}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-bg" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-bg/50" />
      <h4 className="font-extrabold text-[18px] mt-auto relative z-0">
        {params.item.title}
      </h4>
      <p className="text-[14px] font-medium relative z-0 mt-[10px]">
        {params.item.body.slice(0, 45) + "..."}
      </p>
      <span className="text-[12px] font-medium mt-[10px] relative z-0 flex flex-row items-center justify-center gap-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-auto h-[12px]"
        >
          <path
            fill-rule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clip-rule="evenodd"
          />
        </svg>
        30.07.2022
      </span>
    </div>
  );
}
