import Link from "next/link";
import { MdOutlinePsychology, MdOutlineLightbulb,MdTrendingUp } from "react-icons/md";
export default function Home() {
  return (
    <div className="">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-linear-to-b from-[#191022] to-black">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5 sm:px-4 md:px-16 lg:px-32 xl:px-64">
            <div className="layout-content-container flex w-full flex-1 flex-col">
              <div className="flex flex-col gap-24 px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16">
                <div className="flex flex-col gap-4 text-center">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">
                    About Drip Check
                  </h1>
                  <div className="text-[#ab9cba] text-base font-normal leading-normal max-w-2xl mx-auto sm:text-lg">
                    Our mission is to help you rate your outfits, discover trends, and level up your style game using AI.
                    See how your drip measures up.
                  </div>
                </div>
                <div className="flex flex-col gap-10">
                  <div>
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                      How It Works
                    </h2>
                    <div className="text-[#ab9cba] text-base font-normal leading-normal">
                      Getting a rating on your fit is simple. Just upload a photo of your outfit, our AI will analyze the
                      style, and you'll get an instant score and feedback. It's like having a personal stylist in your
                      pocket, ready 24/7.
                    </div>
                  </div>
                  <div>
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                          <div className="material-symbols-outlined text-3xl bg-violet-700/20 p-2 rounded-full "><MdOutlinePsychology fill="#7b3aff" /></div>
                        </div>
                        <h3 className="text-lg font-bold text-white">AI-Powered Analysis</h3>
                        <div className="text-[#ab9cba] text-sm">
                          Our smart AI evaluates your outfit based on color theory, fit, and current trends.
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                          <div className="material-symbols-outlined text-3xl bg-violet-700/20 p-2 rounded-full "><MdOutlineLightbulb fill="#7b3aff" /></div>
                        </div>
                        <h3 className="text-lg font-bold text-white">Personalized Feedback</h3>
                        <div className="text-[#ab9cba] text-sm">
                          Receive actionable tips and suggestions to improve your look and elevate your style.
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                          <div className="material-symbols-outlined text-3xl bg-violet-700/20 p-2 rounded-full"><MdTrendingUp fill="#7b3aff"/></div>
                        </div>
                        <h3 className="text-lg font-bold text-white">Trend Meter &amp; Scoring</h3>
                        <div className="text-[#ab9cba] text-sm">Get an objective score out of 10 and see how your style stacks up against the latest drip.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-xl border border-primary/50 bg-primary/20 px-6 py-8 text-center sm:px-8 sm:py-10">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">Ready to rate your fit?</h3>
                  <div className="text-[#ab9cba] max-w-md">
                    Upload your best outfit and let our AI do the rest. Find out if your drip is fire or if it's time for
                    a style refresh.
                  </div>
                  <button className="mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    <Link href="/2" className="truncate">Check Your Drip Now</Link>
                  </button>
                </div>
              </div>
              <footer className="mt-auto border-t border-solid border-white/10 px-4 py-6 sm:px-6 md:px-10">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                  <div className="text-sm text-[#ab9cba]">© 2026 Drip Check. All Rights Reserved.</div>
                  <div className="flex items-center gap-4">
                    <a className="text-[#ab9cba] hover:text-white transition-colors" data-alt="Instagram icon" href="https://www.instagram.com" target="_">
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
