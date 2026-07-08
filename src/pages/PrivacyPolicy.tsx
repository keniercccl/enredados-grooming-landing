import LegalPageLayout from '@/components/common/LegalPageLayout'

// NOTA INTERNA (no visible en el sitio): este texto es un borrador
// profesional razonable, redactado con IA a partir de como funciona
// realmente el sitio. Se recomienda que un abogado lo revise antes de
// que el negocio dependa de el en un conflicto real con un cliente.
function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Política de Privacidad" lastUpdated="7 de julio de 2026">
      <section>
        <h2 className="text-xl font-bold text-neutral-900">1. Responsable del tratamiento</h2>
        <p className="mt-2">
          Esta Política de Privacidad aplica al sitio web de{' '}
          <strong>Enrededados Grooming</strong>, operado por Paola Álvarez, con
          domicilio en Bogotá, Colombia. Para cualquier consulta sobre el
          tratamiento de tus datos personales, puedes escribirnos por WhatsApp
          al 323 659 6976.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">2. Datos que recolectamos</h2>
        <p className="mt-2">
          Cuando nos contactas para agendar o cotizar un servicio (por
          WhatsApp o a través del formulario de reserva de este sitio),
          podemos recolectar:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Nombre y número de teléfono/WhatsApp.</li>
          <li>Dirección, únicamente si solicitas el servicio a domicilio.</li>
          <li>
            Información sobre tu mascota (especie, raza, tamaño,
            comportamiento) necesaria para prestar el servicio de forma
            segura.
          </li>
        </ul>
        <p className="mt-2">
          El formulario de reserva de este sitio no envía tus datos a ningún
          servidor propio: únicamente prepara un mensaje de WhatsApp con el
          día y la hora que elijas, para que lo envíes tú mismo.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          3. Finalidad del tratamiento
        </h2>
        <p className="mt-2">
          Usamos tus datos únicamente para agendar y prestar el servicio de
          grooming solicitado, contactarte para confirmar o coordinar citas,
          y brindarte una mejor atención en futuras solicitudes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          4. Cómo usamos y compartimos tu información
        </h2>
        <p className="mt-2">
          No vendemos ni compartimos tus datos personales con terceros con
          fines comerciales. Solo compartimos la información estrictamente
          necesaria con aliados externos (por ejemplo, para coordinar un
          servicio de veterinario a domicilio o guardería) cuando tú lo
          autorizas expresamente para ese fin puntual, a través de la
          conversación de WhatsApp.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          5. Almacenamiento y seguridad
        </h2>
        <p className="mt-2">
          Este sitio web es informativo y no cuenta con una base de datos
          propia: no almacena tus datos personales en ningún servidor. Toda
          la comunicación y coordinación de citas se maneja directamente por
          Paola Álvarez a través de WhatsApp.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          6. Tus derechos (Ley 1581 de 2012)
        </h2>
        <p className="mt-2">
          De acuerdo con la normativa colombiana de protección de datos
          personales (Ley 1581 de 2012 y normas complementarias), tienes
          derecho a conocer, actualizar, rectificar y solicitar la supresión
          de tus datos personales, así como a revocar la autorización que nos
          hayas dado para tratarlos. Puedes ejercer estos derechos
          escribiéndonos por WhatsApp al 323 659 6976.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">7. Cookies</h2>
        <p className="mt-2">
          Actualmente este sitio no utiliza cookies de rastreo ni
          herramientas de analítica. Si esto cambia en el futuro, se
          actualizará esta política para reflejarlo.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-neutral-900">
          8. Cambios a esta política
        </h2>
        <p className="mt-2">
          Podemos actualizar esta Política de Privacidad ocasionalmente. La
          fecha de la última actualización aparece al inicio de esta página.
        </p>
      </section>
    </LegalPageLayout>
  )
}

export default PrivacyPolicy
