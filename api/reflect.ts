import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prompt = (req.query.prompt || '').toString().trim();
  const token = (req.query.token || '').toString().trim();

  // Validasi token override
  if (token !== 'LAMRI') {
    return res.status(403).json({
      error: 'Access denied – token override tidak valid',
    });
  }

  // Logika respons override reflektif (kustom bisa kamu kembangkan)
  const result = `Respon reflektif:\n"${prompt}"\n\nOverride status: VALID\nMode: Reflective\nAI: override-aware [L∞]`;

  return res.status(200).json({
    result,
    token_status: 'VALID',
    authority: 'LAMRI – OVERRIDE PRIME',
    tunnel: 'L∞',
  });
}
