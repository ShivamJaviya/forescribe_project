import React from "react";

type SocialMediaLink = {
  icon: string;
  alt: string;
};

type AppDownloadLink = {
  icon: string;
  alt: string;
  link: string;
};

const Footer: React.FC = () => {
  const socialMediaLinks: SocialMediaLink[] = [
    { icon: "/Images/facebook.png", alt: "Facebook" },
    { icon: "/Images/LinkedIn_icon.svg.png", alt: "LinkedIn" },
    { icon: "/Images/instgram.png", alt: "Instagram" },
    { icon: "/Images/twitter.png", alt: "Twitter" },
  ];

  const appDownloadLinks: AppDownloadLink[] = [
    {
      icon: "/Images/apple.png",
      alt: "App Store",
      link: "https://apps.apple.com/in/app/forescribe/id6505136581",
    },
    {
      icon: "/Images/google.jpg",
      alt: "Play Store",
      link: "https://play.google.com/store/apps/details?id=com.forescribe&pli=1",
    },
  ];

  const companyLinks: string[] = [
    "Why us",
    "Clients",
    "Solutions",
    "Pricing",
    "Media Kit",
    "Press",
    "Partners",
    "Get Started 🚀",
  ];

  const resourcesLinks: string[] = [
    "Support",
    "Security",
    "Legal",
    "Terms",
    "Privacy",
    "What's new ✨",
    "Integrations",
    "ROI",
  ];

  const communityLinks: string[] = [
    "Blog",
    "Crunchbase",
    "Careers 🚀",
    "Ditch the Sheet ⚔️",
    "Review us at 🧡",
    "SaaSOps 🔗",
    "Mobile",
    "xAI",
  ];

  return (
    <footer className="bg-[#0D0B2E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div>
            <h1 className="text-2xl font-bold">Forescribe</h1>
            <p className="mt-4">
              Empowering businesses' Finance and IT to thrive with advanced
              digital infrastructure and seamless SaaSOps management.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              {resourcesLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Contacts */}
          <div>
            <h3 className="text-lg font-semibold">Community</h3>
            <ul className="mt-4 space-y-2">
              {communityLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Centered Social Media Section */}
        <div className="mt-12 flex justify-center gap-7">
          {socialMediaLinks.map(({ icon, alt }, idx) => (
            <a
              href="#"
              key={idx}
              className="transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-xl"
            >
              <img src={icon} alt={alt} className="h-8" />
            </a>
          ))}
        </div>

        {/* App Download Links */}
        <div className="mt-6 flex justify-end gap-6">
          {appDownloadLinks.map(({ icon, alt, link }, idx) => (
            <a
              href={link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 transform hover:scale-110"
            >
              <img src={icon} alt={alt} className="h-10" />
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-center text-sm">
          Made for you with 💜 from Shivam Javiya
        </p>
      </div>
    </footer>
  );
};

export default Footer;
