import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/stacc_logo.png"
          />
          {/* Script to set the initial theme */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  function getInitialColorMode() {
                    const persistedColorPreference = window.localStorage.getItem('theme');
                    const hasPersistedPreference = typeof persistedColorPreference === 'string';

                    if (hasPersistedPreference) {
                      return persistedColorPreference;
                    }

                    const mql = window.matchMedia('(prefers-color-scheme: dark)');
                    const hasMediaQueryPreference = typeof mql.matches === 'boolean';

                    if (hasMediaQueryPreference) {
                      return mql.matches ? 'dark' : 'light';
                    }

                    return 'light';
                  }

                  const colorMode = getInitialColorMode();
                  const root = document.documentElement;
                  root.style.setProperty('--initial-color-mode', colorMode);

                  if (colorMode === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
