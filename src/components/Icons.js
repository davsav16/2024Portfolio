import * as React from "react";
import { useEffect } from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#CB1F27"
      d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
    />
  </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#E74D89"
      d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
    />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="496"
    height="496"
    viewBox="0 0 496 496"
    xmlSpace="preserve"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <g
      transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
      stroke="none"
    >
      <path
        d="M2383 4150 c-95 -58 -91 -210 8 -261 52 -26 132 -28 178 -5 36 19 39
36 12 60 -15 14 -24 15 -40 7 -33 -18 -95 -13 -119 9 -41 38 -29 43 93 35
l115 -7 0 37 c0 50 -36 111 -76 130 -46 22 -132 19 -171 -5z"
      />
      <path
        d="M2087 4136 c-123 -45 -155 -181 -62 -266 24 -22 35 -25 108 -25 70 0
87 3 115 23 38 28 40 44 7 66 -23 15 -26 15 -45 -4 -26 -26 -101 -28 -125 -3
-22 22 -13 26 108 48 l99 18 -6 31 c-17 86 -116 142 -199 112z"
      />
      <path
        d="M2701 4103 c-31 -131 -50 -238 -43 -244 4 -4 23 -9 42 -13 l35 -6 19
85 c23 107 33 120 84 120 39 0 41 1 51 38 l9 39 -54 -4 c-38 -3 -54 -1 -54 8
0 6 -10 14 -22 18 -48 12 -56 8 -67 -41z"
      />
      <path
        d="M1748 4027 c-15 -7 -37 -25 -48 -40 -15 -18 -26 -25 -34 -19 -10 8
-76 -11 -76 -22 0 -6 120 -260 125 -265 6 -5 64 19 71 30 3 5 -11 44 -31 86
-41 86 -42 117 -3 146 48 36 73 19 119 -81 23 -48 42 -88 43 -90 5 -4 76 28
76 34 0 4 -21 51 -47 106 -34 73 -54 103 -74 114 -34 17 -84 17 -121 1z"
      />
      <path
        d="M3410 3873 c-107 -126 -120 -149 -120 -208 0 -68 40 -124 114 -160
101 -49 140 -27 300 168 l39 48 -29 30 c-15 16 -31 28 -35 27 -4 -2 -37 -39
-74 -83 -106 -128 -127 -140 -184 -110 -36 18 -55 62 -42 97 5 14 44 67 86
118 l77 92 -28 29 c-15 16 -30 29 -34 29 -3 0 -35 -35 -70 -77z"
      />
      <path
        d="M1474 3868 c-16 -12 -30 -23 -32 -24 -6 -4 26 -57 79 -129 27 -38 58
-83 68 -98 l19 -29 32 29 33 29 -24 36 c-51 76 -142 208 -144 208 -1 0 -15
-10 -31 -22z"
      />
      <path
        d="M1317 3752 c-21 -22 -24 -31 -15 -40 9 -9 9 -12 -1 -12 -33 0 -83
-36 -106 -75 -41 -70 -29 -135 35 -189 26 -21 42 -26 86 -26 50 0 58 3 99 41
31 28 45 50 45 67 0 24 1 25 20 7 31 -28 25 -69 -16 -110 -19 -20 -49 -38 -65
-42 -32 -6 -34 -10 -19 -48 9 -23 15 -26 36 -21 38 10 100 54 130 93 28 37 41
95 30 139 -6 24 -210 244 -226 244 -3 0 -18 -13 -33 -28z m76 -134 c27 -32 22
-72 -14 -102 -37 -32 -72 -33 -99 -4 -31 34 -26 81 12 113 36 30 71 28 101 -7z"
      />
      <path
        d="M3796 3583 c-10 -32 -27 -81 -38 -110 l-19 -52 -121 6 c-71 4 -119 2
-117 -3 3 -5 15 -26 28 -48 l24 -39 79 7 c92 8 93 6 52 -90 l-26 -61 31 -43
30 -42 16 39 c9 21 28 73 42 116 l25 77 114 0 c63 0 114 3 114 6 0 3 -12 21
-26 40 -26 33 -28 34 -101 34 -84 0 -80 -8 -42 94 l18 48 -26 39 c-14 21 -29
39 -33 39 -3 0 -14 -26 -24 -57z"
      />
      <path
        d="M1054 3430 c-33 -13 -74 -69 -80 -111 -4 -21 -10 -36 -14 -34 -9 5
