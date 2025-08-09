import React from "react";

export default function PageNotFound() {
  return (
    <div className="pt-70 pb-50">
      <div className="px-4 sm:px-10 lg:px-30 text-center">
        <h2 className="text-6xl text-[var(--color-secondary)] font-extrabold">404</h2>
        <h3 className="text-4xl text-[var(--color-secondary)] font-bold">Page Not Found</h3>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
