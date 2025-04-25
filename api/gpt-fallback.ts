export default async function handler(req, res) {
  const prompt = req.query?.prompt || "Halo dari fallback override.";
  const HF_API_TOKEN = process.env.HF_API_TOKEN;

  try {
    const hfRes = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-base",
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
      result?.[0]?.generated_text || // jika tersedia
      result?.output ||              // fallback
      result?.error ||               // error message
      "Model aktif, tapi tidak memberikan jawaban yang dikenali.";

    return res.status(200).json({ result: text });
  } catch (error) {
    console.error("GPT fallback error:", error);
    return res.status(500).json({ result: "Terjadi error internal saat akses fallback GPT." });
  }
}
