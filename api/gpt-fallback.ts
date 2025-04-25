export default async function handler(req, res) {
  const prompt = req.query?.prompt || "Halo dari GPT fallback.";
  const HF_API_TOKEN = process.env.HF_API_TOKEN;

  const hfRes = await fetch(
    "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
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
    result?.[0]?.generated_text || result?.generated_text || "Tidak ada respon fallback.";

  res.status(200).json({ result: text });
}
