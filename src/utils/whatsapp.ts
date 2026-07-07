const WHATSAPP_NUMBER = '573236596976'

export function getWhatsAppLink(
  message = 'Hola, quiero agendar una cita de grooming',
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
