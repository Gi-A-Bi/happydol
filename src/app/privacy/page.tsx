import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

/**
 * 쌤툴즈 개인정보처리방침 — 「개인정보 보호법」 제30조
 *
 * ⚠️ 조문 번호(제1조–제12조)는 에듀집 필수기준 체크리스트가 "제6조" 형식으로 인용하므로
 *    고정입니다. 조문을 추가·삭제하거나 순서를 바꾸지 않습니다.
 * ⚠️ 이 사이트는 개인정보를 수집하지 않습니다. 사실이 바뀌면(문의 폼, 분석 도구, 외부 글꼴 등)
 *    방침을 먼저 고치고 시행 7일 전부터 알린 뒤에 그 기능을 켭니다.
 *    특히 src/app/layout.tsx 의 Cloudflare Web Analytics 비콘 주석을 해제하면
 *    제2조·제6조를 함께 고쳐야 합니다.
 */

const TITLE = "개인정보처리방침";
const DESCRIPTION = `${SITE_NAME}가 처리하는 개인정보와 그 범위를 안내합니다.`;
const EFFECTIVE_DATE = "2026년 9월 15일";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
};

const ARTICLES: { no: number; title: string; body: React.ReactNode }[] = [
  {
    no: 1,
    title: "개인정보의 처리 목적",
    body: (
      <>
        <p className="bg-rose-soft text-rose-deep rounded-2xl px-5 py-4 font-semibold">
          이 사이트는 개인정보를 수집하지 않습니다.
        </p>
        <p className="mt-4">
          {SITE_NAME}는 현직 교사가 만든 웹 앱을 소개하는 페이지입니다. 회원가입,
          로그인, 문의 폼, 댓글, 구독 신청처럼 방문자가 정보를 입력하는 기능이
          없습니다. 따라서 처리 목적이 되는 개인정보가 발생하지 않습니다.
        </p>
      </>
    ),
  },
  {
    no: 2,
    title: "처리하는 개인정보의 항목",
    body: (
      <>
        <p>수집하는 개인정보 항목은 없습니다.</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>입력칸이 없어 방문자가 정보를 적어 넣을 경로가 없습니다.</li>
          <li>
            브라우저 저장소(localStorage·sessionStorage·쿠키)를 사용하지 않습니다.
          </li>
          <li>
            방문자 분석 도구와 광고 도구를 사용하지 않습니다. 화면 글꼴도 사이트
            안에 포함해 제공하므로 외부로 나가는 요청이 없습니다.
          </li>
        </ul>
        <p className="text-ink-soft mt-3 text-sm">
          다만 웹사이트를 보여 주는 과정에서 호스팅 사업자의 시스템에 접속 기록(접속
          IP 주소, 브라우저 정보, 접속 일시 등)이 자동으로 남을 수 있습니다. 제5조를
          참고해 주세요.
        </p>
      </>
    ),
  },
  {
    no: 3,
    title: "개인정보의 최소 수집과 보유·이용 기간",
    body: (
      <p>
        수집하는 개인정보가 없으므로 운영자가 보유하는 개인정보도 없습니다. 각 앱을
        소개하는 페이지는 앱의 이름과 설명, 화면 안내만 담고 있으며 학생이나 교사의
        정보를 담지 않습니다.
      </p>
    ),
  },
  {
    no: 4,
    title: "만 14세 미만 아동의 개인정보 보호",
    body: (
      <p>
        회원가입과 개인정보 수집이 없으므로 만 14세 미만 아동의 개인정보를
        수집·이용하지 않습니다. 따라서 법정대리인 동의가 필요한 처리가 발생하지
        않습니다.
      </p>
    ),
  },
  {
    no: 5,
    title: "개인정보의 파기",
    body: (
      <p>
        운영자가 보유하는 개인정보가 없어 파기할 대상이 없습니다. 브라우저에 저장하는
        값도 없으므로 방문자가 따로 지울 것도 없습니다.
      </p>
    ),
  },
  {
    no: 6,
    title: "개인정보의 안전성 확보 조치",
    body: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>
          서버에서 도는 코드와 데이터베이스를 두지 않은 정적 웹사이트입니다. 유출될
          수 있는 개인정보를 애초에 보유하지 않습니다.
        </li>
        <li>입력칸을 두지 않아 방문자가 실수로 개인정보를 남길 경로가 없습니다.</li>
        <li>전송 구간 암호화 — 모든 통신에 HTTPS를 적용합니다.</li>
      </ul>
    ),
  },
  {
    no: 7,
    title: "정보주체의 권리·의무 및 행사 방법",
    body: (
      <>
        <p>
          정보주체는 언제든지 자신의 개인정보에 대하여 열람, 정정, 삭제, 처리정지를
          요구할 수 있습니다. 다만 이 사이트는 보유하는 개인정보가 없어 그 대상이 되는
          정보가 존재하지 않습니다.
        </p>
        <p className="mt-3">
          확인이 필요하시면 제8조의 개인정보 보호책임자에게 요청해 주세요. 지체 없이
          답변드립니다.
        </p>
        <p className="mt-3">
          각 앱에서 처리하는 개인정보에 대한 요구는{" "}
          <strong>그 앱의 개인정보처리방침</strong>과 담당 교사에게 해 주셔야 합니다.
          앱마다 처리하는 정보와 창구가 다르며, 각 프로젝트 페이지 아래에서 해당
          방침을 확인하실 수 있습니다.
        </p>
      </>
    ),
  },
  {
    no: 8,
    title: "개인정보 보호책임자",
    body: (
      <>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>개인정보 보호책임자: 담당 교사</li>
          <li>
            문의:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-cocoa underline underline-offset-4 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>
        <p className="mt-4">
          개인정보 침해에 대한 신고나 상담이 필요한 경우 아래 기관에 문의할 수
          있습니다.
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>개인정보침해신고센터 — 국번없이 118 (privacy.kisa.or.kr)</li>
          <li>개인정보 분쟁조정위원회 — 1833-6972 (kopico.go.kr)</li>
        </ul>
      </>
    ),
  },
  {
    no: 9,
    title: "개인정보의 제3자 제공",
    body: (
      <p>
        수집하는 개인정보가 없으므로 제3자에게 제공하는 개인정보도 없습니다.
      </p>
    ),
  },
  {
    no: 10,
    title: "개인정보 처리의 위탁",
    body: (
      <>
        <p>
          개인정보 처리를 위탁하지 않습니다. 다만 웹사이트를 보여 주는 과정에서 아래
          사업자의 시스템에 접속 기록이 남을 수 있습니다.
        </p>
        <div className="border-line mt-3 overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-md border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border-line bg-cream-deep border-b px-4 py-3 font-semibold">
                  사업자
                </th>
                <th className="border-line bg-cream-deep border-b px-4 py-3 font-semibold">
                  내용
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-line border-b px-4 py-3 align-top">
                  Cloudflare, Inc.
                </td>
                <td className="border-line border-b px-4 py-3 align-top">
                  웹사이트 호스팅 — 접속 시 IP 주소와 브라우저 정보가 처리될 수
                  있습니다. 이 사이트는 그 기록을 따로 내려받아 보관하지 않습니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    no: 11,
    title: "개인정보의 국외 이전",
    body: (
      <>
        <p>
          이 사이트는 개인정보를 수집하지 않으므로 국외로 이전되는 개인정보도 없습니다.
          다만 화면을 보여 주는 과정에서 접속 정보가 국외로 전달될 수 있습니다.
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>이전받는 자: Cloudflare, Inc.</li>
          <li>이전 국가: 미국</li>
          <li>이전 항목: 접속 시 IP 주소, 브라우저 정보</li>
          <li>이전 일시·방법: 접속할 때마다 정보통신망을 통해 전송</li>
          <li>이용 목적 및 보유 기간: 웹사이트 호스팅 — 위탁 업무 수행 기간</li>
        </ul>
        <p className="text-ink-soft mt-3 text-sm">
          국외 이전을 원하지 않으시면 이 사이트를 이용하지 않으실 수 있습니다.
        </p>
      </>
    ),
  },
  {
    no: 12,
    title: "개인정보처리방침의 변경",
    body: (
      <p>
        이 개인정보처리방침은 {EFFECTIVE_DATE}부터 시행합니다. 법령이나 서비스 내용이
        바뀌어 방침을 변경하는 경우, 변경 내용을 시행 7일 전부터 이 페이지에
        알립니다. 이전 개인정보처리방침은 없습니다(최초 제정).
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{TITLE}</h1>
      <p className="text-ink-soft mt-4 max-w-2xl leading-relaxed">
        {SITE_NAME}는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고
        이와 관련한 고충을 신속하게 처리할 수 있도록 다음과 같이 개인정보처리방침을
        수립·공개합니다.
      </p>

      <div className="mt-12 max-w-2xl space-y-12">
        {ARTICLES.map(({ no, title, body }) => (
          <section key={no}>
            <h2 className="border-line border-b pb-3 text-lg font-semibold">
              제{no}조 ({title})
            </h2>
            <div className="mt-4 leading-relaxed">{body}</div>
          </section>
        ))}
      </div>

      <p className="text-ink-soft mt-12 text-sm">시행일: {EFFECTIVE_DATE}</p>
    </div>
  );
}
