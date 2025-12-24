import React, { useState } from "react";
import SceneCanvas from "../three/SceneCanvas";
import { useNavigate } from "react-router-dom";
import { Phone } from 'lucide-react';

export default function StartupExpoForm() {
  const [formData, setFormData] = useState({
    institution: "",
    teamName: "",
    startupStage: "",
    representativeName: "",
    phone: "",
    email: "",
    registrationOption: "",
    addOns: {
      privatePitch: false,
      mentorship: false,
      ad15s: false,
      ad30s: false,
      demoStage: false,
      socialBoost: false,
      volunteerSupport: false,
      talentDrive: false,
    },
    paymentLink: "",
    transactionId: "",
    referralTeamName: "",
    referralRepName: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        addOns: { ...prev.addOns, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = new FormData();
  payload.append("formType", "govt");

  // add normal fields
  Object.entries(formData).forEach(([key, value]) => {
    if (key !== "addOns") {
      payload.append(key, value);
    }
  });

  // add addOns as individual fields
  Object.entries(formData.addOns).forEach(([key, value]) => {
    payload.append(`addOns_${key}`, value);
  });

  try {
    await fetch(
      // "https://script.google.com/macros/s/AKfycbzMPCwEhbwC7vWsZn0cj6kTYDVBSDN9wk0Q5TmAsqc_XbbomeswK7HsvS8GXt4tubSu/exec",
      import.meta.env.VITE_GOOGLE_SHEET_LINK,
      {
        method: "POST",
        body: payload,
      }
    );
    setSubmitted(true);

    console.log("Form submitted successfully");
  } catch (err) {
    console.error(err);
    alert("Submission failed");
  }
};
  
  /* ================= SUCCESS PAGE ================= */
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-4">
        <div className="fixed inset-0 z-0">
          <SceneCanvas />
        </div>

        <div className="relative z-10 bg-slate-900/80 border border-slate-700 rounded-2xl shadow-2xl p-10 max-w-lg text-center backdrop-blur-md">
          <h1 className="text-3xl font-bold text-green-400 mb-4">
            Registration Successful 🎉
          </h1>

          <p className="text-slate-300 mb-6">
            Your submission has been received. Our team will verify the details
            and contact you shortly.
          </p>

          <a
            href="https://chat.whatsapp.com/J8eDWcsFe1LFxRQhH7ymjD?mode=hqrt3"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-green-500 hover:bg-green-400 font-semibold transition mb-4"
          >
            Join Official WhatsApp Group
          </a>

          <div>
            <button
              onClick={() => navigate("/")}
              className="text-sm text-slate-400 hover:text-white underline"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
} 

  return (
    <div className="min-h-screen text-white relative bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950  overflow-hidden">
      {/* Scene Canvas Background */}
      <div className="fixed inset-0 z-0">
        <SceneCanvas />
      </div>

      {/* Dark overlay for better contrast (optional) */}
      <div className="fixed inset-0 bg-slate-950/60 z-10 pointer-events-none" />

      {/* Centered form container */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-slate-900/70 backdrop-blur-md border border-slate-700/60 rounded-2xl shadow-2xl px-6 py-8 md:px-10 md:py-10 space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white-200 to-blue-400  ">
            Startup Expo Registration
          </h2>

          <div className="text-slate-200 flex flex-col justify-center items-center text-center">
            This form is for student startups from Government Engineering Colleges 
            participating in the Startup Expo under the special institutional discount. 
            Please go through the below instructions carefully.
          </div>

          <ul className="text-slate-300 text-sm border border-slate-700 rounded-lg p-4"> <strong>Booth Allocation<br/></strong><br/>
            <li>• Single startup: 6 ft × 6 ft booth</li>
            <li>• Two startups: Shared 6 ft × 6 ft booth</li>
            <li>• Three startups: Shared 9 ft × 6 ft booth</li>
            <li>• More than three startups: Additional booth space will be allotted proportionally as needed</li>
          </ul>

          <ul className = "text-slate-300 text-sm border border-slate-700 rounded-lg p-4"><strong>Referral Team (Mandatory for Group Discounts)<br/></strong><br/>
            <li>• For institutions registering two or more startups, the first team to submit the form will be considered the Referral Team.</li>
            <li>• This team’s information will be used to verify and group all other startups from the same college for applying the institutional discount.</li>
          </ul>

          <ul className = "text-slate-300 text-sm border border-slate-700 rounded-lg p-4"><strong>Instructions<br/></strong><br/>
            <li>• Submit <strong>one form per startup team.</strong></li>
            <li>• For teams availing group discounts, <strong>all other teams MUST enter the Referral Team Name</strong> exactly as submitted by the first team.</li>
            <li>• Upload a Google Drive link with the payment screenshot and ID proof of all team members (public access required).</li>
            <li>• Accommodation and meals are not included in the registration and <strong>will have separate charges.</strong></li>
            <li>• Fill all text fields in <strong>CAPITAL LETTERS.</strong></li>
          </ul>

          {/* <div className="text-slate-300 text-sm border border-slate-600 rounded-lg p-4 space-y-3">
            <div className="font-medium">
              For queries, contact:
            </div>

            <div className="flex flex-row justify-evenly gap-4">
              <div className="flex items-center gap-2 border border-slate-600 rounded-md px-3 py-2">
                <Phone className="size-5" />
                <span>Aditya Mittal : 7060243777</span>
              </div>

              <div className="flex items-center gap-2 border border-slate-600 rounded-md px-3 py-2">
                <Phone className="size-5" />
                <span>Tushar Garg : 8168853283</span>
              </div>
            </div>
          </div> */}

          {/* Grid layout for fields */}
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1 text-sm">
                Institution/College Name *
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm">
                Team Name *
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>
            </div>

            <fieldset className="border border-slate-700 rounded-lg p-3 md:p-4 space-y-2">
              <legend className="text-sm font-semibold px-1">
                Startup Stage *
              </legend>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                {[
                  "Ideation and Pre-Seed",
                  "Seed and MVP",
                  "Early Stage and Growth",
                  "Expansion and Late Stage",
                ].map((stage) => (
                  <label key={stage} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="startupStage"
                      value={stage}
                      checked={formData.startupStage === stage}
                      onChange={handleChange}
                      required
                    />
                    <span>{stage}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1 text-sm">
                Team Representative Name *
                <input
                  type="text"
                  name="representativeName"
                  value={formData.representativeName}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm">
                Team Representative Phone Number *
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1 text-sm">
              Team Representative Email ID *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <fieldset className="border border-slate-700 rounded-lg p-3 md:p-4 space-y-2">
              <legend className="text-sm font-semibold px-1">
                Registration Fees Options *
              </legend>
              <div className="space-y-2 text-sm">
                {[
                  { label: "Single Startup (₹4500)", value: "single" },
                  {
                    label: "2 Startups from same college (₹2500 each)",
                    value: "two",
                  },
                  { label: "3+ Startups (₹2000 each)", value: "threePlus" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="registrationOption"
                      value={opt.value}
                      checked={formData.registrationOption === opt.value}
                      onChange={handleChange}
                      required
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="border border-slate-700 rounded-lg p-3 md:p-4 space-y-2">
              <legend className="text-sm font-semibold px-1">Add-ons</legend>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="privatePitch"
                    checked={formData.addOns.privatePitch}
                    onChange={handleChange}
                  />
                  <span>One to One Private Pitching (₹1000)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="mentorship"
                    checked={formData.addOns.mentorship}
                    onChange={handleChange}
                  />
                  <span>Private Mentorship (₹1000)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="ad15s"
                    checked={formData.addOns.ad15s}
                    onChange={handleChange}
                  />
                  <span>Advertisement Play 15s (₹2000)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="ad30s"
                    checked={formData.addOns.ad30s}
                    onChange={handleChange}
                  />
                  <span>Advertisement Play 30s (₹3000)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="demoStage"
                    checked={formData.addOns.demoStage}
                    onChange={handleChange}
                  />
                  <span>Demo Stage Slot (₹1500)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="socialBoost"
                    checked={formData.addOns.socialBoost}
                    onChange={handleChange}
                  />
                  <span>Social Media Boost Pack (₹1000)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="volunteerSupport"
                    checked={formData.addOns.volunteerSupport}
                    onChange={handleChange}
                  />
                  <span>Dedicated Volunteer Support (₹1000)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="talentDrive"
                    checked={formData.addOns.talentDrive}
                    onChange={handleChange}
                  />
                  <span>Talent Acquisition Drive (₹0)</span>
                </label>
              </div>
            </fieldset>

            <div className="text-sm text-slate-300 border border-slate-700 rounded-lg p-4">
              <p>
                <strong>Note:</strong> Please make the payment to the following
                QR.
              </p>
              <img className="flex align-middle max-h-45" src="/QR.jpeg" alt="Payment QR Code" />
            </div>

            <label className="flex flex-col gap-1 text-sm">
              Payment Screenshot + ID Card Drive Link *
              <input
                type="url"
                name="paymentLink"
                value={formData.paymentLink}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Transaction ID *
              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                required
                className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1 text-sm">
                Referral Team Name (If any)
                <input
                  type="text"
                  name="referralTeamName"
                  value={formData.referralTeamName}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm">
                Referral Team Representative Name
                <input
                  type="text"
                  name="referralRepName"
                  value={formData.referralRepName}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-md bg-slate-800/70 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-sm font-semibold shadow-lg shadow-indigo-500/30 transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}