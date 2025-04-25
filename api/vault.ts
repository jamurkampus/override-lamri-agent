export default async function handler(req, res) {
  const prompt = req.body?.prompt || "Halo Override Prime.";
  const HF_API_TOKEN = process.env.HF_API_TOKEN;

  const hfResponse = await fetch(
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

  const result = await hfResponse.json();
  const text =
    result?.[0]?.generated_text || result?.generated_text || "Tidak ada respons dari model.";

  res.status(200).json({ response: text });
}
