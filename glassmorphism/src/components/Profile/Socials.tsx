import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="flex justify-center gap-2">
      <div className="w-8 h-8  rounded-full flex justify-center items-center shadow-box cursor-pointer hover:shadow-inbox">
        <FaFacebookF color="#3b5998" />
      </div>
      <div className="w-8 h-8  rounded-full flex justify-center items-center shadow-box cursor-pointer hover:shadow-inbox">
        <FaTwitter color="#1da1f2" />
      </div>
      <div className="w-8 h-8  rounded-full flex justify-center items-center shadow-box cursor-pointer hover:shadow-inbox ">
        <FaInstagram color="#E1306C" />
      </div>
      <div className="w-8 h-8  rounded-full flex justify-center items-center shadow-box cursor-pointer hover:shadow-inbox">
        <FaYoutube color="#FF0000" />
      </div>
    </div>
  )
}

export default Socials
