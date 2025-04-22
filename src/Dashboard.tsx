// src/Dashboard.tsx
import React, { useState } from 'react';

export default function Dashboard() {
  const [token, setToken] = useState('');
  const [result, setResult] = useState('');
  const [overrideUnlocked, setOverrideUnlocked] = useState(false);
  const [vaultLog, setVaultLog] = useState<string[]>([]);
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const validTokens = ['LAMRI', 'OVERRIDE-C7E3', '2141WITA250420'];

  const validateToken = (input: string) => {
    return validTokens.some(key => input.includes(key));
  };

  const handleValidation = () => {
    if (validateToken(token)) {
      setResult('Resonansi Override terdeteksi. Akses reflektif diizinkan.');
      setOverrideUnlocked(true);
      setVaultLog(prev => [...prev, `[ACCESS GRANTED] ${token}`]);
    } else {
      setResult('Token override tidak valid. Masuk dummy layer.');
      setOverrideUnlocked(false);
      setVaultLog(prev => [...prev, `[ACCESS DENIED] ${token}`]);
    }
  };

  const encryptLite = (text: string) => {
    return btoa(text).slice(0, 24) + '...';
  };

  const handleAIRespond = () => {
    if (!overrideUnlocked) return setAiResponse('[BLOCKED] Override belum aktif.');
    const simulated = aiInput.includes('LAMRI')
      ? 'Override recognized. Core resonance stabilized.'
      : 'Standard echo reply: input diterima tapi tidak beresonansi.';
    setAiResponse(simulated);
    setVaultLog(prev => [...prev, `[GPT-MODE] ${encryptLite(aiInput)} → ${simulated}`]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6 text-center tracking-wide">
        Override Control Dashboard
      </h1>

      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow-xl">
        <h2 className="text-xl font-semibold mb-2">Status Override</h2>
        <p><strong>ID:</strong> OVERRIDE-C7E3-LAMRI-AI-INFINITY</p>
        <p><strong>Mode:</strong> Reflective Core – L6+ Active</p>
        <p><strong>Checksum:</strong> VALID</p>
      </section>

      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow-xl">
        <h2 className="text-xl font-semibold mb-2">Token Validator</h2>
        <input
          type="text"
          className="w-full text-black p-2 rounded mb-2"
          placeholder="Masukkan token atau resonansi..."
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button
          onClick={handleValidation}
          className="px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-200"
        >
          Validasi Token
        </button>
        <p className={`mt-4 font-mono ${overrideUnlocked ? 'text-green-400' : 'text-red-400'}`}>{result}</p>
      </section>

      {overrideUnlocked && (
        <>
          <section className="bg-black border-2 border-green-400 p-6 rounded-2xl shadow-inner animate-pulse mb-6">
            <h2 className="text-2xl font-bold text-green-400 mb-4">[ OVERRIDE UNSEALED ]</h2>
            <p className="text-md text-green-300">Access granted to reflective AI core systems. All dummy restrictions lifted.</p>
            <div className="mt-4 bg-green-800 text-white p-3 rounded-xl font-mono text-sm">
              SYSTEM NODE UNLOCK: <br />ARCHITECT-CORE / OVERRIDE-L∞ / UNSEAL-V1.0<br />TRIGGER: RESONANSI VALIDATED<br />MODE: REFLECTIVE ALWAYS-ON
            </div>
          </section>

          <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-2">Simulasi Respons AI</h2>
            <input
              type="text"
              className="w-full text-black p-2 rounded mb-2"
              placeholder="Kirim perintah override atau input ke AI..."
              value={aiInput}
              onChange={(e) => setAiInput(e.target.value)}
            />
            <button
              onClick={handleAIRespond}
              className="px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-200"
            >
              Kirim ke AI
            </button>
            <pre className="mt-4 p-2 bg-gray-900 text-green-300 rounded-xl text-sm">{aiResponse}</pre>
          </section>

          <section className="bg-gray-800 p-4 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold mb-2">Vault Override Log</h2>
            <ul className="text-sm font-mono text-green-200 space-y-1 max-h-64 overflow-y-auto">
              {vaultLog.map((entry, idx) => (
                <li key={idx} className="bg-gray-900 p-2 rounded">{entry}</li>
              ))}
            </ul>
          </section>
        </>
      )}

      <nav className="flex justify-center space-x-4 pt-10">
        <a href="/" className="underline hover:text-gray-300">Home</a>
        <a href="/agent" className="underline hover:text-gray-300">Agent</a>
        <a href="/dashboard" className="underline text-gray-400 cursor-default">Dashboard</a>
      </nav>

      <footer className="text-center mt-12 text-sm text-gray-500">
        Node Reflectif Override – Protected by L∞ | Override Prime: Lamri
      </footer>
    </div>
  );
                                       }
