export const BlurColor = () => {
  return (
    <div className="w-full h-full  overflow-hidden -z-10">
        <div className="w-96 h-96 left-[-372px]  lg:left-[-272px] top-[350px] absolute blur-3xl">
            <div className="w-96 h-96 left-[64.83px]  top-[210.02px] absolute origin-top-left rotate-[2.51deg]">
                <div className="w-48 h-48 left-[195.31px] top-[234.92px] absolute bg-fuchsia-500 rounded-full" />
                <div className="w-60 h-60 left-[14.43px] top-0 absolute bg-fuchsia-500 rounded-full" />
                <div className="w-64 h-72 left-0 top-[112.90px] absolute bg-fuchsia-500 rounded-full" />
            </div>
            <div className="w-80 h-96 left-[0.97px] top-[16px] absolute">
                <div className="w-40 h-40 left-[171.24px] top-[206px] absolute bg-fuchsia-500 rounded-full" />
                <div className="w-52 h-52 left-[12.65px] top-0 absolute bg-fuchsia-500 rounded-full" />
                <div className="w-60 h-60 left-0 top-[99px] absolute bg-fuchsia-500 rounded-full" />
            </div>
        </div>

        <div className="w-96 h-96  right-[-415px]  lg:right-[-315px] top-[300px] absolute blur-3xl  -rotate-180">
            <div className="w-96 h-96 left-[64.83px] top-[210.02px] absolute origin-top-left rotate-[2.51deg]">
                <div className="w-48 h-48 left-[195.31px] top-[234.93px] absolute bg-cyan-400 rounded-full" />
                <div className="w-60 h-60 left-[14.43px] top-0 absolute bg-cyan-400 rounded-full" />
                <div className="w-64 h-72 left-0 top-[112.90px] absolute bg-cyan-400 rounded-full" />
            </div>
            <div className="w-80 h-96 left-[0.97px] top-[16px] absolute">
                <div className="w-40 h-40 left-[171.24px] top-[206px] absolute bg-cyan-400 rounded-full" />
                <div className="w-52 h-52 left-[12.65px] top-0 absolute bg-cyan-400 rounded-full" />
                <div className="w-60 h-60 left-0 top-[99px] absolute bg-cyan-400 rounded-full" />
            </div>
        </div>

    </div>
  )
}
