import Link from 'next/link';
import Image from 'next/image';

const sections = [
  { id: 'productos', label: 'Productos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'quienes-somos', label: 'Quiénes somos' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'la-empresa', label: 'La empresa' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'ejemplos', label: 'Ejemplos' },
  { id: 'opiniones', label: 'Opiniones de usuarios' },
];

const stockImages = {
  productos: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', // tecnología
  servicios: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80', // soporte
  quienes: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80', // equipo
  ejemplos: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80', // familia
  opiniones: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80', // cliente feliz
};

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Top Menu */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--azul-x28)',
        color: 'var(--blanco-x28)',
        padding: '0.5rem 0',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
          {sections.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="menu-link"
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Secciones */}
      <section id="productos" style={{ padding: '80px 0 40px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
          <Image src={stockImages.productos} alt="Productos tecnología" width={320} height={200} style={{ objectFit: 'cover', borderRadius: 16, boxShadow: '0 4px 24px #0046ad22' }} />
          <div style={{ flex: 1, minWidth: 220 }}>
            <h2>Productos</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>Ofrecemos sistemas de seguridad para <b>vehículos</b>, <b>residencias</b>, <b>comercios</b> e <b>industrias</b>, adaptados a las necesidades de cada cliente.</p>
            <button className="btn">Ver catálogo</button>
          </div>
        </div>
      </section>
      <section id="servicios" style={{ padding: '40px 0', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap-reverse' }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h2>Servicios</h2>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.7, paddingLeft: 24 }}>
              <li>Instalación profesional</li>
              <li>Monitoreo 24/7</li>
              <li>Soporte técnico</li>
              <li>Capacitación para agentes e instaladores</li>
            </ul>
            <button className="btn">Solicitar servicio</button>
          </div>
          <Image src={stockImages.servicios} alt="Servicios soporte" width={320} height={200} style={{ objectFit: 'cover', borderRadius: 16, boxShadow: '0 4px 24px #0046ad22' }} />
        </div>
      </section>
      <section id="quienes-somos" style={{ padding: '40px 0', maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
          <Image src={stockImages.quienes} alt="Equipo de trabajo" width={220} height={180} style={{ objectFit: 'cover', borderRadius: 16, boxShadow: '0 4px 24px #0046ad22' }} />
          <div style={{ flex: 1, minWidth: 220 }}>
            <h2>Quiénes somos</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 700 }}>
              Somos una empresa argentina con más de <b>35 años de experiencia</b> en el rubro de la seguridad electrónica, comprometidos con la <b>innovación</b> y la <b>calidad</b>.
            </p>
            <div style={{ background: 'var(--azul-x28)', color: 'var(--blanco-x28)', borderRadius: 12, padding: '1em 2em', marginTop: 16, fontWeight: 700 }}>
              Seguridad, confianza y tecnología nacional.
            </div>
          </div>
        </div>
      </section>
      <section id="contacto" style={{ padding: '40px 0', maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h2>Contacto</h2>
        <div style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          <div><b>Teléfono:</b> (011) 4114-9900</div>
          <div><b>Email:</b> <a href="mailto:info@x-28.com" style={{ color: 'var(--azul-x28)', textDecoration: 'underline' }}>info@x-28.com</a></div>
          <div><b>Dirección:</b> Juan Antonio Lavalleja 1212, Córdoba, Argentina</div>
        </div>
        <button className="btn" style={{ marginTop: 20 }}>Enviar consulta</button>
      </section>
      <section id="la-empresa" style={{ padding: '40px 0', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2>La empresa</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          X-28 Alarmas es líder en sistemas de protección integral.<br />
          <Link href="https://www.x-28.com" target="_blank" style={{ color: 'var(--amarillo-x28)', textDecoration: 'underline', fontWeight: 700 }}>Conocé más en www.x-28.com</Link>
        </p>
      </section>
      <section id="trayectoria" style={{ padding: '40px 0', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2>Trayectoria</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          Más de <b>2.000.000</b> de alarmas instaladas en vehículos y <b>60.000</b> en hogares.<br />
          Planta industrial de <b>6.500m²</b> y presencia en todo el país.
        </p>
      </section>
      <section id="ejemplos" style={{ padding: '40px 0', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap-reverse' }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h2>Ejemplos</h2>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ background: 'var(--amarillo-x28)', color: 'var(--azul-x28)', borderRadius: 12, padding: '1em 2em', minWidth: 220, fontWeight: 700 }}>
                Instalación en flotas empresariales
              </div>
              <div style={{ background: 'var(--azul-x28)', color: 'var(--blanco-x28)', borderRadius: 12, padding: '1em 2em', minWidth: 220, fontWeight: 700 }}>
                Protección de hogares familiares
              </div>
              <div style={{ background: 'var(--gris-x28)', color: 'var(--azul-x28)', borderRadius: 12, padding: '1em 2em', minWidth: 220, fontWeight: 700 }}>
                Monitoreo 24/7 para negocios
              </div>
            </div>
          </div>
          <Image src={stockImages.ejemplos} alt="Familia protegida" width={320} height={200} style={{ objectFit: 'cover', borderRadius: 16, boxShadow: '0 4px 24px #0046ad22' }} />
        </div>
      </section>
      <section id="opiniones" style={{ padding: '40px 0 80px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h2>Opiniones de usuarios</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
          <Image src={stockImages.opiniones} alt="Cliente feliz" width={120} height={120} style={{ objectFit: 'cover', borderRadius: '50%', boxShadow: '0 4px 24px #0046ad22', marginBottom: 16 }} />
          <blockquote style={{ background: 'var(--gris-x28)', borderLeft: '6px solid var(--amarillo-x28)', padding: '1em 2em', borderRadius: 8, maxWidth: 500, fontStyle: 'italic' }}>
            &quot;Excelente atención y productos de calidad.&quot;
          </blockquote>
          <blockquote style={{ background: 'var(--gris-x28)', borderLeft: '6px solid var(--azul-x28)', padding: '1em 2em', borderRadius: 8, maxWidth: 500, fontStyle: 'italic' }}>
            &quot;Muy conforme con el servicio de monitoreo.&quot;
          </blockquote>
        </div>
      </section>
    </main>
  );
}
