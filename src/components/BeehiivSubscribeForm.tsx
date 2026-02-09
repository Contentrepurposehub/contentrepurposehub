'use client'

import Script from "next/script"

export default function BeehiivSubscribeForm() {
  return (
    <>
      {/* Beehiiv loader */}
      <Script
        src="https://subscribe-forms.beehiiv.com/embed.js"
        strategy="afterInteractive"
      />

      {/* Beehiiv iframe form */}
      <iframe
        src="https://subscribe-forms.beehiiv.com/7d9d55b4-40eb-47d4-8e89-64827c2f4cd5"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        frameBorder="0"
        scrolling="no"
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "291px",
          margin: "0 auto",
          borderRadius: "0px",
          backgroundColor: "transparent",
          boxShadow: "none",
          display: "block",
        }}
      />
    </>
  )
}
