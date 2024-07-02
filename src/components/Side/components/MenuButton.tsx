import { ISection } from "./SectionButton";

export const MenuButtonActive = ({ item }: { item: ISection }) => {
  return (
    <>
      <div className="flex flex-col items-center group ">
        <div className="flex flex-col items-center opacity-0 group-hover:opacity-100">
          <div className="bg-black text-white text-sm px-1.5 py-1 rounded-md">
            {item.title}
          </div>
          <div className="w-3 h-3 bg-black down_menu"></div>
        </div>
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full iconActive"
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
      <div className="flex flex-col items-center group ">
        <div className="flex flex-col items-center opacity-0 group-hover:opacity-100">
          <div className="bg-black text-white text-sm px-1.5 py-1 rounded-md">
            {item.title}
          </div>
          <div className="w-2 h-2 bg-black down_menu"></div>
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full icon hover:bg-first">
          {item.icon}
        </div>
      </div>
    </>
  );
};
