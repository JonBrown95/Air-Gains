'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/signin")
    }, [user])


        return (
            <div className="flex flex-col min-h-screen bg-slate-800 ">
              
            <main className="container mx-auto p-8">
              <h2 className="text-2xl font-semibold mb-4">Page to be completed.
              </h2>
              
            </main>
          </div>
        );
                
          
        }
        


export default Page;