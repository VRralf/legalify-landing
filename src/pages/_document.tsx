import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Es la única plataforma global de servicios profesionales especializados y calificados por los usuarios que vincula de manera transparente al profesional con su cliente."
          />
          <meta property="og:url" content="https://legalify-app.com" />
          <meta property="og:title" content="Legalify" />
          <meta
            property="og:description"
            content="Es la única plataforma global de servicios profesionales especializados y calificados por los usuarios que vincula de manera transparente al profesional con su cliente."
          />
          <meta property="og:image" content="/legalifyogimg.jpg" />
          <meta
            name="facebook-domain-verification"
            content="59y567859kvgptpfm7lpibt8fw4jwq"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-229721921-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-229721921-1');
          `,
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: ` !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '531786092480568'); 
            fbq('track', 'PageView');
            `,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" 
    src="https://www.facebook.com/tr?id=531786092480568&ev=PageView
    &noscript=1"/>`,
            }}
          />
        </Head>
        <title>Legalify</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <body
          className={
            pageProps.overflow !== "hidden" ? "overflow" : "overflow-hidden"
          }
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
