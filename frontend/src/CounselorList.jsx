

import React, { useState } from "react";

const CounselorList = () => {
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState("");

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Main Content */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <h1 className="text-secondary-900 text-4xl font-bold tracking-tighter">
                Find Your Support
              </h1>
              <p className="text-secondary-600 text-lg mt-2">
                Connect with experienced counselors specializing in student
                mental health.
              </p>
            </div>

            {/* Search / Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-secondary-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative col-span-1 md:col-span-3">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary-500">
                    search
                  </span>
                  <input
                    type="text"
                    className="form-input w-full rounded-lg border-secondary-300 bg-secondary-50 pl-10 h-12 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Search for counselors by name, specialty..."
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <select className="form-select w-full rounded-lg border-secondary-300 bg-secondary-50 focus:ring-primary-500 focus:border-primary-500">
                  <option>Location</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                </select>
                <select className="form-select w-full rounded-lg border-secondary-300 bg-secondary-50 focus:ring-primary-500 focus:border-primary-500">
                  <option>Session Type</option>
                  <option>In-Person</option>
                  <option>Tele-counselling</option>
                </select>
                <select className="form-select w-full rounded-lg border-secondary-300 bg-secondary-50 focus:ring-primary-500 focus:border-primary-500">
                  <option>Language</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Marathi</option>
                </select>
              </div>
            </div>

            {/* Counselor Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Dr. Anika Sharma",
                  desc: "Specializes in anxiety and stress management. Available Tuesdays and Thursdays.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVC_5qjKZUsgJt5_ab7aRQPxMfWMpxwJlw1tEp964cuM0Jtn4mINZA_gdJL5U4c9tqMzRtIVW37B4ju1Qga2GT2lfaAYSKGGPO-IzoBNr5HDhpLbuE5VmuMYGOqWCcm6az9nJy8emUcEcuYqUR-vchOHMz3eRuy1OZ52kmyVPBfBD8QyJk7_WX-74AZt8NRnri5F5aSsA9bXLRpd5ZPQ2DDun3m5Gj1EsqJewVP584V38oC7tIGxsWYWRg8nFKlQMGxhhoueuuleo",
                },
                {
                  name: "Dr. Rohan Verma",
                  desc: "Expert in academic pressure and career counseling. Available Mondays and Wednesdays.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSiQXrHkOiZvTFaLHtIexEZyDmezDDJzvFz6SpGaYDmelT_sVqKKzaAZ7dHwDPOFGtJ_3CPECeiqs_DeOcfTe9cwJ9ZOlqe3pDf2T0BR95LMs0Jo85DU6N6MHBd9dDD0-nL_bMEIJfxs_k0MJRlPFa_lDsXHWOUtoSkJJLjM9zZtSehT_CdCU56a8Z7uHav4mBsmKdYtQYVHz8V5AbfMMXF6RFs05ObyWKNE0SfxudMTtYcgUsNpExJyoOLko5jWIksq8KvS9zTmg",
                },
                {
                  name: "Dr. Priya Kapoor",
                  desc: "Focuses on relationship and personal development. Available Fridays and Saturdays.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmc0nAeojR_qOptVEYrBPpcDLYYPSWpZKucyF7WAIAdSpwiuZcqqDCeNqEvCz-Hj81VRPi_J9_2WOwGKcuNAAovz_nk7FjAXV0wd3epD8tgkXwUaMupUGTzOB0xvwng4CGzafaClDz9YU3ktWBYotGOIjZDZtmGgPEdnxFRWIrOujx--zl5gNisXj5l2JGZx94C5SpCAL4q8s-MhIAPr5s1ZRRaGmZnPO1mrkbwBdvdECLsk0L593oJa_bScsPL1z7EeKeltzdW68",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden flex flex-col"
                >
                  <div
                    className="w-full h-48 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${c.img})` }}
                  ></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-secondary-900 text-xl font-bold">
                      {c.name}
                    </h3>
                    <p className="text-secondary-600 text-sm mt-1 flex-grow">
                      {c.desc}
                    </p>
                    <button onClick={() => setSelected(c.name)} className="mt-4 w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary-500 text-white text-sm font-bold leading-normal hover:bg-primary-600 transition-colors">
                      Book Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav className="flex items-center justify-center gap-2 mt-8">
              <a className="flex w-10 h-10 items-center justify-center rounded-lg hover:bg-secondary-100 text-secondary-600" href="#">
                <span className="material-symbols-outlined">chevron_left</span>
              </a>
              {[1, 2, 3, 4].map((p) => (
                <a
                  key={p}
                  className={`text-sm font-bold flex w-10 h-10 items-center justify-center rounded-lg ${
                    p === 1
                      ? "bg-primary-500 text-white"
                      : "text-secondary-600 hover:bg-secondary-100 font-medium"
                  }`}
                  href="#"
                >
                  {p}
                </a>
              ))}
              <a className="flex w-10 h-10 items-center justify-center rounded-lg hover:bg-secondary-100 text-secondary-600" href="#">
                <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </nav>
          </div>
          {/* Booking Modal */}
          {selected && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <h3 className="text-lg font-bold mb-2">Book with {selected}</h3>
                <p className="text-sm text-secondary-700 mb-4">Pick a convenient slot. This is a demo — no backend calls.</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {["Mon 10:00", "Tue 11:30", "Wed 14:00", "Thu 16:00"].map((s) => (
                    <button key={s} onClick={() => { localStorage.setItem("mindfulu_booking", JSON.stringify({ counselor: selected, slot: s })); setToast(`Booked ${s}`); setSelected(null); }} className="px-3 py-2 rounded-md bg-[var(--primary-color)]/10 text-[var(--primary-color)] text-sm font-semibold hover:bg-[var(--primary-color)]/20">{s}</button>
                  ))}
                </div>
                <div className="flex justify-end gap-2">
                  <button onClick={() => setSelected(null)} className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 text-sm font-semibold hover:bg-gray-200">Cancel</button>
                </div>
              </div>
            </div>
          )}
          {toast && (
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-full shadow">
              {toast}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CounselorList;
