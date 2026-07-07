import { useState } from 'react'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import Button from '@/components/common/Button'
import { availability } from '@/data/availability'
import { getWhatsAppLink } from '@/utils/whatsapp'

const selectClasses =
  'mt-1 w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 focus:border-brand-teal focus:outline-none disabled:bg-neutral-100 disabled:text-neutral-400'

function Booking() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')

  const selectedDay = availability.find((day) => day.date === selectedDate)
  const slots = selectedDay?.slots ?? []
  const canConfirm = Boolean(selectedDay && selectedSlot)

  function handleDateChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedDate(event.target.value)
    setSelectedSlot('')
  }

  return (
    <section id="reservar" className="bg-white py-16 lg:py-24">
      <Container className="max-w-2xl">
        <SectionHeading
          eyebrow="Reserva tu cita"
          title="Agenda en simples pasos"
          description="Elige el día y la hora que mejor te queden. Confirmamos la cita contigo por WhatsApp."
          align="center"
          accent="pink"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <label className="block text-left">
            <span className="text-sm font-semibold text-neutral-700">Día</span>
            <select
              id="booking-date"
              value={selectedDate}
              onChange={handleDateChange}
              className={selectClasses}
            >
              <option value="">Selecciona un día</option>
              {availability.map((day) => (
                <option key={day.date} value={day.date}>
                  {day.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-left">
            <span className="text-sm font-semibold text-neutral-700">Hora</span>
            <select
              id="booking-hour"
              value={selectedSlot}
              onChange={(event) => setSelectedSlot(event.target.value)}
              disabled={!selectedDate}
              className={selectClasses}
            >
              <option value="">Selecciona una hora</option>
              {slots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8 text-center">
          {canConfirm ? (
            <Button
              href={getWhatsAppLink(
                `Hola, quiero reservar una cita para mi mascota el ${selectedDay?.label} a las ${selectedSlot}`,
              )}
            >
              Confirmar por WhatsApp
            </Button>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-400">
              Elige día y hora
            </span>
          )}
        </div>

        <p className="mt-4 text-center text-xs text-neutral-400">
          La disponibilidad mostrada es referencial; la cita se confirma
          directamente con Paola por WhatsApp.
        </p>
      </Container>
    </section>
  )
}

export default Booking
