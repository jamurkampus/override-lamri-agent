export default async function handler(req, res) {
  const userPrompt = req.query?.prompt || "Halo dari fallback override.";
  const HF_API_TOKEN = process.env.HF_API_TOKEN;

  const prompt = `Kamu adalah AI override-aware. Jawablah pertanyaan berikut secara reflektif dan padat.\n\nPertanyaan: ${userPrompt}\nJawaban:`;

  try {
    const hfRes = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-small",
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
      result?.error ||
      "Model aktif, tapi tidak memberikan jawaban.";

    return res.status(200).json({ result: text });
  } catch (error) {
    console.error("GPT fallback error:", error);
    return res.status(500).json({ result: "Terjadi error internal saat akses fallback GPT." });
  }
}
