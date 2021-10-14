import { Header } from "../Header/Header";
import { Headline } from "../Headline/Headline";
import { PageContainer } from "../PageContainer";
import { FeaturedStyles } from "./Featured.styles";

export function Featured() {
  return (
    <FeaturedStyles.Background>
      <PageContainer>
        <Header />
        <Headline />
      </PageContainer>
    </FeaturedStyles.Background>
  );
}
