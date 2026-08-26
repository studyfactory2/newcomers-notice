import { B, Red, Gold } from "../components/RichText";
import { LINKS } from "./links";
import type { NoticeContent } from "./notice.types";
import homeScreenExample from "../../assets/images/home-screen-example.svg";

/**
 * Single source of truth for everything shown on the notice page.
 * Edit text here — no component changes needed.
 */
export const noticeContent: NoticeContent = {
  header: {
    title: "자격증공장 입사자 이용안내",
    subtitle: '이미 "합격자"라는 마음으로 출근해 주세요^^',
  },

  sections: [
    {
      id: "no-greeting",
      number: 1,
      emoji: "🤫",
      title: "열람실내 인사금지",
      blocks: [
        { type: "paragraph", text: "들어오며 누구있나 보지말고, 반갑다고 고개들지 말자!" },
        { type: "paragraph", text: "화장실 가듯 퇴근하고, 말없이 갔다 서운해말자!" },
      ],
    },
    {
      id: "no-greeting-serving",
      number: 2,
      emoji: "🥤",
      title: "음료 서빙시 인사하지 않기",
      blocks: [
        {
          type: "paragraph",
          text: (
            <>
              알아서 놔드려요. (손마중 <Red>X</Red>, 감사인사 <Red>X</Red>)
            </>
          ),
        },
      ],
    },
    {
      id: "silence",
      number: 3,
      emoji: "🤐",
      title: "절대 정숙",
      blocks: [
        {
          type: "paragraph",
          text: (
            <>
              공부 중 일 땐, <B>쉬는 시간이라도 절대 말 시키지 말아주세요.</B>
            </>
          ),
        },
      ],
    },
    {
      id: "minimize-movement",
      number: 4,
      emoji: "🏃",
      title: "이동 최소화 및 입실 제한",
      blocks: [
        { type: "paragraph", text: "모든 볼일은 쉬는 시간을 이용해 주시고, 공부 시간 중에는 이동이 없어야 합니다." },
        {
          type: "callout",
          tone: "note",
          lines: [
            "'나는 이번 교시는 졸릴 것 같다', '화장실에 가고 싶을 거 같다' 싶을 땐",
            <>
              처음부터 입실하지 말고, <B>복도나 휴게실에서 공부 시작해 주세요!</B>
            </>,
            "(복도에 계셔도 출석체크 합니다.)",
          ],
        },
        {
          type: "alert",
          title: "🚨 공부시간 중 부득이 긴박상황 시 매뉴얼",
          bullets: [
            {
              label: "교시 끝나기 30~40분 전:",
              text: "공부 할 것 들고, 조용히 나오셔서 볼 일 보고 복도에서 공부하다가 다음 타임에 들어가 주세요.",
            },
            {
              label: "교시 끝나기 10~15분 전:",
              text: "무조건 마저 참읍시다.",
              note: "(교시 시작하고 20분 이내, 교시 끝나기 전 20분 이내 열람실 출입금지입니다.)",
            },
          ],
        },
      ],
    },
    {
      id: "silent-laptop",
      number: 5,
      emoji: "💻",
      title: "노트북/탭 무소음 필수",
      blocks: [
        {
          type: "paragraph",
          text: (
            <>
              노트북, 탭 이용자는 <B>무소음키보드+키스킨, 무소음마우스 필수</B>입니다.
            </>
          ),
        },
        { type: "paragraph", text: "(복도, 휴게실 포함 전 구역 해당)", emphasis: "bold" },
      ],
    },
    {
      id: "cctv",
      number: 6,
      emoji: "👀",
      title: "CCTV 모니터링 안내",
      blocks: [
        { type: "paragraph", text: "사장이 회원님들과 분리불안이 있어, 수시로 CCTV를 보고 있습니다." },
        { type: "paragraph", text: "(회원학업관리, 실내분위기관리, 분실대비 용)", emphasis: "bold" },
        { type: "paragraph", text: "*미동의 시 말씀주세요.", emphasis: "muted" },
      ],
    },
    {
      id: "patrol",
      number: 7,
      emoji: "👮",
      title: "관리자 순회 시 행동요령",
      blocks: [
        { type: "paragraph", text: "관리자 순회 시, 고개 들면 뭔가 죄 지은 것으로 간주합니다." },
        {
          type: "paragraph",
          text: (
            <>
              <B>고개 들지 마세요.</B> 공부에만 집중해주세요.
            </>
          ),
        },
      ],
    },
    {
      id: "eraser",
      number: 8,
      emoji: "✏️",
      title: "지우개 사용 주의",
      blocks: [
        { type: "paragraph", text: "책상끼리 전선으로 연결되어 있어, 지우개 사용 시 옆, 앞 좌석이 다 흔들립니다." },
        {
          type: "callout",
          tone: "info",
          lines: [
            <>
              지우개 사용은 조심히! 한번에 많이 지울 땐, <B>복도 책상에서 이용 부탁드려요.</B>
            </>,
          ],
        },
      ],
    },
    {
      id: "nap",
      number: 9,
      emoji: "😴",
      title: "낮잠 허용 시간",
      blocks: [
        {
          type: "paragraph",
          text: (
            <>
              <B>3교시</B>는 엎드려 낮잠, 허용합니다.
            </>
          ),
        },
      ],
    },
    {
      id: "cough",
      number: 10,
      emoji: "😷",
      title: "감기/기침 예절",
      blocks: [
        {
          type: "paragraph",
          text: (
            <>
              감기환자, 감기 징조 있으신 분 <B>마스크 필수 착용</B>입니다.
            </>
          ),
        },
        { type: "paragraph", text: "갑작스런 기침은 옷 소매로 입과 코를 막고 합니다." },
        { type: "paragraph", text: "마스크 미착용으로 기침하는 자는, 사장 갠톡으로 신고주세요!", emphasis: "danger" },
      ],
    },
    {
      id: "no-complaints",
      number: 11,
      emoji: "🚫",
      title: "회원 간 불평/요구 금지",
      blocks: [
        { type: "paragraph", text: "회원들 간에 직접적 요구, 불평 행위 강력히 금지합니다." },
        {
          type: "paragraph",
          text: (
            <>
              불편하신 점은 <B>반드시 관리자를 통해주세요.</B>
            </>
          ),
        },
        { type: "paragraph", text: "(표정으로도 불만 표출, 절대 하지 마세요.)" },
      ],
    },
    {
      id: "no-talking",
      number: 12,
      emoji: "🙅",
      title: "대화 시도 금지",
      blocks: [
        {
          type: "callout",
          tone: "danger",
          lines: [<B>이성 회원에게 말 거는 그 즉시, 퇴사 처리 합니다.</B>],
        },
        { type: "paragraph", text: "같은 공부하는 동성에게도 절대, 먼저 말 걸지 말아주세요." },
        { type: "paragraph", text: "그 분은 혼자 공부하고 싶을 수 있어요!" },
      ],
    },
    {
      id: "noise-smell",
      number: 13,
      emoji: "🔇",
      title: "소음 및 냄새 주의",
      blocks: [
        { type: "paragraph", text: "열람실 내 빠스락거리는 패딩 재질 옷, 향수, 향 진한 핸드크림 금지" },
        { type: "paragraph", text: "(공부 시간 중 먹을 과자는 소리나지 않게, 포장을 미리 까놔 주세요.)", emphasis: "bold" },
      ],
    },
    {
      id: "leave",
      number: 14,
      emoji: "📅",
      title: "반차/월차 사용 안내",
      blocks: [
        {
          type: "paragraph",
          text: (
            <>
              사용은 <B>자격증공장 회원관리 앱</B>으로 신청주세요.
            </>
          ),
        },
        {
          type: "linkBox",
          label: LINKS.memberAppLogin,
          href: LINKS.memberAppLogin,
          items: [
            {
              heading: "[사원등록 방법]",
              text: "사원등록 클릭 → 이름, 4자리 비밀번호 입력 후 로그인해서 쓰시면 됩니다.",
            },
            {
              heading: "[홈 화면 추가하기 안되는 분들]",
              text: "주소 복사해서 기본 인터넷 브라우저(삼성 인터넷, 아이폰 Safari 등)로 들어가셔서, 주소창에 넣고 추가하기 눌러주세요.",
            },
          ],
          image: {
            src: homeScreenExample,
            alt: "홈 화면 추가 방법 예시 - 왼쪽 삼성 인터넷 아이콘, 오른쪽 아이폰 Safari 아이콘 위치 안내",
            caption: "*주소 추가 방법 예시사진",
            maxWidth: 520,
          },
        },
        {
          type: "callout",
          tone: "info",
          lines: [
            <>
              당일 월차 및 오전 반차는, 가급적 음료 준비를 시작하는 <B>오전 8시 이전 등록</B> 부탁드립니다.
            </>,
          ],
        },
      ],
    },
    {
      id: "wifi",
      number: 15,
      emoji: "📶",
      title: "와이파이 안내",
      blocks: [
        {
          type: "paragraph",
          text: (
            <>
              해당 자리 와이파이 정보는 <B>좌석에 표시</B>되어 있습니다.
            </>
          ),
        },
      ],
    },
    {
      id: "no-takeout",
      number: 16,
      emoji: "🍞",
      title: "간식 반출 금지",
      blocks: [
        { type: "paragraph", text: "자격증공장 내 모든 먹을거리는 집에 싸가면 안 되는 거 아시죠?" },
        { type: "paragraph", text: "(24시간 CCTV 녹화 중 📹)", emphasis: "bold" },
      ],
    },
    {
      id: "items",
      number: 17,
      emoji: "🧣",
      title: "편안한 공장생활 아이템",
      blocks: [
        {
          type: "checklist",
          items: [
            { label: "텀블러:", detail: "스텐으로 된 것. (플라스틱은 결로 현상 발생)" },
            {
              label: "개인 식기:",
              detail: "수저, 젓가락, 밥그릇, 접시",
              note: "*식기세척기 사용 가능한 제품으로 준비 부탁드립니다.",
            },
            { label: "무소음 시계:", detail: "손목시계도 가능" },
            { label: "책꽂이:", detail: "다이소 4칸짜리 추천 (5천원)" },
            { label: "실내화:", detail: "(선택)" },
            { label: "두꺼운 담요:", detail: "한여름 에어컨 가동 시 추울 수 있습니다." },
          ],
        },
      ],
    },
    {
      id: "name-sticker",
      number: 18,
      emoji: "🏷️",
      title: "이름스티커 부착 안내",
      blocks: [
        {
          type: "paragraph",
          text: (
            <>
              드리는 이름스티커는 <B>반찬통, 텀블러, 우산</B>에 필수로 붙여주세요.
            </>
          ),
        },
        {
          type: "callout",
          tone: "info",
          lines: [
            <>
              <B>뚜껑과 몸통 둘 다</B> 꼭 붙여주세요.
            </>,
          ],
        },
      ],
    },
    {
      id: "side-dish-order",
      number: 19,
      emoji: "🍱",
      title: "반찬 공동 주문",
      blocks: [
        {
          type: "paragraph",
          text: (
            <>
              <B>매일 2회</B> 받습니다.
            </>
          ),
        },
        {
          type: "paragraph",
          text: (
            <>
              점심 주문은 당일 아침 <B>10:45까지</B> 신청, 저녁 주문은 당일 <B>16:30까지</B> 주문 주세요.
            </>
          ),
        },
        { type: "paragraph", text: "메뉴 골라 사장 갠톡으로 신청 후 카카오페이로 송금주세요." },
        {
          type: "callout",
          tone: "note",
          lines: ["2천원짜리 1개도 OK! (일요일은 반찬가게 휴무)"],
        },
        {
          type: "storeCard",
          store: {
            platform: "현재 이용중인 반찬가게 · 쿠팡이츠",
            name: "손찬반찬백화점 센텀점",
            description: (
              <>
                아래 버튼으로 바로 열거나, 쿠팡이츠 앱에서 <B>손찬반찬백화점 센텀점</B>을 검색해주세요.
              </>
            ),
            href: LINKS.coupangEatsStore,
            ctaLabel: "쿠팡이츠에서 메뉴 보기",
            tags: ["점심 10:45 마감", "저녁 16:30 마감", "일요일 휴무", "카카오페이 송금"],
          },
        },
        { type: "paragraph", text: "*반찬가게와 자격증공장은 아무 관련 없습니다^^;; 좋은 곳 있으면 추천주세요.", emphasis: "muted" },
      ],
    },
    {
      id: "trash",
      number: 20,
      emoji: "🗑️",
      title: "쓰레기 처리법",
      blocks: [
        {
          type: "checklist",
          items: [
            { label: "과일 껍질:", detail: "일반 쓰레기에 바로 버리기" },
            { label: "많은 음식물:", detail: "위생봉투에 넣어 묶은 후 일반 쓰레기에 버리기" },
            { label: "적은 양/라면 국물:", detail: "씽크대에 바로 붓기" },
          ],
        },
      ],
    },
    {
      id: "noise-newcomers",
      number: 21,
      emoji: "👂",
      title: "신규회원 소음 주의사항",
      blocks: [
        { type: "paragraph", text: "각자 다른 곳에서 오셨기에 소음 기준이 다를 수 있습니다. 아래 민원이 자주 발생하니 주의 부탁 드립니다." },
        {
          type: "numbered",
          items: [
            "책을 세게 넘기는 소리",
            "물건을 책상에 탁! 소리 나게 놓는 행위",
            "과자 먹을 때 빠스락거리는 소리",
            "독서대에 책을 놓을 때 나는 소리",
            "종 치고 들어오거나, 10~15분 남기고 나가는 행위",
            "바닥에 슬리퍼 끌리는 소리",
          ],
        },
        {
          type: "paragraph",
          text: "신규 분들은 주변 소리를 주의 깊게 들으면서, 딱 그 정도로 맞춰주시면 감사하겠습니다.",
          emphasis: "bold",
        },
      ],
    },
  ],

  tips: {
    title: "〈 무조건 잘되는 법 3가지 〉",
    items: [
      {
        text: (
          <>
            의심이 들때마다 <Gold>그냥 믿고 밀고나간다.</Gold>
          </>
        ),
        chip: { label: "무대뽀정신", color: "gold" },
      },
      {
        text: (
          <>
            시험 전날까지 <Gold>무던한 마음유지</Gold>
          </>
        ),
        chip: { label: "강력멘탈", color: "red" },
      },
      {
        text: (
          <>
            긍정적인 말과 행동은 <Gold>나와 타인에게도 큰 힘</Gold>이 됩니다.
          </>
        ),
        chip: { label: "무한긍정에너지", color: "green" },
      },
    ],
  },

  footer: {
    lines: [
      "반드시 합격하여 나가실 수 있도록",
      <>
        <Gold>자격증공장</Gold>이 확실히 서포트 하겠습니다.
      </>,
    ],
  },
};
