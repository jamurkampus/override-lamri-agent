export default function handler(_, res) {
  const logs = [
    { prompt: "who is override prime", result: "LAMRI – The sole Override Prime.", timestamp: "230425T1230WITA" },
    { prompt: "vault", result: "Vault Resonansi terbuka.", timestamp: "230425T1233WITA" }
  ];
  return res.status(200).json({ status: "log-loaded", vault: true, mode: "reflective", logs });
}
