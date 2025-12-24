import React, { useState } from "react";
import SceneCanvas from "../three/SceneCanvas";
import { useNavigate } from "react-router-dom";

export default function StartupExpoForm() {
  const [formData, setFormData] = useState({
    startupName: "",
    institutionName: "",
    institutionEmail: "",
    startupStage: "",
    startupDescription: "",
    representativeName: "",
    designation: "",
    contactNumber: "",
    email: "",
    teamMembersCount: "",
  });


  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
   payload.append("formType", "group");
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });
    

    try {
      await fetch(
        import.meta.env.VITE_GOOGLE_SHEET_LINK,
        {
          method: "POST",
          body: payload,
        }
      );
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-4">
        <div className="fixed inset-0 z-0">
          <SceneCanvas />
        </div>
        <div className="bg-slate-900/80 border border-slate-700 rounded-2xl shadow-2xl p-10 text-center max-w-md backdrop-blur-md z-10">
          <h1 className="text-3xl font-bold mb-4 text-blue-500">
            Form Submitted Successfully!
          </h1>
          <p className="text-slate-300 mb-6">
            Thank you for registering for the Startup Expo.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 rounded-full bg-blue-500 hover:bg-indigo-400 font-semibold transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <SceneCanvas />
      </div>

      <div className="fixed inset-0 bg-slate-950/60 z-10 pointer-events-none" />

      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-slate-900/70 backdrop-blur-md border border-slate-700/60 rounded-2xl shadow-2xl px-6 py-8 md:px-10 md:py-10 space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-blue-400">
            Startup Expo Group Registration 
          </h2>

          <div className="space-y-4">
            {/* Startup Name */}
            <label className="flex flex-col gap-1 text-sm">
              Startup Name (CAPITAL LETTERS) *
              <input
                type="text"
                name="startupName"
                value={formData.startupName}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            {/* Institution */}
            <label className="flex flex-col gap-1 text-sm">
              Institution / Organisation / Incubator Name (CAPITAL LETTERS) *
              <input
                type="text"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            {/* Institution Email */}
            <label className="flex flex-col gap-1 text-sm">
              Institution / Organisation / Incubator Official Email ID *
              <input
                type="email"
                name="institutionEmail"
                value={formData.institutionEmail}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            {/* Startup Stage */}
            <fieldset className="border border-slate-700 rounded-lg p-4 space-y-2">
              <legend className="text-sm font-semibold px-1">
                Startup Stage *
              </legend>
              {["Ideation", "Prototype or MVP", "Early Traction", "Growth Stage"].map(
                (stage) => (
                  <label key={stage} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="startupStage"
                      value={stage}
                      checked={formData.startupStage === stage}
                      onChange={handleChange}
                      required
                    />
                    {stage}
                  </label>
                )
              )}
            </fieldset>

            {/* Description */}
            <label className="flex flex-col gap-1 text-sm">
              Brief Description of Your Startup *
              <textarea
                name="startupDescription"
                value={formData.startupDescription}
                onChange={handleChange}
                required
                rows={4}
                className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            {/* Representative */}
            <label className="flex flex-col gap-1 text-sm">
              Team Representative Name (CAPITAL LETTERS) *
              <input
                type="text"
                name="representativeName"
                value={formData.representativeName}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Designation *
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Contact Number (WhatsApp preferred) *
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Email ID *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Number of Team Members Attending the Expo *
              <input
                type="number"
                min="1"
                name="teamMembersCount"
                value={formData.teamMembersCount}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-sm font-semibold shadow-lg shadow-indigo-500/30 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
