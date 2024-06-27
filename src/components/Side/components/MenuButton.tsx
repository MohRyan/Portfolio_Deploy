import { ISection } from "./SectionButton";

export const MenuButtonActive = ({ item }: { item: ISection }) => {
  return (
    <>
      <div className="flex flex-col items-center group">
        <div className="flex-col items-center flex opacity-0 group-hover:opacity-100">
          <div className="bg-black text-white text-sm px-1.5 py-1 rounded-md">
            {item.title}
          </div>
          <div className="down_menu bg-black w-3 h-3"></div>
        </div>
        <div
          className="w-10 h-10 rounded-full bg-first
        flex justify-center items-center"
        >
          {item.icon}
        </div>
      </div>
    </>
  );
};

export const MenuButtonNonActive = ({ item }: { item: ISection }) => {
  return (
    <>
      <div className="flex flex-col items-center group">
        <div className="flex-col items-center flex opacity-0 group-hover:opacity-100">
          <div className="bg-black text-white text-sm px-1.5 py-1 rounded-md">
            {item.title}
          </div>
          <div className="down_menu bg-black w-2 h-2"></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200 hover:bg-first flex justify-center items-center">
          {item.icon}
        </div>
      </div>
    </>
  );
};
