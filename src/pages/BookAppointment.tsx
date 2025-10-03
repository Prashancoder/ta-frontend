import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const timeSlots = [
  "9:00 AM","10:00 AM","11:00 AM","12:00 PM",
  "1:00 PM","2:00 PM","3:00 PM","4:00 PM"
];

const formatDateISO = (d: Date) => {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const BookAppointment = () => {
  const todayStr = useMemo(() => formatDateISO(new Date()), []);
  const [date, setDate] = useState<string>(todayStr);
  const [slot, setSlot] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<{ date: string; time: string } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!name.trim()) return setError("Name is required");
    if (!phone.trim()) return setError("Phone number is required");
    if (!date) return setError("Date is required");
    if (!slot) return setError("Please select a time slot");

    try {
      setSubmitting(true);
      const res = await fetch(
        import.meta.env.VITE_API_BASE_URL
          ? `${import.meta.env.VITE_API_BASE_URL}/api/appointments`
          : `http://localhost:5000/api/appointments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, email, date, time: slot }),
        }
      );
      if (!res.ok) throw new Error("Failed to schedule appointment");
      setSuccess({ date, time: slot });
      setName("");
      setPhone("");
      setEmail("");
      setSlot("");
    } catch (err: any) {
      setError(err?.message || "Failed to schedule appointment");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left side: form */}
        <section>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Book an Appointment
          </h1>

          {success ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-semibold text-green-800">
                🎉 Appointment Confirmed!
              </h2>
              <p className="text-green-700 mt-3">📅 Date: {success.date}</p>
              <p className="text-green-700">⏰ Time: {success.time}</p>
            </div>
          ) : (
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
              {/* Date */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Select Date
                </label>
                <input
                  type="date"
                  className="px-4 py-3 border rounded-lg w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  value={date}
                  min={todayStr}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {/* Time slots */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Select Time
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((t) => (
                    <button
                      type="button"
                      key={t}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition 
                        ${
                          slot === t
                            ? "bg-gradient-to-r from-yellow-500 to-yellow-700 text-white border-yellow-600 shadow-md"
                            : "bg-white text-gray-700 hover:bg-yellow-50 border-gray-300"
                        }`}
                      onClick={() => setSlot(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                {error && (
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                )}

                <Button
                  type="submit"
                  variant="luxury"
                  className="w-full py-3 text-base rounded-xl shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-700 text-white hover:scale-[1.02] transition-transform"
                  disabled={submitting || !slot}
                >
                  {submitting ? "Scheduling..." : "Confirm Appointment"}
                </Button>
              </form>
            </div>
          )}
        </section>

        {/* Right side: Info / illustration */}
        <aside className="flex flex-col justify-center space-y-6">
          <img
            src="/images/shop/1.jpg"
            alt="Booking Illustration"
            className="w-4/5 mx-auto"
          />
          <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-6 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              About Timeless
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Book an appointment with our experts for personalized consultation
              and services. Pick your preferred date & time, and our team will
              confirm shortly.
            </p>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default BookAppointment;
