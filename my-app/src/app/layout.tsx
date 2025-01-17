import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Ensure weights are valid
});

export const metadata: Metadata = {
  title: "Sofa Website",
  description: "created by Zija Yaseen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />

       

      </body>
      <Script id="snipcart-init">
{`
    window.SnipcartSettings = {
        publicApiKey: 'YjI5MTY5ZjItMzY2OC00YTFkLWE5MjItMTE5OWU3YzYyNmExNjM4NzE2NTA1NzkyODA3MjA0',
        loadStrategy: 'on-user-interaction',
    };

    (() => {
        var c, d;
        (d = (c = window.SnipcartSettings).version) != null || (c.version = "3.0");
        var s, S;
        (S = (s = window.SnipcartSettings).timeoutDuration) != null || (s.timeoutDuration = 2750);
        var l, p;
        (p = (l = window.SnipcartSettings).domain) != null || (l.domain = "cdn.snipcart.com");
        var w, u;
        (u = (w = window.SnipcartSettings).protocol) != null || (w.protocol = "https");
        var f = window.SnipcartSettings.version.includes("v3.0.0-ci") || 
            (window.SnipcartSettings.version != "3.0" && 
            window.SnipcartSettings.version.localeCompare("3.4.0", void 0, { numeric: !0, sensitivity: "base" }) === -1), 
            m = ["focus", "mouseover", "touchmove", "scroll", "keydown"];
        
        window.LoadSnipcart = o;
        document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", r) : r();
        
        function r() {
            window.SnipcartSettings.loadStrategy
                ? window.SnipcartSettings.loadStrategy === "on-user-interaction" &&
                  (m.forEach(t => document.addEventListener(t, o)),
                  setTimeout(o, window.SnipcartSettings.timeoutDuration))
                : o();
        }
        
        var a = !1;
        
        function o() {
            if (a) return;
            a = !0;
            let t = document.getElementsByTagName("head")[0],
                e = document.querySelector("#snipcart"),
                i = document.querySelector(\`src[src^="\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}"][src$="snipcart.js"]\`),
                n = document.querySelector(\`link[href^="\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}"][href$="snipcart.css"]\`);
            
            e || ((e = document.createElement("div")), e.id = "snipcart", e.setAttribute("hidden", "true"), document.body.appendChild(e));
            v(e);
            i || ((i = document.createElement("script")), i.src = \`\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}/themes/v\${window.SnipcartSettings.version}/default/snipcart.js\`, i.async = !0, t.appendChild(i));
            n || ((n = document.createElement("link")), n.rel = "stylesheet", n.type = "text/css", n.href = \`\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}/themes/v\${window.SnipcartSettings.version}/default/snipcart.css\`, t.prepend(n));
            m.forEach(g => document.removeEventListener(g, o));
        }
        
        function v(t) {
            !f || (
                t.dataset.apiKey = window.SnipcartSettings.publicApiKey,
                window.SnipcartSettings.addProductBehavior && 
                    (t.dataset.configAddProductBehavior = window.SnipcartSettings.addProductBehavior),
                window.SnipcartSettings.modalStyle &&
                    (t.dataset.configModalStyle = window.SnipcartSettings.modalStyle),
                window.SnipcartSettings.currency && 
                    (t.dataset.currency = window.SnipcartSettings.currency),
                window.SnipcartSettings.templatesUrl && 
                    (t.dataset.templatesUrl = window.SnipcartSettings.templatesUrl)
            );
        }
    })();
`}
</Script>
    </html>
  );
}
