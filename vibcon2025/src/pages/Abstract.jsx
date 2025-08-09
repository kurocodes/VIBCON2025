import { useForm } from "react-hook-form";
import { toast, Bounce } from "react-toastify";
import { useState } from "react";

export default function AbstractSubmission() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true); // Disable button

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/submit-abstract`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        reset();
        toast.success("Abstract submitted successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      } else {
        toast.error("Failed to submit! Try again!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Submission failed!", {
        position: "bottom-right",
        theme: "colored",
        transition: Bounce,
      });
    } finally {
      setIsSubmitting(false); // Enable button again
    }
  };

  const abstractText = watch("abstractText", "");

  return (
    <div className="pt-30 mb-20">
      <div className="px-4 sm:px-10 lg:px-30 space-y-10">
        <h1 className="text-3xl font-bold text-center text-[var(--color-primary)]">
          Abstract Submission
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Name *
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full border border-[var(--color-accent)] p-2 rounded bg-white text-black outline-[var(--color-secondary)]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Affiliation */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Affiliation *
            </label>
            <input
              type="text"
              {...register("affiliation", {
                required: "Affiliation is required",
              })}
              className="w-full border border-[var(--color-accent)] p-2 rounded bg-white text-black outline-[var(--color-secondary)]"
            />
            {errors.affiliation && (
              <p className="text-red-500 text-sm">
                {errors.affiliation.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Email *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              className="w-full border border-[var(--color-accent)] p-2 rounded bg-white text-black outline-[var(--color-secondary)]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Abstract Title */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Abstract Title *
            </label>
            <input
              type="text"
              {...register("title", { required: "Abstract title is required" })}
              className="w-full border border-[var(--color-accent)] p-2 rounded bg-white text-black outline-[var(--color-secondary)]"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Abstract Text */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Abstract Text
            </label>
            <textarea
              {...register("abstractText")}
              rows={5}
              className="w-full border border-[var(--color-accent)] p-2 rounded bg-white text-black outline-[var(--color-secondary)]"
            ></textarea>
            <p className="text-xs text-[var(--color-text)] mt-1">
              Abstracts (max 300 words)
            </p>
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Category *
            </label>
            <input
              type="text"
              {...register("category", { required: "Category is required" })}
              className="w-full border border-[var(--color-accent)] p-2 rounded bg-white text-black outline-[var(--color-secondary)]"
              placeholder="e.g. Veterinary Immunology"
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          {/* Presentation Preference */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Presentation Preference *
            </label>
            <select
              {...register("preference", {
                required: "Presentation preference is required",
              })}
              className="w-full border border-[var(--color-accent)] p-2 rounded bg-white text-black outline-[var(--color-secondary)]"
            >
              <option value="">Select...</option>
              <option value="Oral">Oral</option>
              <option value="Poster">Poster</option>
            </select>
            {errors.preference && (
              <p className="text-red-500 text-sm">
                {errors.preference.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 rounded text-white transition ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[var(--color-primary)] hover:bg-[var(--color-accent)]"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Abstract"}
          </button>
        </form>
      </div>
    </div>
  );
}