-50 -46 -50 -62 0 -4 12 -15 28 -24 15 -9 69 -42 121 -73 51 -31 96 -56 98
-56 6 0 28 27 43 51 8 14 -5 25 -70 64 -84 49 -98 70 -86 120 4 14 18 31 32
37 27 13 43 7 146 -56 l57 -35 21 36 c12 20 17 39 13 43 -4 5 -48 31 -98 59
-87 50 -119 58 -161 41z"
      />
      <path
        d="M731 3014 c-24 -74 -42 -136 -40 -138 24 -18 361 -118 369 -110 10
11 93 275 87 280 -2 2 -17 7 -35 10 l-31 6 -31 -100 -31 -100 -43 14 -44 15
24 77 c13 42 24 82 24 89 0 6 -14 16 -30 22 -34 11 -32 14 -50 -56 -6 -23 -17
-57 -25 -76 -14 -35 -15 -35 -50 -24 -42 13 -43 23 -10 115 29 81 31 98 9 106
-44 17 -49 10 -93 -130z"
      />
      <path
        d="M3961 3024 c-96 -24 -177 -46 -179 -49 -6 -6 27 -139 49 -201 21 -54
68 -107 112 -123 43 -16 117 -13 162 8 52 23 96 86 103 146 5 52 -45 266 -62
264 -6 0 -89 -21 -185 -45z m158 -108 c18 -72 14 -111 -15 -145 -45 -54 -125
-60 -177 -14 -15 14 -62 142 -55 148 9 6 197 54 214 54 17 1 24 -8 33 -43z"
      />
      <path
        d="M3941 2583 c-73 -38 -105 -168 -61 -241 20 -32 22 -33 43 -19 22 15
23 17 10 100 -4 31 -1 43 18 63 12 13 26 24 31 24 4 0 8 -49 8 -109 0 -61 4
-112 9 -116 6 -3 29 -1 53 4 118 27 155 182 64 271 -29 27 -45 34 -88 37 -38
3 -63 -1 -87 -14z"
      />
      <path
        d="M790 2564 c-41 -35 -60 -74 -60 -126 0 -54 27 -106 70 -135 43 -30
119 -31 166 -3 74 46 98 179 44 250 l-19 25 -24 -23 c-23 -22 -24 -26 -11 -50
23 -44 13 -102 -20 -124 -23 -16 -26 -5 -26 102 l0 110 -44 0 c-33 0 -52 -7
-76 -26z"
      />
      <path
        d="M3864 2255 c-9 -14 -23 -51 -30 -83 -23 -98 9 -162 82 -162 38 0 55
18 90 93 18 41 31 57 42 55 25 -5 26 -41 2 -95 l-21 -47 23 -18 c31 -24 32
-23 51 17 58 122 31 225 -59 225 -42 0 -68 -24 -89 -82 -19 -53 -38 -73 -56
-63 -16 10 -3 81 21 121 19 30 19 32 2 48 -25 22 -39 20 -58 -9z"
      />
      <path
        d="M778 2227 c-35 -8 -36 -10 -27 -35 6 -15 18 -35 27 -45 12 -13 13
-20 4 -26 -7 -4 -9 -20 -5 -45 5 -35 8 -37 32 -32 14 3 79 16 144 30 66 13
121 26 123 28 6 6 -16 78 -24 78 -4 0 -41 -7 -83 -15 -94 -18 -117 -12 -138
34 -16 36 -17 37 -53 28z"
      />
      <path
        d="M1015 2026 c-137 -51 -164 -72 -172 -133 -6 -48 25 -128 66 -167 l27
-26 24 25 23 24 -32 37 c-26 29 -31 43 -29 72 5 58 30 53 56 -11 28 -67 71
-102 115 -93 51 10 67 32 67 94 0 48 -4 58 -34 88 -18 18 -29 35 -23 37 11 3
-9 77 -21 76 -4 0 -34 -10 -67 -23z"
      />
      <path
        d="M3779 1973 c-5 -16 -11 -33 -14 -40 -2 -6 15 -18 38 -27 23 -8 86
-31 140 -50 l98 -36 15 36 c9 20 12 40 7 44 -9 8 -254 100 -266 100 -4 0 -12
-12 -18 -27z"
      />
      <path
        d="M3628 1873 c-78 -82 -100 -178 -53 -238 20 -27 212 -149 265 -169 19
-8 56 52 41 67 -6 6 1 17 22 31 75 50 88 158 27 221 -64 66 -147 68 -207 5
-31 -33 -55 -93 -47 -115 9 -23 -13 -18 -30 7 -30 42 -21 84 29 133 39 40 43
48 35 70 -13 35 -40 31 -82 -12z m236 -148 c33 -31 33 -65 0 -104 -30 -36 -61
-39 -98 -10 -35 28 -35 73 1 111 33 34 62 36 97 3z"
      />
      <path
        d="M1130 1690 c-47 -16 -111 -36 -142 -46 -32 -9 -58 -19 -58 -23 1 -12
