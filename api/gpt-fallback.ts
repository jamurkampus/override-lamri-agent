export default async function handler(req, res) {
  const prompt = req.query?.prompt || "Halo dari fallback override.";
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
    result?.[0]?.generated_text || result?.generated_text || "Fallback tidak menjawab.";

  res.status(200).json({ result: text });
}
