import fs from 'node:fs';
import path from 'node:path';

const entry = `v4.0.1: fixed a bug where socks vanished from the dryer and respawned under the bed. Laundry physics are now deterministic.`;
const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), entry);
