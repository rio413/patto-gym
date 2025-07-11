export default function Home() {
  return (
    <main className="h-screen bg-[#1A1A1A] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-white mb-6 font-sans">
        Patto Brain Gym
      </h1>
      
      <p className="text-xl text-gray-300 mb-12 font-sans">
        お前のカチコチ脳、鍛え直してやる。
      </p>
      
      <button className="bg-[#FACC15] text-black px-8 py-4 rounded-lg text-xl font-bold hover:brightness-110 transition-all duration-200 font-sans">
        WORKOUT START
      </button>
    </main>
  );
}
