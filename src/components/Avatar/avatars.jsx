// avatars.jsx — All 10 avatar SVG definitions
// Each avatar is a React functional component accepting width/height props

export function AvatarEngineer({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#E8EEF7" />
      <clipPath id="clip-engineer"><circle cx="60" cy="60" r="60" /></clipPath>
      <g clipPath="url(#clip-engineer)">
        {/* body */}
        <rect x="8" y="88" width="104" height="50" rx="10" fill="#3B5BDB" />
        {/* neck */}
        <rect x="48" y="74" width="24" height="20" fill="#C9A87C" />
        {/* head */}
        <ellipse cx="60" cy="62" rx="30" ry="32" fill="#D4A574" />
        {/* hair */}
        <rect x="30" y="30" width="60" height="24" rx="12" fill="#2C2825" />
        <rect x="30" y="46" width="60" height="8" fill="#2C2825" />
        {/* ears */}
        <ellipse cx="30" cy="62" rx="6" ry="8" fill="#C49460" />
        <ellipse cx="90" cy="62" rx="6" ry="8" fill="#C49460" />
        {/* eyes */}
        <ellipse cx="48" cy="60" rx="5" ry="6" fill="#1A1A2E" />
        <ellipse cx="72" cy="60" rx="5" ry="6" fill="#1A1A2E" />
        <circle cx="50" cy="58" r="2" fill="white" />
        <circle cx="74" cy="58" r="2" fill="white" />
        {/* nose */}
        <ellipse cx="60" cy="69" rx="3.5" ry="2.5" fill="#B8834A" />
        {/* mouth */}
        <path d="M52 76 Q60 83 68 76" fill="none" stroke="#8B4513" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function AvatarDesigner({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#EEF0F9" />
      <clipPath id="clip-designer"><circle cx="60" cy="60" r="60" /></clipPath>
      <g clipPath="url(#clip-designer)">
        <rect x="6" y="86" width="108" height="50" rx="10" fill="#6C63FF" opacity="0.85" />
        <rect x="47" y="73" width="26" height="19" fill="#E8C4A0" />
        <ellipse cx="60" cy="60" rx="31" ry="32" fill="#F2D9BB" />
        {/* long hair */}
        <rect x="29" y="28" width="62" height="22" rx="11" fill="#3D2B1F" />
        <rect x="29" y="42" width="10" height="44" rx="5" fill="#3D2B1F" />
        <rect x="81" y="42" width="10" height="44" rx="5" fill="#3D2B1F" />
        <ellipse cx="29" cy="61" rx="6" ry="8" fill="#DDB98A" />
        <ellipse cx="91" cy="61" rx="6" ry="8" fill="#DDB98A" />
        {/* eyes + lashes */}
        <ellipse cx="48" cy="59" rx="6" ry="6.5" fill="#1A1A2E" />
        <ellipse cx="72" cy="59" rx="6" ry="6.5" fill="#1A1A2E" />
        <circle cx="50" cy="57" r="2" fill="white" />
        <circle cx="74" cy="57" r="2" fill="white" />
        {[[-9,-13],[-4,-16],[2,-17],[7,-15],[11,-12]].map(([dx,dy],i) => (
          <line key={i} x1={48+dx*0.75} y1={59+dy*0.75} x2={48+dx} y2={59+dy} stroke="#1A1A2E" strokeWidth="1.3" strokeLinecap="round" />
        ))}
        {[[-9,-13],[-4,-16],[2,-17],[7,-15],[11,-12]].map(([dx,dy],i) => (
          <line key={i} x1={72+dx*0.75} y1={59+dy*0.75} x2={72+dx} y2={59+dy} stroke="#1A1A2E" strokeWidth="1.3" strokeLinecap="round" />
        ))}
        <ellipse cx="60" cy="67" rx="3" ry="2.2" fill="#C89A6A" />
        <path d="M52 74 Q60 81 68 74" fill="none" stroke="#A0522D" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function AvatarPM({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#F0EFED" />
      <clipPath id="clip-pm"><circle cx="60" cy="60" r="60" /></clipPath>
      <g clipPath="url(#clip-pm)">
        <rect x="6" y="86" width="108" height="50" rx="10" fill="#374151" />
        <polygon points="48,86 60,98 52,86" fill="white" />
        <polygon points="72,86 60,98 68,86" fill="white" />
        <polygon points="60,86 56,100 64,100" fill="#3B5BDB" />
        <rect x="47" y="74" width="26" height="18" fill="#C9A080" />
        <ellipse cx="60" cy="61" rx="30" ry="31" fill="#D4A574" />
        <path d="M30 46 Q32 28 60 27 Q88 28 90 46 L90 54 Q60 42 30 54Z" fill="#4A3728" />
        <ellipse cx="30" cy="61" rx="6" ry="8" fill="#C49060" />
        <ellipse cx="90" cy="61" rx="6" ry="8" fill="#C49060" />
        <ellipse cx="48" cy="59" rx="5" ry="5.5" fill="#1A1A2E" />
        <ellipse cx="72" cy="59" rx="5" ry="5.5" fill="#1A1A2E" />
        <circle cx="50" cy="57" r="1.8" fill="white" />
        <circle cx="74" cy="57" r="1.8" fill="white" />
        <line x1="42" y1="51" x2="56" y2="50" stroke="#3A2A1E" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="64" y1="50" x2="78" y2="51" stroke="#3A2A1E" strokeWidth="2.2" strokeLinecap="round" />
        <ellipse cx="60" cy="68" rx="3.5" ry="2.5" fill="#B87C48" />
        <path d="M51 75 Q60 83 69 75" fill="none" stroke="#8B4513" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function AvatarData({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#E8F4F1" />
      <clipPath id="clip-data"><circle cx="60" cy="60" r="60" /></clipPath>
      <g clipPath="url(#clip-data)">
        <rect x="8" y="87" width="104" height="50" rx="10" fill="#0F766E" />
        <rect x="47" y="75" width="26" height="18" fill="#FBBF9A" />
        <ellipse cx="60" cy="62" rx="31" ry="32" fill="#FCCBA8" />
        {/* curly hair */}
        <ellipse cx="60" cy="34" rx="34" ry="18" fill="#1C1008" />
        <circle cx="32" cy="40" r="13" fill="#1C1008" />
        <circle cx="88" cy="40" r="13" fill="#1C1008" />
        <circle cx="48" cy="30" r="12" fill="#1C1008" />
        <circle cx="72" cy="30" r="12" fill="#1C1008" />
        <ellipse cx="29" cy="62" rx="6" ry="8" fill="#EAB080" />
        <ellipse cx="91" cy="62" rx="6" ry="8" fill="#EAB080" />
        {/* glasses */}
        <rect x="33" y="52" width="22" height="16" rx="6" fill="none" stroke="#374151" strokeWidth="2.2" />
        <rect x="65" y="52" width="22" height="16" rx="6" fill="none" stroke="#374151" strokeWidth="2.2" />
        <line x1="55" y1="60" x2="65" y2="60" stroke="#374151" strokeWidth="2.2" />
        <line x1="29" y1="60" x2="33" y2="60" stroke="#374151" strokeWidth="2.2" />
        <line x1="87" y1="60" x2="91" y2="60" stroke="#374151" strokeWidth="2.2" />
        <ellipse cx="44" cy="60" rx="4" ry="4.5" fill="#1A1A2E" />
        <ellipse cx="76" cy="60" rx="4" ry="4.5" fill="#1A1A2E" />
        <circle cx="46" cy="58" r="1.5" fill="white" />
        <circle cx="78" cy="58" r="1.5" fill="white" />
        <ellipse cx="60" cy="69" rx="3" ry="2.2" fill="#D4916A" />
        <path d="M52 76 Q60 83 68 76" fill="none" stroke="#A05020" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function AvatarGrowth({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#F5F0E8" />
      <clipPath id="clip-growth"><circle cx="60" cy="60" r="60" /></clipPath>
      <g clipPath="url(#clip-growth)">
        <rect x="6" y="85" width="108" height="50" rx="12" fill="#6366F1" />
        <rect x="36" y="97" width="48" height="18" rx="7" fill="#4F46E5" />
        <rect x="47" y="75" width="26" height="18" fill="#E8C49A" />
        <ellipse cx="60" cy="62" rx="31" ry="32" fill="#F0C98C" />
        <path d="M29 44 Q30 24 60 22 Q88 22 91 38 L91 50 Q74 34 48 38 Q36 40 32 52Z" fill="#C87533" />
        <ellipse cx="29" cy="62" rx="6" ry="8" fill="#D4A870" />
        <ellipse cx="91" cy="62" rx="6" ry="8" fill="#D4A870" />
        <ellipse cx="48" cy="60" rx="6" ry="6.5" fill="#1A1A2E" />
        <ellipse cx="72" cy="60" rx="6" ry="6.5" fill="#1A1A2E" />
        <circle cx="50" cy="57.5" r="2.2" fill="white" />
        <circle cx="74" cy="57.5" r="2.2" fill="white" />
        <path d="M41 51 Q48 46 56 51" fill="none" stroke="#8B4A00" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M64 51 Q71 46 79 51" fill="none" stroke="#8B4A00" strokeWidth="2.2" strokeLinecap="round" />
        <ellipse cx="60" cy="69" rx="3.5" ry="2.5" fill="#C08040" />
        <path d="M50 76 Q60 85 70 76" fill="none" stroke="#8B3A00" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function AvatarSupport({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#EDF4EC" />
      <clipPath id="clip-support"><circle cx="60" cy="60" r="60" /></clipPath>
      <g clipPath="url(#clip-support)">
        <rect x="8" y="86" width="104" height="50" rx="10" fill="#16A34A" />
        <rect x="47" y="75" width="26" height="18" fill="#C9A080" />
        <ellipse cx="60" cy="62" rx="30" ry="31" fill="#D4A574" />
        {/* headset */}
        <path d="M30 55 Q30 24 60 24 Q90 24 90 55" fill="none" stroke="#374151" strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="30" cy="57" rx="8" ry="11" fill="#374151" />
        <ellipse cx="90" cy="57" rx="8" ry="11" fill="#374151" />
        <line x1="90" y1="68" x2="97" y2="76" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="99" cy="78" rx="5" ry="4" fill="#374151" />
        <rect x="32" y="34" width="56" height="18" rx="9" fill="#5A3E2B" />
        <ellipse cx="30" cy="62" rx="5" ry="7" fill="#C49060" />
        <ellipse cx="90" cy="62" rx="5" ry="7" fill="#C49060" />
        <ellipse cx="48" cy="61" rx="5" ry="5.5" fill="#1A1A2E" />
        <ellipse cx="72" cy="61" rx="5" ry="5.5" fill="#1A1A2E" />
        <circle cx="50" cy="59" r="1.8" fill="white" />
        <circle cx="74" cy="59" r="1.8" fill="white" />
        <ellipse cx="60" cy="69" rx="3" ry="2.2" fill="#B87848" />
        <path d="M52 75 Q60 82 68 75" fill="none" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function AvatarFinance({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#EEF0F4" />
      <clipPath id="clip-finance"><circle cx="60" cy="60" r="60" /></clipPath>
      <g clipPath="url(#clip-finance)">
        <rect x="6" y="86" width="108" height="50" rx="10" fill="#1E3A5F" />
        <polygon points="48,86 60,98 52,86" fill="white" />
        <polygon points="72,86 60,98 68,86" fill="white" />
        <rect x="47" y="74" width="26" height="18" fill="#E8C9A8" />
        <ellipse cx="60" cy="61" rx="30" ry="32" fill="#EDCFAA" />
        <path d="M30 44 Q31 26 60 25 Q89 26 90 44 L90 54 Q71 42 49 42 Q36 42 30 54Z" fill="#2C2420" />
        <ellipse cx="30" cy="62" rx="6" ry="8" fill="#DEBA8A" />
        <ellipse cx="90" cy="62" rx="6" ry="8" fill="#DEBA8A" />
        {/* thin-rimmed glasses */}
        <rect x="35" y="53" width="20" height="14" rx="5" fill="none" stroke="#8B7355" strokeWidth="1.8" />
        <rect x="65" y="53" width="20" height="14" rx="5" fill="none" stroke="#8B7355" strokeWidth="1.8" />
        <line x1="55" y1="60" x2="65" y2="60" stroke="#8B7355" strokeWidth="1.8" />
        <line x1="30" y1="60" x2="35" y2="60" stroke="#8B7355" strokeWidth="1.8" />
        <line x1="85" y1="60" x2="90" y2="60" stroke="#8B7355" strokeWidth="1.8" />
        <ellipse cx="45" cy="60" rx="3.5" ry="4" fill="#1A1A2E" />
        <ellipse cx="75" cy="60" rx="3.5" ry="4" fill="#1A1A2E" />
        <circle cx="46.5" cy="58.5" r="1.3" fill="white" />
        <circle cx="76.5" cy="58.5" r="1.3" fill="white" />
        <ellipse cx="60" cy="68" rx="3" ry="2.2" fill="#C8985A" />
        <path d="M51 75 Q60 82 69 75" fill="none" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function AvatarMarketing({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#F5EEEE" />
      <clipPath id="clip-marketing"><circle cx="60" cy="60" r="60" /></clipPath>
      <g clipPath="url(#clip-marketing)">
        <rect x="6" y="85" width="108" height="50" rx="10" fill="#BE185D" />
        <path d="M36 85 Q60 100 84 85" fill="none" stroke="#F9A8D4" strokeWidth="5" strokeLinecap="round" />
        <rect x="47" y="74" width="26" height="17" fill="#F0D5B8" />
        <ellipse cx="60" cy="62" rx="30" ry="31" fill="#F5D9B5" />
        {/* wavy hair */}
        <path d="M30 44 Q28 24 60 22 Q92 24 90 44 L92 62 Q82 48 78 66 Q68 44 60 50 Q52 44 42 66 Q38 48 28 62Z" fill="#6B3A2A" />
        <ellipse cx="30" cy="62" rx="6" ry="8" fill="#DDB88A" />
        <ellipse cx="90" cy="62" rx="6" ry="8" fill="#DDB88A" />
        <circle cx="30" cy="72" r="3.5" fill="#F59E0B" />
        <circle cx="90" cy="72" r="3.5" fill="#F59E0B" />
        <ellipse cx="48" cy="60" rx="5.5" ry="6" fill="#1A1A2E" />
        <ellipse cx="72" cy="60" rx="5.5" ry="6" fill="#1A1A2E" />
        <circle cx="50" cy="58" r="2" fill="white" />
        <circle cx="74" cy="58" r="2" fill="white" />
        {[[-8,-12],[-3,-15],[2,-16],[7,-14],[11,-11]].map(([dx,dy],i) => (
          <line key={i} x1={48+dx*0.75} y1={60+dy*0.75} x2={48+dx} y2={60+dy} stroke="#1A1A2E" strokeWidth="1.3" strokeLinecap="round" />
        ))}
        {[[-8,-12],[-3,-15],[2,-16],[7,-14],[11,-11]].map(([dx,dy],i) => (
          <line key={i} x1={72+dx*0.75} y1={60+dy*0.75} x2={72+dx} y2={60+dy} stroke="#1A1A2E" strokeWidth="1.3" strokeLinecap="round" />
        ))}
        <ellipse cx="60" cy="68" rx="3" ry="2.2" fill="#C8906A" />
        <path d="M51 75 Q60 83 69 75" fill="none" stroke="#A0402A" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function AvatarDevOps({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#EDEEF5" />
      <clipPath id="clip-devops"><circle cx="60" cy="60" r="60" /></clipPath>
      <g clipPath="url(#clip-devops)">
        <rect x="6" y="86" width="108" height="50" rx="10" fill="#312E81" />
        <rect x="47" y="74" width="26" height="18" fill="#C49870" />
        <ellipse cx="60" cy="62" rx="31" ry="32" fill="#D4A070" />
        <ellipse cx="60" cy="40" rx="32" ry="18" fill="#1C1008" />
        <ellipse cx="29" cy="62" rx="6" ry="8" fill="#C08060" />
        <ellipse cx="91" cy="62" rx="6" ry="8" fill="#C08060" />
        {/* beard */}
        <path d="M32 72 Q60 92 88 72 Q84 86 60 90 Q36 86 32 72Z" fill="#2C1A08" />
        <ellipse cx="48" cy="59" rx="5.5" ry="6" fill="#1A1A2E" />
        <ellipse cx="72" cy="59" rx="5.5" ry="6" fill="#1A1A2E" />
        <circle cx="50" cy="57" r="2" fill="white" />
        <circle cx="74" cy="57" r="2" fill="white" />
        <line x1="41" y1="50" x2="56" y2="50" stroke="#1C1008" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="64" y1="50" x2="79" y2="50" stroke="#1C1008" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="60" cy="67" rx="3.5" ry="2.5" fill="#B07040" />
        <path d="M51 73 Q60 80 69 73" fill="none" stroke="#7A3A10" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function AvatarLegal({ size = 120 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#F2F2F0" />
      <clipPath id="clip-legal"><circle cx="60" cy="60" r="60" /></clipPath>
      <g clipPath="url(#clip-legal)">
        <rect x="6" y="86" width="108" height="50" rx="10" fill="#292524" />
        <polygon points="48,86 60,96 52,86" fill="white" />
        <polygon points="72,86 60,96 68,86" fill="white" />
        <rect x="47" y="74" width="26" height="18" fill="#E8C5A0" />
        <ellipse cx="60" cy="62" rx="30" ry="31" fill="#ECCC9E" />
        <path d="M30 46 Q30 24 60 23 Q90 24 90 46 L92 66 Q82 52 60 52 Q38 52 28 66Z" fill="#4A3020" />
        <ellipse cx="60" cy="24" rx="16" ry="9" fill="#4A3020" />
        <ellipse cx="30" cy="62" rx="6" ry="8" fill="#DCBA80" />
        <ellipse cx="90" cy="62" rx="6" ry="8" fill="#DCBA80" />
        <circle cx="30" cy="72" r="4" fill="#F8F4EE" />
        <circle cx="90" cy="72" r="4" fill="#F8F4EE" />
        <ellipse cx="48" cy="60" rx="5.5" ry="6" fill="#1A1A2E" />
        <ellipse cx="72" cy="60" rx="5.5" ry="6" fill="#1A1A2E" />
        <circle cx="50" cy="58" r="2" fill="white" />
        <circle cx="74" cy="58" r="2" fill="white" />
        <path d="M41 51 Q48 46 56 51" fill="none" stroke="#3A2010" strokeWidth="2" strokeLinecap="round" />
        <path d="M64 51 Q71 46 78 51" fill="none" stroke="#3A2010" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="60" cy="68" rx="3" ry="2.2" fill="#C8985A" />
        <path d="M51 75 Q60 82 69 75" fill="none" stroke="#8B4513" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
