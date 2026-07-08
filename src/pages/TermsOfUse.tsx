import LegalPageLayout from '@/components/common/LegalPageLayout'

// NOTA INTERNA (no visible en el sitio): este texto es un borrador
// profesional razonable, redactado con IA a partir de como funciona
// realmente el sitio. Se recomienda que un abogado lo revise antes de
// que el negocio dependa de el en un conflicto real con un cliente.
function TermsOfUse() {
  return (
    <LegalPageLayout title="Términos de Uso" lastUpdated="7 de julio de 2026">
      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          1. Aceptación de los términos
        </h2>
        <p className="mt-2">
          Al usar este sitio web aceptas los presentes Términos de Uso. Si no
          estás de acuerdo con ellos, te pedimos no utilizar el sitio.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          2. Descripción del servicio
        </h2>
        <p className="mt-2">
          Este sitio es un espacio informativo de{' '}
          <strong>Enrededados Grooming</strong>, donde puedes conocer los
          servicios de grooming para perros y gatos que ofrecemos en Bogotá,
          ver nuestra cobertura y solicitar una cita de forma referencial. La
          disponibilidad de días y horas mostrada en la sección de reservas
          es orientativa: toda cita se confirma directamente con Paola
          Álvarez por WhatsApp, y solo queda en firme una vez recibas esa
          confirmación.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          3. Uso apropiado del sitio
        </h2>
        <p className="mt-2">
          Te comprometes a usar este sitio de forma lícita, sin intentar
          vulnerar su funcionamiento, seguridad o disponibilidad para otros
          usuarios.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          4. Servicios coordinados con aliados
        </h2>
        <p className="mt-2">
          Algunos servicios mostrados en el sitio (como veterinario a
          domicilio o guardería) son prestados por aliados externos, no
          directamente por Enrededados Grooming. En esos casos, Paola Álvarez
          actúa como punto de contacto para coordinar el servicio, pero la
          prestación final es responsabilidad del tercero que la ejecuta.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          5. Precios y pagos
        </h2>
        <p className="mt-2">
          Este sitio no procesa pagos ni muestra precios fijos. Todas las
          cotizaciones y formas de pago se coordinan directamente con Paola
          Álvarez por WhatsApp.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          6. Cancelaciones y reprogramación
        </h2>
        <p className="mt-2">
          Las cancelaciones o cambios de horario se coordinan directamente
          por WhatsApp, con la mayor anticipación posible para no afectar la
          agenda de otros clientes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">7. Responsabilidad</h2>
        <p className="mt-2">
          El grooming implica la manipulación directa de tu mascota.
          Prestamos el servicio con cuidado y experiencia profesional; a
          cambio, te pedimos informarnos con anticipación sobre cualquier
          condición de salud, comportamiento agresivo o sensibilidad
          particular de tu mascota, para poder atenderla de forma segura.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          8. Propiedad intelectual
        </h2>
        <p className="mt-2">
          Los textos, imágenes y demás contenido de este sitio pertenecen a
          Enrededados Grooming y no pueden reproducirse sin autorización
          previa.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          9. Modificaciones a estos términos
        </h2>
        <p className="mt-2">
          Podemos actualizar estos Términos de Uso ocasionalmente. La fecha
          de la última actualización aparece al inicio de esta página.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">10. Ley aplicable</h2>
        <p className="mt-2">
          Estos Términos de Uso se rigen por las leyes de la República de
          Colombia.
        </p>
      </section>
    </LegalPageLayout>
  )
}

export default TermsOfUse
