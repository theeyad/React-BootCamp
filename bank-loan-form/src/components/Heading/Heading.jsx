import "./Heading.css";

export default function Heading() {
  return (
    <>
      <div className="space-y-4">
        <h1
          className="
        font-['Oswald'] font-700
        text-4xl uppercase tracking-[0.15em]
        text-white
      "
        >
          Requesting Loan
        </h1>
        <div className="relative h-px">
          <div className="absolute inset-0 bg-linear-to-r from-white/60 via-white/20 to-transparent" />
        </div>
      </div>
    </>
  );
}
