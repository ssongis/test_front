import SectionMain from './SectionMain';
import SectionNav from './SectionNav';
import SectionStory from './SectionStory';
import SectionCate from './SectionCate';
import SectionDeal from './SectionDeal';
import SectionPPL from './SectionPPL';
import SectionReview from './SectionReview';
import SectionExhibition from './SectionExhibition';
import SectionPremium from './SectionPremium';
import SectionBest from './SectionBest';
import { MainBlock } from './main.styles';
import * as S from './main.styles';
function Main() {
  return (
    <MainBlock>
      <SectionMain />
      <SectionNav />
      <SectionStory />
      <SectionCate />
      <SectionDeal />
      <SectionPPL />
      <SectionReview />
      <SectionExhibition />
      <SectionPremium />
      <SectionBest />
    </MainBlock>
  );
}

export default Main;
