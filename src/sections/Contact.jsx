// ContactSection.jsx
import React from 'react';
import { Link } from 'react-scroll';

const ContactSection = () => {

  const navLinks = [
    { name: "home", label: "Home" },
    {name:"" , label: "Resume", url: ""},
    { name: "projects", label: "Projects" },
  ];
  return (
    <footer className="bg-black text-white pt-32 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <h2 className="text-5xl font-extralight text-center mb-8">Stay In Touch</h2>
        <p className="text-center mb-10 font-light">
           While I'm also doing an internship, but let's create your website you envisioned!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-28 text-center mt-32">
          <div>
            <a href="mailto:[anandprojects1321@gmail.com]"  target = "_blank" className="hover:text-purple-500 transition duration-300">
              <div className="text-white-500 mb-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="100%" viewBox="0 0 70 70" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img"
              className='inline-block'>
                  <rect width="70" height="70" rx="35" fill="url(#paint0_radial_10213_1565)"></rect>
                  <path d="M18.2002 23.7998V46.1998H51.8002V23.7998H18.2002ZM35.0002 36.0411L20.7552 25.1998H49.2452L35.0002 36.0411ZM19.6002 44.7998V26.0836L29.6714 33.7486L23.7127 40.5123L23.8877 40.6873L30.7914 34.5973L35.0002 37.7998L39.2089 34.5973L46.1127 40.6873L46.2877 40.5123L40.3289 33.7398L50.4002 26.0836V44.7998H19.6002Z" fill="currentColor"></path>
                  <defs>
                  <radialGradient id="paint0_radial_10213_1565" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(51.2791 70) rotate(-136.618) scale(101.913)">
                  <stop stop-color="#9747FF"></stop>
                  <stop offset="1" stop-color="#0F0221" stop-opacity="0"></stop>
                  </radialGradient>
                  </defs>
              </svg>
              </div>
              <div className="text-xl  pb-5 font-light ">Email</div>
              <div className='text-sm underline'>anandprojects1321@gmail.com</div>
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCmhqzJ5nH_aBrVtOgwiHwJg" target='_blank' className="hover:text-purple-500 transition duration-300">
              <div className="text-white-500 mb-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="100%" viewBox="0 0 70 70" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img" 
              className='inline-block'>
                  <rect width="70" height="70" rx="35" fill="url(#paint0_radial_10213_1567)"></rect>
                  <path d="M35 25.8712C35.0669 25.8712 41.6676 25.8712 46.0255 26.1822L46.2175 26.1994C46.7993 26.2512 47.4276 26.3117 48.0444 26.9422C48.3353 27.23 48.6669 28.2491 48.7804 28.9775C48.9643 30.5747 49.0614 32.1805 49.0713 33.788V36.1602C49.061 37.7686 48.9639 39.3754 48.7804 40.9736C48.6727 41.6846 48.3324 42.7181 48.0473 42.9887C47.4335 43.6163 46.7905 43.6768 46.2233 43.7315L46.0255 43.7516C41.7433 44.0395 35.2938 44.0683 35.0029 44.0683C34.6684 44.0683 26.8575 43.9906 24.3644 43.7804C24.216 43.7574 24.0735 43.7372 23.9047 43.72C23.2415 43.6422 22.488 43.553 21.9469 42.9974C21.656 42.7095 21.3244 41.6933 21.2138 40.9678C21.0299 39.3706 20.9328 37.7648 20.9229 36.1573V33.8082C20.9332 32.2007 21.0304 30.5949 21.2138 28.9976C21.3273 28.2635 21.6647 27.2444 21.9498 26.9623C22.5665 26.3319 23.2095 26.2743 23.7767 26.2196L23.9687 26.2023C28.3324 25.8943 34.9273 25.8914 34.9913 25.8914H35M35 24.0202C35 24.0202 28.2829 24.0202 23.8058 24.3368C23.1804 24.4088 21.8189 24.4146 20.6058 25.6582C19.6487 26.6082 19.3345 28.7645 19.3345 28.7645C19.1311 30.4385 19.0194 32.1222 19 33.8082V36.1803C19.0138 37.8728 19.1207 39.5632 19.32 41.2442C19.32 41.2442 19.6313 43.4004 20.5913 44.3476C21.8102 45.5912 23.4073 45.5538 24.12 45.6862C26.68 45.9251 35 46 35 46C35 46 41.7229 46 46.2029 45.6747C46.8284 45.6027 48.1927 45.5941 49.4029 44.3504C50.36 43.4033 50.6742 41.2471 50.6742 41.2471C50.8754 39.5662 50.9842 37.8757 51 36.1832V33.811C50.9861 32.1186 50.8793 30.4282 50.68 28.7472C50.68 28.7472 50.3687 26.5909 49.4087 25.6409C48.1927 24.3973 46.8284 24.3886 46.2087 24.3195C41.7229 24 35 24 35 24V24.0202Z" fill="currentColor"></path>
                  <path d="M32 30V40L40 35L32 30Z" fill="currentColor"></path>
                  <defs>
                  <radialGradient id="paint0_radial_10213_1567" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(51.2791 70) rotate(-136.618) scale(101.913)">
                  <stop stop-color="#9747FF"></stop>
                  <stop offset="1" stop-color="#0F0221" stop-opacity="0"></stop>
                  </radialGradient>
                  </defs>
              </svg>
              </div>
              <div className="text-xl  pb-5  font-light ">YouTube</div>
              <div className='text-sm underline'>@anandJha</div>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/anand-jha1321/" target='_blank' className="hover:text-purple-500 transition duration-300">
              <div className="text-white-500 mb-2 ">
                <img src="src/assets/Linkedin(1).png" className='bg-gradient-to-br from-[#200D37] to-[#803BD9]  w-[30vw] sm:w-[12vw] md:w-[60px] 
                inline-block rounded-full' alt=""  
                />         
              </div>
              <div className="text-xl  pb-5 font-light">Linkedin</div>
              <div className='text-sm underline'>@anandjha1321</div>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/anand_jha1321/" target='_blank' className="hover:text-purple-500 transition duration-300">
              <div className="text-white-500 mb-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="100%" viewBox="0 0 70 70" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img"
              className='inline-block'>
                <rect width="70" height="70" rx="35" fill="url(#paint0_radial_10213_1577)"></rect>
                <path d="M40.0408 24.1224C41.5888 24.1224 43.0734 24.7374 44.168 25.832C45.2626 26.9266 45.8776 28.4112 45.8776 29.9592V40.0408C45.8776 41.5888 45.2626 43.0734 44.168 44.168C43.0734 45.2626 41.5888 45.8776 40.0408 45.8776H29.9592C28.4112 45.8776 26.9266 45.2626 25.832 44.168C24.7374 43.0734 24.1224 41.5888 24.1224 40.0408V29.9592C24.1224 28.4112 24.7374 26.9266 25.832 25.832C26.9266 24.7374 28.4112 24.1224 29.9592 24.1224H40.0408ZM40.0408 22H29.9592C27.8502 22.0063 25.8294 22.8469 24.3381 24.3381C22.8469 25.8294 22.0063 27.8502 22 29.9592V40.0408C22.0063 42.1498 22.8469 44.1706 24.3381 45.6618C25.8294 47.1531 27.8502 47.9937 29.9592 48H40.0408C42.1498 47.9937 44.1706 47.1531 45.6618 45.6618C47.1531 44.1706 47.9937 42.1498 48 40.0408V29.9592C47.9937 27.8502 47.1531 25.8294 45.6618 24.3381C44.1706 22.8469 42.1498 22.0063 40.0408 22Z" fill="currentColor"></path>
                <path d="M41.5 27C41.2033 27 40.9133 27.088 40.6666 27.2528C40.42 27.4176 40.2277 27.6519 40.1142 27.926C40.0006 28.2001 39.9709 28.5017 40.0288 28.7926C40.0867 29.0836 40.2296 29.3509 40.4393 29.5607C40.6491 29.7704 40.9164 29.9133 41.2074 29.9712C41.4983 30.0291 41.7999 29.9994 42.074 29.8858C42.3481 29.7723 42.5824 29.58 42.7472 29.3334C42.912 29.0867 43 28.7967 43 28.5C43 28.303 42.9612 28.108 42.8858 27.926C42.8104 27.744 42.6999 27.5786 42.5607 27.4393C42.4214 27.3001 42.256 27.1896 42.074 27.1142C41.892 27.0388 41.697 27 41.5 27Z" fill="currentColor"></path>
                <path d="M34.9864 30.1807C35.9398 30.1802 36.8719 30.4624 37.6649 30.9918C38.4578 31.5211 39.0759 32.2738 39.441 33.1545C39.8061 34.0352 39.9018 35.0044 39.7159 35.9395C39.5301 36.8747 39.071 37.7336 38.3969 38.4078C37.7227 39.0819 36.8637 39.541 35.9286 39.7269C34.9935 39.9127 34.0243 39.8171 33.1436 39.452C32.2628 39.0869 31.5102 38.4687 30.9808 37.6758C30.4515 36.8828 30.1692 35.9507 30.1698 34.9973C30.1719 33.7205 30.6801 32.4966 31.5829 31.5938C32.4857 30.691 33.7096 30.1829 34.9864 30.1807ZM34.9864 28C33.6024 28.0027 32.2502 28.4156 31.1008 29.1865C29.9514 29.9575 29.0563 31.0518 28.5287 32.3313C28.001 33.6108 27.8645 35.0179 28.1364 36.375C28.4082 37.732 29.0763 38.978 30.056 39.9555C31.0358 40.933 32.2834 41.5981 33.641 41.8668C34.9987 42.1355 36.4056 41.9957 37.6838 41.4651C38.9621 40.9344 40.0543 40.0368 40.8226 38.8856C41.5908 37.7344 42.0005 36.3813 42 34.9973C41.9996 34.0771 41.8179 33.166 41.4651 32.3162C41.1123 31.4663 40.5954 30.6944 39.944 30.0445C39.2925 29.3946 38.5194 28.8795 37.6687 28.5287C36.818 28.1779 35.9065 27.9982 34.9864 28Z" fill="currentColor"></path>
                <defs>
                <radialGradient id="paint0_radial_10213_1577" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(51.2791 70) rotate(-136.618) scale(101.913)">
                <stop stop-color="#9747FF"></stop>
                <stop offset="1" stop-color="#0F0221" stop-opacity="0"></stop>
                </radialGradient>
                </defs>
              </svg>
              </div>
              <div className="text-xl  pb-5 font-light">Instagram</div>
              <div className='text-sm underline'>@anand_jha1321</div>
            </a>
          </div>
        </div>
      </div>


      <div className='flex flex-col items-center lg:flex-row md:justify-between px-24'>
        <p className='text-[#333333] font-semibold text-base'>Anand Jha</p>
        <div className='flex mt-6 text-sm font-extralight text-gray-100 ' >
        <ul className="flex gap-6">
          {navLinks.map((nav, i) =>
            nav.url ? (
              <li key={i}>
                <a
                  href={nav.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light text-sm cursor-pointer"
                >
                  {nav.label}
                </a>
              </li>
            ) : (
              <li key={i}>
                <Link
                  to={nav.name}
                  smooth={true}
                  duration={800}
                  className="font-light text-sm cursor-pointer"
                >
                  {nav.label}
                </Link>
              </li>
            )
          )}
        </ul>
        </div>
      </div>
      <hr className='h-[1px] mx-auto px-4 w-[88%] border-none bg-gradient-to-r from-white to-purple-600 mt-10' />
 
      <div className="text-center py-5 font-light text-sm ">
        <p>© 2024 Anand Jha. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default ContactSection;
