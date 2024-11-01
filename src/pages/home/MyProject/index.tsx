// import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ListMyProject from "./ListMyServices";
import { useEffect, useState } from "react";

enum Kategori {
  dummy = "Dummy Project",
  real = "Real Project",
  comingSoon = "Coming Soon"
}

enum Responsive {
  responsive = "Responsive",
  noResponsive = "No Responsive",
}

export interface IDataMyProject {
  id: number,
  title: string,
  img: string,
  status: Kategori,
  responsive: Responsive,
  inspired: string
}

const dataMyProject: IDataMyProject[] = [
  {
    id: 1,
    title: "Cirlce",
    img: "https://res.cloudinary.com/divsnxhmw/image/upload/v1729726947/Portfolio/lgpljueiqtnwsmfeyshj.png",
    status: Kategori.real,
    responsive: Responsive.responsive,
    inspired: "DumbwaysId https://dumbways.id/",
  },
  {
    id: 2,
    title: "DumbFlix",
    img: "https://res.cloudinary.com/divsnxhmw/image/upload/v1729726544/Portfolio/xrgu6d54o5995lrd7hvv.png",
    status: Kategori.real,
    responsive: Responsive.responsive,
    inspired: "DumbwaysId https://dumbways.id/",
  },
  {
    id: 3,
    title: "Lakoe",
    img: "https://res.cloudinary.com/divsnxhmw/image/upload/v1729726555/Portfolio/o1nqs2cfgnfs5zyykbog.png",
    status: Kategori.real,
    responsive: Responsive.responsive,
    inspired: "DumbwaysId https://dumbways.id/",
  },
  {
    id: 4,
    title: "Todos",
    img: "https://res.cloudinary.com/divsnxhmw/image/upload/v1729726745/Portfolio/dugocdusqttaiibnz2ga.png",
    status: Kategori.real,
    responsive: Responsive.noResponsive,
    inspired: "DumbwaysId https://dumbways.id/",
  },
  {
    id: 5,
    title: "?",
    img: "https://res.cloudinary.com/divsnxhmw/image/upload/v1719990440/Portfolio/ckvw6go2iauwdw5upzcr.jpg",
    status: Kategori.comingSoon,
    responsive: Responsive.noResponsive,
    inspired: "DumbwaysId https://dumbways.id/",
  },
]


const MyProject = () => {
  const [status, setStatus] = useState<string>("")
  const [responsive, setResponsive] = useState<string>("")
  const [dataFilter, setDataFilter] = useState<IDataMyProject[] | undefined>([])

  const filterData = () => {
    const data = dataMyProject.filter((item) => {
      if (status === "All") {
        // const isStatusMatch = status !== "" ? item.status === status : false;
        const isResponsiveMatch = responsive !== "" ? item.responsive === responsive : false;
        return isResponsiveMatch
      }
      const isStatusMatch = status !== "" ? item.status === status : true;
      const isResponsiveMatch = responsive !== "" ? item.responsive === responsive : true;
      return isResponsiveMatch && isStatusMatch;
    })
    setDataFilter(data)
  }

  useEffect(() => {
    filterData()
  }, [status, responsive])
  return (
    <>
      <div className="relative flex flex-col w-full p-4 px-10 py-10 mt-5 bg-white dark:bg-dark dark:text-light rounded-xl">
        {/* <div className="absolute flex items-center justify-center rounded-full cursor-pointer w-14 h-14 bg-first right-5 top-5">
          <FaPlus size={25} color="white" />
        </div> */}
        <b className="my-5 text-4xl font-black tracking-wide text-center">
          My Projects
        </b>
        <p className="px-10 my-5">
          Dengan kombinasi keahlian teknis dan pengalaman dalam desain grafis, saya percaya bahwa saya dapat memberikan kontribusi yang berharga sebagai full-stack developer. Saya selalu antusias untuk belajar dan mengembangkan keterampilan baru, serta siap untuk menghadapi tantangan dalam dunia profesional.
        </p>
        <div className="flex justify-center gap-10 py-6">
          <Select onValueChange={(e) => {
            setStatus(e)
          }}>
            <SelectTrigger className="w-[180px] cursor-pointer">
              <SelectValue placeholder="Pilih Status" />
            </SelectTrigger>
            <SelectContent className="cursor-pointer">
              <SelectItem value="Real Project" className="cursor-pointer">Real Project</SelectItem>
              <SelectItem value="Dummy Project" className="cursor-pointer">Dummy Project</SelectItem>
              <SelectItem value="Coming Soon" className="cursor-pointer">Coming Soon</SelectItem>
              <SelectItem value="All" className="cursor-pointer">All</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(e) => {
            e === "reset" ? setResponsive("") : setResponsive(e)
          }}>
            <SelectTrigger className="w-[180px] cursor-pointer">
              <SelectValue placeholder="Pilih Responsive" />
            </SelectTrigger>
            <SelectContent className="cursor-pointer">
              <SelectItem value="Responsive" className="cursor-pointer">Reponsive</SelectItem>
              <SelectItem value="No Responsive" className="cursor-pointer">No Responsive</SelectItem>
              <SelectItem value="reset" className="cursor-pointer">All</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {(status === "" || status === "All") && responsive === "" ?
          <div className="flex flex-wrap justify-center gap-6 my-4">
            {dataMyProject.map((item: IDataMyProject, index: number) => (
              <ListMyProject key={index} item={item} />
            ))}
          </div>
          : dataFilter?.length === 0 ?
            <div className="flex flex-wrap justify-center gap-6 my-4">
              <b className="text-3xl ">
                Data <span className="text-blue-500">{status}</span> and <span className="text-green-500">{responsive}</span> is Not Found!!!!!!!
              </b>
            </div>
            :
            <div className="flex flex-wrap justify-center gap-6 my-4">
              {dataFilter?.map((item: IDataMyProject, index: number) => (
                <ListMyProject key={index} item={item} />
              ))}
            </div>
        }
      </div >
    </>
  );
};

export default MyProject;
