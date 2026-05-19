import React from "react";
import "./styles.css";

const introLines = [
  "它關於生活、焦慮、自我審視，也關於那些被人說成作",
  "狀，卻其實救過自己的事。它改裝成一條手機裡的路：",
  "你可以慢慢向下走，由荒原、海市蜃樓，走到山。",
];

const article101 = [
  {
    text: `2025年快過了一半，要數數手指說做了什麼，好像並沒有那麼多姿多彩，但卻有一種用溫水要把我烹煮的感覺，上半年經歷一段憂鬱的時間，我發現有時並不是必需有大事情來重錘一擊，也可以成為覺悟的轉捩點。然而，改變一個已經運作了很久的思想迴路，確是相當痛苦。難道就正如蘇格拉底所說：「未經反省的人生是不值得活的。」其實我更喜歡那個把「反省」翻譯成「審視」的版本。`,
  },
  {
    text: `看了一千篇心理分析、一萬篇心靈雞湯，難道就能換取一次徹底的覺悟嗎？人最痛苦的狀態莫過於頭腦上認知，但心未能抵達的狀態，好比我看見了一切，但雙手無法觸及，既迷惘又沮喪。`,
  },
  {
    text: `前陣子，有人問我健身的成果，我只尷尬地回應：「我並『未』練成腹肌馬甲線。」但我卻想，肌肉並不會背叛你，它還是透過每次肌肉的撕裂，再復原，然後悄悄地長成。所以並『未』，只是我堅信它們的確悄悄在長成。比起肌肉，我的意外收穫竟然是多了一份耐力，若不是這樣的鍛鍊，應該沒有下半段的發展。`,
  },
  {
    text: `自我審視的過程如一場心靈肌群的鍛鍊，就是由觸發到洞察、認知、接受痛苦到療癒（完全跟鍛鍊肌肉是一樣），上半年大概就是不斷地複習這過程。而我的課題大概是平常人的困擾：如何好好認清自己，接受本我。當我無法忽略世界的雜音，不斷解讀他人的反應，我連感到憤怒傷心都要受到限制，但最無聊的是，這些設限是我自己親手建造的牢籠。`,
  },
  {
    text: `常言當你不斷遇到相當的課題，你要把它學完才能停止遇上。某日某些人出現，勾起了你一些創傷，他是誰並不重要，有狗血劇情嗎？並沒有。不過就是使我發現數個不同時空的遠古傷口，它們悄悄地變成了寄生合成獸躲在我的體內，剛巧被那個新故事在一霎之間抓開了它的巢穴，痛感達200%（be like好撚痛屌你老母）。`,
  },
  {
    text: `說到這裡，我是故意沒有好具體地說發生什麼事，因為故事不重要，想起前陣子看《混沌少年時》的對白：「事實並不重要，重要是為什麼這樣想？」這句對白啟發我真正思考「為什麼我有這個感受」，才會發現「寄生合成獸」，苦戰八千回，把怪獸馴服，再蛻變成一個新的自我。在過程我竭力感受所有不適、所有傷痛。然後我體會：人生就是這樣，有快樂也伴隨痛苦，如西西弗斯一樣，他用享受過程來否定諸神的懲罰；我用盡力體會來拿回定義一切的主權，然而看着所有事消散得不留痕跡，化成虛空，如夢幻泡影。然而，正因為一切都會成虛空，更要深刻地體會——人生的意義，莫過於此。`,
    final: true,
  },
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
        <a className="page-four-next" href="#article-1-01" aria-label="下一頁">
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

function ArticleBottomNav({ previous, next, progress = 0.25 }) {
  return (
    <nav className="article-bottom" aria-label="文章 navigation">
      <a className="article-nav-button article-prev" href={previous} aria-label="上一頁">
        <img src="/assets/page4-back.svg" alt="" aria-hidden="true" />
      </a>
      <a className="article-nav-button article-next" href={next} aria-label="下一頁">
        <img src="/assets/page4-next.svg" alt="" aria-hidden="true" />
      </a>
      <div className="article-progress" aria-hidden="true">
        <img className="article-progress-line" src="/assets/page4-line.svg" alt="" />
        <img className="article-progress-dot" src="/assets/page4-dot.svg" alt="" style={{ left: `${progress * 100}%` }} />
      </div>
      <p className="article-passing">正在經過</p>
    </nav>
  );
}

function Article101Frame({ active }) {
  return (
    <article className={`phone-frame article-frame ${active ? "is-active" : ""}`} data-node-id="109:338" id="article-1-01">
      <header className="article-header">
        <p className="article-number">1.01</p>
        <p className="article-quote">《港島散步・趕到散步時領悟》</p>
        <h2>一場關於心靈肌群的痛苦鍛鍊。</h2>
      </header>
      <div className="article-scroll-wrap">
        <section className="article-scroll" aria-label="港島散步正文">
          {article101.map((paragraph) => (
            <p className={paragraph.final ? "article-final" : ""} key={paragraph.text}>{paragraph.text}</p>
          ))}
        </section>
      </div>
      <ArticleBottomNav previous="#page-4" next="#home" progress={4 / 20} />
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
      <Article101Frame active={activePage === "article-1-01"} />
    </main>
  );
}

export default App;
