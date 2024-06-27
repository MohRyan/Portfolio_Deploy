import React from "react";
import { MenuButtonActive, MenuButtonNonActive } from "./MenuButton";
// import { NavLink, useParams } from "react-router-dom";

export interface ISection {
  title: string;
  section: string;
  icon: React.ReactNode;
}

const SectionButton = ({
  sectionId,
  item,
}: {
  sectionId: string;
  item: ISection;
}) => {
  return (
    <>
      {sectionId === item.section ? (
        <MenuButtonActive item={item} />
      ) : (
        <MenuButtonNonActive item={item} />
      )}
    </>
  );
};

export default SectionButton;
