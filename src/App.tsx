import { useState, useEffect, useRef } from 'react'
import './App.css'
import { AudioWaveVisualizer } from './AudioWaveVisualizer'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')
  const [willingToPay, setWillingToPay] = useState(false)
  const [submitted, setSubmitted] = useState(() => localStorage.getItem('omnicomms_waitlist_submitted') === 'true')
  const [referralEmails, setReferralEmails] = useState([''])
  const [referralSent, setReferralSent] = useState(false)
  const [sendingReferrals, setSendingReferrals] = useState(false)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})

  const urlParams = useRef(new URLSearchParams(window.location.search))
  const refParam = urlParams.current.get('ref') || ''
  const inviteParam = urlParams.current.get('invite') || ''
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    )

    // Small delay to ensure all callback refs have been set
    const timer = requestAnimationFrame(() => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref)
      })
    })

    return () => {
      cancelAnimationFrame(timer)
      observer.disconnect()
    }
  }, [])

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || submitting) return
    setSubmitting(true)
    try {
      let ip = ''
      try {
        const ipRes = await fetch('https://api.ipify.org?format=json')
        const ipData = await ipRes.json()
        ip = ipData.ip
      } catch { /* proceed without IP */ }

      const nameParts = name.trim().split(/\s+/)
      const firstName = nameParts[0] || ''
      const lastName = nameParts.slice(1).join(' ') || ''

      const formData = new URLSearchParams()
      formData.append('first_name', firstName)
      formData.append('last_name', lastName)
      formData.append('email', email)
      const digits = phone.replace(/\D/g, '')
      const e164Phone = digits ? `+${digits.length === 10 ? '1' : ''}${digits}` : ''
      formData.append('phone', e164Phone)
      formData.append('role', role)
      formData.append('willing_to_pay', willingToPay ? 'yes' : 'no')
      formData.append('ip_address', ip)
      formData.append('ref', refParam)
      formData.append('invite', inviteParam)

      await fetch(
        'https://hybridmindset.com/wp-json/autonami/v1/webhook/?bwfan_autonami_webhook_id=1&bwfan_autonami_webhook_key=d108e68aea503a0f62a5d3e846c260c5',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      )
      localStorage.setItem('omnicomms_waitlist_submitted', 'true')
      localStorage.setItem('omnicomms_waitlist_email', email)
      localStorage.setItem('omnicomms_waitlist_name', name)
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleReferralSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validEmails = referralEmails.filter((em) => em.trim())
    if (!validEmails.length || sendingReferrals) return
    setSendingReferrals(true)
    try {
      const refData = new URLSearchParams()
      refData.append('referred_by_email', localStorage.getItem('omnicomms_waitlist_email') || email)
      refData.append('referred_by_name', localStorage.getItem('omnicomms_waitlist_name') || name)
      validEmails.forEach((em, i) => refData.append(`referral_email_${i + 1}`, em))
      refData.append('referral_count', String(validEmails.length))

      await fetch(
        'https://hybridmindset.com/wp-json/autonami/v1/webhook/?bwfan_autonami_webhook_id=2&bwfan_autonami_webhook_key=b33cf856c1bb4676c21b60f366a932c3',
        {
          method: 'POST',
          mode: 'no-cors',
          body: refData,
        }
      )
      setReferralSent(true)
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setSendingReferrals(false)
    }
  }

  const addReferralRow = () => {
    if (referralEmails.length >= 3) return
    setReferralEmails([...referralEmails, ''])
  }
  const removeReferralRow = (i: number) => {
    if (referralEmails.length <= 1) return
    setReferralEmails(referralEmails.filter((_, idx) => idx !== i))
  }
  const updateReferralEmail = (i: number, val: string) => {
    const updated = [...referralEmails]
    updated[i] = val
    setReferralEmails(updated)
  }

  const registerRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }

  const sectionClass = (id: string) =>
    `section ${isVisible[id] ? 'visible' : ''}`

  return (
    <div className="page">
      {/* Ambient background effects */}
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />

      {/* Nav */}
      <nav className="nav">
        <img src="/logo-horizontal.png" alt="OmniComms AI" className="nav-logo" />
        <a href="#waitlist" className="nav-cta">Request Access</a>
      </nav>

      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <h1 className="hero-headline">
            <span className="hero-headline-row">
              <span className="hero-headline-line">Unified Business</span>{' '}
              <span className="hero-headline-line">Communications for</span>
            </span>
            <span className="hero-gradient-text">AI&nbsp;Employee Execution</span>
          </h1>
          {/* <p className="hero-tagline">We help you scale You!</p> */}
          <p className="hero-sub">
            Use your voice to interact with your AI employees (a.k.a. agents). Give any AI agent
            (via AG-UI/MCP) the ability to hear you, see your camera, understand your tasks, and
            take action. OmniCommsAI gives your agent the ability to make calls, send texts or
            emails, to follow up or initiate tasks like a real human team member. We also provide
            a full audit trail on every interaction, and private AI model access to Claude and
            OpenAI for regulated industries.
          </p>
          <a href="#waitlist" className="hero-cta glow-btn">
            Request Early Access
            <span className="cta-arrow">&darr;</span>
          </a>
          <p className="hero-beta-note">Currently in development. Click to request access.</p>
        </div>
        <div className="hero-visualizer">
          <AudioWaveVisualizer height={90} />
        </div>
        <div className="platforms-bar">
          <p className="platforms-label">One AI. Every channel. Total context.</p>
          <div className="platforms-icons">
            <span title="Phone & SMS">&#128222;</span>
            <span title="Twilio">
              <svg viewBox="0 0 70 70" fill="currentColor" width="20" height="20"><path d="M34.1 0C15.3 0 0 15.3 0 34.1s15.3 34.1 34.1 34.1C53 68.3 68.3 53 68.3 34.1S53 0 34.1 0zm0 59.3C20.3 59.3 9 48 9 34.1 9 20.3 20.3 9 34.1 9 48 9 59.3 20.3 59.3 34.1 59.3 48 48 59.3 34.1 59.3z"/><circle cx="42.6" cy="25.6" r="7.1"/><circle cx="42.6" cy="42.6" r="7.1"/><circle cx="25.6" cy="42.6" r="7.1"/><circle cx="25.6" cy="25.6" r="7.1"/></svg>
            </span>
            <span title="Telnyx">
              <svg viewBox="0 0 26 23" fill="currentColor" width="20" height="20"><path d="M24.9122 20.9147C25.3369 20.149 25.4578 19.2539 25.2512 18.4045C25.192 18.1697 25.1101 17.9411 25.0067 17.7219C24.974 17.6499 24.9369 17.5801 24.8955 17.5127L21.5277 11.2095H18.0822L21.6055 17.8155C21.7162 18.0075 21.7743 18.2247 21.7743 18.4458C21.7743 18.6668 21.7162 18.8841 21.6055 19.0761C21.4978 19.2555 21.3448 19.404 21.1617 19.5073C20.9786 19.6106 20.7715 19.6649 20.5608 19.6651H16.5428C16.4983 20.2801 16.3055 20.8755 15.9806 21.4014C15.6557 21.9273 15.2081 22.3683 14.6755 22.6873H22.0613C22.5543 22.6549 23.0342 22.5158 23.4673 22.28C24.0784 21.9818 24.5826 21.5053 24.9122 20.9147z"/><path d="M6.02277 7.08628H9.46835L11.1856 3.92093C11.3309 3.64775 11.5487 3.41905 11.8156 3.25951C12.0825 3.09998 12.3883 3.01566 12.7 3.01566C13.0117 3.01566 13.3175 3.09998 13.5844 3.25951C13.8512 3.41905 14.0691 3.64775 14.2144 3.92093L15.8816 7.08628H19.3272L16.8819 2.50615C16.4765 1.74942 15.8707 1.11632 15.1295 0.674798C14.3884 0.233277 13.5398 0 12.675 0C11.8101 0 10.9616 0.233277 10.2204 0.674798C9.47925 1.11632 8.87345 1.74942 8.46802 2.50615L6.02277 7.08628z"/><path d="M8.80139 10.659C8.83752 10.0466 9.02267 9.45185 9.34104 8.9256C9.65941 8.39935 10.1016 7.95718 10.6298 7.63682H3.96091V10.659H8.80139z"/><path d="M9.35145 10.8792V19.1367H10.9186C11.2455 19.1331 11.5621 19.0234 11.8201 18.8246C12.078 18.6258 12.2631 18.3486 12.3469 18.0357C12.3806 17.9156 12.3974 17.7915 12.3969 17.6669V12.7124C12.3983 12.1745 12.6139 11.659 12.9968 11.2776C13.3797 10.8962 13.899 10.6799 14.442 10.6756H21.4165V7.63682H12.6192C11.752 7.63828 10.9209 7.98053 10.3082 8.58845C9.69555 9.19636 9.35144 10.0203 9.35145 10.8792z"/><path d="M0.342942 17.7219C0.239542 17.9411 0.157657 18.1697 0.098417 18.4045C-0.108031 19.2557 0.0128176 20.1525 0.437418 20.9203C0.767855 21.5088 1.27202 21.9833 1.88234 22.28C2.31537 22.5158 2.79528 22.6549 3.28836 22.6874H12.6748C13.5591 22.6874 14.4072 22.3394 15.0326 21.7199C15.6579 21.1005 16.0092 20.2604 16.0092 19.3844V11.204H14.4198C14.0291 11.214 13.6576 11.3741 13.3838 11.6504C13.11 11.9267 12.9554 12.2977 12.9526 12.6848V17.6393C12.9512 18.1771 12.7345 18.6924 12.3501 19.0721C11.9656 19.4519 11.4449 19.6651 10.902 19.6651H4.81664C4.60591 19.6649 4.39884 19.6106 4.2157 19.5073C4.03256 19.4041 3.87962 19.2555 3.77185 19.0761C3.66127 18.8831 3.60314 18.665 3.60314 18.443C3.60314 18.2211 3.66127 18.003 3.77185 17.81L7.29523 11.204H3.82186L0.45409 17.5072C0.415188 17.5843 0.376286 17.6503 0.342942 17.7219z"/></svg>
            </span>
            <span title="Email">
              <svg viewBox="0 0 28 28" fill="none" width="36" height="36"><path d="M22.05 8.52L16.06 13.2L9.94 8.52V8.53V15.07L16 19.85L22.05 15.26V8.52Z" fill="currentColor"/><path d="M23.62 7.39L22.05 8.52V15.26L27 11.46V9.17C27 9.17 26.4 5.9 23.62 7.39Z" fill="currentColor" opacity="0.7"/><path d="M22.05 15.26V24H25.84C25.84 24 26.92 23.88 27 22.65V11.46L22.05 15.26Z" fill="currentColor" opacity="0.5"/><path d="M9.94 8.52L8.38 7.39C5.6 5.91 5 9.18 5 9.18V11.47L9.94 15.07V8.52Z" fill="currentColor" opacity="0.7"/><path d="M5 11.47V22.66C5.08 23.89 6.16 24 6.16 24H9.95L9.94 15.07L5 11.47Z" fill="currentColor" opacity="0.5"/></svg>
            </span>
            <span title="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </span>
            <span title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </span>
            <span title="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z"/></svg>
            </span>
            <span title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </span>
            <span title="X / Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </span>
            <span title="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </span>
            <span title="Telegram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </span>
            <span title="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </span>
            <span title="Reddit">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
            </span>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <div className="scroll-line" />
        </div>
      </header>

      {/* ===== PROBLEM ===== */}
      <section
        id="problem"
        ref={registerRef('problem')}
        className={sectionClass('problem')}
      >
        <div className="section-inner">
          <p className="section-eyebrow">The Problem</p>
          <h2 className="section-headline">
            Every year, more professionals go independent.
          </h2>
          <p className="section-body">
            Becoming "Solopreneurs." Some by choice. Some because the market decided for them.
          </p>
          <p className="section-body">
            Day one, the same two problems hit:<br />
            How do I get leads?<br />
            And when they come — how do I personally nurture
            hundreds of relationships by myself?
          </p>
          <p className="section-body">
            You can give 5 maybe 10 people your full attention.<br />
            You cannot give 500.
          </p>
          <p className="section-body section-body-accent">
            Not because you don't care.<br />
            Because high-touch doesn't scale, until NOW...
          </p>
          <p className="section-body section-body-accent">
            OmniComms AI is your leverage.
          </p>
        </div>
      </section>

      <div className="section-divider"><div className="section-divider-line" /></div>

      {/* ===== WHAT IT DOES ===== */}
      <section
        id="solution"
        ref={registerRef('solution')}
        className={sectionClass('solution')}
      >
        <div className="section-inner">
          <p className="section-eyebrow">How It Works</p>
          <h2 className="section-headline">
            Stop managing software.<br />
            <span className="gradient-text">Start delegating.</span>
          </h2>
          <p className="section-body">
            When you hire a human employee, you give them a phone line,
            standard operating procedures, restricted access to company systems,
            and a workspace device. Your AI Employee is no different.
          </p>
          <p className="section-body section-body-accent">
            Give it the same things — and it can hear, see what you see, and execute tasks.
          </p>
          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-number">01</div>
              <h3>Tell it what to do</h3>
              <p>Give instructions with your voice — while you're driving, walking into a showing, or between calls. No typing required. Just talk.</p>
            </div>
            <div className="capability-card">
              <div className="capability-number">02</div>
              <h3>It sees everything</h3>
              <p>Your pipeline, your calendar, your conversations across every channel. Full context — not a blank prompt window.</p>
            </div>
            <div className="capability-card">
              <div className="capability-number">03</div>
              <h3>It acts on its own</h3>
              <p>Follows up with leads. Responds to texts. Sends documents. Schedules meetings. Takes real action — not just suggestions.</p>
            </div>
            <div className="capability-card">
              <div className="capability-number">04</div>
              <h3>It remembers forever</h3>
              <p>Every conversation, every channel, every client — for years. Context is never lost. And every interaction has a full audit trail.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"><div className="section-divider-line" /></div>

      {/* ===== WHO IT'S FOR ===== */}
      <section
        id="who"
        ref={registerRef('who')}
        className={sectionClass('who')}
      >
        <div className="section-inner">
          <p className="section-eyebrow">Who This Is For</p>
          <h2 className="section-headline section-headline-narrow">
            If your income depends on relationships
            and your license depends on documentation —
            <span className="gradient-text"> we built this for you.</span>
          </h2>
          <div className="verticals-row">
            <div className="vertical-pill">Loan Officers</div>
            <div className="vertical-pill">Mortgage Brokers</div>
            <div className="vertical-pill">Realtors</div>
            <div className="vertical-pill">Insurance Agents</div>
            <div className="vertical-pill">Financial Advisors</div>
          </div>
          <p className="section-body verticals-sub">
            Any regulated professional where a missed follow-up
            means lost revenue — and a missing audit trail means lost license.
          </p>
        </div>
      </section>

      <div className="section-divider"><div className="section-divider-line" /></div>

      {/* ===== FOUNDER ===== */}
      <section
        id="founder"
        ref={registerRef('founder')}
        className={sectionClass('founder')}
      >
        <div className="section-inner">
          <div className="founder-layout">
            <img src="/lavon-avatar.png" alt="Lavon Woods" className="founder-avatar" />
            <div className="founder-card">
            <div className="founder-gradient-bar" />
            <p className="founder-quote">
              "In 2019, I left a 20-year software engineering career to help my father
              in his mortgage business after he lost his sight. I thought I'd apply my
              tech skills to make it more efficient. Instead, I discovered a regulated
              relationship based industry. You get one client, work on serving them for
              a while, then you have to run back to your pipeline to figure out which
              next client is ready. I spent years living this chaos until I learned the
              business and realized I needed to scale my capacity through automation.
              This is difficult to do in a people based business. This is not a problem
              that I researched, I didn't interview people about it — I'm living it."
            </p>
            <div className="founder-info">
              <div className="founder-detail">
                <span className="founder-name">Lavon Woods</span>
                <span className="founder-title">Founder & CEO, OmniComms AI</span>
                <span className="founder-title">Licensed Mortgage Broker &bull; 25+-Year Software Engineer</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <div className="section-divider"><div className="section-divider-line" /></div>

      {/* ===== DIFFERENT ===== */}
      <section
        id="different"
        ref={registerRef('different')}
        className={sectionClass('different')}
      >
        <div className="section-inner">
          <p className="section-eyebrow">Why This Is Different</p>
          <h2 className="section-headline">
            Built compliant-first.<br />
            <span className="gradient-text">Not bolted on later.</span>
          </h2>
          <div className="diff-grid">
            <div className="diff-item">
              <div className="diff-label">Everyone else</div>
              <p>Build the demo first. Figure out compliance later. Maybe.</p>
            </div>
            <div className="diff-item diff-item-us">
              <div className="diff-label diff-label-us">OmniComms AI</div>
              <p>Security architecture and audit infrastructure from line one of code. The demo came second.</p>
            </div>
            <div className="diff-item">
              <div className="diff-label">Everyone else</div>
              <p>Voice-only or chat-only. No memory across channels.</p>
            </div>
            <div className="diff-item diff-item-us">
              <div className="diff-label diff-label-us">OmniComms AI</div>
              <p>Calls, texts, emails — one AI that remembers every interaction across every channel. Do Not Call compliance built in.</p>
            </div>
            <div className="diff-item">
              <div className="diff-label">Everyone else</div>
              <p>Built by engineers who don't know your pain points nor how your industry works.</p>
            </div>
            <div className="diff-item diff-item-us">
              <div className="diff-label diff-label-us">OmniComms AI</div>
              <p>Built by a licensed broker who uses this on his own deals. His license is on the line.</p>
            </div>
            <div className="diff-item">
              <div className="diff-label">Everyone else</div>
              <p>Session context dies when the call ends. Next interaction starts from zero.</p>
            </div>
            <div className="diff-item diff-item-us">
              <div className="diff-label diff-label-us">OmniComms AI</div>
              <p>Context carries across calls, texts, and emails — for years. Your AI never forgets a client.</p>
            </div>
            <div className="diff-item">
              <div className="diff-label">Everyone else</div>
              <p>Fully autonomous. No guardrails. Hope for the best.</p>
            </div>
            <div className="diff-item diff-item-us">
              <div className="diff-label diff-label-us">OmniComms AI</div>
              <p>Human-in-the-loop. Mission-critical actions require your approval in real time.</p>
            </div>
            <div className="diff-item">
              <div className="diff-label">Everyone else</div>
              <p>Generic AI voice. Sounds like every other bot on the market.</p>
            </div>
            <div className="diff-item diff-item-us">
              <div className="diff-label diff-label-us">OmniComms AI</div>
              <p>Trained on your voice, your process, your personality. Every call, text, email redacted for sensitive information, used as context for your AI.</p>
            </div>
          </div>
          <p className="diff-summary">Demos are cool. We're building real world infrastructure good enough for regulated professionals.</p>
        </div>
      </section>

      <div className="section-divider"><div className="section-divider-line" /></div>

      {/* ===== ZERO TRUST ===== */}
      <section
        id="zerotrust"
        ref={registerRef('zerotrust')}
        className={sectionClass('zerotrust')}
      >
        <div className="section-inner zerotrust-inner">
          <div className="zerotrust-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
              <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <p className="section-eyebrow">Enterprise Security — Coming Soon</p>
          <h2 className="section-headline zerotrust-headline">
            Your Keys. Your Data.<br />
            <span className="gradient-text">Zero Trust Architecture.</span>
          </h2>
          <p className="section-body zerotrust-body">
            Our platform is being built on a Zero Trust Master Key Architecture.
            Think of it like crypto — you hold the keys, not us.
          </p>
          <div className="zerotrust-grid">
            <div className="zerotrust-card">
              <div className="zerotrust-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              </div>
              <h3>Encrypted at Rest</h3>
              <p>All data encrypted using keys that only you control. Powered by OpenBao vault infrastructure.</p>
            </div>
            <div className="zerotrust-card">
              <div className="zerotrust-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
              </div>
              <h3>Your Keys Required</h3>
              <p>The server cannot decrypt or access your data without your master key. We literally cannot see your information.</p>
            </div>
            <div className="zerotrust-card">
              <div className="zerotrust-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Full Audit Trail</h3>
              <p>Every interaction logged immutably. Complete chain of custody for compliance officers and regulators.</p>
            </div>
          </div>
          <p className="zerotrust-note">
            Zero Trust Master Key Architecture is planned for our Enterprise tier. All tiers include end-to-end encryption and immutable audit logging from day one.
          </p>
        </div>
      </section>

      <div className="section-divider"><div className="section-divider-line" /></div>

      {/* ===== HUMAN IN THE LOOP ===== */}
      <section
        id="control"
        ref={registerRef('control')}
        className={sectionClass('control')}
      >
        <div className="section-inner">
          <p className="section-eyebrow">Human In The Loop</p>
          <h2 className="section-headline">
            Your AI doesn't go rogue.<br />
            <span className="gradient-text">You stay in control.</span>
          </h2>
          <p className="section-body">
            When your AI Employee hits a decision that matters — sending a contract,
            making a commitment, scheduling something irreversible — it doesn't just act.
          </p>
          <p className="section-body section-body-accent">
            It asks you first. In real time via push notification and text.
          </p>
          <div className="hitl-flow">
            <div className="hitl-step">
              <div className="hitl-step-number">1</div>
              <p>AI identifies a mission-critical action</p>
            </div>
            <div className="hitl-arrow">&rarr;</div>
            <div className="hitl-step">
              <div className="hitl-step-number">2</div>
              <p>You get a real-time prompt with full context</p>
            </div>
            <div className="hitl-arrow">&rarr;</div>
            <div className="hitl-step">
              <div className="hitl-step-number">3</div>
              <p>Approve, deny, or modify — then it continues</p>
            </div>
          </div>
          <p className="section-body hitl-sub">
            Other AI tools are fully autonomous with no guardrails.
            For regulated professionals, that's not a feature — it's a liability.
          </p>
        </div>
      </section>

      <div className="section-divider"><div className="section-divider-line" /></div>

      {/* ===== WAITLIST CTA ===== */}
      <section
        id="waitlist"
        ref={registerRef('waitlist')}
        className={sectionClass('waitlist')}
      >
        <div className="section-inner waitlist-inner">
          <img src="/logo-stacked.png" alt="OmniComms AI" className="waitlist-logo" />
          <h2 className="waitlist-headline">
            {submitted
              ? "We will be in touch."
              : "Come on this journey with us, Artificial General Intelligence is here!"
            }
          </h2>
          {submitted ? (
            <div className="waitlist-success">
              <p className="waitlist-success-text">
                We'll be in touch soon. Founding members get 50% off — for life.
              </p>
              {referralSent ? (
                <p className="referral-thanks">Referrals sent! You'll earn credits at launch for each person who joins.</p>
              ) : (
                <div className="referral-section">
                  <p className="referral-intro">
                    Know someone who'd benefit? Share the link with friends and earn referral credits at launch.
                  </p>
                  <form className="referral-form" onSubmit={handleReferralSubmit}>
                    {referralEmails.map((re, i) => (
                      <div className="referral-row" key={i}>
                        <input
                          type="email"
                          placeholder="Friend's email"
                          value={re}
                          onChange={(e) => updateReferralEmail(i, e.target.value)}
                          required
                          className="form-input"
                        />
                        {referralEmails.length > 1 && (
                          <button type="button" className="referral-remove-btn" onClick={() => removeReferralRow(i)} title="Remove">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                          </button>
                        )}
                      </div>
                    ))}
                    {referralEmails.length < 3 && (
                      <button type="button" className="referral-add-btn" onClick={addReferralRow}>
                        + Add another
                      </button>
                    )}
                    <button type="submit" className="form-submit glow-btn" disabled={sendingReferrals}>
                      {sendingReferrals ? 'Sending...' : 'Send Referrals'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          ) : (
            <>
              <p className="waitlist-sub">
                We're inviting 50 professionals into our founding beta.
                You won't just use the product — you'll shape it.
                Founding members lock in 50% off for life.
              </p>
              <form className="waitlist-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="form-input"
                />
                <div className="form-row">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input"
                  />
                  <input
                    type="tel"
                    placeholder="Your phone (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-row">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Your role (optional)</option>
                    <option value="loan-officer">Loan Officer</option>
                    <option value="mortgage-broker">Mortgage Broker</option>
                    <option value="realtor">Realtor / Real Estate Agent</option>
                    <option value="insurance-agent">Insurance Agent</option>
                    <option value="financial-advisor">Financial Advisor</option>
                    <option value="business-owner">Business Owner</option>
                    <option value="service-provider">Service Provider</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <label className="form-checkbox">
                  <input
                    type="checkbox"
                    checked={willingToPay}
                    onChange={(e) => setWillingToPay(e.target.checked)}
                  />
                  <span>Yes, I'm willing to pay for this</span>
                </label>
                <button type="submit" className="form-submit glow-btn" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Request Early Access'}
                </button>
              </form>
              <p className="waitlist-fine">
                No spam. No selling your data. Just an invite when it's your turn.
              </p>
            </>
          )}
        </div>
      </section>

      {/* ===== PATENT ===== */}
      <section
        id="patent"
        ref={registerRef('patent')}
        className={sectionClass('patent')}
      >
        <div className="section-inner patent-inner">
          <div className="patent-badge">Patent Pending</div>
          <h3 className="patent-title">
            System and Method for Autonomous Multi-Modal Conversational AI Agent
            Operation Enabling Multi-Day Workflows Without Persistent Connections
          </h3>
          <p className="patent-abstract">
            A system and method for autonomous multi-modal conversational AI agent operation
            enabling agents to conduct multi-day customer workflows without persistent
            connections or human intervention. The system provides event-driven agent
            activation enabling workflows spanning arbitrary time periods; cross-platform
            conversational continuity enabling agent access to complete conversation history
            regardless of communication platform; AI-triggered modality escalation enabling
            autonomous transition from asynchronous to synchronous communication with
            context preservation; resource-efficient scalability through separation of
            conversational state and compute processes; and runtime capability composition
            enabling agent behavior modification without code deployment.
          </p>
          <p className="patent-field">
            The present invention relates to autonomous conversational artificial
            intelligence systems for conducting complete customer workflows across multiple
            communication modalities and platforms without human intervention.
          </p>
          <div className="patent-meta">
            <span>Filed November 16, 2025</span>
            <span className="patent-divider">&bull;</span>
            <span>&copy; {new Date().getFullYear()} OmniCommsAI Inc.</span>
            <span className="patent-divider">&bull;</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <img src="/logo-horizontal.png" alt="OmniComms AI" className="footer-logo" />
          <div className="footer-right">
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/lavonwoods/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.threads.net/@ldubbceo" target="_blank" rel="noopener noreferrer" title="Threads" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.781 3.632 2.695 6.54 2.717 2.623-.02 4.358-.631 5.798-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.17.408-2.243 1.33-3.023.88-.744 2.084-1.168 3.59-1.264 1.078-.069 2.089.009 3.025.23-.086-1.074-.473-1.891-1.153-2.432-.766-.61-1.892-.915-3.347-.908l-.064.001c-1.263.013-2.285.352-3.037 1.009-.698.61-1.07 1.397-1.112 2.263l-2.12-.042c.067-1.382.658-2.583 1.709-3.472 1.1-.93 2.567-1.42 4.347-1.458h.14c1.97 0 3.547.482 4.694 1.434.994.824 1.622 1.953 1.873 3.36.534.14 1.04.326 1.515.559 1.19.583 2.122 1.467 2.693 2.554.738 1.407.882 3.401-.587 5.84-1.81 2.107-4.32 3.186-7.46 3.208z"/></svg>
              </a>
              <a href="https://x.com/lavonwoods" target="_blank" rel="noopener noreferrer" title="X / Twitter" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
            </div>
            <a href="mailto:invest@omnicomms.ai?subject=Investment%20Inquiry%20-%20OmniCommsAI" className="footer-investor-link">Investor Inquiries</a>
            <div className="footer-legal">
              <a href="https://app.omnicomms.ai/privacy" target="_blank" rel="noopener noreferrer" className="footer-legal-link">Privacy</a>
              <span className="footer-legal-divider">&bull;</span>
              <a href="https://app.omnicomms.ai/terms" target="_blank" rel="noopener noreferrer" className="footer-legal-link">Terms</a>
              <span className="footer-legal-divider">&bull;</span>
              <a href="https://app.omnicomms.ai/refund-policy" target="_blank" rel="noopener noreferrer" className="footer-legal-link">Refund Policy</a>
              <span className="footer-legal-divider">&bull;</span>
              <a href="https://app.omnicomms.ai/data-retention" target="_blank" rel="noopener noreferrer" className="footer-legal-link">Data Retention</a>
            </div>
            <p className="footer-text">&copy; {new Date().getFullYear()} OmniCommsAI Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
