import React from "react";

const IconBtn = ({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
  active
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      type={type}
      className={`${
        active ? "bg-yellow-50 text-richblack-900" : "bg-richblack-500 text-richblack-5"
      }  px-8 py-2 rounded-md`}
    >
      {children ? (
        <>
          <span>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default IconBtn;
