const Circles = () => {
  return (
    <div className="relative">
      <div className="absolute flex justify-center items-center w-[90px] h-[90px] top-96 right-px">
        <div className="absolute w-[85px] h-[85px] bg-custom-c-pink rounded-full blur-[30px]"></div>
        <div className="absolute w-[90px] h-[90px] bg-custom-c-pink rounded-full blur-[5px]"></div>
      </div>
      <div className="absolute flex justify-center items-center w-[90px] h-[90px] top-24 right-56">
        <div className="absolute w-[105px] h-[105px] bg-custom-c-orange rounded-full blur-[30px]"></div>
        <div className="absolute w-[110px] h-[110px] bg-custom-c-orange rounded-full blur-[5px]"></div>
      </div>
      <div className="absolute flex justify-center items-center w-[90px] h-[90px] top-40 right-1/3">
        <div className="absolute w-[65px] h-[65px] bg-custom-c-blue rounded-full blur-[30px]"></div>
        <div className="absolute w-[70px] h-[70px] bg-custom-c-blue rounded-full blur-[5px]"></div>
      </div>
      <div className="absolute flex justify-center items-center w-[90px] h-[90px] top-72f right-56">
        <div className="absolute w-[65px] h-[65px] bg-custom-c-yellow rounded-full blur-[30px]"></div>
        <div className="absolute w-[70px] h-[70px] bg-custom-c-yellow rounded-full blur-[5px]"></div>
      </div>
    </div>
  );
};

export default Circles;
