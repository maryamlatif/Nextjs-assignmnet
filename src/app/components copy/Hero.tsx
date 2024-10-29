import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { SlSocialFacebook } from "react-icons/sl";

export default function HomePage() {
  return (
    <div className="min-h-screen flex bg-gray-800">
      <div className="bg-gray-900 text-white p-6 w-64 min-h-screen fixed md:relative">
        <div className="text-center">
          <Image
            src="/imagee.png"
            alt="profile"
            width={200}
            height={200}
            className="rounded-lg mx-auto"
          />
          <h1 className="text-2xl font-bold mt-4">Maryam Latif</h1>
          <p className="text-gray-400">FullStack Developer</p>
        </div>

        <div className="mt-6 space-y-4">
          <a
            href="#"
            className="block bg-green-500 text-center py-2 rounded hover:bg-lime-300"
          >
            Download Resume
          </a>

          <div className="flex justify-around text-green-500">
            <a href="#" aria-label="LinkedIn" className="hover:text-lime-300">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-lime-300">
              <FaGithub />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-lime-300">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-lime-300">
              <SlSocialFacebook />
            </a>
          </div>

          <p className="mt-4 text-center underline">Mahamlatif9@gmail.com</p>
          <p className="text-center mt-4 underline">Federal B Area</p>
          <p className="text-center underline">0303-0101011</p>
        </div>
      </div>

      <div className="flex-1 ml-64 p-6">
        <div className="text-white">
          <h2 className="text-3xl font-semibold mb-4">Resume</h2>

          <section className="mb-8">
            <h3 className="text-3xl font-semibold text-green-400">Education</h3>
            <p className="text-lime-100 text-xl font-semibold">
              Graduation in Arts
            </p>
            <p className="text-gray-300">Karachi University (2017-2021)</p>
            <p className="text-lime-100 text-xl font-semibold">Inter in Arts</p>
            <p className="text-gray-300">
              S.M.B Fatima Jinnah Girls College (2015-2017)
            </p>
            <p className="text-lime-100 text-xl font-semibold">
              Matric in Arts
            </p>
            <p className="text-gray-300">
              GOVT-Ibrahim Ali Bhai School (2012-2014)
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-3xl font-semibold text-green-400">
              Experience
            </h3>
            <div className="space-y-2">
              <div>
                <span className="text-lime-100 text-xl font-semibold">
                  Freelance
                </span>
                <p className="text-gray-300">
                  Developed a fully responsive personal portfolio site using
                  React and Tailwind CSS, showcasing skills in modern web design
                  and responsive layout techniques.
                </p>
              </div>
              <div>
                <span className="text-lime-100 text-xl font-semibold">
                  Project
                </span>
                <p className="text-gray-300">
                  Built an e-commerce web application as a capstone project,
                  implementing product pages, a shopping cart, and payment
                  integration to simulate real-world user flows.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-green-400">
              Languages & Frameworks
            </h3>
            <ul className="space-y-2">
              <li>
                <p>Typescript</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              <li>
                <p>JavaScript</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </li>
              <li>
                <p>HTML & CSS</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
              <li>
                <p>Python</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-green-400">
              Tools & Software
            </h3>
            <ul className="space-y-2">
              <li>
                <p>Figma</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </li>
              <li>
                <p>Canva</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
              <li>
                <p>Adobe Illustrator</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
