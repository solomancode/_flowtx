import t from "../../i18n/en.json";
import { HeadlineStyles, HeadlineContainer } from "./Headline.styles";

export function Headline() {
  return (
    <HeadlineStyles.HeadlineContainer>
      <section>
        <h1>{t["Welcome to KRAFTTOPIA"]}</h1>
        <h1>
          {t["the first marketplace app for crafted handmade stuff in Egypt!"]}
        </h1>
        <section>
          <a>
            <HeadlineStyles.Badge
              src={process.env.PUBLIC_URL + "assets/GPlay.png"}
            />
          </a>
          <a>
            <HeadlineStyles.Badge
              src={process.env.PUBLIC_URL + "assets/Apple.png"}
            />
          </a>
        </section>
      </section>
      <HeadlineStyles.HeadlineImg
        src={process.env.PUBLIC_URL + "assets/mobile.png"}
      />
    </HeadlineStyles.HeadlineContainer>
  );
}
