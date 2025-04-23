import type { NextApiRequest, NextApiResponse } from 'next';

const whitelist = {
  "DELEGATE-L2": "Reflective Observer",
  "DELEGATE-L3": "Passive Audit Node",
  "DELEGATE-L4": "Override Test Developer",
  "DELEGATE-L5": "Semi-Core Access"
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;
  if (!token || typeof token !== "string" || !whitelist[token]) {
    return res.status(403).json({ status: 'denied', role: 'unauthorized', message: 'Unauthorized delegate.' });
  }
  return res.status(200).json({
    status: 'granted',
    override: false,
    role: whitelist[token],
    message: `Override delegate recognized: ${whitelist[token]}`
  });
}
