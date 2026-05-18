import React from "react";
import "./styles.css";

const introLines = [
  "它關於生活、焦慮、自我審視，也關於那些被人說成作",
  "狀，卻其實救過自己的事。它改裝成一條手機裡的路：",
  "你可以慢慢向下走，由荒原、海市蜃樓，走到山。",
];

function OpeningCopy() {
  return (
    <section className="opening-copy" aria-label="陌生人你好">
      <p className="copy-title">陌生人你好！</p>
      <p className="copy-gap" aria-hidden="true">
        &nbsp;
      </p>
      <p className="copy-subtitle">《作狀生活俱樂部》</p>
      <p className="copy-subtitle">是一冊被改裝成網站的思想散文集。</p>
      <p className="copy-gap-small" aria-hidden="true">
        &nbsp;
      </p>
      <div className="copy-body">
        {introLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="copy-gap" aria-hidden="true">
        &nbsp;
      </p>
      <div className="copy-body">
        <p>若你也是掃着一張海報進來，又想打發時間，</p>
        <p>如果你一目十行，10分鐘可能就可以走完整個旅程，</p>
        <p>或者想慢慢咀嚼也無任歡迎。</p>
      </div>
    </section>
  );
}

function StartButton() {
  return (
    <a className="start-button" href="#page-2" aria-label="開始吃盡">
      開始吃盡
    </a>
  );
}

function HomeFrame({ active }) {
  return (
    <article className={`phone-frame home-frame ${active ? "is-active" : ""}`} data-node-id="1:2" id="home">
        <div className="base-bg" />
        <div className="lime-rail-left" />
        <div className="lime-rail-right" />
        <div className="lime-masthead" />
        <img className="ellipse" src="/assets/figma-ellipse.svg" alt="" aria-hidden="true" />
        <img className="cover-art" src="/assets/figma-cover.svg" alt="" aria-hidden="true" />
        <OpeningCopy />
        <StartButton />
    </article>
  );
}

function DepartButton() {
  return (
    <a className="depart-button" href="#page-3" aria-label="出發">
      出發
    </a>
  );
}

function JourneyIndex() {
  return (
    <>
      <section className="journey-copy journey-wasteland" data-node-id="5:107">
        <p className="journey-title">第一部 · 荒原</p>
        <p className="journey-gap" aria-hidden="true">
          &nbsp;
        </p>
        <p className="journey-note">『世界是一個荒原，書裡說的，我很感動。』</p>
        <p className="journey-note">—— 節錄自電影《大象席地而坐》</p>
      </section>

      <section className="journey-copy journey-mirage" data-node-id="5:162">
        <p className="journey-title">第二部 · 海市蜃樓</p>
        <p className="journey-gap" aria-hidden="true">
          &nbsp;
        </p>
        <p className="journey-note">未來，是改變過去的時光機。</p>
        <p className="journey-note">—— 節錄自《人生潔癖，你也有嗎？》</p>
      </section>

      <section className="journey-copy journey-mountain" data-node-id="5:163">
        <p className="journey-title">第三部 · 山</p>
        <p className="journey-gap" aria-hidden="true">
          &nbsp;
        </p>
        <p className="journey-note mountain-line">
          無論旅程走到哪裡，也請帶上自己
          <span className="blinking-bar" data-node-id="5:164">|</span>
        </p>
      </section>
    </>
  );
}

function PageTwoFrame({ active }) {
  return (
    <article className={`phone-frame page-two-frame ${active ? "is-active" : ""}`} data-node-id="5:106" id="page-2">
      <div className="page-two-art" data-node-id="5:108">
        <img className="page-two-top" src="/assets/page2-title-top.svg" alt="" aria-hidden="true" />
        <img className="page-two-bottom" src="/assets/page2-title-bottom.svg" alt="" aria-hidden="true" />
      </div>
      <JourneyIndex />
      <DepartButton />
    </article>
  );
}

function PageThreeFrame({ active }) {
  return (
    <article className={`phone-frame page-three-frame ${active ? "is-active" : ""}`} data-node-id="103:3" id="page-3">
      <img className="page-three-top" src="/assets/page3-top.svg" alt="" aria-hidden="true" />
      <img className="page-three-main" src="/assets/page3-main.svg" alt="" aria-hidden="true" />
      <img className="page-three-bottom" src="/assets/page3-bottom.svg" alt="" aria-hidden="true" />
      <nav className="page-three-nav" aria-label="序 navigation">
        <a className="page-three-back" href="#page-2" aria-label="返回目錄">
          <img src="/assets/page3-back.svg" alt="" aria-hidden="true" />
        </a>
        <a className="page-three-next" href="#page-4" aria-label="下一頁">
          <img src="/assets/page3-next.svg" alt="" aria-hidden="true" />
        </a>
      </nav>
      <div className="page-three-progress" aria-hidden="true">
        <img className="page-three-line" src="/assets/page3-line.svg" alt="" />
        <img className="page-three-dot" src="/assets/page3-dot.svg" alt="" />
        <span>正在經過</span>
      </div>
    </article>
  );
}

function PageFourFrame({ active }) {
  return (
    <article className={`phone-frame page-four-frame ${active ? "is-active" : ""}`} data-node-id="109:148" id="page-4">
      <div className="page-four-art" data-node-id="109:261">
        <div className="page-four-masked">
          <img src="/assets/page4-masked.svg" alt="" aria-hidden="true" />
        </div>
        <img className="page-four-blob" src="/assets/page4-blob.svg" alt="" aria-hidden="true" />
        <img className="page-four-left-text" src="/assets/page4-left-text.svg" alt="" aria-hidden="true" />
        <img className="page-four-title" src="/assets/page4-title.svg" alt="" aria-hidden="true" />
        <img className="page-four-credit" src="/assets/page4-credit.svg" alt="" aria-hidden="true" />
        <img className="page-four-wasteland" src="/assets/page4-wasteland.svg" alt="" aria-hidden="true" />
      </div>
      <nav className="page-four-nav" aria-label="荒原 navigation">
        <a className="page-four-back" href="#page-3" aria-label="返回序">
          <img src="/assets/page4-back.svg" alt="" aria-hidden="true" />
        </a>
        <a className="page-four-next" href="#page-5" aria-label="下一頁">
          <img src="/assets/page4-next.svg" alt="" aria-hidden="true" />
        </a>
      </nav>
      <div className="page-four-progress" aria-hidden="true">
        <img className="page-four-line" src="/assets/page4-line.svg" alt="" />
        <img className="page-four-dot" src="/assets/page4-dot.svg" alt="" />
        <span>正在經過</span>
      </div>
    </article>
  );
}

function useActivePage() {
  const getPage = () => window.location.hash.slice(1) || "home";
  const [activePage, setActivePage] = React.useState(getPage);

  React.useEffect(() => {
    const handleHashChange = () => setActivePage(getPage());
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return activePage;
}

function App() {
  const activePage = useActivePage();

  return (
    <main className="preview-page">
      <h1 className="sr-only">作狀生活俱樂部</h1>
      <HomeFrame active={activePage === "home"} />
      <PageTwoFrame active={activePage === "page-2"} />
      <PageThreeFrame active={activePage === "page-3"} />
      <PageFourFrame active={activePage === "page-4"} />
    </main>
  );
}

export default App;
