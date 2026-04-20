// Rename the built HTML file to index.html so Vercel/any static host serves it at root
import { renameSync, existsSync } from 'fs'

const [,, target] = process.argv
if (!target) {
  console.error('Usage: node scripts/post-build.mjs <shop|store>')
  process.exit(1)
}

const from = `dist-${target}/${target}.html`
const to   = `dist-${target}/index.html`

if (existsSync(from)) {
  renameSync(from, to)
  console.log(`✓ ${from} → ${to}`)
} else if (existsSync(to)) {
  console.log(`✓ ${to} already exists`)
} else {
  console.error(`✗ Neither ${from} nor ${to} found`)
  process.exit(1)
}
