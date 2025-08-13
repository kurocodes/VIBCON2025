import { useForm } from "react-hook-form";
import { toast, Bounce } from "react-toastify";
import { useState } from "react";

const inputFieldStyle =
  "w-full border border-[var(--color-accent)] p-2 rounded bg-white text-black outline-[var(--color-secondary)]";

export default function AbstractSubmission() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

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
          theme: "colored",
          transition: Bounce,
        });
      } else {
        toast.error("Failed to submit! Try again!", {
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Submission failed!", {
        theme: "colored",
        transition: Bounce,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-30 mb-20">
      <div className="px-4 sm:px-10 lg:px-30 space-y-10">
        <h1 className="text-3xl font-bold text-center text-[var(--color-primary)]">
          Abstract Submission
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Title (in CAPITAL letters) *
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className={inputFieldStyle}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Authors & Institutional Address */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Authors’ name and institutional address *
            </label>
            <textarea
              {...register("authors", {
                required: "Authors and address are required",
              })}
              rows={2}
              className={inputFieldStyle}
            />
            {errors.authors && (
              <p className="text-red-500 text-sm">{errors.authors.message}</p>
            )}
          </div>

          {/* Presenting Author, Email, Mobile */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Presenting Author (#), Email ID, Mobile No. *
            </label>
            <input
              type="text"
              {...register("presentingAuthor", {
                required: "This field is required",
              })}
              className={inputFieldStyle}
            />
            {errors.presentingAuthor && (
              <p className="text-red-500 text-sm">
                {errors.presentingAuthor.message}
              </p>
            )}
          </div>

          {/* Introduction */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Introduction (20–30 words) *
            </label>
            <textarea
              {...register("introduction", {
                required: "Introduction is required",
              })}
              rows={2}
              className={inputFieldStyle}
            />
            {errors.introduction && (
              <p className="text-red-500 text-sm">
                {errors.introduction.message}
              </p>
            )}
          </div>

          {/* Objectives */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Objectives of the study (20–30 words) *
            </label>
            <textarea
              {...register("objectives", {
                required: "Objectives are required",
              })}
              rows={2}
              className={inputFieldStyle}
            />
            {errors.objectives && (
              <p className="text-red-500 text-sm">
                {errors.objectives.message}
              </p>
            )}
          </div>

          {/* Methodology */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Brief Methodology (100–120 words) *
            </label>
            <textarea
              {...register("methodology", {
                required: "Methodology is required",
              })}
              rows={5}
              className={inputFieldStyle}
            />
            {errors.methodology && (
              <p className="text-red-500 text-sm">
                {errors.methodology.message}
              </p>
            )}
          </div>

          {/* Results */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Results (80–100 words) *
            </label>
            <textarea
              {...register("results", { required: "Results are required" })}
              rows={4}
              className={inputFieldStyle}
            />
            {errors.results && (
              <p className="text-red-500 text-sm">{errors.results.message}</p>
            )}
          </div>

          {/* Conclusions */}
          <div>
            <label className="block font-medium text-[var(--color-accent)]">
              Conclusions and implications (20–30 words) *
            </label>
            <textarea
              {...register("conclusions", {
                required: "Conclusions are required",
              })}
              rows={2}
              className={inputFieldStyle}
            />
            {errors.conclusions && (
              <p className="text-red-500 text-sm">
                {errors.conclusions.message}
              </p>
            )}
          </div>

          {/* Submit */}
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
