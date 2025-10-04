export function generateMockQRCode(secret: string) {
// In a real app you'd produce an otpauth:// URI and a QR image; here we return a data URL placeholder
return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=otpauth://totp/DemoBank:${secret}`
}


export function verifyMockTOTP(code: string, secret: string) {
// Mock verification: accept codes that equal the last 4 digits of secret for demo
return code === secret.slice(-4)
}
