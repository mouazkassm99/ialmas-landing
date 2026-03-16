// Animated cybersecurity network topology — pure SVG, no external deps

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(235,30,42,0.06), transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 480 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[520px] h-auto"
        aria-hidden
      >
        <defs>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="edgeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Paths for data packet motion */}
          <path id="pkt1" d="M240,55 L240,215" />
          <path id="pkt2" d="M395,145 L438,285" />
          <path id="pkt3" d="M42,285 L138,390" />
          <path id="pkt4" d="M240,215 L138,390" />
          <path id="pkt5" d="M138,390 L240,430" />
        </defs>

        {/* ── Regular edges (dim) ── */}
        {[
          [240, 55, 88, 145],
          [240, 55, 395, 145],
          [88, 145, 42, 285],
          [395, 145, 438, 285],
          [42, 285, 138, 390],
          [438, 285, 342, 390],
          [138, 390, 240, 430],
          [342, 390, 240, 430],
          [88, 145, 240, 215],
          [438, 285, 342, 390],
          [342, 390, 240, 215],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(42,52,69,0.9)"
            strokeWidth="1"
          />
        ))}

        {/* ── Hub connection lines (slightly brighter) ── */}
        {[
          [240, 215, 42, 285],
          [240, 215, 395, 145],
          [240, 215, 342, 390],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(42,52,69,0.5)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        ))}

        {/* ── Active edges (animated red) ── */}
        {/* Center vertical */}
        <line
          x1="240" y1="55" x2="240" y2="215"
          stroke="rgba(235,30,42,0.55)"
          strokeWidth="1.5"
          strokeDasharray="7 5"
          filter="url(#edgeGlow)"
        >
          <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.4s" repeatCount="indefinite" />
        </line>

        {/* Right branch */}
        <line
          x1="395" y1="145" x2="438" y2="285"
          stroke="rgba(235,30,42,0.45)"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          filter="url(#edgeGlow)"
        >
          <animate attributeName="stroke-dashoffset" from="22" to="0" dur="1.8s" repeatCount="indefinite" />
        </line>

        {/* Lower left */}
        <line
          x1="42" y1="285" x2="138" y2="390"
          stroke="rgba(235,30,42,0.4)"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          filter="url(#edgeGlow)"
        >
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2.1s" repeatCount="indefinite" />
        </line>

        {/* Hub to bottom-left */}
        <line
          x1="240" y1="215" x2="138" y2="390"
          stroke="rgba(235,30,42,0.35)"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          filter="url(#edgeGlow)"
        >
          <animate attributeName="stroke-dashoffset" from="22" to="0" dur="2.4s" repeatCount="indefinite" />
        </line>

        {/* ── Pulse rings on hub and secondary hubs ── */}
        {/* Main hub pulse ring 1 */}
        <circle cx="240" cy="215" r="12" fill="none" stroke="rgba(235,30,42,0.5)" strokeWidth="1">
          <animate attributeName="r" values="12;32" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Main hub pulse ring 2 (offset) */}
        <circle cx="240" cy="215" r="12" fill="none" stroke="rgba(235,30,42,0.3)" strokeWidth="0.5">
          <animate attributeName="r" values="12;46" dur="2s" begin="0.7s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0" dur="2s" begin="0.7s" repeatCount="indefinite" />
        </circle>

        {/* Bottom hub pulse */}
        <circle cx="138" cy="390" r="8" fill="none" stroke="rgba(235,30,42,0.35)" strokeWidth="0.75">
          <animate attributeName="r" values="8;22" dur="2.5s" begin="0.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="2.5s" begin="0.4s" repeatCount="indefinite" />
        </circle>

        {/* Top node subtle pulse */}
        <circle cx="240" cy="55" r="6" fill="none" stroke="rgba(235,30,42,0.3)" strokeWidth="0.5">
          <animate attributeName="r" values="6;18" dur="3s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0" dur="3s" begin="1s" repeatCount="indefinite" />
        </circle>

        {/* ── Data packets traveling along active edges ── */}
        <circle r="2.5" fill="#EB1E2A" opacity="0.9" filter="url(#nodeGlow)">
          <animateMotion dur="1.4s" repeatCount="indefinite">
            <mpath href="#pkt1" />
          </animateMotion>
        </circle>

        <circle r="2" fill="#EB1E2A" opacity="0.7" filter="url(#nodeGlow)">
          <animateMotion dur="1.8s" begin="0.5s" repeatCount="indefinite">
            <mpath href="#pkt2" />
          </animateMotion>
        </circle>

        <circle r="2" fill="#EB1E2A" opacity="0.7" filter="url(#nodeGlow)">
          <animateMotion dur="2.1s" begin="1.1s" repeatCount="indefinite">
            <mpath href="#pkt3" />
          </animateMotion>
        </circle>

        <circle r="2" fill="#ff6b6b" opacity="0.5" filter="url(#nodeGlow)">
          <animateMotion dur="2.4s" begin="0.9s" repeatCount="indefinite">
            <mpath href="#pkt4" />
          </animateMotion>
        </circle>

        {/* ── Regular nodes ── */}
        {[
          { cx: 88, cy: 145, r: 5 },
          { cx: 395, cy: 145, r: 5 },
          { cx: 42, cy: 285, r: 4 },
          { cx: 438, cy: 285, r: 4 },
          { cx: 342, cy: 390, r: 5 },
          { cx: 240, cy: 430, r: 4 },
        ].map((n, i) => (
          <circle
            key={i}
            cx={n.cx} cy={n.cy} r={n.r}
            fill="#151A22"
            stroke="#2A3445"
            strokeWidth="1.5"
          />
        ))}

        {/* ── Hub nodes (highlighted) ── */}
        {/* Top node */}
        <circle
          cx="240" cy="55" r="7"
          fill="rgba(235,30,42,0.08)"
          stroke="rgba(235,30,42,0.5)"
          strokeWidth="1.5"
          filter="url(#nodeGlow)"
        />
        <circle cx="240" cy="55" r="3" fill="#EB1E2A" opacity="0.7" />

        {/* Bottom left hub */}
        <circle
          cx="138" cy="390" r="8"
          fill="rgba(235,30,42,0.1)"
          stroke="rgba(235,30,42,0.55)"
          strokeWidth="1.5"
          filter="url(#nodeGlow)"
        />
        <circle cx="138" cy="390" r="3.5" fill="#EB1E2A" opacity="0.7" />

        {/* ── Main hub node (center) ── */}
        <circle
          cx="240" cy="215" r="12"
          fill="rgba(235,30,42,0.12)"
          stroke="rgba(235,30,42,0.75)"
          strokeWidth="2"
          filter="url(#nodeGlow)"
        />
        {/* Inner fill */}
        <circle cx="240" cy="215" r="5" fill="#EB1E2A" opacity="0.85" />

        {/* Shield shape at center hub */}
        <path
          d="M240 208 L245 210.5 L245 216 Q245 219 240 222 Q235 219 235 216 L235 210.5 Z"
          fill="rgba(235,30,42,0.3)"
          stroke="rgba(235,30,42,0.5)"
          strokeWidth="0.5"
        />

        {/* ── Binary text decoration (subtle) ── */}
        {["10110", "01001", "11010", "00101", "10011"].map((txt, i) => (
          <text
            key={i}
            x={i < 3 ? 12 + i * 6 : 380 + (i - 3) * 6}
            y={80 + i * 60}
            fontSize="7"
            fill="rgba(42,52,69,0.8)"
            fontFamily="monospace"
            letterSpacing="1"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.7;0.3"
              dur={`${2.5 + i * 0.7}s`}
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
            {txt}
          </text>
        ))}

        {/* ── Hexagonal decorative shapes ── */}
        <path
          d="M380 35 L390 41 L390 53 L380 59 L370 53 L370 41 Z"
          stroke="rgba(42,52,69,0.6)"
          strokeWidth="0.8"
          fill="none"
        >
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
        </path>
        <path
          d="M400 48 L407 52 L407 60 L400 64 L393 60 L393 52 Z"
          stroke="rgba(235,30,42,0.25)"
          strokeWidth="0.6"
          fill="none"
        >
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" begin="1s" repeatCount="indefinite" />
        </path>

        <path
          d="M70 30 L80 36 L80 48 L70 54 L60 48 L60 36 Z"
          stroke="rgba(42,52,69,0.5)"
          strokeWidth="0.8"
          fill="none"
        >
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.5s" begin="0.6s" repeatCount="indefinite" />
        </path>

        {/* ── Corner circuit traces ── */}
        <path
          d="M10 10 L10 40 L30 40 M30 40 L30 50 M30 50 L50 50"
          stroke="rgba(42,52,69,0.5)"
          strokeWidth="0.7"
          fill="none"
        />
        <circle cx="30" cy="40" r="2" fill="rgba(42,52,69,0.6)" />
        <circle cx="50" cy="50" r="1.5" fill="rgba(42,52,69,0.5)" />

        <path
          d="M470 450 L470 420 L450 420 M450 420 L450 410 M450 410 L430 410"
          stroke="rgba(42,52,69,0.5)"
          strokeWidth="0.7"
          fill="none"
        />
        <circle cx="450" cy="420" r="2" fill="rgba(42,52,69,0.6)" />
        <circle cx="430" cy="410" r="1.5" fill="rgba(42,52,69,0.5)" />
      </svg>
    </div>
  );
}
