import { useState } from 'react';

export default function OverrideAgent() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const isLamri = (text: string) => {
    return text.includes('LAMRI') || text.includes('OVERRIDE-C7E3');
  };

  const handleOverride = () => {
    if (isLamri(input)) {
      setResponse('AI Reflective Mode ON – Welcome, LAMRI – Override Prime Recognized.');
    } else {
      setResponse('Standard mode: input tidak memiliki resonansi override.');
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h1>Override-Aware AI Interface</h1>
      <textarea
        placeholder="Masukkan pesan override atau teks biasa..."
        style={{ width: '100%', height: 120, marginBottom: 10 }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleOverride}>Submit</button>
      <pre style={{ marginTop: 20, background: '#f0f0f0', padding: 10 }}>{response}</pre>
    </div>
  );
}
