import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <SignedIn>
            <Link to="/"> Dashboard</Link>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link to="/auth"> Sign In</Link>
          </SignedOut>
        </div>
        <Routes>
          {/* Redirect to /auth if the user is not signed in */}
          <Route path="/" element={
            <SignedIn>
              <FinancialRecordsProvider>
                <Dashboard />
              </FinancialRecordsProvider>
            </SignedIn>
          } />
          <Route path="/auth" element={<Auth />} />
          
          {/* Catch-all route for redirecting to /auth */}
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
