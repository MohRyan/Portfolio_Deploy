import { IconGithub, IconLinkedin } from '@/components/SVG'

const Web = () => {
    const styleLink = "flex items-center gap-2 font-bold hover:text-blue-500"
    return (
        <div className="flex justify-start mt-5 ">
            <ul className="flex flex-col gap-3 font-bold w-52">
                <li>Email:</li>
                <li>Linkdn:</li>
                <li>Github:</li>
                <li>Telegram:</li>
            </ul>
            <ul className="flex flex-col w-1/2 gap-3">
                <li>ryanmoh735@gmail.com</li>
                <a className={styleLink} href="https://www.linkedin.com/in/moh-ryan/"><IconLinkedin /><li>Moh Ryan</li></a>
                <a className={styleLink} href="https://github.com/MohRyan"><IconGithub /><li>Moh Ryan</li></a>
                <li>082228872769</li>
            </ul>
        </div>
    )
}

export default Web