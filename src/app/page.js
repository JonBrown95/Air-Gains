'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { RecipeCard } from "./components/RecipeCard";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/signin")
    }, [user])

    const recipes = [
      {
        title: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish.",
      },
      {
        title: "Chicken Stir-Fry",
        description: "A delicious and quick stir-fry recipe.",
      },
    ];

        return (
          <div className="flex flex-col min-h-screen bg-slate-800 ">
              
              <main className="container mx-auto p-8">
                <h2 className="text-2xl font-semibold mb-4">Popular Recipes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
                </div>
              </main>
            </div>
          );
        }


export default Page;