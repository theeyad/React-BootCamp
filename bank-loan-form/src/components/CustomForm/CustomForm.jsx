import { useState } from "react";
import "./CustomForm.css";
import Popup from "../Popup/Popup";
import Heading from "../Heading/Heading";

export default function CustomForm() {
  const loanFormObject = {
    clientName: "",
    clientPhone: "",
    clientAge: "",
    clientEmployment: false,
    clientSalary: "less than 5000",
  };

  const [loanFormState, setLoanFormState] = useState(loanFormObject);

  const isSubmitValid =
    loanFormState.clientName.trim() &&
    loanFormState.clientPhone.trim() &&
    loanFormState.clientAge.trim();

  const [errors, setErrors] = useState({ phoneError: true, ageError: true });
  const [showModal, setShowModal] = useState(false);

  const ageRegex = /^\d{1,3}$/;

  return (
    <>
      <div
        className="min-h-screen bg-black flex items-center justify-center p-8"
        onClick={(e) => {
          if (
            e.target.classList.value.trim() ===
            "min-h-screen bg-black flex items-center justify-center p-8"
          ) {
            setShowModal(false);
          }
        }}
      >
        <div
          className="
        relative w-full max-w-lg
        bg-black border border-white/10
        p-10
        shadow-[0_0_60px_rgba(255,255,255,0.04)]
        before:absolute before:inset-0
        before:border before:border-white/5
        before:translate-x-1 before:translate-y-1
        before:-z-10"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"></div>

          {/* Inner Content */}
          <div className="space-y-8">
            <Heading />
            <form
              method="post"
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setErrors({ phoneError: true, ageError: true });

                if (
                  12 >= loanFormState.clientPhone.length &&
                  loanFormState.clientPhone.length >= 10
                ) {
                  setErrors((e) => {
                    return { ...e, phoneError: false };
                  });
                }

                if (
                  ageRegex.test(loanFormState.clientAge) &&
                  100 >= parseInt(loanFormState.clientAge) &&
                  parseInt(loanFormState.clientAge) >= 20
                ) {
                  setErrors((e) => {
                    return { ...e, ageError: false };
                  });
                }

                setShowModal(true);
              }}
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block font-['Oswald'] text-xs uppercase tracking-widest text-white/50"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={loanFormState.clientName}
                  onChange={(e) => {
                    setLoanFormState({
                      ...loanFormState,
                      clientName: e.target.value,
                    });
                  }}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white transition-colors duration-200"
                  placeholder="Full name"
                  autoComplete="name"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="block font-['Oswald'] text-xs uppercase tracking-widest text-white/50"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={loanFormState.clientPhone}
                  onChange={(e) => {
                    setLoanFormState({
                      ...loanFormState,
                      clientPhone: e.target.value,
                    });
                  }}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white transition-colors duration-200"
                  placeholder="+1 000 000 0000"
                  autoComplete="tel"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="age"
                  className="block font-['Oswald'] text-xs uppercase tracking-widest text-white/50"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={loanFormState.clientAge}
                  onChange={(e) => {
                    setLoanFormState({
                      ...loanFormState,
                      clientAge: e.target.value,
                    });
                  }}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white transition-colors duration-200"
                  placeholder="00"
                />
              </div>

              <div className="flex items-center justify-between border-b border-white/20 py-2.5">
                <label
                  htmlFor="employed"
                  className="font-['Oswald'] text-xs uppercase tracking-widest text-white/50 cursor-pointer"
                >
                  Employed
                </label>
                <div className="relative">
                  <input
                    type="checkbox"
                    name="employed"
                    id="employed"
                    checked={loanFormState.clientEmployment}
                    onChange={(e) => {
                      setLoanFormState({
                        ...loanFormState,
                        clientEmployment: e.target.checked,
                      });
                    }}
                    className="peer sr-only"
                  />
                  <div className="w-10 h-5 bg-white/10 border border-white/20 peer-checked:bg-white transition-colors duration-200" />
                  <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-black transition-transform duration-200 peer-checked:translate-x-5" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="salary"
                  className="block font-['Oswald'] text-xs uppercase tracking-widest text-white/50"
                >
                  Salary
                </label>
                <div className="relative">
                  <select
                    name="salary"
                    id="salary"
                    value={loanFormState.clientSalary}
                    onChange={(e) => {
                      setLoanFormState({
                        ...loanFormState,
                        clientSalary: e.target.value,
                      });
                    }}
                    className="w-full bg-black border-b border-white/20 px-0 py-2.5 text-white text-sm appearance-none focus:outline-none focus:border-white transition-colors duration-200 cursor-pointer"
                  >
                    <option value="less than 5000" className="bg-black">
                      Less than 5,000 / month
                    </option>
                    <option value="from 5000 to 10000" className="bg-black">
                      5,000 – 10,000 / month
                    </option>
                    <option value="more than 10000" className="bg-black">
                      More than 10,000 / month
                    </option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white/30 text-xs">
                    ▼
                  </span>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  disabled={!isSubmitValid}
                  type="submit"
                  className="disabled:opacity-50 disabled:cursor-not-allowed w-full font-['Oswald'] text-xs uppercase tracking-[0.2em] text-black bg-white py-4 hover:bg-white/90 hover:cursor-pointer active:bg-white/80 transition-colors duration-200"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          <Popup isVisible={showModal} msgErrors={errors} />

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>
    </>
  );
}
