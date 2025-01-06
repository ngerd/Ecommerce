import React from 'react'

function page() {
  return (
    <section className="bg-white">
            <div className="flex flex-col items-center">
                <div className='mt-6 w-full max-w-2xl rounded-lg bg-gray-50 p-8 shadow-lg'>
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl text-center">
                Login
                </h1>

                <form action="#" className="mt-8 grid grid-cols-4 gap-6">
            
                <div className="col-span-4">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                    <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className="col-span-4">
                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                    <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>
                <div className="col-span-6">
                    <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                        Remember me
                    </span>
                    </label>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4 justify-center">
                    <button
                    className="inline-block shrink-0 rounded-md border border-gray-600 bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-blue-500">
                    Log in
                    </button>
                </div>
                
                <div className="col-span-6">
                    <p className="text-sm text-gray-500">
                    Do not have account yet?  
                    <a href="/signup" className="text-gray-700 underline"> Create Here </a>
                    </p>
                </div>

                </form>
                </div>
            </div>
        </section>
  )
}

export default page
