import React from 'react';
import styles from './Index.module.scss';
import Portrait from './components/Portrait';
import AccordionText from '../../lib/components/AccordionText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faGraduationCap,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import SocialLink from './components/SocialLink';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Link {
  href: string;
  icon: IconProp;
  text: string;
}

const generateSocialLinks = (links: Link[]) => {
  return links.map((link) => {
    return (
      <SocialLink href={link.href} icon={link.icon}>
        {link.text}
      </SocialLink>
    );
  });
};

function Index() {
  const links: Link[] = [
    {
      href: 'https://twitter.com/usagiga_',
      icon: faTwitter,
      text: 'usagiga_',
    },
    {
      href: 'https://github.com/usagiga',
      icon: faGithub,
      text: 'usagiga',
    },
    {
      href: 'https://twitch.tv/usagiga',
      icon: faTwitch,
      text: 'usagiga',
    },
    {
      href: 'https://www.youtube.com/@usagiga',
      icon: faYoutube,
      text: 'usagiga',
    },
    {
      href: 'https://www.instagram.com/usagiga_',
      icon: faInstagram,
      text: 'usagiga_',
    },
  ];
  const socialLinks = generateSocialLinks(links);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Portrait />
        <div className={styles.nameContainer}>
          <p className={styles.name}>usagiga</p>
          <p className={styles.description}>等身大のヌメルゴンがほしいよ</p>
        </div>
        <div className={styles.social}>{socialLinks}</div>
      </header>
      <article className={styles.article}>
        <AccordionText
          className={styles.accordion}
          summary={
            <>
              <FontAwesomeIcon icon={faCode} />
              <span>Software Engineer</span>
            </>
          }
        >
          <ul className={styles.list}>
            <li>
              Specialty
              <ul>
                <li>Go</li>
                <li>ASP.NET Core</li>
                <li>React</li>
              </ul>
            </li>
            <li>
              Employs at
              <ul>
                <li>DeNA Co., Ltd.</li>
                <li>
                  AUR package maintainer
                  <ul>
                    <li>
                      <a href="https://aur.archlinux.org/packages/anyenv">
                        anyenv
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Founder of{' '}
                  <a href="https://github.com/snowbelle-org">snowbelle.org</a>{' '}
                </li>
                <li>Member of Japan Hackers Association</li>
              </ul>
            </li>
            <li>
              Certificates
              <ul>
                Professional Cloud Developer
                <ul>
                  <li>Expert of GCP for Gaming Japan 5th Attendee</li>
                </ul>
              </ul>
            </li>
          </ul>
        </AccordionText>
        <AccordionText
          className={styles.accordion}
          summary={
            <>
              <FontAwesomeIcon icon={faGraduationCap} />
              <span>Research</span>
            </>
          }
        >
          <ul className={styles.list}>
            <li>
              Semiology & Structuralism
              <ul>
                <li>Ernst Cassirer</li>
                <li>Umberto Eco</li>
                <li>Marie-Laure Ryan</li>
                <li>東浩紀</li>
                <li>吉本隆明</li>
              </ul>
            </li>
            <li>
              Medical Science
              <ul>
                <li>Psychiatry</li>
                <li>Clinical Psychology</li>
                <li>Pharmacology</li>
              </ul>
            </li>
            <li>
              Computer Science
              <ul>
                <li>Bachelor</li>
              </ul>
            </li>
          </ul>
        </AccordionText>
        <AccordionText
          className={styles.accordion}
          summary={
            <>
              <FontAwesomeIcon icon={faHeart} />
              <span>Favorite</span>
            </>
          }
        >
          <ul className={styles.list}>
            <li>
              Cooking
              <ul>
                <li>まかないさんしてます</li>
                <li>食器はビレロイボッホとたち吉がすき</li>
              </ul>
            </li>
            <li>
              Comic & Literature
              <ul>
                <li>
                  <a href="https://www.pixiv.net/users/782478">芦山</a>
                  <ul>
                    <li>
                      理想のまんがを追い求める仙人！池水と明治と紀要がすきです、連載がたのしみすぎてよめないよ
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.pixiv.net/users/2473929">塀</a>
                  <ul>
                    <li>上伊那ぼたん</li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.pixiv.net/users/1598085">
                    樫木祐人 / 兎沢
                  </a>
                  <ul>
                    <li>
                      ハクミコと縁とかぜかさねとおちあゆ、くらしかたが好き
                    </li>
                  </ul>
                </li>
                <li>
                  唯野影吉 / 過酸化水素ストリキニーネ
                  <ul>
                    <li>文ト通ジズ</li>
                  </ul>
                </li>
                <li>
                  うまくち醤油
                  <ul>
                    <li>時雨ベッドウェッタ</li>
                  </ul>
                </li>
                <li>松本大洋</li>
                <li>三田三郎</li>
                <li>暁佳奈</li>
                <li>田辺聖子</li>
                <li>Cioran</li>
              </ul>
            </li>
            <li>
              Music
              <ul>
                <li>GoldFish</li>
                <li>発熱巫女〜ず</li>
                <li>レベッカ</li>
                <li>AI</li>
                <li>ワールドナガーセ</li>
                <li>じんぞう</li>
                <li>小林私</li>
                <li>日食なつこ</li>
                <li>ヨエコ</li>
                <li>kiki vivi lily</li>
              </ul>
            </li>
            <li>
              Game
              <ul>
                <li>スプラトゥーン</li>
                <li>F-ZERO GX</li>
                <li>Elite: Dangerous</li>
                <li>SCE_2</li>
                <li>For the GHOSTs</li>
                <li>もろびとこぞりて</li>
                <li>つり乙</li>
                <li>Slay the Spire</li>
                <li>
                  Magic: the Gathering
                  <ul>
                    <li>Calix, Guided by Fate</li>
                    <li>Yenna, Redtooth Regent</li>
                    <li>Brago, King Eternal</li>
                    <li>Innistrad</li>
                    <li>Kamigawa</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Art
              <ul>
                <li>村田蓮爾</li>
                <li>もちぬ / あけのからす</li>
                <li>小田望楓</li>
                <li>John Kafka</li>
                <li>ドライフラワー</li>
                <li>長井りく</li>
              </ul>
            </li>
          </ul>
        </AccordionText>
      </article>
    </div>
  );
}

export default Index;
