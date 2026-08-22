import type { ReactNode } from "react";

// MDX 본문에서 쓰는 커스텀 컴포넌트 — 상세 페이지의 MDXRemote에 주입된다

/** 알약 라벨 + 요약 문장 제목. 예: <SectionTitle label="problem">요약 문장</SectionTitle> */
export function SectionTitle({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <header className="mt-16 mb-6 first:mt-0 sm:mt-24">
      <span className="bg-rose-soft text-rose-deep inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide lowercase">
        {label}
      </span>
      <h2 className="text-ink mt-4 text-3xl font-extrabold tracking-tighter sm:text-4xl">
        {children}
      </h2>
    </header>
  );
}

/** 기능 카드 그리드 — 모바일 1열, sm 이상 2열 */
export function FeatureGrid({ children }: { children: ReactNode }) {
  return <div className="mt-8 grid gap-4 sm:grid-cols-2">{children}</div>;
}

/** 기능 카드: 이모지 + 굵은 기능명 + 한 줄 설명 */
export function Feature({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
      <span className="text-2xl" aria-hidden>
        {icon}
      </span>
      <h3 className="text-ink mt-3 text-lg font-bold">{title}</h3>
      {/* MDX가 자식을 <p>로 감싸므로 div 컨테이너 + 내부 p 여백 제거 */}
      <div className="text-ink-soft mt-1.5 leading-relaxed [&>p]:mb-0 [&>p]:max-w-none">
        {children}
      </div>
    </div>
  );
}

/** 반응형 16:9 영상 임베드 (Loom 등 iframe) */
export function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl bg-white">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}

export const mdxComponents = {
  SectionTitle,
  FeatureGrid,
  Feature,
  VideoEmbed,
};
