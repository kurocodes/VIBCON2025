import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { toast, Bounce } from "react-toastify";

export default function FeedbackForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [countdown, setCountdown] = useState("");

  const enableDate = new Date("2025-11-06T00:00:00");
  const inputFieldStyle =
    "w-full border border-[var(--color-accent)] p-2 rounded bg-white text-black outline-[var(--color-secondary)]";

  // Countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = enableDate - now;

      if (diff <= 0) {
        setIsEnabled(true);
        setCountdown("");
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/submit-feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.status === "success") {
        toast.success("Feedback submitted!", { theme: "colored", transition: Bounce });
        reset();
      } else {
        toast.error("Failed to submit feedback!", { theme: "colored", transition: Bounce });
      }
    } catch {
      toast.error("Submission failed!", { theme: "colored", transition: Bounce });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-30 mb-20">
      <div className="px-4 sm:px-10 lg:px-30 space-y-10">
        <h1 className="text-3xl font-bold text-center text-[var(--color-primary)]">
          Feedback Form - VIBCON 2025
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name & Email */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">Name *</label>
            <input {...register("name", { required: "Name is required" })} className={inputFieldStyle} />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block font-medium text-[var(--color-accent)]">Email *</label>
            <input type="email" {...register("email", { required: "Email is required" })} className={inputFieldStyle} />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Questions */}
          {[
            { q: "How did you hear about this conference?", name: "q1" },
            { q: "Was the conference venue appropriate for the event? (Yes/No)", name: "q2" },
            { q: "Rate the included technical sessions of the conference", name: "q3" },
            { q: "Was the content of the oral presentations relevant? (Yes/No)", name: "q4" },
            { q: "Rate the quality of the speaker presentations", name: "q5" },
            { q: "Were the poster presentations relevant? (Yes/No)", name: "q6" },
            { q: "Rate the structure and format of sessions", name: "q7" },
            { q: "Satisfaction with interaction & engagement", name: "q8" },
            { q: "Satisfaction with catering & food options", name: "q9" },
            { q: "Satisfaction with accommodation", name: "q10" },
            { q: "Satisfaction with travel arrangements", name: "q11" },
            { q: "Rate the provided materials’ usefulness", name: "q12" },
            { q: "Rate your overall experience", name: "q13" },
            { q: "Suggestions for improvement", name: "q14" }
          ].map((item, idx) => (
            <div key={idx}>
              <label className="block font-medium text-[var(--color-accent)]">
                {item.q} *
              </label>
              <textarea {...register(item.name, { required: "This field is required" })}
                rows={2} className={inputFieldStyle}></textarea>
              {errors[item.name] && <p className="text-red-500">{errors[item.name].message}</p>}
            </div>
          ))}

          {/* Submit */}
          <button
            type="submit"
            disabled={!isEnabled || isSubmitting}
            className={`px-6 py-2 rounded text-white ${!isEnabled || isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[var(--color-primary)] hover:bg-[var(--color-accent)]"}`}>
            {isEnabled
              ? (isSubmitting ? "Submitting..." : "Submit Feedback")
              : `Available in ${countdown}`}
          </button>
        </form>
      </div>
    </div>
  );
}
