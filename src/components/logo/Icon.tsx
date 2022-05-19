import React from "react";

const LogoIcon = (props: any) => (
  <svg
    width={23}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="m0 2.84 11.33 11.39H0L11.71 26h8.465V2.84H0Z" fill="#7C3AA8" />
      <path
        d="m2.825 0 11.33 11.39H2.825l11.71 11.77H23V0H2.825Z"
        fill="#0C9"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h23v26H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default LogoIcon
