import SocialMediaBar from "./social-media-bar";

export default function FooterSection() {
  return (
    <div className="section-footer">
      <SocialMediaBar />
      <div className="copyright">
        WALBER ZALDIVAR © {new Date().getFullYear()}
      </div>
    </div>
  );
}
