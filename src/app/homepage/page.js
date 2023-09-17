'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

        return (
          <div className="flex flex-col min-h-screen bg-slate-800 ">
              
              <main className="container mx-auto p-8">
                <h2 className="text-2xl font-semibold mb-4">Popular Recipes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Add recipe cards here */}
                  
                </div>
              </main>
            </div>
          );
        }


export default Page;