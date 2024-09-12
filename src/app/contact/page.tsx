'use client'
import { Meteors } from "@/components/ui/meteors"
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { FormEvent, useState } from "react";


function page() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams />
      <Meteors number={100}></Meteors>
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Зв'яжіться з нами</h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">Ми тут, щоб допомогти з будь-якими питаннями про наші курси, програми чи події. Звертайтесь і дайте нам знати, як ми можемо підтримати вас у вашій музичній подорожі.</p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ваша електронна адреса"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ваше повідомлення"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Надіслати повідомлення
          </button>
        </form>
      </div>
    </div>
  )
}

export default page
