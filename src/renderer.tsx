import { html } from "hono/html";
import { jsxRenderer } from "hono/jsx-renderer";

export const renderer = jsxRenderer(
  ({ assets, children, header, title, footer }) => {
    return (
      <html>
        <head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link
            rel="icon"
            href="/static/logos/mobile-logo.png"
            type="image/png"
            sizes="512x512"
          />
          <link
            rel="apple-touch-icon"
            href="/static/logos/apple-touch-icon.png"
          />
          <link rel="manifest" href="/static/manifest.webmanifest" />
          <link href="/static/styles/index.css" rel="stylesheet" />
          {html`<script type="importmap">
            {
              "imports": {
                "argon2": "https://cdn.jsdelivr.net/npm/hash-wasm/dist/argon2.umd.min.js/+esm"
              }
            }
          </script>`}
          <title>${title}</title>
          {assets}
        </head>
        <body>
          <header id="poemonger-nav-header">
            {header ?? (
              <nav>
                <a href="/">
                  <img
                    id="naythaniel-logo"
                    src="/static/logos/horizontal-logo.png"
                    height="128"
                    width="128"
                    fetchpriority="high"
                    loading="eager"
                  />
                </a>
              </nav>
            )}
          </header>
          <main>{children}</main>
          {footer}
        </body>
      </html>
    );
  }
);
