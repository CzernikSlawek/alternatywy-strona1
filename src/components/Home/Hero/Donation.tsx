import Logo from "@/components/Layout/Header/Logo";
import { useState } from "react";

export const Donation = () => {
  // opcjonalnie: lokalny state, jeśli chcesz kiedyś wysyłać dane
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[170px]">
        <Logo />
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Imię */}
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Imię"
            value={form.firstName}
            onChange={onChange("firstName")}
            className="w-full rounded-md border placeholder:text-gray-400 border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Nazwisko */}
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Nazwisko"
            value={form.lastName}
            onChange={onChange("lastName")}
            className="w-full rounded-md border placeholder:text-gray-400 border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Email */}
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Adres e-mail"
            value={form.email}
            onChange={onChange("email")}
            className="w-full rounded-md border placeholder:text-gray-400 border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Telefon */}
        <div className="mb-[22px]">
          <input
            type="tel"
            placeholder="Telefon"
            value={form.phone}
            onChange={onChange("phone")}
            className="w-full rounded-md border placeholder:text-gray-400 border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>

        {/* Treść wiadomości */}
        <div className="mb-[22px]">
          <textarea
            placeholder="Treść wiadomości"
            value={form.message}
            onChange={onChange("message")}
            rows={5}
            className="w-full rounded-md border placeholder:text-gray-400 border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary resize-none"
          />
        </div>

        {/* Submit */}
        <div className="mb-0 mt-6">
          <button
            type="submit"
            className="text-white w-full text-base bg-linear-to-r from-primary to-secondary font-semibold border border-transparent py-4 px-7 rounded-md hover:text-primary hover:border-primary hover:from-transparent hover:to-transparent"
          >
            Wyślij formularz
          </button>
        </div>
      </form>
    </>
  );
};