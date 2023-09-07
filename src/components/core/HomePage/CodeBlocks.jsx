import React from 'react'
import CTAButton from './Button';
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  codeColor,
}) => {
  return (
    <div>
      <div className={`flex flex-col ${position} my-20 justify-between `}>
        {/* section-1 */}
        <div className="w-full md:w-[50%] flex flex-col gap-3">
          {heading}
          <div className="text-richblack-300 font-bold">{subheading}</div>
          <div className="flex gap-7 justify-center md:justify-start mt-7">
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
              <div className="flex gap-3">
                {ctabtn1.btnText}
                <FaArrowRight />
              </div>
            </CTAButton>
            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
              {ctabtn2.btnText}
            </CTAButton>
          </div>
        </div>

        {/* section-2 */}
        <div className="h-fit  flex flex-row  w-[100%] py-4 lg:w-[500px] ">
          {/* bg gradient */}
          <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
          </div>
          <div
            className={`w-[90%] flex flex-col gap-2  font-mono ${codeColor}`}
          >
            <TypeAnimation
              sequence={[codeblock, 2000, ""]}
              repeat={Infinity}
              style={{
                whiteSpace: "pre-line",
                
              }}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks
