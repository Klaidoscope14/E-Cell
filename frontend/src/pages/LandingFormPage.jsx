import React from "react";
import SceneCanvas from "../three/SceneCanvas";
import { Link } from "react-router-dom";

export default function StartupExpoInfo() {
  return (
    <div className="min-h-screen text-white relative bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950 overflow-hidden">
      {/* Background Scene */}
      <div className="fixed inset-0 z-0">
        <SceneCanvas />
      </div>

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-slate-950/60 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-16">
        <div className="w-full max-w-4xl bg-slate-900/70 backdrop-blur-md border border-slate-700/60 rounded-2xl shadow-2xl px-6 py-8 md:px-10 md:py-10 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-blue-400">
            Startup Expo – Registration Information
          </h1>

          {/* DISCLAIMER */}
          <div className="border border-red-500/40 bg-red-500/10 rounded-xl p-4 text-sm text-red-200">
            <strong className="block mb-1 text-red-400">Important Disclaimer</strong>
            Each startup must submit <strong>ONLY ONE</strong> registration form.
            Submitting multiple forms may lead to disqualification.
            Please carefully read the categories below and choose the form that
            best applies to your startup.
          </div>

          {/* SECTION 1 */}
          <section className="space-y-3 border-t border-slate-700 pt-6">
            <h2 className="text-xl font-semibold text-indigo-400">
              1. Startup Expo Registration – Standard Plan
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              This category is for startups participating in the Startup Expo at
              E-Summit 2026 under the Standard Plan with a dedicated exhibition
              space.
            </p>

            <p className="text-sm text-slate-300">
              Startups may opt for additional opportunities such as one-to-one
              mentorship sessions, investor pitching slots, demo stage
              presentations, promotional activities, and talent acquisition
              drives.
            </p>

            <p className="text-sm text-slate-300">
              All submissions will be verified by the organizing team, and
              all registered startups will be contacted with further instructions after verification.
            </p>

            <div className="pt-2">
              <Link
                to="/startup-expo-standard-form"
                className="inline-block px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-sm font-semibold transition"
              >
                Register
              </Link>
            </div>
          </section>

          
          {/* SECTION 2 */}
          <section className="space-y-3 border-t border-slate-700 pt-6">
            <h2 className="text-xl font-semibold text-indigo-400">
              2. Startup Expo Group Registration – Incubation Centres/Startup Cells/Startup Organisations
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              This category is exclusively for startups registering as a group
              through same incubation centre,startup cell or startup organisation for E-Summit 2026,
              IIT Patna.
            </p>

            <p className="text-sm text-slate-300">
              Startups registered under this form will be grouped into a shared
              exhibition booth. Booth size will depend on the total number of
              startups registered under the same incubation centre.
            </p>

            <p className="text-sm text-slate-300">
              Individual booths are <strong>not available</strong> under this
              category. Booth layout and final allocation will be decided by the
              organizing committee after registrations close.
            </p>

            <div className="pt-2">
              <Link
                to="/startup-expo-group-form"
                className="inline-block px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-sm font-semibold transition"
              >
                Register
              </Link>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-3 border-t border-slate-700 pt-6">
            <h2 className="text-xl font-semibold text-indigo-400">
              3. Startup Expo Registration – Government Colleges
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              This category is meant for student startups from Government
              Engineering Colleges participating under a special institutional
              discount. Each startup team must submit a separate form.
            </p>

            <div className="text-sm text-slate-300">
              <strong className="text-slate-200">Booth Allocation:</strong>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Single startup: 6 ft × 6 ft booth</li>
                <li>Two startups: Shared 6 ft × 6 ft booth</li>
                <li>Three startups: Shared 9 ft × 6 ft booth</li>
                <li>
                  More than three startups: Booth space allotted proportionally
                </li>
              </ul>
            </div>

            <p className="text-sm text-slate-300">
              <strong className="text-slate-200">Referral Team:</strong> For group
              discounts, the first team to submit the form becomes the Referral
              Team. All other teams from the same institution must enter the
              Referral Team Name exactly as submitted.
            </p>

            <p className="text-sm text-slate-300">
              <strong className="text-slate-200">Note:</strong> Accommodation and
              meals are not included and will be charged separately.
            </p>

            <div className="pt-2">
              <Link
                to="/startup-expo-government-form"
                className="inline-block px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-sm font-semibold transition"
              >
                Register
              </Link>
            </div>
          </section>


          

          {/* CONTACT */}
          <div className="border-t border-slate-700 pt-6 text-sm text-slate-300">
            <strong className="text-slate-200">For Queries:</strong>
            <p className="mt-1">Tushar Garg – 8168853283</p>
            <p>Aditya Mittal – 7060243777 </p>
          </div>
        </div>
      </div>
    </div>
  );
}
