// Browser-compatible DJB2 hash — same function used in scripts/gen-audio.mjs
function djb2(str: string): string {
  let h = 5381
  for (let i = 0; i < str.length; i++) {
    h = (((h << 5) + h) + str.charCodeAt(i)) & 0xffffffff
  }
  return (h >>> 0).toString(16).padStart(8, '0')
}

export function audioPath(text: string): string {
  return `/audio/${djb2(text)}.mp3`
}
