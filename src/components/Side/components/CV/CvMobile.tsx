import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu'
import "./CvMobile.css"
import { RiProfileFill } from 'react-icons/ri'
import { AiFillCode } from "react-icons/ai"
import { IoPersonCircleSharp } from "react-icons/io5"
import { MdCloudDownload } from "react-icons/md"
import { FotoProfile, iconsCV } from '../../Cv'
import { Link } from 'react-router-dom'

// interface IProps {
//     setShowCv: React.Dispatch<React.SetStateAction<boolean>>,
//     showCv: boolean
// }

const CvMobile = () => {
    return (
        <>
            <NavigationMenu className='flex flex-col justify-between h-full py-10'>
                <NavigationMenuList className='flex flex-col gap-8'>
                    <NavigationMenuItem className='relative group/profile'>
                        <NavigationMenuTrigger className='icon group-hover/profile:to-second group-hover/profile:from-white'><IoPersonCircleSharp size={25} /></NavigationMenuTrigger>
                        <NavigationMenuContent className='absolute top-0 p-5 bg-white rounded-lg shadow-xl left-12'>
                            <NavigationMenuLink className="flex flex-col items-center justify-center gap-2 pb-2 w-72">
                                <div>
                                    <img
                                        className="object-cover w-20 h-20 bg-gray-300 rounded-full"
                                        src={FotoProfile}
                                        alt=""
                                    />
                                </div>
                                <b className="w-32 text-center">Moh Ryan Khalifatul Huda</b>
                                <p>FullStack Developer</p>
                                <ul className="flex gap-3 justify-evenly">
                                    {iconsCV.map((item, index) => (
                                        <Link to={item.link} key={index}>
                                            <li
                                                className="p-2 text-sm rounded-full text-textBase bg-first hover:bg-second"
                                            >
                                                {item.icon}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='relative group/bio'>
                        <NavigationMenuTrigger className='icon group-hover/bio:to-second group-hover/bio:from-white'><RiProfileFill size={25} /></NavigationMenuTrigger>
                        <NavigationMenuContent className='absolute top-0 w-20 p-2 bg-white rounded-lg shadow-xl left-10'>
                            <NavigationMenuLink>Link contoh hanya contoh</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='relative group/skills'>
                        <NavigationMenuTrigger className='icon group-hover/skills:to-second group-hover/skills:from-white'><AiFillCode size={25} /></NavigationMenuTrigger>
                        <NavigationMenuContent className='absolute top-0 w-20 p-2 bg-white rounded-lg shadow-xl left-10'>
                            <NavigationMenuLink>Link contoh hanya contoh</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList className=''>
                    <NavigationMenuItem className='relative group/downloadCv'>
                        <NavigationMenuTrigger className='icon group-hover/downloadCv:to-second group-hover/downloadCv:from-white'><MdCloudDownload size={25} /></NavigationMenuTrigger>
                        <NavigationMenuContent className='absolute top-0 w-20 p-2 bg-white rounded-lg shadow-xl left-10'>
                            <NavigationMenuLink>Link contoh hanya contoh</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}

export default CvMobile