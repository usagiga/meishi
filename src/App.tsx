import React from 'react';
import styles from './App.module.scss';
import Portrait from './components/Portrait';

function App() {
  return (
    <div className="app">
      <header className={styles.appHeader}>
        <Portrait />
        <p className={styles.name}>usagiga</p>
        <p className={styles.batches}>🎀💉</p>
        <ul className={styles.job}>
          <li>
            Software engineer(Go, ASP.NET Core, React)
            <ul>
              <li>DeNA Co., Ltd. (2021-)</li>
            </ul>
          </li>
          <li>
            Professional Cloud Developer
            <ul>
              <li>E.G.G. Japan 5th Attendee</li>
            </ul>
          </li>
          <li>
            AUR package maintainer
            <ul>
              <li>
                <a href="https://aur.archlinux.org/packages/anyenv">anyenv</a>
              </li>
            </ul>
          </li>
          <li>
            Founder of{' '}
            <a href="https://github.com/snowbelle-org">snowbelle.org</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
