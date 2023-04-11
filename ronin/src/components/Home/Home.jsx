import React from "react";
import HeaderCarousel from "../Carouel/HeaderCarousel";
import BottomCardsOfCarousel from "../Carouel/BottomCardsOfCarousel";
import D_O_T_W from "../Design_Of_the_week/D_O_T_W";
import TC from "../Trending_Categories/TC";
import LandscapeImage from "../Carouel/LandScape_Image";

const Carousel_imageArray = [
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/college-banner-common-desktop-1681194853.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/1x1-fresh-summer-arrivals-common.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/1x1-joggers-common-w-bdayunit-1680263895.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/non-tribe-midweekmania-common-revised-1681224219.jpg",
  },
];

const Carousel_imageArray_2 = [
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/1x1-cotm-common-version02--1--1680677351.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/static-1x1-NoFade-new--1--1680669546.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/1x1-pyjamas-common-1680268331.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/graphic-tee-bday-1680263072.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/1x1-bdaylogo-bags-common-1680268706.jpg",
  },
];
const imagesArray = [
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-new-Printed-Tshirt--1--1675842429.png",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-ovrszd-1676537032.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-Shorts-Men-1678950685.png",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/vests-category-icon-1675844905.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-1673010261-1676129954.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tshirts-1668773246.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-overszd-w--1--1677658025.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-Fashion-Tops-women-1681127928.png",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668773245.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-w-dresses-1675144062.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-boyfriend-tees-1675319582.jpg",
  },
];
const imagesArray_2 = [
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-B3AT999-1679317081-1680264517.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-airy-sleeveless-tshirts-withbdayunit-1680673288.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-airy-sleeveless-tshirts-withbdayunit-1680673288.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-shorts-withbdayunit-1680267707.jpg",
  },
];
const imagesArray_3 = [
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-Jeans-men-1672915059.png",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-boxers-men-1672907482.png",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1669360792.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-w-pyjamas-2-1675144063.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-Shorts-Women-1678950685.png",
  },
];
const imagesArray_4 = [
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-Mobile-covers-1672907490.png",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-sliders-men-1672907494.png",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1672907481.png",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-Phone-gripper-1678944026.png",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/mugs-category-box-1678791481.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/category-box-caps-1672907483.png",
  },
];
const imagesArray_5 = [
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-APR2023-DENIM-stciker-common-sticker-01-1680600198.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/MIDSIZE-bdaylogo-bts-women-1680268878.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/plus-size-bday-1680263074.jpg",
  },
  {
    image:
      "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-cotton-comfort-combos-with-unit-1680263897.gif",
  },
];
export default function Home() {
  return (
    <>
      <HeaderCarousel imageArray={Carousel_imageArray} />
      <LandscapeImage src="https://images.bewakoof.com/uploads/grid/app/thin-strip-non-tribe-desktop-1681214905.jpg" />
      <BottomCardsOfCarousel />
      <D_O_T_W />
      <TC
        imagesArray={imagesArray}
        columns={6}
        text="TRENDING CATEGORIES"
        pt={5}
      />
      <TC
        imagesArray={imagesArray_2}
        columns={2}
        text="TOO HOT TO BE MISSED"
        pb={3}
        gap={3}
      />
      <TC
        imagesArray={imagesArray_3}
        columns={6}
        text="CATEGORIES TO BAG"
        pt={5}
      />
      <HeaderCarousel imageArray={Carousel_imageArray_2} />
      <TC
        imagesArray={imagesArray_4}
        columns={6}
        text="TOP ACCESSORIES"
        pt={5}
      />
      <TC
        imagesArray={imagesArray_5}
        columns={2}
        text="OUR BEST PICKS"
        pb={3}
        gap={3}
      />
      <LandscapeImage
        src={
          "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg"
        }
      />
      <LandscapeImage
        src={
          "https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
        }
      />
    </>
  );
}
