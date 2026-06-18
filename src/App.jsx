// App.jsx — Demo page
import { Avatar, AvatarGroup } from './components/Avatar';

const ALL_ROLES = [
  'engineer','designer','pm','data','growth',
  'support','finance','marketing','devops','legal',
];

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui,sans-serif', padding: '40px 48px', maxWidth: 900, margin: '0 auto', color: '#111' }}>

      <h1 style={{ fontSize: 22, fontWeight: 500, marginBottom: 6 }}>Avatar Design System</h1>
      <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 48 }}>
        Flat geometric avatars — SaaS product use
      </p>

      {/* ── All roles ── */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 500, color: '#9CA3AF', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 20 }}>
          All roles
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {ALL_ROLES.map(role => (
            <Avatar key={role} role={role} size="xl" showName />
          ))}
        </div>
      </section>

      {/* ── Size scale ── */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 500, color: '#9CA3AF', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 20 }}>
          Size scale
        </h2>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
          {['xs','sm','md','lg','xl','2xl'].map(s => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Avatar role="designer" size={s} />
              <span style={{ fontSize: 11, color: '#9CA3AF' }}>{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Avatar group ── */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 500, color: '#9CA3AF', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 20 }}>
          Avatar group
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <AvatarGroup size="md" max={5} items={[
            {role:'engineer'},{role:'designer'},{role:'pm'},{role:'data'},{role:'growth'},{role:'support'},{role:'finance'},
          ]} />
          <AvatarGroup size="sm" max={4} items={[
            {role:'marketing'},{role:'devops'},{role:'legal'},{role:'engineer'},{role:'designer'},
          ]} />
        </div>
      </section>

      {/* ── Usage in a UI card ── */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 500, color: '#9CA3AF', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 20 }}>
          In context — team card
        </h2>
        <div style={{
          background: '#fff',
          border: '0.5px solid #E5E7EB',
          borderRadius: 12,
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          maxWidth: 400,
        }}>
          {[
            { role: 'pm',       name: 'Sarah Chen',    tag: 'Product Manager' },
            { role: 'engineer', name: 'Alex Rivera',   tag: 'Senior Engineer' },
            { role: 'designer', name: 'Mia Nakamura',  tag: 'Lead Designer'   },
          ].map(u => (
            <div key={u.role} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar role={u.role} size="md" />
              <div>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 500 }}>{u.name}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#6B7280' }}>{u.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Code snippet ── */}
      <section>
        <h2 style={{ fontSize: 13, fontWeight: 500, color: '#9CA3AF', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 16 }}>
          Usage
        </h2>
        <pre style={{
          background: '#F9FAFB',
          border: '0.5px solid #E5E7EB',
          borderRadius: 8,
          padding: '16px 20px',
          fontSize: 13,
          lineHeight: 1.7,
          overflowX: 'auto',
        }}>
{`import { Avatar, AvatarGroup } from './components/Avatar';

// Single avatar
<Avatar role="engineer" size="md" />
<Avatar role="designer" size="lg" showName />
<Avatar role="pm" size={48} />

// Stacked group
<AvatarGroup
  size="sm"
  max={4}
  items={[
    { role: 'engineer' },
    { role: 'designer' },
    { role: 'pm' },
  ]}
/>`}
        </pre>
      </section>

    </div>
  );
}
