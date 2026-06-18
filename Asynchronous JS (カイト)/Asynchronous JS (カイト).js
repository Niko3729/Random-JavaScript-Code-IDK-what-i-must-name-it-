// Versi modern
async function getUser() {
    const response = await fetch('https://www.curseforge.com/')  // ← await = tunggu API selesai
    const data = await response.json()
    console.log(data)
}