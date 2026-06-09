'use client';

import { motion, useReducedMotion } from 'framer-motion';

const LINE_URL = 'https://lin.ee/your-line-id';
const FORM_URL = 'https://forms.gle/your-google-form-id';

const heroBadges = ['毎月12時間', '会員限定予約', 'Model Y', '定員5名'];
const conceptStats = [
  { value: '12時間', label: '月間利用可能' },
  { value: '5名', label: '最大会員数' },
];
const vehicleSpecs = ['ステルスグレー', '19インチクロスフロー', 'オールブラックプレミアム', '5シート'];
const features = [
  '0-100km/h 5.9秒',
  '航続距離455km',
  'スマホキー',
  'OTAアップデート',
  'Netflix・YouTube',
  '先進運転支援機能',
];
const membershipIncludes = ['毎月12時間利用', '予約システム', '利用ガイド', '会員限定サービス'];
const exclusivity = ['定員5名限定', '中央区・港区限定', '審査制', 'Teslaオーナー品質'];
const flow = ['先行登録', '本人確認', '審査', '入会', '利用開始'];
const faqs = [
  {
    q: '12時間を超えて利用したい場合はどうなりますか？',
    a: '追加利用枠のご案内を予定しています。詳細は会員向けに個別案内となります。',
  },
  {
    q: '利用エリアは本当に中央区・港区限定ですか？',
    a: '会員募集と運営導線の都合上、初期募集は中央区・港区の方を優先しています。',
  },
  {
    q: '誰でも入会できますか？',
    a: 'いいえ。安心してご利用いただくため、本人確認と簡易審査を実施します。',
  },
  {
    q: '保険やメンテナンスは含まれますか？',
    a: '基本的な運営側管理費用は月額に織り込まれており、安心して使える設計です。',
  },
  {
    q: 'いつから利用開始できますか？',
    a: '先行登録後、審査と初回案内を経て順次ご利用開始となります。',
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? undefined : 'show'}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      variants={sectionFade}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-medium uppercase tracking-[0.38em] text-white/45">{eyebrow}</p>
      <h2 className="headline-font text-4xl leading-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-8 text-white/64 md:text-lg">{description}</p> : null}
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[920px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(210,156,92,0.28),transparent_18%),radial-gradient(circle_at_86%_22%,rgba(244,190,117,0.18),transparent_18%),linear-gradient(180deg,rgba(9,9,9,0.55)_0%,rgba(7,7,7,0.78)_40%,rgba(6,6,6,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.02)_65%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute -left-16 top-16 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(207,141,74,0.22),transparent_60%)] blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-[34%] bg-[linear-gradient(180deg,rgba(198,148,84,0.14),rgba(198,148,84,0.03)_50%,transparent)]" />
        <div className="absolute bottom-10 left-1/2 h-[250px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(circle,rgba(102,173,222,0.14),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-8 left-0 right-0 h-[280px] bg-[linear-gradient(180deg,transparent_0%,rgba(26,32,44,0.12)_38%,rgba(3,3,3,0.85)_100%)]" />
        <div className="absolute bottom-[15%] left-[45%] h-[180px] w-[48%] rounded-[48%_52%_16%_18%/60%_58%_18%_16%] border border-white/8 bg-[linear-gradient(180deg,rgba(17,17,17,0.9),rgba(4,4,4,0.95))] shadow-[0_40px_120px_rgba(0,0,0,0.45)] blur-[1px]" />
        <div className="absolute bottom-[16%] left-[47%] h-[120px] w-[44%] rounded-[36%_44%_14%_14%/58%_52%_14%_16%] bg-black/85 blur-[0.5px]" />
        <div className="absolute bottom-[25%] left-[6%] h-[2px] w-[18%] bg-gradient-to-r from-transparent via-[#ff3b30]/90 to-transparent shadow-[0_0_22px_rgba(255,59,48,0.8)]" />
        <div className="absolute bottom-[17%] left-[8%] h-[260px] w-[84%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_55%)] opacity-30 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="headline-font text-xl tracking-[0.28em] text-white md:text-2xl">
            TESLA CLUB
          </a>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.32em] text-white/50 md:flex">
            <a href="#concept" className="transition hover:text-white">Concept</a>
            <a href="#vehicle" className="transition hover:text-white">Vehicle</a>
            <a href="#membership" className="transition hover:text-white">Membership</a>
            <a href="#exclusivity" className="transition hover:text-white">Exclusivity</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>
          <div className="hidden md:block">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              会員申請
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-16 md:pt-24 lg:px-10">
        <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <FadeIn className="relative z-10 max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm tracking-[0.22em] text-white/70 shadow-luxe backdrop-blur-xl">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#d7b07a]" />
              PRE-LAUNCH
              <span className="text-white/35">•</span>
              限定5名
            </div>

            <div className="space-y-6">
              <h1 className="headline-font max-w-5xl text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[6.4rem]">
                Teslaを所有する時代から、
                <br className="hidden md:block" />
                必要な時だけ使う時代へ。
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/62 md:text-xl">
                中央区・港区限定
                <br className="md:hidden" />
                定員5名のプライベートTesla Club
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-end gap-4 text-white/90">
                <div className="flex items-end gap-3">
                  <span className="headline-font text-4xl md:text-5xl">30,000</span>
                  <span className="pb-1 text-sm tracking-[0.24em] text-white/55">円 / 月</span>
                </div>
                <span className="hidden h-8 w-px bg-white/10 md:block" />
                <p className="text-sm text-white/45">高級感ある移動体験を、必要な時だけ。</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/72 shadow-luxe"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0ece6]"
                >
                  先行登録はこちら
                </a>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/6 px-7 py-4 text-base font-medium text-white/88 glass transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  LINE登録
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="relative z-10 ml-auto flex w-full max-w-md justify-end">
            <div className="glass w-full rounded-[32px] p-6 md:p-7">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[#d7b07a]">
                  ✦
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-white/45">Early Campaign</p>
                  <h3 className="mt-1 text-2xl text-white">早期キャンペーン</h3>
                </div>
              </div>
              <div className="space-y-4 text-white/72">
                <p className="text-lg leading-8">
                  入会金<br />
                  <span className="text-3xl text-white">¥25,000</span>
                </p>
                <p className="text-base leading-8">定員5名のため先着順です</p>
                <div className="h-px bg-white/10" />
                <p className="text-sm uppercase tracking-[0.28em] text-[#d7b07a]">〜7月末まで</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-12 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-4 text-[11px] uppercase tracking-[0.45em] text-white/45 md:flex">
          Scroll
          <div className="h-16 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-28 px-6 pb-28 md:space-y-36 lg:px-10">
        <FadeIn className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center" >
          <section id="concept" className="space-y-6">
            <SectionHeader
              eyebrow="Concept"
              title={<>なぜ所有ではなく、<br />シェアなのか。</>}
              description="車を所有すると、駐車場代・保険・税金・メンテナンス費用が発生します。しかし実際には、月に数回しか利用しない方も少なくありません。Tesla Clubは必要な時だけ利用できる新しいモビリティ体験を提供します。"
            />
          </section>

          <div className="grid gap-4 sm:grid-cols-2">
            {conceptStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="glass rounded-[28px] p-7"
              >
                <p className="headline-font text-5xl text-white md:text-6xl">{stat.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.28em] text-white/45">{stat.label}</p>
              </motion.div>
            ))}
            <div className="glass rounded-[28px] p-7 sm:col-span-2">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">Smart Mobility</p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
                所有コストを抱えず、必要な時間だけ上質なTesla体験へアクセスする。都市生活に最適化した、静かでスマートな新しい選択肢です。
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <section id="vehicle" className="space-y-10">
            <SectionHeader eyebrow="Vehicle" title="Tesla Model Y RWD" description="都市での取り回し、乗り心地、先進性のバランスに優れた1台。ブラックベースの世界観に映える、ミニマルで力強い仕様に統一しています。" />
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="glass overflow-hidden rounded-[32px] p-8">
                <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_20%_20%,rgba(207,141,74,0.18),transparent_18%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(180deg,#0b0b0b,#050505)] p-8">
                  <div className="absolute inset-x-8 top-12 h-32 rounded-[28px] bg-[linear-gradient(90deg,rgba(255,255,255,0.06),transparent,rgba(198,148,84,0.14))] blur-3xl" />
                  <div className="absolute bottom-6 left-8 right-8 h-28 rounded-full bg-[radial-gradient(circle,rgba(71,144,196,0.2),transparent_60%)] blur-3xl" />
                  <div className="absolute bottom-14 left-1/2 h-40 w-[82%] -translate-x-1/2 rounded-[42%_58%_18%_18%/54%_54%_16%_16%] border border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.96),rgba(2,2,2,0.98))] shadow-[0_26px_120px_rgba(0,0,0,0.58)]" />
                  <div className="absolute bottom-[5.6rem] left-[20%] h-16 w-16 rounded-full border border-white/8 bg-black/70 shadow-[0_0_30px_rgba(0,0,0,0.45)]" />
                  <div className="absolute bottom-[5.6rem] right-[20%] h-16 w-16 rounded-full border border-white/8 bg-black/70 shadow-[0_0_30px_rgba(0,0,0,0.45)]" />
                  <div className="relative z-10 max-w-sm space-y-3">
                    <p className="text-xs uppercase tracking-[0.34em] text-white/45">Selected Vehicle</p>
                    <h3 className="headline-font text-4xl text-white">Stealth Grey</h3>
                    <p className="text-base leading-8 text-white/64">
                      テスラらしい静けさと、都会に馴染むプレミアムな佇まい。所有感ではなく、アクセス体験としての美しさを追求しました。
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {vehicleSpecs.map((spec) => (
                  <div key={spec} className="glass rounded-[28px] p-6">
                    <p className="text-sm uppercase tracking-[0.28em] text-white/45">Spec</p>
                    <p className="mt-4 text-xl leading-8 text-white">{spec}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="features" className="space-y-10">
            <SectionHeader eyebrow="Features" title="所有を超える、使うための完成度。" description="日常使いでも、特別な移動でも。Teslaならではの快適性と先進性を、必要な時にだけ享受できます。" />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="glass rounded-[28px] p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-sm text-[#d7b07a]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <p className="text-lg text-white">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="membership" className="space-y-10">
            <SectionHeader eyebrow="Membership" title="シンプルで明快な会員設計。" description="高級感と透明性を両立した料金設計。使いたい人だけがスマートに参加できる、軽やかなメンバーシップです。" />
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="glass rounded-[32px] p-8">
                <p className="text-sm uppercase tracking-[0.32em] text-white/45">Pricing</p>
                <div className="mt-5 flex items-end gap-3">
                  <span className="headline-font text-5xl text-white md:text-6xl">¥30,000</span>
                  <span className="pb-2 text-sm uppercase tracking-[0.28em] text-white/50">/ month（税込）</span>
                </div>
                <div className="mt-8 space-y-4 border-t border-white/10 pt-8 text-white/72">
                  <div className="flex items-center justify-between gap-4">
                    <span>入会金</span>
                    <span className="text-xl text-white">¥25,000</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>デポジット</span>
                    <span className="text-xl text-white">¥100,000</span>
                  </div>
                </div>
              </div>
              <div className="glass rounded-[32px] p-8">
                <p className="text-sm uppercase tracking-[0.32em] text-white/45">Included</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {membershipIncludes.map((item) => (
                    <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                      <p className="text-base text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="exclusivity" className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-10">
              <SectionHeader eyebrow="Exclusivity" title="限られた会員だけに開く、静かな特別感。" description="単なるカーシェアではなく、品質と運営体験まで設計されたプライベートクラブ。募集数・エリア・審査基準を絞ることで、快適な利用体験を守ります。" />
              <div className="grid gap-4 sm:grid-cols-2">
                {exclusivity.map((item) => (
                  <div key={item} className="glass rounded-[28px] p-6">
                    <p className="text-sm uppercase tracking-[0.28em] text-white/45">Policy</p>
                    <p className="mt-4 text-xl text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-[32px] p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-white/45">Flow</p>
              <ol className="mt-8 space-y-6">
                {flow.map((step, index) => (
                  <li key={step} className="relative flex gap-5 pl-2">
                    {index < flow.length - 1 ? (
                      <span className="absolute left-[1.15rem] top-11 h-[calc(100%+0.25rem)] w-px bg-gradient-to-b from-white/30 to-transparent" />
                    ) : null}
                    <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-sm text-white">
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-lg text-white">{step}</p>
                      <p className="mt-1 text-sm leading-7 text-white/52">
                        {index === 0 && 'フォーム送信またはLINE登録で先行エントリー'}
                        {index === 1 && '運営からの案内に沿って本人確認を実施'}
                        {index === 2 && '利用ルールと品質を守るための簡易審査'}
                        {index === 3 && '初期費用のお支払いと会員登録完了'}
                        {index === 4 && '予約システムから利用開始'}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="faq" className="space-y-10">
            <SectionHeader eyebrow="FAQ" title="よくある質問" />
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="glass group rounded-[28px] p-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 text-left text-lg text-white">
                    <span>{item.q}</span>
                    <span className="text-white/45 transition group-open:rotate-45">＋</span>
                  </summary>
                  <p className="pt-5 text-base leading-8 text-white/68">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="glass relative overflow-hidden rounded-[40px] px-6 py-12 md:px-10 md:py-16">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(210,156,92,0.18),transparent_55%)] blur-2xl" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.36em] text-white/45">Final CTA</p>
                <h2 className="headline-font text-4xl leading-tight text-white md:text-5xl">先着5名募集</h2>
                <p className="max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                  所有ではなく、必要な時にだけTeslaを使う。中央区・港区の都市生活にフィットする新しい選択を、限定5名からスタートします。
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/6 px-7 text-base font-medium text-white glass transition hover:bg-white/10"
                >
                  LINE登録
                </a>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-base font-semibold text-black transition hover:bg-[#ece7df]"
                >
                  Googleフォームで登録
                </a>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
