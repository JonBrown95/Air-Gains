"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { RecipeCard } from "./components/RecipeCard";
import { useSession, signOut } from 'next-auth/react';

function Page() {
  const router = useRouter();
  const { data: session } = useSession();

  React.useEffect(() => {
    if (!session) {
      router.push("/signin");
    }
  }, [session, router]);

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false, callbackUrl: '/signin' });
     
      router.push("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

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
    <div className="flex flex-col min-h-screen bg-slate-800">
      <main className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Popular Recipes</h2>
          {session && (
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          )}
        </div>
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
