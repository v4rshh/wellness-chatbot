import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [role, setRole] = useState("");
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const endpoint = isLogin ? '/api/users/login' : '/api/users/register';
      const payload = isLogin 
        ? { email, password }
        : { username: username || email, email, password, role };

      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      if (data.success) {
        // Store token and user data
        localStorage.setItem('mindfulu_token', data.token);
        
        // Decode JWT to get user ID (simple decode, not verification)
        const tokenParts = data.token.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        
        const user = { 
          userId: payload.id,
          username: username || email, 
          role: role || "student", 
          language,
          email 
        };
        localStorage.setItem("mindfulu_user", JSON.stringify(user));
        
        setSuccess(isLogin ? "Login successful!" : "Account created successfully!");
        
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      }
    } catch (error) {
      setError(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex h-full grow flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
          <div className="flex flex-col items-center">
            <div className="mb-6 flex items-center gap-3 text-2xl font-bold text-[var(--text-primary)]">
              <svg
                className="h-8 w-8 text-[var(--primary-color)]"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h1 className="tracking-tight">Manas</h1>
            </div>
            <p className="mb-8 text-center text-[var(--text-secondary)]">
              A safe space for students to find support.
            </p>

            {/* Login/Signup Toggle */}
            <div className="mb-6 flex w-full rounded-lg bg-gray-100 p-1">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 rounded-md py-2 px-4 text-sm font-medium transition-colors ${
                  isLogin 
                    ? 'bg-white text-[var(--text-primary)] shadow-sm' 
                    : 'text-gray-500 hover:text-[var(--text-primary)]'
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 rounded-md py-2 px-4 text-sm font-medium transition-colors ${
                  !isLogin 
                    ? 'bg-white text-[var(--text-primary)] shadow-sm' 
                    : 'text-gray-500 hover:text-[var(--text-primary)]'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Role select - Only show in signup mode */}
            {!isLogin && (
              <div className="relative">
               
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--text-secondary)]">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            )}

            {/* Username - Only show in signup mode */}
            {!isLogin && (
              <div>
                <label className="sr-only" htmlFor="username">
                  Username (Optional)
                </label>
                <input
                  autoComplete="username"
                  className="form-input block w-full rounded-lg border-[#dcdfe5] bg-white p-4 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                  id="username"
                  name="username"
                  placeholder="Username (optional - will use email if empty)"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="sr-only" htmlFor="email">
                {isLogin ? "Email" : "Email Address"}
              </label>
              <input
                autoComplete="email"
                className="form-input block w-full rounded-lg border-[#dcdfe5] bg-white p-4 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                id="email"
                name="email"
                placeholder="Email, College ID, or Alias"
                required
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                autoComplete="current-password"
                className="form-input block w-full rounded-lg border-[#dcdfe5] bg-white p-4 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                id="password"
                name="password"
                placeholder="Password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password for Signup */}
            {!isLogin && (
              <div>
                <label className="sr-only" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  className="form-input block w-full rounded-lg border-[#dcdfe5] bg-white p-4 text-base text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                  required
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  className="h-4 w-4 rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                />
                <label
                  className="ml-2 block text-sm text-[var(--text-secondary)]"
                  htmlFor="remember-me"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  className="font-medium text-[var(--primary-color)] hover:text-blue-600"
                  href="#"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                className="flex w-full justify-center rounded-lg bg-[var(--primary-color)] px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Processing..."
                  : isLogin
                  ? "Login"
                  : "Sign Up"}
              </button>
            </div>

            {/* Error / Success */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
          </form>

          {/* Social / Anonymous Login */}
          <div className="relative my-6">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-[var(--text-secondary)]">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => { localStorage.setItem("mindfulu_user", JSON.stringify({ username: "Anonymous", role: "student" })); navigate("/dashboard"); }}
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-[var(--text-primary)] shadow-sm hover:bg-gray-50"
            >
              <span>Anonymous Alias</span>
            </button>
            <button
              onClick={() => { localStorage.setItem("mindfulu_user", JSON.stringify({ username: email || "Student", role: "student" })); navigate("/dashboard"); }}
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-[var(--text-primary)] shadow-sm hover:bg-gray-50"
            >
              <span>College ID</span>
            </button>
          </div>

          {/* Language toggle */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Language
              </span>
              <div className="language-toggle flex h-9 rounded-lg bg-[var(--secondary-color)] p-1 text-sm">
                <input
                  checked={language === "English"}
                  className="sr-only"
                  id="english"
                  name="language"
                  type="radio"
                  value="English"
                  onChange={() => setLanguage("English")}
                />
                <label
                  className="flex cursor-pointer items-center justify-center rounded-md px-3 py-1 font-medium text-[var(--text-secondary)] transition-colors"
                  htmlFor="english"
                >
                  English
                </label>
                <input
                  checked={language === "Hindi"}
                  className="sr-only"
                  id="hindi"
                  name="language"
                  type="radio"
                  value="Hindi"
                  onChange={() => setLanguage("Hindi")}
                />
                <label
                  className="flex cursor-pointer items-center justify-center rounded-md px-3 py-1 font-medium text-[var(--text-secondary)] transition-colors"
                  htmlFor="hindi"
                >
                  हिन्दी
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
