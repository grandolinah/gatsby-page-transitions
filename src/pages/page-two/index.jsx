import React from "react"

import Card from "../../components/Card";

const FOOD = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

const IndexPage = () => {
  return (
    <div className="bg-indigo-500">
      {FOOD.map(([emoji, hueA, hueB]) => (
        <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div >
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>
