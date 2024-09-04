'use client'
import Link from "next/link";
export default function Home() {
  return (
    <div className="container-home min-h-screen">
      
      <nav className="w-[90%] md:hidden mx-auto md:w-full">
        <div className="container-header mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-xl md:hidden font-bold">LeetCode</div>
          <div className="space-x-4">
            <a href="#" className="text-orange-400 hover:text-black hover:bg-orange-400 px-4 py-1 rounded-xl transition-all">Premium</a>
            <a href="#" className="text-white hover:text-black hover:bg-white px-4 py-1 rounded-xl transition-all">Explore</a>
            <a href="#" className="text-white hover:text-black hover:bg-white px-4 py-1 rounded-xl transition-all">Product</a>
            <a href="#" className="text-white hover:text-black hover:bg-white px-4 py-1 rounded-xl transition-all">Developer</a>
            <a href="#" className="text-white hover:text-black hover:bg-white px-4 py-1 rounded-xl transition-all">Sign In</a>
          </div>
        </div>
      </nav>

      <header className="container mt-20 md:mt-0 md:flex-col flex gap-[10rem] justify-center items-center mx-auto px-4 py-16 text-center">
        <div className="left md:hidden">
          <img src="card1.png" alt="png" className="w-[25rem] rounded-3xl rotate-[-12deg]" />  
        </div>
        <div className="right w-[35%] md:w-[90%]">
          <h1 className="text-4xl font-bold mb-7">A New Way to Learn</h1>
          <p className="text-lg text-gray-400 mb-8 md:text-[17px]">LeetCode is the best platform to help you enhance your skills, expand your knowledge, and prepare for technical interviews.</p>
          <button className="button text-white">Create Account</button>
        </div>
      </header>

      <div className="w-full md:px-0 new-container md:flex-col flex justify-center itesm-center px-24 py-14">
        
        <section className="w-full hidden md:flex justify-center itesm-center">
          <img className="shake w-[22rem] md:w-[17rem] rounded-xl" src="pic1.png" alt="png" />
        </section>
        
        <section className="container md:w-full flex justify-center itesm-center flex-col mx-auto px-4 md:px-0 py-16 w-[45%]">
          <h2 className="text-2xl text-green-500 md:justify-center gap-4 font-bold mb-4 flex items-center justify-end w-ful">
            Start Exploring
            <img className="w-16 md:hidden" src="icon1.png" alt="png" />
          </h2>
          <p className="text-lg text-right md:px-8 md:text-center md:text-[16px] text-gray-700 mb-8">Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career.</p>
          <Link href="/" className="text-blue-400 md:text-center hover:text-blue-300 transition-all">Get Started</Link>
        </section>

        <section className="w-[40%] md:hidden flex justify-center itesm-center">
          <img className="shake w-[22rem] rounded-xl" src="pic1.png" alt="png" />
        </section>
      </div>

      <div className="new-container md:flex-col flex justify-center items-center flex-wrap px-24 md:px-10">

        <section className="container flex justify-center itesm-center flex-col mx-auto px-4 py-16 w-[45%] md:w-full">
          <h2 className="text-2xl text-blue-500 gap-4 font-bold mb-4 flex flex-col md:items-center items-start justify-start w-ful">
            <img className="w-[10rem]" src="3icon.png" alt="png" />
            Questions, Community & Contests
          </h2>
          <p className="text-lg md:text-center text-left text-gray-700 mb-8">Over 3450 questions for you to practice. Come and join one of the largest tech communities with hundreds of thousands of active users and participate in our contests to challenge yourself and earn rewards.</p>
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-all">View Questions</Link>
        </section>

        <section className="container flex justify-center itesm-center flex-col mx-auto px-4 py-16 w-[45%] md:w-full">
          <h2 className="text-2xl text-yellow-500 gap-4 font-bold mb-4 flex flex-col md:items-center items-start justify-start w-ful">
            <img className="w-[8rem]" src="2icon.png" alt="png" />
            Companies & Candidates
          </h2>
          <p className="text-lg md:text-center text-left text-gray-700 mb-8">Not only does LeetCode prepare candidates for technical interviews, we also help companies identify top technical talent. From sponsoring contests to providing online assessments and training, we offer numerous services to businesses.</p>
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-all">Business Opportunities</Link>
        </section>

        <section className="container flex justify-center itesm-center flex-col mx-auto px-4 py-16 w-[45%] md:w-full">
          <h2 className="text-2xl text-green-500 gap-4 font-bold mb-4 flex flex-col md:items-center items-center justify-center w-ful">
            <img className="w-20" src="icon1.png" alt="png" />
            Developer
          </h2>
          <p className="text-lg md:text-center text-center text-gray-700 mb-8">We now support 14 popular coding languages. At our core, LeetCode is about developers. Our powerful development tools such as Playground help you test, debug and even write your own projects online.</p>
        </section>

        <div className="code-box w-[90%] md:flex-col flex justify-center items-center">
          <div className="left md:w-full w-[60%]">
            <div className="box md:w-[22rem] rounded-xl shadow-sm bg-gray-100 shadow-gray-800 w-[45rem] h-[23rem]">
              
            </div>
          </div>
          <div className="right md:hidden w-[20%] flex justify-start mb-auto items-start flex-col">
            <button className="w-[10rem] py-3 text-left text-blue-400 my-1 rounded-sm shadow-blue-200 shadow-sm">Linked List</button>
            <button className="w-[10rem] py-3 text-left text-blue-400 my-1 rounded-sm shadow-blue-200 shadow-sm">Binary Tree</button>
            <button className="w-[10rem] py-3 text-left text-blue-400 my-1 rounded-sm shadow-blue-200 shadow-sm">Fibonacci</button>
            <button className="mt-4 text-blue-300">Create Playground</button>
          </div>
        </div>

        <section className="container flex justify-center itesm-center flex-col mx-auto px-4 py-16 w-full">
          <h2 className="text-2xl text-red-500 gap-4 font-bold mb-4 flex flex-col items-center justify-center w-full">
            <img className="w-20" src="redi.png" alt="png" />
            Made with  in SF
          </h2>
          <p className="text-lg w-[55%] md:w-full mx-auto text-center text-gray-700 mb-5">We now support 14 popular coding languages. At our core, LeetCode is about developers. Our powerful development tools such as Playground help you test, debug and even write your own projects online.</p>
          <img className="w-[70rem] mx-auto" src="i.png" alt="png" />
          <p className="text-lg w-[55%] md:w-full mx-auto text-center text-gray-700 mt-5">If you are passionate about tackling some of the most interesting problems around, we would love to hear from you.</p>

          <Link href="/" className="text-blue-400 mx-auto mt-7 hover:text-blue-300 transition-all">Join Our Team</Link>

        </section>

        <div className="footer">
          <img src="footer.png" alt="png" className="w-full md:hidden" />
          <img src="fm.png" alt="png" className="w-full hidden md:flex" />
        </div>

      </div>

    </div>
  );
}
