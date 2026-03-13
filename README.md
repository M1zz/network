# Network — 개발자리 iOS Roadmap

> **Stage 5 · 🛵 서버 데이터가 필요하다**

## 디렉토리 구조

```
network/
├── index.html          # Stage 5 메인 인덱스
├── assets/
│   ├── style.css       # 공유 디자인 시스템
│   └── script.js       # 공유 JS (progress, quiz, accordion)
├── 5-1/
│   └── index.html      # HTTP와 REST API (19 topics)
├── 5-2/
│   └── index.html      # 데이터 영속성 (18 topics)
└── 5-3/
    └── index.html      # 네트워크 보안 (11 topics)
```

## 커리큘럼

| 레슨 | 주제 | Topics |
|------|------|--------|
| 5-1 | 📡 HTTP와 REST API | 19 |
| 5-2 | 💾 데이터 영속성 | 18 |
| 5-3 | 🔐 네트워크 보안 | 11 |

## 기능

- **진행 추적** — 토픽 체크 시 localStorage에 저장, 새로고침 후에도 유지
- **아코디언** — 그룹별 펼치기/접기
- **퀴즈** — 각 레슨마다 실전 상황 기반 퀴즈
- **레슨 간 내비게이션** — 이전/다음 레슨 이동

## 로컬 실행

```bash
# 그냥 index.html을 브라우저에서 열면 됩니다
open network/index.html

# 또는 간단한 서버
npx serve network/
```

---

개발자리 (Devjaeri) · iOS Roadmap
