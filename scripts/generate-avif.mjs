import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const imagesDir = path.join(process.cwd(), 'public', 'images')

async function main() {
  const entries = await readdir(imagesDir)
  const webps = entries.filter(
    (name) => name.endsWith('.webp') && !name.includes('-hq.webp'),
  )

  for (const name of webps) {
    const avifName = name.replace(/\.webp$/, '.avif')
    const input = path.join(imagesDir, name)
    const output = path.join(imagesDir, avifName)
    const before = (await stat(input)).size

    await sharp(input)
      .avif({ quality: 55, effort: 4 })
      .toFile(output)

    const after = (await stat(output)).size
    console.log(
      `${name} → ${avifName} (${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB)`,
    )
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
