import React from 'react';

const Nvidia = ({ fill, className }) => {
  return (
    <div className={className}>
      <svg width="139" height="26" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40.086 0v26H15.427v-3.053c.522.058 1.043.087 1.594.087 5.708 0 15.777-2.908 20.095-6.525-.638-.637-3.724-2.098-4.477-2.706-4.55 3.907-9.243 7.22-15.734 7.22-.493 0-1-.044-1.492-.101v-2.17c.594.1 1.188.158 1.796.158 6.969 0 13.662-8.13 13.662-8.13s-5.838-7.626-14.777-7.322l-.696.043V0h24.688zM15.413 3.501l-.001 1.909-.014.001v.001l-.37.034c-6.73.69-10.15 5.567-10.275 5.748-.003.005 2.706 8.744 10.645 9.728v2.025C4.576 21.934.722 10.794.722 10.794s6.81-6.656 14.69-7.293zM90.19 5.03V22h-4.854V5.029h4.854zm9.78 0c3.876 0 6.47.46 8.249 2.833 1.005 1.323 1.574 3.452 1.574 5.84 0 2.603-.67 4.99-1.72 6.069C106.6 21.31 105.23 22 101.033 22h-7.87V5.029zm-29.558 0l3.877 13.447L78.341 5.03h4.955L77.699 22h-6.995L65.165 5.029h5.247zm46.508 0V22h-4.854V5.029h4.854zM56.07 5c4.16.03 8.351 1.013 8.351 7.607v9.378h-4.751v-7.752c0-2.374-.306-3.682-1.079-4.488-.597-.633-1.472-.935-2.725-.935l-3.819-.014v13.189h-4.897V5zm76.094.028L139 21.97h-5.203l-1.02-2.991h-8.016l-1.079 3.006h-4.78l6.777-16.957h6.486zM15.398 7.755v2.026h-.014c-2.507-.304-4.477 2.04-4.477 2.04l.008.027c.106.351 1.272 3.978 4.483 5.066v1.852c-5.998-1.071-7.664-7.307-7.664-7.307l.07-.074.089-.089c.663-.656 3.376-3.091 7.505-3.54zm84.659.956h-2.084v9.65h2.084c3.031 0 4.984-1.352 4.984-4.832 0-3.48-1.953-4.818-4.984-4.818zm-73.315 2.198l-.019.027-.099.131c-.743.976-4.891 6.15-9.313 6.15-.652 0-1.29-.1-1.898-.303V9.795c2.506.304 3.013 1.404 4.506 3.907l3.346-2.807s-2.448-3.198-6.563-3.198a9.832 9.832 0 00-1.304.058V5.412h.015l-.001-.002.334-.019c.116-.005.232-.009.348-.009 6.432-.202 10.648 5.527 10.648 5.527zm102.085-2.788l-3.032 7.94h5.976l-2.944-7.94z"
          fill={fill}
          fill-rule="nonzero"
        />
      </svg>
    </div>
  );
};

export default Nvidia;
