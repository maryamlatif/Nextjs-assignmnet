import React from "react";

export default function Education() {
  return (
    <div className="bg-gray-900 pt-5 min-h-screen flex flex-col items-center rounded-lg shadow-md">
      <h1 className="text-white text-5xl font-serif font-bold mb-4 drop-shadow-md">
        Education
      </h1>
      <p className="text-center p-5 m-4 max-w-3xl from-neutral-300 font-serif text-xl text-white">
        I am currently pursuing an IT course at GIAIC, enhancing my skills for a
        career as a full-stack developer. I hold a bachelor&apos;s degree from
        Govt Karachi University and completed my intermediate studies at S.M.B
        Fatimah Jinnah College. My educational journey began with my
        matriculation from GOVT Girls School, providing me with a solid
        foundation in technology.
      </p>

      <ul className="list-disc list-inside text-center font-semibold text-white text-xl">
        <li className="mb-3">
          <span className="text-2xl text-lime-300">GIAIC</span>
          <br />
          IT Course (2024)
        </li>
        <li className="mb-3">
          <span className="text-2xl text-lime-300">
            Govt Karachi University
          </span>
          <br />
          Bachelor&apos;s Degree (2019-2021)
        </li>
        <li className="mb-3">
          <span className="text-2xl text-lime-300">
            S.M.B Fatimah Jinnah College
          </span>
          <br />
          Intermediate Studies in Arts (2017-2019)
        </li>
        <li className="mb-3">
          <span className="text-2xl text-lime-300 ">GOVT Girls School</span>
          <br />
          Matriculation in Arts (2015-2017)
        </li>
      </ul>
    </div>
  );
}
