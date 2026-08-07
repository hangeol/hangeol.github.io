import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const canonicalUrl = "https://hangeol.github.io/";

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${canonicalUrl}#profile-page`,
  url: canonicalUrl,
  name: "Hangeol Chang (장한결) · KAIST AI Researcher",
  mainEntity: {
    "@type": "Person",
    "@id": `${canonicalUrl}#person`,
    name: "Hangeol Chang",
    alternateName: ["장한결", "Hangeol"],
    givenName: "Hangeol",
    familyName: "Chang",
    jobTitle: "Ph.D. Student",
    description: "AI researcher and Ph.D. student at KAIST studying language model reasoning, retrieval, reinforcement learning, and clinical AI.",
    url: canonicalUrl,
    image: `${canonicalUrl}hangeol-chang.jpeg`,
    email: "mailto:hangeol@kaist.ac.kr",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Korea Advanced Institute of Science and Technology",
      alternateName: "KAIST",
      url: "https://www.kaist.ac.kr/",
    },
    knowsAbout: [
      "Language model reasoning",
      "Retrieval-augmented generation",
      "Reinforcement learning",
      "Clinical AI",
    ],
    sameAs: [
      "https://scholar.google.com/citations?user=VvJxxzAAAAAJ&hl=en",
      "https://github.com/hangeol",
      "https://www.linkedin.com/in/hangeol-chang",
    ],
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "hangeol-chang-ai.hanggg.chatgpt.site";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const title = "Hangeol Chang · AI Researcher";
  const description = "Research in language model reasoning, decision-useful retrieval, reinforcement learning, and reward-guided model behavior.";

  return {
    metadataBase: baseUrl,
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: "/og.png?v=2", width: 1731, height: 909, alt: "Hangeol Chang · Ph.D. Student at KAIST AI" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png?v=2"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
