import React, { useContext } from "react";
import Image from "next/image";
import CardBox from "@/app/components/shared/CardBox";

const photos = [
  {
    img: "/images/profile/user-10.jpg",
    id: 1,
  },
  {
    img: "/images/profile/user-2.jpg",
    id: 2,
  },
  {
    img: "/images/profile/user-3.jpg",
    id: 3,
  },
  {
    img: "/images/profile/user-4.jpg",
    id: 4,
  },
  {
    img: "/images/profile/user-5.jpg",
    id: 5,
  },
  {
    img: "/images/profile/user-6.jpg",
    id: 6,
  },
  {
    img: "/images/profile/user-7.jpg",
    id: 7,
  },
  {
    img: "/images/profile/user-8.jpg",
    id: 8,
  },
  {
    img: "/images/profile/user-9.jpg",
    id: 9,
  },
];

const Photos = () => {
  return (
    <>
      <CardBox>
        <h5 className="card-title mb-2">Photos</h5>
        <div className="grid grid-cols-12 gap-[30px]">
          {photos.map((photo) => (
            <div className="md:col-span-4 sm:col-span-6 col-span-12">
              <Image src={photo.img} alt={photo.img} width={92} height={92} className="rounded-md" />
            </div>
          ))}
        </div>
      </CardBox>
    </>
  );
};

export default Photos;
