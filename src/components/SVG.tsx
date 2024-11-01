import { FaGithub, FaLinkedin, FaFacebook, FaDiscord } from "react-icons/fa"

export const AndroidIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m14.975 3.019l.96-1.732a.193.193 0 0 0-.338-.187l-.97 1.75a6.541 6.541 0 0 0-5.253 0l-.97-1.75a.193.193 0 0 0-.34.187l.96 1.732a5.546 5.546 0 0 0-3.092 4.876h12.137a5.546 5.546 0 0 0-3.094-4.876M9.2 5.674a.507.507 0 1 1 .507-.506a.507.507 0 0 1-.507.506m5.602 0a.507.507 0 1 1 .507-.506a.507.507 0 0 1-.507.506M5.93 17.171A1.467 1.467 0 0 0 7.4 18.64h.973v3a1.36 1.36 0 1 0 2.721 0v-3h1.814v3a1.36 1.36 0 1 0 2.72 0v-3h.974a1.467 1.467 0 0 0 1.468-1.468V8.375H5.93Zm-1.867-9.03a1.362 1.362 0 0 0-1.36 1.361v5.669a1.36 1.36 0 1 0 2.72 0V9.502a1.362 1.362 0 0 0-1.36-1.36m15.872 0a1.362 1.362 0 0 0-1.36 1.361v5.669a1.36 1.36 0 1 0 2.72 0v-5.67a1.362 1.362 0 0 0-1.36-1.36"></path></svg>
}

interface IIcon {
    size?: number
    className?: string
}

export const IconGithub = ({ size, className }: IIcon) => {
    return <FaGithub size={size} className={className} />
}
export const IconLinkedin = ({ size, className }: IIcon) => {
    return <FaLinkedin size={size} className={className} />
}
export const IconFacebook = ({ size, className }: IIcon) => {
    return <FaFacebook size={size} className={className} />
}
export const IconDiscord = ({ size, className }: IIcon) => {
    return <FaDiscord size={size} className={className} />
}
