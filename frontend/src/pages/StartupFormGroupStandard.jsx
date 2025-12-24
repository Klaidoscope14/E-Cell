import React, { useState } from "react";
import SceneCanvas from "../three/SceneCanvas";
import { useNavigate } from "react-router-dom";


/* ================= HELPERS ================= */
const InputField = ({ label, name, type = "text", value, onChange }) => {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="px-3 py-2 rounded-md bg-slate-800 border border-slate-600"
      />
    </label>
  );
}

const TextareaField = ({ label, name, value, onChange, required = true }) => {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        required={required}
        className="px-3 py-2 rounded-md bg-slate-800 border border-slate-600"
      />
    </label>
  );
}

const Addon = ({ name, label, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export default function StartupExpoStandardForm() {
  const [formData, setFormData] = useState({
    startupName: "",
    institutionName: "",
    startupStage: "",
    startupDescription: "",
    representativeName: "",
    designation: "",
    contactNumber: "",
    email: "",
    teamMembersCount: "",

    // Add-ons
    mentorship: false,
    investorPitch: false,
    ad15s: false,
    ad30s: false,
    demoStage: false,
    socialBoost: false,
    volunteerSupport: false,
    talentDrive: false,

    // Payment
    driveLink: "",
    transactionId: "",
    totalAmount: "",
    comments: "",
    declaration: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const payload = new FormData();
    payload.append("formType", "standard");

    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEET_LINK, {
        method: "POST",
        body: payload,
      });
      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
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
            href="https://www.google.com/url?q=https://chat.whatsapp.com/J8eDWcsFe1LFxRQhH7ymjD?mode%3Dhqrt3&sa=D&source=editors&ust=1766594126984883&usg=AOvVaw01TmN9Xw3T-dk7r1EnvlIa"
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

  /* ================= FORM ================= */
  return (
    <div className="min-h-screen text-white relative bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <SceneCanvas />
      </div>
      <div className="fixed inset-0 bg-slate-950/60 z-10 pointer-events-none" />

      <div className="relative z-20 flex justify-center min-h-screen px-4 py-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl px-6 py-8 md:px-10 space-y-8"
        >
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
            Startup Expo Registration - Standard Plan
          </h2>

          {/* ================= BASIC DETAILS ================= */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-400">
              Startup Details
            </h3>

            <InputField
              label="Startup Name *"
              name="startupName"
              value={formData.startupName}
              onChange={handleChange} />
            <InputField label="Institution / Organisation / Incubator Name *" name="institutionName" value={formData.institutionName} onChange={handleChange} />

            <fieldset className="border border-slate-700 rounded-lg p-4">
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

            <TextareaField
              label="Brief Description of Startup *"
              name="startupDescription"
              value={formData.startupDescription}
              onChange={handleChange}
            />
          </section>

          {/* ================= REPRESENTATIVE ================= */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-400">
              Team Representative
            </h3>
            <InputField label="Representative Name *" name="representativeName" value={formData.representativeName} onChange={handleChange} />
            <InputField label="Designation *" name="designation" value={formData.designation} onChange={handleChange} />
            <InputField label="Contact Number (WhatsApp preferred) *" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
            <InputField label="Email *" name="email" value={formData.email} onChange={handleChange}/>
            <InputField
              label="Number of Team Members Attending the Expo *"
              name="teamMembersCount"
              type="number"
              onChange={handleChange}
              value={formData.teamMembersCount}
            />
          </section>

          {/* ================= REGISTRATION PLAN ================= */}
          <section className="border border-slate-700 rounded-xl p-4 text-sm space-y-2">
            <h3 className="text-xl font-semibold text-indigo-400">
              Registration Plan
            </h3>
            <p className="font-semibold">Standard Plan – ₹5,000</p>
            <ul className="list-disc ml-6 text-slate-300">
              <li>Dedicated 6 × 6 exhibition booth</li>
              <li>Electricity, table & chairs</li>
              <li>Website listing  (group category)</li>
              <li>General mentorship session(common)</li>
              <li>Social media group mention</li>
              <li>Volunteer assistance</li>
              <li>Access to all guest lectures</li>
            </ul>
            <p className="text-red-400">
              Accommodation & meals are not included.
            </p>
          </section>

          {/* ================= ADD-ONS ================= */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-indigo-400">
              Add-Ons (Optional)
            </h3>
            <Addon name="mentorship" label="One-on-One Mentorship (10–15 min) – ₹1,500" />
            <Addon name="investorPitch" label="Investor Pitch Slot – ₹1,500" />
            <Addon name="ad15s" label="Advertisement (Up to 15s ) – ₹2,000" />
            <Addon name="ad30s" label="Advertisement (Up to 30s) – ₹3,000" />
            <Addon name="demoStage" label="Demo Stage Slot (5 min) – ₹1,500" />
            <Addon name="socialBoost" label="Social Media Boost – ₹1,000" />
            <Addon name="volunteerSupport" label="Volunteer Support – ₹1,000" />
            <Addon name="talentDrive" label="Talent Acquisition Drive at IIT Patna (for selected startup)" />
          </section>

          {/* ================= PAYMENT ================= */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-400">
              Payment Details
            </h3>

            <img
              src="/QR.jpeg"   // 🔁 PUT YOUR QR IMAGE PATH HERE
              alt="Payment QR"
              className=" w-full lg:w-[30vw] mx-auto rounded-lg"
            />

            <InputField label="Google Drive Link  (Payment Screenshot + ID Proof of All Team Members) Ensure the Drive link has public access *" name="driveLink" onChange={handleChange} value={formData.driveLink} />
            <InputField label="Transaction ID *" name="transactionId" onChange={handleChange} value={formData.transactionId} />
            <InputField label="Total Amount Paid *" name="totalAmount" onChange={handleChange} value={formData.totalAmount} />
            <TextareaField
              label="Additional Comments"
              name="comments"
              required={false}
              onChange={handleChange}
              value={formData.comments}
            />
          </section>

          {/* ================= DECLARATION ================= */}
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={handleChange}
              required
            />
            I  confirm that all information and payment details provided are accurate, and I agree to abide by the rules and decisions of the organizing committee.
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3 rounded-full font-semibold transition
    ${loading
                ? "bg-indigo-400 opacity-60 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-400"
              }`}
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>

        </form>
      </div>
    </div>
  );


}
