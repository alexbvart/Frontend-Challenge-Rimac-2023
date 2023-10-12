const CharacterSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={156}
    fill="none"
  >
    <mask
      id="a"
      width={80}
      height={156}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#C4C4C4" d="M0 0h80v156H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#FAC2A8"
        d="M26.312 131.044s1.572.183 2.715 1.902c1.464 2.195 1.964 4.536 1.035 6.474-.928 1.902-1.143 2.378-1.321 3.402-.107.622.464 2.78.643 3.255.286.988-.465 1.098-.465 1.098.322.695-.035 1.17-.214 1.17-.893-.11-1.429-2.853-2-4.023 0 0 .893 3.218 1.036 4.755.107 1.426-1.25 1.316-1.643-.22 0 0-1.108-.402-1.572-1.829-.464-1.426-1.179-4.279-.929-6.035.25-1.756 1.179-5.852 1.179-5.852l1.536-4.097Z"
      />
      <path
        fill="#DC918B"
        d="M25.205 137.59c.214.622.393 1.28.571 1.939.143.658.286 1.316.322 2.011 0 .183 0 .329-.036.512a1.068 1.068 0 0 0 0 .476c.036.292.178.585.357.805.214.219.5.329.714.182.108-.073.215-.182.25-.292a.751.751 0 0 0 .108-.403c.035-.329 0-.658 0-.987 0-.329 0-.695.071-1.024.107-.695.393-1.354.857-1.866.215-.256.465-.475.643-.768a2.44 2.44 0 0 0 .393-.878c.179-.622.072-1.316-.25-1.902.393.549.572 1.244.429 1.939-.107.695-.572 1.28-1 1.756a3.853 3.853 0 0 0-.75 1.755c-.108.622-.036 1.281-.072 1.975-.036.183-.036.366-.143.549-.107.146-.214.329-.393.402a.633.633 0 0 1-.571.037 1.457 1.457 0 0 1-.465-.293c-.25-.256-.392-.621-.428-.987-.036-.183 0-.366.035-.549.036-.146.036-.329.036-.475 0-.659-.107-1.317-.214-1.975-.143-.622-.322-1.281-.464-1.939ZM25.455 142.383c.036.586.072 1.134.143 1.683.072.549.214 1.097.393 1.609.071.256.214.512.321.768.108.257.25.476.393.769.108.256.179.621.036.877-.107.293-.357.476-.643.586.25-.147.464-.366.536-.622.071-.256 0-.512-.107-.768-.107-.22-.286-.476-.429-.732a5.435 5.435 0 0 1-.357-.805 6.831 6.831 0 0 1-.429-1.682c-.107-.512-.107-1.134.143-1.683ZM28.168 143.08c-.035.329 0 .658.108.951.035.146.142.256.214.402.071.146.143.329.178.476.179.658.286 1.316.322 1.975-.179-.622-.322-1.28-.572-1.866-.071-.146-.142-.292-.214-.402a1.21 1.21 0 0 1-.143-.512c-.035-.366 0-.695.107-1.024Z"
      />
      <path
        fill="#EF3F54"
        d="m24.705 131.044-.893 4.023s4.822-.512 7.68 2.744l.786-5.926c.035 0-1.858-1.682-7.573-.841Z"
      />
      <path
        fill="#BD1A3B"
        d="M24.704 131.044s-1.5-4.974-.036-8.596c1.465-3.621 3.572-19.715 4.93-25.714.714-3.145 3.678-7.315 5.464-7.974 1.43-.548 1.822 15.107 2.108 17.119-1.75 5.157-4.5 12.546-4.5 13.204 0 5.706-2.644 13.424-2.644 13.424s-2.607-1.061-5.322-1.463Z"
      />
      <path
        fill="#474E64"
        d="m31.492 117.071-1.143 25.202s7.965 4.279 14.252 4.572c4.536 22.934 3.465 24.507 3.858 26.702.214 1.097 1.393 19.313 1.285 19.971-.142.658-.25 1.792-.071 2.56.143.586-.214 3.622-.214 3.622s1.821.548 4.143.804 5.322-.585 6.215-.585c0 0-.25-1.609 0-2.634.215-.841-.536-1.902-.25-2.816.25-.914.607-5.779.607-11.01 0-6.255-.357-11.376-1-13.241.25-16.826.036-26.628 0-27.506-.107-3.914-.607-6.84-.607-7.901s-.786-17.923-.786-17.923l-26.289.183Z"
      />
      <path
        fill="#343948"
        d="M40.706 137.408c.107 1.061.215 2.158.322 3.255a99.87 99.87 0 0 1 .25 3.256v.219h-2.536v-.183l-.107-2.853c-.036-.951-.036-1.902-.072-2.853l.107.11c-.535-.073-1.035-.147-1.571-.22h-.036v-.036c.072-.293.179-.549.25-.842-.071.293-.107.586-.178.842l-.036-.073c.536.036 1.071.073 1.571.109h.108v.11c.071.951.142 1.902.214 2.817.071.951.107 1.902.178 2.816l-.214-.183H41.1l-.178.22c-.036-1.098-.108-2.158-.108-3.256-.107-1.097-.107-2.158-.107-3.255Z"
      />
      <path
        fill="#EF3F54"
        d="m59.174 132.104-.036 2.926s-10.037 1.866-11.787 1.976c-1.75.073-2.75-3-2.75-3l1.821-1.719 12.752-.183ZM30.205 131.302l-.357 2.927s6.358 2.158 8.072 2.45c1.715.33 3.143-2.56 3.143-2.56l-1.571-1.939-9.287-.878Z"
      />
      <path
        fill="#343948"
        d="M30.35 142.236s.856 20.52.856 21.435c0 .914.643 30.798.393 31.456-.25.659-.643 3.914-.643 3.914s2.68 1.097 4.43 1.207c1.607.11 2.393.22 6.786-.841-.357-2.707-.321-5.743-.321-6.657 0-.915.928-11.339.928-12.802 0-1.464.75-9.95-.143-13.607-.285-1.098.786-19.642.786-19.642s-6.322-1.098-13.073-4.463Z"
      />
      <path
        fill="#31374C"
        d="M29.599 135.174v3.255s4.608 3.439 17.752 2.78c13.145-.658 12.073-1.426 12.073-1.426l-.25-5.523-29.575.914Z"
      />
      <path
        fill="#BD1A3B"
        d="M59.889 90.039s-2-.951-5.823-2.049c-2.5-.695-4.607-1.17-7.393-1.17-4.68-.037-10.037 1.426-11.538 1.902-1.571.512-3.357 6.218-3.714 12.29-.286 4.718-.858 11.632-1.286 19.752-.25 4.499-1.858 11.741-.5 14.411 16.68 5.231 29.575-.146 29.575-.146 1.822-3.475.072-7.974 1.75-28.128.786-9.84-1.071-16.862-1.071-16.862Z"
      />
      <path
        fill="#E0363C"
        d="M35.1 88.76c-.43.182-.715.584-.93.95-.25.403-.428.805-.607 1.244-.357.841-.607 1.72-.857 2.634-.464 1.792-.75 3.584-.964 5.413-.107.914-.143 1.829-.215 2.743l-.178 2.78c-.107 1.829-.25 3.695-.393 5.523-.286 3.695-.536 7.389-.893 11.047a385.51 385.51 0 0 1-1.107 11.046l1.571-22.129.393-5.523.179-2.78c.071-.915.107-1.866.25-2.78a32.044 32.044 0 0 1 1.107-5.45c.25-.878.572-1.756.965-2.597.178-.403.428-.841.678-1.207.25-.403.572-.768 1-.915Z"
      />
      <path
        fill="#DC918B"
        d="m51.316 76.14-10.859.328s.536 5.597.572 13.278c0 1.463.785 3.511.785 3.511s4.715-.621 9.537-6.072c-.357-1.426-.035-11.046-.035-11.046Z"
      />
      <path
        fill="#E0363C"
        d="M40.743 137.081c-1.215-17.045 2.036-40.455 2.286-42.174l-1.358-1.573.322-.292 1.5 1.719v.11c-.036.256-3.536 24.616-2.286 42.174l-.464.036Z"
      />
      <path
        fill="#F7AB8D"
        d="M20.561 58.84s-2.857-9.583-7.215-5.487c-4.358 4.097 1.929 16.607 8.93 13.424 0 .037 1.643-1.39-1.715-7.937Z"
      />
      <path
        fill="#2B2E3A"
        d="M10.81 23.47c-5.287 1.645-2.608 12.033-1.536 14.777 3.965 10.241 4.75 19.35 8.18 22.605 0 0 1.964-40.053-6.644-37.383ZM66.209 56.463c-.036.439-1.143 11.888-7.93 10.68l.536-7.132 7.394-3.548Z"
      />
      <path
        fill="#FAC2A8"
        d="M59.28 19.155S19.276 14.18 13.31 26.25c-4.679 9.437.679 18.545 3.25 30.36 1.93 8.815 2.251 14.996 3.108 16.46 3.715 6.583 13.18 12.436 17.61 12.29 9.787-.33 18.18-8.78 21.253-14.96 1.714-3.512 2.178-14.193 1.357-26.74-.679-10.753 1.071-20.483-.607-24.506Z"
      />
      <path
        fill="#31374C"
        d="M41.542 45.608a1.262 1.262 0 0 0 .96-1.489 1.232 1.232 0 0 0-1.48-.94 1.262 1.262 0 0 0-.962 1.489c.144.67.807 1.092 1.482.94Z"
      />
      <path
        fill="#fff"
        d="M41.683 44.132a.366.366 0 0 0 .263-.442.357.357 0 0 0-.431-.268.366.366 0 0 0-.263.441c.046.196.24.316.431.269Z"
      />
      <path
        fill="#EF3F54"
        d="M18.06 53.645c0 .878 1.43 1.573 3.18 1.536 1.75-.036 3.143-.768 3.143-1.646 0-.877-1.429-1.572-3.18-1.536-1.75.037-3.142.768-3.142 1.646ZM40.063 50.573c.393.914 2.215.987 4.037.11 1.821-.842 2.964-2.268 2.571-3.183-.392-.914-2.214-.987-4.036-.11-1.857.842-3 2.268-2.572 3.183Z"
        opacity={0.2}
      />
      <path
        fill="#31374C"
        d="M21.791 49.556a1.262 1.262 0 0 0 .961-1.489 1.232 1.232 0 0 0-1.481-.94 1.262 1.262 0 0 0-.961 1.489c.143.67.807 1.092 1.481.94Z"
      />
      <path
        fill="#fff"
        d="M21.933 48.078a.366.366 0 0 0 .262-.442.357.357 0 0 0-.43-.269.366.366 0 0 0-.264.442c.047.196.24.316.431.269Z"
      />
      <path
        fill="#2B2E3A"
        d="M14.525 40.807c1.107-1.646 2.5-2.963 5.5-3.402 1.572-.036 3.215-.22 1.644-1.682-2.68-2.195-8.573 1.5-8.787 5.889-.286 1.902 1.036.402 1.643-.805ZM44.386 35.1c-1.5-1.316-3.18-2.194-6.18-1.828-1.536.366-3.143.658-2-1.17 2.036-2.854 8.644-.805 9.966 3.328.785 1.792-.858.695-1.786-.33Z"
      />
      <path
        fill="url(#b)"
        d="M32.242 36.749s-2.286 3.402-7.537 4.024c0 0 5.287 7.717 2.68 18.435 0 0 5.75 2.597 9.929-2.67-.036 0-5.322-9.072-5.072-19.789Z"
        opacity={0.6}
      />
      <path
        fill="#2B2E3A"
        d="M58.138 53.427c-3.715-5.998-2.215-12.51-6.215-18.837-3-4.682-3.644-13.168-1.893-16.094 0 0 10.394-3.548 10.965-3.22 3.394 1.976 8.001 12.328 6.18 33.396l-9.037 4.755Z"
      />
      <path
        fill="#FAC2A8"
        d="M58.851 50.683s1-6.035 6.18-4.316c5.179 1.756 5.75 17.082-5.965 14.558 0 0-1.072-3.95-.215-10.242Z"
      />
      <path
        fill="#DC918B"
        d="M65.567 50.246c-.607-.33-1.321-.549-2-.512-.679 0-1.322.366-1.714.914-.393.549-.643 1.17-.822 1.83-.179.658-.25 1.353-.321 2.011l-.25-.22c.678-.11 1.357-.036 1.964.33.607.329.965.987 1.036 1.646.071.329 0 .658-.072.987-.107.33-.321.586-.571.805-.5.402-1.107.658-1.75.768.607-.183 1.178-.475 1.607-.914.214-.22.393-.476.464-.732.072-.292.108-.548.036-.841-.107-.585-.428-1.097-.928-1.353-.5-.293-1.144-.33-1.68-.22l-.25.037.036-.256c.072-.695.179-1.39.358-2.085.178-.695.464-1.39.928-1.939.465-.585 1.215-.951 1.965-.914.714-.074 1.393.22 1.964.658ZM27.347 59.17s5.858 6.876 9.93-2.67c0 .036-3.929 2.596-9.93 2.67Z"
      />
      <path
        fill="#2B2E3A"
        d="M6.274 18.641c3.393-4.499 9.68-13.424 18.717-14.63 4.5-.513 4.965.511 4.965.511-.465-.658-2.215-2.926-2.215-2.926C35.278 4.046 59.995-4 60.96 15.313c1.5 1.243 2.429 2.267 2.536 2.78.536 2.45-12.573 15.984-12.502 9.73.286-5.305.607-6-1.536-7.097-3.893-2.012-9.965-1.317-23.146 4.865-6.179 2.89-17.68 7.315-27.325-1.463 0-.037 3.894-.988 7.287-5.487Z"
      />
      <path
        fill="#31374C"
        d="M25.526 66.304c6.394 3.914 3.679 9.876 12.073 8.779C45.564 73.18 47.1 59.39 47.1 59.39c-11.144 10.425-21.574 6.913-21.574 6.913Z"
      />
      <path
        fill="#F97A7A"
        d="M44.03 69.412c-6.215.988-9.109 3.475-10.43 5.523.964.33 2.25.403 4 .183 2.93-.731 5-3.036 6.43-5.706Z"
      />
      <path
        fill="#fff"
        d="M25.526 66.304a10.518 10.518 0 0 1 3 2.634c.322.402 11.359-.037 17.646-5.084.678-2.524.893-4.463.893-4.463-11.11 10.425-21.54 6.913-21.54 6.913Z"
      />
      <path
        fill="#DC918B"
        d="M26.348 66.853c.285.183.535.403.785.622.25.22.5.44.75.695.25.256.465.512.68.768.856 1.061 1.5 2.268 2.214 3.402.357.585.75 1.134 1.214 1.573.25.22.5.402.786.585.286.146.572.293.893.366.143.036.321.073.464.11.143.036.322.073.465.073.321.036.643.073.964.073.322 0 .643 0 1-.037.322 0 .643-.073.965-.11 1.5-.365 2.893-1.243 4-2.377 1.107-1.134 1.965-2.487 2.68-3.95.713-1.427 1.25-2.963 1.678-4.5.214-.768.428-1.572.571-2.34.179-.805.322-1.573.429-2.378l.286.146-1.107.988c-.393.33-.75.658-1.144.951-.392.293-.785.622-1.214.878-.393.293-.822.585-1.25.841L41.17 64c-.429.256-.893.476-1.322.695-.464.22-.893.403-1.357.586-.464.182-.929.365-1.393.512-.464.146-.929.292-1.429.438-.464.147-.964.257-1.428.33a20.442 20.442 0 0 1-2.93.402c-1 .037-1.964.037-2.964-.036-.965-.11-1.965-.257-2.893-.55.321.11.643.293.893.476Zm2.071-.073c.965.073 1.965.073 2.93-.036.5-.037.964-.11 1.464-.183.5-.074.964-.147 1.428-.256.465-.11.965-.22 1.43-.366l1.392-.44c.465-.182.929-.328 1.358-.548.464-.183.893-.402 1.321-.621.429-.22.857-.44 1.286-.695.429-.257.857-.476 1.25-.769.429-.256.822-.548 1.215-.84.393-.257.785-.586 1.178-.879.393-.292.75-.622 1.143-.95l1.108-.988.357-.33-.072.476c-.107.805-.25 1.61-.392 2.414a46.1 46.1 0 0 1-.572 2.378 26.03 26.03 0 0 1-1.715 4.572c-.714 1.463-1.607 2.853-2.75 4.023-1.143 1.17-2.572 2.085-4.179 2.414a9.191 9.191 0 0 1-1 .074c-.322.036-.679.036-1 .036-.322 0-.679-.036-1-.073-.179 0-.322-.037-.5-.073a2.575 2.575 0 0 1-.5-.147 7.16 7.16 0 0 1-.93-.402c-.285-.183-.57-.366-.82-.622-.5-.475-.894-1.024-1.25-1.61-.358-.584-.68-1.17-1.001-1.755-.322-.585-.714-1.134-1.107-1.682l-.643-.769c-.214-.255-.465-.475-.715-.694-.25-.22-.5-.44-.785-.622a6.733 6.733 0 0 0-.822-.585c.929.329 1.893.475 2.893.548Z"
      />
      <path
        fill="#DC918B"
        d="M44.742 59.39s.322-.146.75-.219c.108-.037.25-.037.358-.073.142-.037.285 0 .392-.037.143 0 .286 0 .43.037.07 0 .142.036.214.036l.214.074c.143.036.25.11.393.183.107.073.25.182.357.256.107.11.214.182.321.292.072.11.179.183.25.293.072.073.143.183.215.256.071.073.107.146.143.22.071.11.142.182.142.182s-.035-.073-.071-.22c-.071-.146-.107-.328-.25-.548a3.226 3.226 0 0 1-.214-.366c-.108-.11-.179-.22-.286-.365-.107-.11-.25-.22-.393-.33-.143-.073-.286-.183-.464-.22l-.25-.072c-.072-.037-.179-.037-.25-.037-.179-.036-.322 0-.5 0-.143.037-.322.037-.465.073-.143.037-.25.073-.393.147-.393.182-.643.439-.643.439Z"
      />
      <path
        fill="#2B2E3A"
        d="M38.349 15.274s1.821 3.95-3.18 8.194c-5.643 4.755-12.858 5.413-12.858 5.413s3.286-2.487 2.679-5.194c-.893-3.987 6.25-10.57 6.25-10.57l7.109 2.157ZM21.954 4.742s-2.393.695-11.43 6.364c-3.786 2.378-6.608-1.572-6.608-1.572s-2.429 9.73 6.715 8.705c9.144-1.06 11.323-13.497 11.323-13.497Z"
      />
      <path
        fill="#31374C"
        d="M51.173 83.128s-4.322 2.377-6.823 2.56c-2.5.183-2 6.255-2.178 7.901 0 0 5.822-.841 8.036-2.56 2.215-1.72 3-3.073 3-3.073s.286-3.548-.07-5.01c-.108-.367-2.001-1.39-2.001-1.39l.036 1.572ZM40.136 85.028s-.572.256-.965.805c-.392.549.5 4.243.358 5.157-.143.915 1.928 2.414 1.928 2.414l.5-.438-.285-6.146a.93.93 0 0 0-.679-.877l-.036-1.098-.821.183Z"
      />
      <path
        fill="#E1E4F4"
        d="m42.492 93.444-.214-.073v-.512l-.536-.183-.25.402-.25-.036-.857 2.084a.464.464 0 0 0 .286.622l.75.256a.489.489 0 0 0 .607-.366l.464-2.194Z"
      />
      <path
        fill="#fff"
        d="M49.245 101.929c-.107 0-.179.037-.25.146l-1.036 1.281-.286-1.317c-.035-.146-.107-.183-.178-.183-.107 0-.179.037-.25.146l-.965 1.683.465.036.643-1.17.285 1.244.393.036.929-1.134-.072 1.207.393.037.107-1.683c0-.219-.107-.292-.178-.329ZM45.78 102.039l-.5 1.573h.428l.5-1.573h-.429ZM44.994 102.441c.036-.22-.071-.476-.5-.476l-.822-.073-.464 1.573.429.036.178-.585h.215l.357.622.464.036-.393-.658c.358-.073.5-.293.536-.475Zm-.822.219-.32-.037.142-.475.321.036c.179 0 .25.11.215.257 0 .146-.143.219-.358.219ZM51.102 103.977l.429.037-.286-1.5c-.036-.183-.143-.22-.25-.22-.071 0-.143.037-.214.11l-1.143 1.463.428.037.215-.329.75.036.071.366Zm-.643-.622.429-.548.107.585-.536-.037ZM52.851 103.795c-.357-.037-.535-.256-.5-.512.072-.33.393-.549.822-.512.143 0 .286.036.428.073l.108-.33a1.796 1.796 0 0 0-.465-.073c-.75-.036-1.214.256-1.321.768-.072.476.214.805.893.842h.428l.108-.329c-.18.073-.322.109-.5.073Z"
      />
      <path
        fill="#FAC2A8"
        d="M34.92 118.057s-.68-.622-.75-1.134c-.072-.512.428-1.317.428-1.317s-.428-.622-.214-1.39c.214-.805.714-1.134.714-1.134s-.643-.622-.428-1.353c.214-.768 1.035-1.024 2.107-.878 0 0 6 .11 6.787.805 1.107.951 2.536 3.731 2.536 3.731 1 .951.678 5.23.678 5.23l-2.714-.366c-.822.878-6.465.805-7.001.549-1.179-.512-1.465-.585-2.215-1.244-.5-.475.072-1.499.072-1.499Z"
      />
      <path
        fill="#FAC2A8"
        d="M40.92 106.28c-.071.987.322 1.499 1.43 3.73.463.951 1.75.476 3.107 4.097.357.988-6.215-1.792-5.822-2.195.785-.877-1.036-2.523-1-4.535 0-1.756 2.428-3.329 2.285-1.097Z"
      />
      <path
        fill="#FAC2A8"
        d="M36.098 110.888s3.179-.256 3.715.915c.535 1.134.035 1.719-.608 1.792 0 0 .5.402.393 1.244-.107.841-.821.951-1.571 1.06-.75.11-2.75-.219-2.75-.219l.82-4.792Z"
      />
      <path
        fill="#EF3F54"
        d="m45.601 114.182 4.572.804-.75 6.292-4.43-.695.608-6.401Z"
      />
      <path
        fill="#BD1A3B"
        d="M48.922 114.766c1.214-2.963 5.786-1.061 8.108-1.463-.893-3.585-1.286-7.316-1.286-7.316l-1.679-3.621c.179-8.34 2.5-11.851 5.644-12.546 0 0 3.536 1.427 4.608 6.584.32 1.573 3.643 23.41.107 26.555-3.18 2.817-12.966 2.195-15.895-.768l.393-7.425Z"
      />
      <path
        fill="#E0363C"
        d="M48.921 114.766c.143-.366.322-.695.607-.951.286-.256.608-.439.965-.585.714-.256 1.464-.293 2.179-.293.75.037 1.464.11 2.178.146.715.074 1.465.11 2.144 0l-.143.22a41.505 41.505 0 0 1-.786-3.658 61.18 61.18 0 0 1-.536-3.694l.036.109a166.36 166.36 0 0 1-1.679-3.657l-.036-.037v-.036c.036-1.244.108-2.488.286-3.731.143-1.244.393-2.451.786-3.658l.321-.878a6.01 6.01 0 0 1 .393-.841c.143-.293.286-.549.465-.805a5.68 5.68 0 0 1 .571-.731 5.585 5.585 0 0 1 1.393-1.208 4.92 4.92 0 0 1 1.715-.658 5.533 5.533 0 0 0-1.643.732c-.5.365-.929.768-1.286 1.243-.75.951-1.215 2.122-1.572 3.256-.357 1.17-.536 2.377-.679 3.62a41.837 41.837 0 0 0-.25 3.695l-.035-.11a159.74 159.74 0 0 1 1.643 3.585l.035.073v.037c.143 1.207.322 2.45.5 3.657.215 1.208.465 2.415.715 3.622l.036.183-.179.036c-.75.11-1.5.037-2.215-.073-.714-.073-1.464-.183-2.178-.219-.715-.037-1.465-.037-2.143.146-.715.292-1.322.768-1.608 1.463Z"
      />
      <path
        fill="#E0363C"
        d="M64.46 122.962c-.5.475-1.143.841-1.786 1.097-.643.293-1.358.476-2.036.585a18.19 18.19 0 0 1-4.215.293c-1.393-.073-2.822-.256-4.18-.658a10.231 10.231 0 0 1-2-.769c-.643-.329-1.25-.694-1.786-1.243l-.071-.073v-.073l.107-1.866.143-1.865c.036-.622.107-1.244.143-1.866.036-.622.107-1.243.143-1.865 0 .622 0 1.243-.036 1.865 0 .622 0 1.244-.036 1.866l-.035 1.865c-.036.622-.036 1.244-.072 1.866l-.071-.147c1 .951 2.322 1.463 3.643 1.829 1.322.366 2.715.585 4.108.658 1.393.074 2.786.074 4.143-.146 1.393-.11 2.75-.475 3.894-1.353Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={29.546}
        x2={32.508}
        y1={37.108}
        y2={59.676}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAC2A8" />
        <stop offset={0.265} stopColor="#F7BCA5" />
        <stop offset={0.604} stopColor="#EDAD9B" />
        <stop offset={0.981} stopColor="#DD938C" />
        <stop offset={1} stopColor="#DC918B" />
      </linearGradient>
    </defs>
  </svg>
)
export default CharacterSVG