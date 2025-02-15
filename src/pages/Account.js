import React, { useState } from "react";

const Account = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock authentication
        if (email === "fruitlover@example.com" && password === "freshfruits") {
            alert("Welcome to the Fruit Shop!");
            setEmail("");
            setPassword("");
            setErrorMessage("");
        } else {
            setErrorMessage("Invalid email or password!");
        }
    };

    return (
        <div 
            className="d-flex justify-content-center align-items-center vh-100" 
            style={{
                backgroundImage: "./images/accountfruit-bg.jpg",
                backgroundSize: "fit",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

            }}
        >
            <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%", borderRadius: "15px" }}>
                <div className="text-center mb-4">
                    <h2 className="text-success">🍎 Fruit Shop</h2>
                    <p className="text-muted">Login to explore fresh fruits!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="e.g., fruitlover@example.com"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>

                    {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    )}

                    <div className="d-grid">
                        <button type="submit" className="btn btn-success">
                            Login 🍏
                        </button>
                    </div>
                </form>
                <div className="text-center mt-3">
                    <p className="text-muted">
                        Don't have an account?
                        <a href="/signup" className="text-success ms-1">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Account;
