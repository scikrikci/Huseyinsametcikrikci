import { TfiGithub } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillSpotify } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";


const SocialLinks = () => {
    return (
        <div className='flex items-center gap-x-[5px]'>
            <a href="https://github.com/scikrikci" target='_blank'><TfiGithub className="size-[30px] mx-2 hover:text-white" /></a>
            <a href="https://www.instagram.com/samet.ckrkc/" target='_blank'><RiInstagramFill className="size-[30px] mx-2 hover:text-pink-500" /></a>
            <a href="https://www.linkedin.com/in/huseyin-samet-cikrikci/"><RxLinkedinLogo className="size-[30px] mx-2 hover:text-blue-400" /></a>
            <a href="https://open.spotify.com/user/31tjxkbg3jkm5oouebgez6ijegiy"><AiFillSpotify className="size-[30px] mx-2 hover:text-blue-400" /></a>
            <a href="https://open.spotify.com/user/31tjxkbg3jkm5oouebgez6ijegiy"><IoDocumentText className="size-[30px] mx-2 hover:text-blue-400" /></a>
        </div>

    );
};

export default SocialLinks;