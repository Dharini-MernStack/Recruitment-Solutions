import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#2F4F4F] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>" Efficient. Effective. <br/>Online Recruitment Simplified."</p>
          </div>
          <div>
          <p>
Our online recruitment solution streamlines the entire hiring process,
Spend more time on strategic decision-making and less on repetitive tasks.<br/>
Expand your reach and attract high-quality candidates from various sources<br/><br/>
Discover talent that aligns with your company's values and objectives.<br/>
Enable seamless communication and collaboration among hiring team members, HR professionals, and stakeholders.<br/>

Make informed decisions based on comprehensive data, leading to better hiring outcomes.<br/><br/>
Ready to streamline your hiring process?<br/>
Sign up now and experience the efficiency of our online recruitment solution.
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
