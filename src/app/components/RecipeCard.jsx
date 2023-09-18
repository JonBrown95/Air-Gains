import Link from "next/link";
import React from "react";

export const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg">
        <h3 className="text-lg text-black">{recipe.title}</h3>
        <p className="text-black">{recipe.description}</p>
    </div>
  )
};
