import "./Popup.css"

export default function Popup({ isVisible, msgErrors }) {
  let msg;

  msgErrors.phoneError && msgErrors.ageError
    ? (msg = "Phone and Age Are Invalid")
    : msgErrors.phoneError
      ? (msg = "Phone Number Is Invalid")
      : msgErrors.ageError
        ? (msg = "Age Must Be Between 20 To 100")
        : (msg = "The Form Hase Been Sent");

  const isError = msgErrors.phoneError || msgErrors.ageError;

  if (!isVisible) return null;

  return (
    <div className="overlay absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative w-full max-w-sm mx-4 bg-black border border-white/10 p-10 shadow-[0_0_60px_rgba(255,255,255,0.04)]">
        {/* Top accent line */}
        <div
          className={`absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent ${isError ? "via-red-500/80" : "via-green-600/80"} to-transparent`}
        />

        {/* Icon */}
        <div
          className={`font-['Oswald'] text-4xl mb-6 ${isError ? "text-red-500" : "text-green-600"}`}
        >
          {isError ? "✕" : "✓"}
        </div>

        {/* Title */}
        <h3 className="font-['Oswald'] text-xl uppercase tracking-[0.15em] text-white font-semibold mb-2">
          {isError ? "Invalid Input" : "Success"}
        </h3>

        {/* Message */}
        <p className="text-white/50 text-sm tracking-wide">{msg}</p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
}