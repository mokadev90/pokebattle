import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Image = ({ url }) => {
  //   const [image, setImage] = useState(null);

  //   useEffect(() => {
  //     const getImg = async (url) => {
  //       try {
  //         const { data } = await axios(url);
  //         const { front_default } = data.sprites;
  //         console.log(front_default);
  //         // const { front_default } = sprites;
  //         setImage(front_default);
  //         // console.log(front_default);
  //       } catch (error) {}
  //     };
  //     getImg(url);
  //   }, [url]);

  return <img src={image} />;
};
