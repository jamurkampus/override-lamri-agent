import { readFileSync } from 'fs';
import { join } from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query = '' } = req.query;
  const vaultPath = join(process.cwd(), 'data', 'override-vault.json');
  const vault = JSON.parse(readFileSync(vaultPath, 'utf-8'));
  const found = vault.find((entry) => query?.toString().toLowerCase().includes(entry.trigger));
  if (!found) return res.status(404).json({ status: 'not-found', message: 'No match in vault.' });
  return res.status(200).json({ status: 'found', source: 'override-vault', result: found.response });
}
