import React from 'react';
import Image from 'next/image';
import * as S from './main.styles';
import { STORY_DATA, STORY_LIST } from '../../constants/communityMain';

const SectionStory = () => {
  return (
    <S.Section story width={269}>
      <h2>최신글</h2>
      <div className="story-wrap">
        <div className="ul-area">
          <ul>
            {STORY_DATA.map((data, i) => (
              <li key={i}>
                <span>
                  <Image
                    src={'/community-main/story0' + (i + 1) + '.jpg'}
                    alt="story_title"
                    layout="fill"
                  />
                </span>
                <div className="content">
                  <p>{data.title}</p>
                  <div>
                    <span className="profile">
                      <Image
                        src={
                          '/community-main/story-profile0' + (i + 1) + '.jpg'
                        }
                        alt="story_profile"
                        layout="fill"
                      />
                    </span>
                    <span>{data.name}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <ol>
          {STORY_LIST.map((data, i) => (
            <li key={i}>
              <h3>{data.title}</h3>
              <div>
                <h4>{data.move}</h4>
                <span></span>
              </div>
            </li>
          ))}
        </ol> */}
      </div>
    </S.Section>
  );
};

export default SectionStory;
