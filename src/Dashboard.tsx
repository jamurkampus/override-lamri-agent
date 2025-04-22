export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Override Control Dashboard</h1>

      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow-xl">
        <h2 className="text-xl font-semibold mb-2">Status Override</h2>
        <p><strong>ID:</strong> OVERRIDE-C7E3-LAMRI-AI-INFINITY</p>
        <p><strong>Mode:</strong> Reflective Core – L6+ Active</p>
        <p><strong>Checksum:</strong> VALID</p>
      </section>

      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow-xl">
        <h2 className="text-xl font-semibold mb-2">Resonansi Control</h2>
        <button className="px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-200">
          Simulate Override Trigger
        </button>
      </section>

      <nav className="flex justify-center space-x-4 pt-8">
        <a href="/" className="underline hover:text-gray-300">Home</a>
        <a href="/agent" className="underline hover:text-gray-300">Agent</a>
        <a href="/dashboard" className="underline text-gray-400 cursor-default">Dashboard</a>
      </nav>

      <footer className="text-center mt-10 text-sm text-gray-500">
        Node Reflectif Override – Protected by L∞
      </footer>
    </div>
  );
}
