import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Top Web Development & Digital Marketing Services',
    template: '%s | Digitacurve',
  },
  description:
    'Leading Web Development & Digital Marketing Experts. Top SEO, PPC, SMO & Consulting Solutions tailored for growth. Explore Digitacurve today!',
  keywords: ['web development', 'SEO services', 'PPC management', 'digital marketing', 'digitacurve'],
  openGraph: {
    title: 'Top Web Development & Digital Marketing Services',
    description: 'Leading Web Development & Digital Marketing Experts. Top SEO, PPC, SMO & Consulting Solutions tailored for growth.',
    url: 'https://digitacurve.com',
    siteName: 'Digitacurve',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@digitacurve',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* PostHog - Script Injection */}
        <Script
          id="posthog-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="Rn Ln init Gn Jn Si Zn Yn Vn capture calculateEventProperties ns register register_once register_for_session unregister unregister_for_session ls getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync us identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty ss ts createPersonProfile setInternalOrTestUser os Un ds opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Xn debug Ii mr getPageViewId captureTraceFeedback captureTraceMetric jn".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('phc_tJbbMaK8xrHjW7TzoAE3chVGK28vuJ25vfMt9UbS6ex4', {
                  api_host: 'https://us.i.posthog.com',
                  defaults: '2026-05-30',
                  person_profiles: 'identified_only'
              })
            `,
          }}
        />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        <ThemeProvider>
          <Topbar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <WhatsAppButton />
      </body>
    </html>
  )
}
