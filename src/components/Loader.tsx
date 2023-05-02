export default function Loader() {
  return (
    <div className="backdrop-blur-[10px] w-[100%] h-[100vh] sticky z-[99] top-0 left-0 bg-[rgb(0, 0, 0, 0.3)] flex justify-center items-center">
      <div className="border-t-[10px] border-t-[#505050]  animate-spin w-[80px] h-[80px]   rounded-full border-solid border-[10px] border-[#f3f3f3]"></div>
    </div>
  );
}
