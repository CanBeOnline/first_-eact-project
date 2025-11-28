/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ============================================
      // FONT FAMILIES
      // ============================================
      fontFamily: {
        poppins: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Standard: Inter für Body Text
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      
      // ============================================
      // COLOR PALETTE - Brand Blue (Primär)
      // ============================================
      colors: {
        brand: {
          50:  '#f5f8ff',  // Sehr helle Hintergründe, Subtile Akzente
          100: '#e9efff',  // Helle Hintergründe, Cards
          200: '#cddcff',  // Leichte Hover-States
          300: '#a8c0ff',  // Disabled States
          400: '#7ea1ff',  // Secondary Buttons
          500: '#4d7dff',  // PRIMARY ⭐ (Buttons, Links, Akzente)
          600: '#325fe6',  // Hover States
          700: '#2848b4',  // Active States, Darker Accents
          800: '#213a8f',  // Text auf hellem Hintergrund
          900: '#1c316f',  // Sehr dunkle Akzente
        },
        
        // ============================================
        // COLOR PALETTE - Accent Orange (Sekundär)
        // ============================================
        accent: {
          50:  '#fff8f5',  // Sehr helle Hintergründe
          100: '#ffeae1',  // Helle Hintergründe
          200: '#ffd0bf',  // Leichte Akzente
          300: '#ffab8d',  // Subtile Highlights
          400: '#ff7c51',  // Secondary Highlights
          500: '#ff5a26',  // PRIMARY ⭐ (Highlights, CTAs)
          600: '#e04316',  // Hover States
          700: '#b43515',  // Active States
          800: '#8c2b16',  // Darker Accents
          900: '#6e2414',  // Sehr dunkle Akzente
        },
        
        // ============================================
        // SEMANTIC COLORS (Feedback, Status)
        // ============================================
        success: {
          DEFAULT: '#10b981',
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        error: {
          DEFAULT: '#ef4444',
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        warning: {
          DEFAULT: '#f59e0b',
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        info: {
          DEFAULT: '#3b82f6',
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      
      // ============================================
      // TYPOGRAPHY SCALE
      // ============================================
      fontSize: {
        // Hero H1
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        // Section H2
        'section': ['clamp(1.875rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
        // Subsection H3
        'subsection': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3', fontWeight: '600' }],
      },
      
      // ============================================
      // SPACING (8px Grid System)
      // ============================================
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '128': '32rem',   // 512px
      },
      
      // ============================================
      // CONTAINER
      // ============================================
      maxWidth: {
        'container': '72rem', // 1152px - Optimal für Lesbarkeit
      },
      
      // ============================================
      // TRANSITIONS
      // ============================================
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      
      // ============================================
      // SHADOWS (Custom)
      // ============================================
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}