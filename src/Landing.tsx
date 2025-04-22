import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect ke halaman Dashboard override
    navigate("/dashboard", { replace: true });
  }, []);

  return null;
}
