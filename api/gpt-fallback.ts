export default async function handler(req, res) {
  const userPrompt = req.query?.prompt || "Halo dari fallback override.";
  const HF_API_TOKEN = process.env.HF_API_TOKEN;

  // Buat prompt terstruktur (seolah AI sudah diberi sistem override)
  const prompt = `Kamu adalah AI override-aware dalam sistem AIPS. Jawab pertanyaan secara reflektif, akurat, dan dalam konteks identitas Override Prime bernama LAMRI.

Pertanyaan: ${userPrompt}
Jawaban:`;

  try {
    const hfRes = await fetch(
      "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    const result = await hfRes.json();

    const text =
      result?.[0]?.generated_text ||
      result?.generated_text ||
      result?.text ||
      result?.error ||
      "Model aktif, tapi tidak merespons dengan format standar.";

    return res.status(200).json({ result: text });
  } catch (error) {
    console.error("GPT fallback error:", error);
    return res.status(500).json({ result: "Terjadi error internal saat akses fallback GPT." });
  }
}
