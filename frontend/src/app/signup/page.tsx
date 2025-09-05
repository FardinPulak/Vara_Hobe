'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
//import Cookies from "js-cookie"

// interface SignupInputs {
//   name: string;
//   email: string;
//   password: string;
// }
export default function Signup(){
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true)

    

    if (!name || !email || !password) {
      setError('All fields are required!');
      return;
    }

    const data = { name, email, password }
    try {
      
      const response = await fetch("http://localhost:3001/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  
        },
        credentials: "include",
        body: JSON.stringify(data),
        
      })
      if (response.ok) {
        alert("Signing Done!!")
        //const responseData = await response.json()
        //const token = responseData.token

       // Cookies.set("token", token, { expires: 7, secure: false, sameSite: "Strict" })

        router.push("/login")
      } else {
        alert("Sighnig failed")
      }
    } 
    catch (error) {
      console.error("Error registering:", error)
      alert("An error occurred while registering")
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="string"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              placeholder="Enter your name"
              required
            
            />
            
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="string"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type={password ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              placeholder="Enter your password"
              required
            />
          </div>
 
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
}



