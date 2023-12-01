import React, { FC } from 'react';

interface CircleClickProps {
  onCircleClick: (index: number) => void;
  currentImgIndex: number;
}

const CircleList: React.FC<CircleClickProps> = ({
  onCircleClick,
  currentImgIndex,
}: CircleClickProps) => {
  const array = [0, 1, 2, 3, 4, 5];
  const circles = array.map((index) => (
    <li key={index}>
      <span
        className={
          index === currentImgIndex ? 'circle filled-circle' : 'circle'
        }
        onClick={() => {
          onCircleClick(index);
        }}></span>
    </li>
  ));
  return <ol className="dotsUl flex">{circles}</ol>;
};

export default CircleList;
