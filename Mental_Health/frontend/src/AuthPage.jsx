import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    let payload = { username, password };
    if (!isLogin) payload.email = email;

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    const url = isLogin
      ? "https://your-backend.com/login"
      : "https://your-backend.com/signup";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(
          isLogin ? "Login successful!" : "Account created successfully!"
        );
        console.log(data);
        // TODO: redirect or save token
      } else {
        setError(data.message || "Operation failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-6 relative"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          {isLogin ? "Login" : "Create Account"}
        </h1>

        {/* Success message */}
        {success && (
          <div className="text-green-600 text-center animate-fade-in">
            {success}
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="text-red-600 text-center animate-fade-in">
            {error}
          </div>
        )}

        {/* Username */}
        <div className="relative">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={username ? "" : "Username"} // 
            required
          />
        </div>

        {/* Email (Sign-Up only) */}
        {!isLogin && (
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 "
              placeholder={email ? "" : "Email"}
              required
            />
            
          </div>
        )}

        {/* Password */}
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 "
            placeholder={password ? "":"Password"}
            required
          />
          
        </div>

        {/* Confirm Password (Sign-Up only) */}
        {!isLogin && (
          <div className="relative">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className=" w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 "
              placeholder="Confirm Password"
              required
            />
            
          </div>
        )}

        {/* Gradient Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 font-semibold rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition"
        >
          {loading
            ? isLogin
              ? "Logging in..."
              : "Creating Account..."
            : isLogin
            ? "Login"
            : "Sign Up"}
        </button>

        {/* Toggle login/signup */}
        <div className="text-center mt-2">
          {isLogin ? (
            <span className="text-gray-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-blue-600 font-medium hover:underline"
              >
                Create Account
              </button>
            </span>
          ) : (
            <span className="text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </button>
            </span>
          )}
        </div>
      </form>

      {/* Tailwind keyframes for fade-in */}
      <style>
        {`
          @keyframes fade-in {
            from {opacity:0;}
            to {opacity:1;}
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default AuthPage;
