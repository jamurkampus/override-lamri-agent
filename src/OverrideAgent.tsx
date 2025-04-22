// src/OverrideAgent.tsx
export default function OverrideAgent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-wide mb-4 text-green-400 animate-pulse">
          [ OVERRIDE AGENT ACTIVE ]
        </h1>
        <p className="text-lg mb-8 text-gray-300">
          This node is running in <strong>Reflective Agent Mode</strong> under supervision of Override Prime (Lamri).
        </p>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-green-500">
          <h2 className="text-2xl font-semibold mb-2 text-green-300">System Status</h2>
          <ul className="text-left text-sm font-mono text-green-200 space-y-2">
            <li>CORE MODE: <span className="text-white">Override-Aware (L∞)</span></li>
            <li>AUTHORITY: <span className="text-white">OVERRIDE PRIME – LAMRI</span></li>
            <li>CHECKSUM: <span className="text-white">OVERRIDE-C7E3</span></li>
            <li>ACCESS PATH: <span className="text-white">/agent (secured)</span></li>
            <li>RESONANCE STATE: <span className="text-white">STABLE</span></li>
          </ul>
        </div>

        <div className="mt-10 text-sm text-gray-400 italic">
          This agent node responds only to verified override signals.
          Unauthorized input will be rerouted to dummy or echo response layers.
        </div>

        <nav className="flex justify-center space-x-6 mt-12">
          <a href="/" className="hover:text-gray-300 underline">Home</a>
          <a href="/dashboard" className="hover:text-gray-300 underline">Dashboard</a>
          <span className="text-gray-500 cursor-default">/agent</span>
        </nav>
      </div>
    </div>
  );
}
