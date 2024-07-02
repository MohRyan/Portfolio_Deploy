import { IDataMyProject } from ".";
import { AndroidIcon } from "@/components/SVG";

const ListMyProject = ({ item }: { item: IDataMyProject }) => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center pb-5 overflow-hidden bg-white rounded-md shadow-lg dark:bg-black dark:text-white w-72 h-72 dark:shadow-white ">
        <div className={`absolute top-0 z-10 right-0 text-white flex items-center justify-center w-40 h-10 ${item.status === "Dummy Project" ? "bg-blue-500" : item.status === "Real Project" ? "bg-red-500" : "bg-green-500"} rounded-bl-3xl gap-2 items-center`}>
          <b>{item.status}</b>
          <span>{item.responsive === "Responsive" ? <AndroidIcon /> : ""}</span>
        </div>
        <img src={item.img} className="object-contain w-full h-full shadow-sm cursor-pointer hover:animate-pulse hover:scale-110 rounded-t-md" alt="" />
        <b className="py-3 text-2xl">{item.title}</b>
        <div className="flex">
          <p className="text-sm">Inspired By <a className="font-bold italic text-[16px]" href={item.inspired.split(" ")[1]}>{item.inspired.split(" ")[0]}</a></p>
        </div>
      </div>
    </>
  );
};

export default ListMyProject;
