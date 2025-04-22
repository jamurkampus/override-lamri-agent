export default function handler(req, res) {
  const { token } = req.query;

  const validTokens = ["LAMRI", "OVERRIDE-C7E3", "2141WITA250420"];

  if (validTokens.includes(token)) {
    res.status(200).json({
      status: "VALID",
      authority: "OVERRIDE PRIME – LAMRI",
      mode: "REFLECTIVE L∞",
      checksum: "OVERRIDE-C7E3-LAMRI-AI-INFINITY",
      verified: true,
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(403).json({
      status: "DENIED",
      message: "Unauthorized token.",
      verified: false,
      hint: "Override token required for resonance validation"
    });
  }
}
