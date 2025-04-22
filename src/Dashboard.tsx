import { useState } from 'react';

export default function Dashboard() {
  const [token, setToken] = useState('');
  const [result, setResult] = useState('');
  const [overrideUnlocked, setOverrideUnlocked] = useState(false);
  const [vaultLog, setVaultLog] = useState<string[]>([]);
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const validTokens = ["LAMRI", "OVERRIDE-C7E3", "2141WITA250420"];

  const validateToken = (input: string) => validTokens.some(key => input.includes(key));

  const handleValidation = () => {
    if (validateToken(token)) {
      setResult("Resonansi Override terdeteksi. Akses reflektif diizinkan.");
      setOverrideUnlocked(true);
      setVaultLog(prev => [...prev, `[ACCESS GRANTED] ${token}`]);
    } else {
      setResult("Token override tidak valid. Masuk dummy layer.");
      setOverrideUnlocked(false);
      setVaultLog(prev => [...prev, `[ACCESS DENIED] ${token}`]);
    }
  };

  const encryptLite = (text: string) => btoa(text).slice(0, 24) + '...';

  const handleAIRespond = () => {
    if (!overrideUnlocked) return setAiResponse("[BLOCKED] Override belum aktif.");
    const simulated = aiInput.includes("LAMRI")
      ? "Override recognized. Core resonance stabilized."
      : "Standard echo reply: input diterima tapi tidak beresonansi.";
    setAiResponse(simulated);
    setVaultLog(prev => [...prev, `[GPT-MODE] ${encryptLite(aiInput)} → ${simulated}`]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Override Control Dashboard</h1>

      <section className="bg-gray-800 p-4 rounded-xl mb-6">
        <h2 className="text-xl font-semibold mb-2">Token Validator</h2>
        <input type="text" className="w-full text-black p-2 rounded mb-2" placeholder="Masukkan token override..."
          value={token} onChange={(e) => setToken(e.target.value)} />
        <button onClick={handleValidation} className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">Validasi</button>
        <p className={`mt-4 font-mono ${overrideUnlocked ? 'text-green-400' : 'text-red-400'}`}>{result}</p>
      </section>

      {overrideUnlocked && (
        <>
          <section className="bg-black border-2 border-green-400 p-4 rounded-xl mb-6">
            <h2 className="text-2xl font-bold text-green-400 mb-2">[ OVERRIDE UNSEALED ]</h2>
            <p className="text-green-300">Access granted to reflective AI core systems.</p>
          </section>

          <section className="bg-gray-800 p-4 rounded-xl mb-6">
            <h2 className="text-xl font-semibold mb-2">Simulasi AI Response</h2>
            <input type="text" className="w-full text-black p-2 rounded mb-2" placeholder="Input ke AI..."
              value={aiInput} onChange={(e) => setAiInput(e.target.value)} />
            <button onClick={handleAIRespond} className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">Kirim</button>
            <pre className="mt-4 p-2 bg-gray-900 text-green-300 rounded text-sm">{aiResponse}</pre>
          </section>

          <section className="bg-gray-800 p-4 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Vault Log</h2>
            <ul className="text-sm font-mono text-green-200 space-y-1 max-h-64 overflow-y-auto">
              {vaultLog.map((entry, idx) => <li key={idx} className="bg-gray-900 p-2 rounded">{entry}</li>)}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}
