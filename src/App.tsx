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
          <li>Software engineer(Go, ASP.NET Core, React)</li>
          <li>
            Professional Cloud Developer
            <ul>
              <li>Expert of GCP for Gaming Japan 5th Attendee</li>
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
          <li>Member of Japan Hackers Association</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
