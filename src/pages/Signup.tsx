import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header"; // ✅ header import

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signup(name, email, password);
      navigate("/login");
    } catch (err: any) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex">
        {/* Left side image full cover */}
        <div className="hidden md:flex w-1/2 bg-[#D7B66B]">
          <img
            src="/images/shop/banner.jpg"
            alt="Signup Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side signup box */}
        <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 px-6">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">
                Create your account ✨
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Join Timeless to continue
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="you@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#D7B66B] hover:bg-[#c5a355] text-black font-semibold"
              >
                {loading ? "Creating..." : "Create Account"}
              </Button>
            </form>

            <p className="text-sm mt-6 text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#D7B66B] font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
