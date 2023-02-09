import SectionMain from './SectionMain';
import SectionStory from './SectionStory';
import SectionReview from './SectionReview';
import { MainBlock, Section } from './main.styles';
import Footer from '../Footer';
import Header from '../Header/Header';

function Main() {
  return (
    <MainBlock>
      <Header/>
      <SectionMain />
      <SectionStory />
      <SectionReview />
      <Footer/>
    </MainBlock>
  );
}

export default Main;
