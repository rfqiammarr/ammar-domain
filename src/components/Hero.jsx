import { company } from "../data/data";
import YoutubeIconIcon from "@iconify-react/logos/youtube-icon";
import GithubIcon from "@iconify-react/fe/github";
import DiscordIcon from "@iconify-react/skill-icons/discord";
import TiktokIconIcon from "@iconify-react/logos/tiktok-icon";
import InstagramIcon from "@iconify-react/grommet-icons/instagram";
import MailIcon from "@iconify-react/famicons/mail";

export default function Hero() {
  return (
    <section id="home" className="hero hero-marketing">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="container hero-marketing-copy">
        <p className="hero-eyebrow">{company.name}</p>
        <h1>{company.tagline}</h1>
        <p className="description">{company.description}</p>
        <div className="cta">
          <a className="social-link" href="https://www.youtube.com/@radantix" target="_blank" rel="noopener noreferrer" aria-label="Visit Radantix on YouTube">
            <YoutubeIconIcon width="1.35em" height="1.35em" aria-hidden="true" />
          </a>
          <a className="social-link" href="https://www.tiktok.com/@ramadantix" target="_blank" rel="noopener noreferrer" aria-label="Visit Radantix on TikTok">
            <TiktokIconIcon width="1.35em" height="1.35em" aria-hidden="true" />
          </a>
          <a className="social-link" href="https://www.instagram.com/radantixlabs" target="_blank" rel="noopener noreferrer" aria-label="Visit Radantix on Instagram">
            <InstagramIcon width="1.35em" height="1.35em" aria-hidden="true" />
          </a>
          {/* <a className="social-link" href="https://github.com/rfqiammarr" target="_blank" rel="noopener noreferrer" aria-label="Visit Radantix on GitHub">
            <GithubIcon width="1.35em" height="1.35em" aria-hidden="true" />
          </a> */}
          <a className="social-link" href="https://discord.com/users/802781715159842836" target="_blank" rel="noopener noreferrer" aria-label="Visit Radantix on Discord">
            <DiscordIcon width="1.35em" height="1.35em" aria-hidden="true" />
          </a>
          <a className="social-link" href="mailto:rifqiammarramadhan103@gmail.com" aria-label="Send email to Radantix">
            <MailIcon width="1.35em" height="1.35em" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
