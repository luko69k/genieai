import * as React from "react";

export function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

