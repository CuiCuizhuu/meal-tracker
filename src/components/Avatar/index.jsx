// Avatar.jsx — Main component
// Usage: <Avatar role="engineer" size={40} showName />

import {
  AvatarEngineer, AvatarDesigner, AvatarPM, AvatarData, AvatarGrowth,
  AvatarSupport, AvatarFinance, AvatarMarketing, AvatarDevOps, AvatarLegal,
} from './avatars';

const AVATAR_MAP = {
  engineer:  { component: AvatarEngineer,  label: 'Engineer'  },
  designer:  { component: AvatarDesigner,  label: 'Designer'  },
  pm:        { component: AvatarPM,        label: 'PM'        },
  data:      { component: AvatarData,      label: 'Data'      },
  growth:    { component: AvatarGrowth,    label: 'Growth'    },
  support:   { component: AvatarSupport,   label: 'Support'   },
  finance:   { component: AvatarFinance,   label: 'Finance'   },
  marketing: { component: AvatarMarketing, label: 'Marketing' },
  devops:    { component: AvatarDevOps,    label: 'DevOps'    },
  legal:     { component: AvatarLegal,     label: 'Legal'     },
};

// Size presets (px)
const SIZE_MAP = {
  xs:  24,
  sm:  32,
  md:  40,   // default
  lg:  56,
  xl:  80,
  '2xl': 120,
};

/**
 * Avatar component
 *
 * @param {string}  role      - 'engineer' | 'designer' | 'pm' | 'data' | 'growth' |
 *                              'support' | 'finance' | 'marketing' | 'devops' | 'legal'
 * @param {string}  size      - 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'  (or pass number in px)
 * @param {boolean} showName  - show role label below avatar
 * @param {string}  className - extra CSS class on wrapper
 * @param {object}  style     - inline styles on wrapper
 */
export function Avatar({ role = 'engineer', size = 'md', showName = false, className = '', style = {} }) {
  const entry = AVATAR_MAP[role] ?? AVATAR_MAP['engineer'];
  const Component = entry.component;
  const px = typeof size === 'number' ? size : (SIZE_MAP[size] ?? SIZE_MAP.md);

  return (
    <div
      className={`avatar-root ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        ...style,
      }}
    >
      <div
        style={{
          width: px,
          height: px,
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
          lineHeight: 0,
        }}
        role="img"
        aria-label={entry.label}
        title={entry.label}
      >
        <Component size={px} />
      </div>

      {showName && (
        <span
          style={{
            fontSize: Math.max(10, Math.round(px * 0.25)),
            color: '#6B7280',
            fontWeight: 500,
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
          }}
        >
          {entry.label}
        </span>
      )}
    </div>
  );
}

/**
 * AvatarGroup — stacked avatar row
 *
 * @param {{ role: string }[]} items  - array of avatar configs
 * @param {string}             size   - size preset
 * @param {number}             max    - max visible, rest shown as "+N"
 */
export function AvatarGroup({ items = [], size = 'md', max = 5 }) {
  const px = typeof size === 'number' ? size : (SIZE_MAP[size] ?? SIZE_MAP.md);
  const visible = items.slice(0, max);
  const extra = items.length - max;
  const overlap = Math.round(px * 0.3);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {visible.map((item, i) => (
        <div
          key={i}
          style={{
            marginLeft: i === 0 ? 0 : -overlap,
            borderRadius: '50%',
            border: '2px solid white',
            lineHeight: 0,
            zIndex: visible.length - i,
          }}
        >
          <Avatar role={item.role} size={px} />
        </div>
      ))}
      {extra > 0 && (
        <div
          style={{
            marginLeft: -overlap,
            width: px,
            height: px,
            borderRadius: '50%',
            background: '#E5E7EB',
            border: '2px solid white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: Math.max(10, Math.round(px * 0.28)),
            color: '#6B7280',
            fontWeight: 500,
            zIndex: 0,
          }}
        >
          +{extra}
        </div>
      )}
    </div>
  );
}

export default Avatar;
