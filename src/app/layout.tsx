import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://cat-typing.vercel.app/"), // Set your domain here
  title: "Soul Knight Prequel | Diablo-like ARPG",
  description:
    "Soul Knight Prequel is a pixel-art action RPG featuring loot farming. Slash monsters to upgrade your power, or party up for treasure against the odds. Our newest ARPG continues to feature Soul Knight's familiar posse of chibi characters, while satiating the fans' hunger for more lore and quests!The game's story begins prior to the events of Soul Knight. Help the magical land's heroes form a knighthood, embark on an epic quest, vanquish foes with every combination of weapons and spells, and ultimately save Mystraea from impending doom.",
  openGraph: {
    title: "Soul Knight Prequel | Diablo-like ARPG",
    description:
      "Soul Knight Prequel is a pixel-art action RPG featuring loot farming. Slash monsters to upgrade your power, or party up for treasure against the odds. Our newest ARPG continues to feature Soul Knight's familiar posse of chibi characters, while satiating the fans' hunger for more lore and quests!The game's story begins prior to the events of Soul Knight. Help the magical land's heroes form a knighthood, embark on an epic quest, vanquish foes with every combination of weapons and spells, and ultimately save Mystraea from impending doom.",
    url: "/",
    siteName: "Soul Knight Prequel | Diablo-like ARPG",
    images: [
      {
        url: "/assets/images/og-image.png", // Will be resolved to absolute URL
        width: 1200,
        height: 600,
        alt: "screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soul Knight Prequel | Diablo-like ARPG",
    description:
      "Soul Knight Prequel is a pixel-art action RPG featuring loot farming. Slash monsters to upgrade your power, or party up for treasure against the odds. Our newest ARPG continues to feature Soul Knight's familiar posse of chibi characters, while satiating the fans' hunger for more lore and quests!The game's story begins prior to the events of Soul Knight. Help the magical land's heroes form a knighthood, embark on an epic quest, vanquish foes with every combination of weapons and spells, and ultimately save Mystraea from impending doom.",
    images: ["/assets/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${roboto.className} antialiased 2xl:max-w-[1920px] 2xl:mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