39 -51 50 -51 7 0 50 12 97 26 46 14 86 24 88 22 2 -2 -20 -41 -50 -87 l-55
-82 22 -29 c24 -33 25 -33 142 7 38 12 73 23 78 23 5 0 -11 -28 -34 -62 -83
-121 -79 -111 -51 -147 l26 -33 40 64 c21 35 59 93 84 130 47 70 49 90 14 122
-20 18 -23 18 -185 -31 -18 -6 -18 -3 4 33 13 21 37 58 52 82 30 43 29 51 -5
90 -24 26 -12 27 -117 -8z"
      />
      <path
        d="M3538 1546 l-26 -32 63 -63 c76 -74 84 -94 58 -130 -36 -48 -69 -40
-148 34 l-69 65 -30 -30 -31 -30 65 -66 c80 -81 131 -108 183 -93 41 11 85 59
94 101 4 19 9 25 17 19 11 -9 66 29 66 46 0 9 -203 214 -211 212 -2 0 -16 -15
-31 -33z"
      />
      <path
        d="M1450 1384 c-13 -33 -13 -34 4 -34 20 0 38 -27 32 -47 -3 -10 -23
-38 -44 -63 l-39 -44 -27 18 c-27 17 -28 17 -52 -5 l-23 -22 24 -19 c29 -23
31 -35 8 -60 -16 -18 -15 -20 15 -51 l32 -32 24 30 c21 26 26 28 40 16 14 -12
19 -11 36 4 24 22 25 34 3 50 -15 11 -13 17 26 61 82 94 88 138 25 194 -43 37
-71 39 -84 4z"
      />
      <path
        d="M3213 1269 c-57 -28 -118 -119 -80 -119 6 0 21 -3 32 -6 15 -4 25 3
38 25 23 38 83 59 117 41 22 -12 22 -13 -21 -40 -24 -15 -68 -42 -96 -60 -29
-18 -53 -37 -53 -40 0 -15 43 -61 70 -75 66 -34 160 -5 206 65 22 33 26 48 22
90 -6 55 -44 115 -85 131 -40 15 -105 10 -150 -12z"
      />
      <path
        d="M1638 1160 c-29 -49 -57 -90 -63 -90 -6 0 -20 7 -31 15 -26 20 -27
19 -47 -14 -17 -30 -17 -30 10 -43 35 -17 38 -52 5 -56 -13 -2 -31 3 -40 11
-15 14 -20 13 -41 -4 l-24 -20 23 -24 c50 -54 139 -53 175 1 12 19 19 22 34
14 14 -7 23 -5 36 10 17 19 15 50 -5 50 -18 0 -11 17 46 110 31 50 54 92 52
94 -30 20 -59 36 -67 36 -6 0 -34 -40 -63 -90z"
      />
      <path
        d="M3003 1154 l-32 -14 26 -57 c49 -112 49 -152 -2 -175 -22 -10 -25
-16 -20 -37 4 -14 10 -30 15 -35 14 -14 59 10 72 39 10 22 12 23 23 8 11 -14
16 -15 44 -4 17 8 31 18 31 23 0 5 -15 46 -33 91 -19 45 -41 103 -51 130 -19
51 -24 53 -73 31z"
      />
      <path
        d="M1825 1134 c-50 -27 -78 -70 -83 -130 -4 -47 -1 -60 23 -93 32 -48
82 -73 144 -74 58 -1 99 19 128 62 34 50 38 91 15 144 -37 84 -153 130 -227
91z m134 -90 c26 -33 26 -60 1 -101 -17 -28 -25 -33 -58 -33 -77 0 -105 85
-47 143 26 27 80 22 104 -9z"
      />
      <path
        d="M2143 1044 c-37 -20 -53 -51 -53 -103 0 -49 27 -74 122 -115 74 -32
91 -53 68 -81 -18 -22 -81 -18 -132 8 l-46 23 -15 -32 c-18 -37 -14 -43 47
-68 46 -19 152 -21 184 -2 55 30 78 108 46 155 -16 22 -125 81 -151 81 -6 0
-19 10 -27 22 -14 20 -14 24 1 40 9 10 28 18 43 18 35 0 109 -26 131 -46 15
-13 18 -12 33 10 25 39 20 52 -31 76 -63 30 -175 37 -220 14z"
      />
    </g>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
