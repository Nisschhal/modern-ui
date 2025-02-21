import Socials from "./Socials"

const Profile = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-4 text-center px-10 py-5 rounded-lg shadow-box">
      {/* Navigation */}
      <div className="flex justify-between w-full">
        <div className="w-6 h-6 rounded-full flex justify-center items-center hover:shadow-inbox cursor-pointer">
          ←
        </div>
        <div className="w-6 h-6 rounded-full flex justify-center items-center hover:shadow-inbox cursor-pointer">
          ⠇
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full flex items-center justify-center shadow-box">
        <img
          src="/new.jpg"
          alt="nischal"
          className="w-[90%] h-[90%] rounded-full object-cover"
        />
      </div>

      {/* Heading and Sub heading */}
      <div>
        <h1 className="text-4xl text-gray-800">Nischal Puri</h1>
        <h2 className="text-md text-gray-700">Designer & Developer</h2>
      </div>
      {/* Socials */}
      <Socials />

      {/* Buttons */}
      <div className="flex gap-2">
        <p className="transition-all  duration-600 py-2 w-30 shadow-box hover:shadow-inbox cursor-pointer text-center rounded-md">
          Message
        </p>
        <p className=" transition-all duration-600 py-2 w-30 shadow-box hover:shadow-inbox cursor-pointer text-center rounded-md">
          Follow
        </p>
      </div>

      {/* Like and Subscribe */}
    </div>
  )
}

export default Profile
