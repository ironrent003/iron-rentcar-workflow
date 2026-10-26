# 신입직원 ERP 업무흐름 교육자료 확장 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 기존 클릭형 신입직원 업무흐름도에 ERP 업무 연결과 인계 기준을 교육용 상세 내용으로 추가한다.

**Architecture:** 단일 `index.html` 안의 탭별 접힌 상세 카드를 확장하고, 기존 카드 클릭 JavaScript와 탭 필터를 그대로 사용한다. 새 설명은 기존 7단계 카드를 복잡하게 만들지 않고, 탭별 상세 카드와 단계별 `steps` 데이터에 분리해 둔다.

**Tech Stack:** HTML, CSS, Vanilla JavaScript

**Spec:** `docs/superpowers/specs/2026-10-26-new-hire-erp-education-design.md`

## Global Constraints

- 기존 7단계 흐름과 4개 탭을 유지한다.
- 부서는 영업팀, 고객관리팀, 경영관리, 법무팀(법무·채권관리)만 사용한다.
- 외부 라이브러리를 추가하지 않는다.
- 모바일과 인쇄/PDF 레이아웃을 유지한다.
- 신입사원에게 불필요한 ERP 구현 구조는 노출하지 않는다.

## Review Focus

- 탭을 전환하면 해당 주제의 상세 카드만 보여야 한다.
- 차량 준비 상태와 계약 배정 상태가 하나의 상태로 혼동되지 않아야 한다.
- 사고·운행위반·미납 안내에 고객 청구와 법무 이관의 조건이 명확해야 한다.
- 예외·법무·회수 업무가 신입사원의 단독 처리로 읽히지 않아야 한다.
- 인쇄 시 접힌 상세 카드와 단계별 내용이 겹치거나 잘리지 않아야 한다.

---

### Task 1: 단계별 교육 메시지 보강

**Files:**
- Modify: `index.html` — `steps` 배열의 7개 카드 상세

**Interfaces:**
- Consumes: 기존 `openStep(index)` 렌더링 함수
- Produces: 각 단계의 핵심업무와 인계정보에 계약·차량·금액 연결이 반영된 `steps` 데이터

- [ ] **Step 1: 7개 단계의 기존 업무·인계 설명을 확인한다**
- [ ] **Step 2: 계약 진행·차량 준비·이용 중 관리·정산/종료에 각각 계약번호, 차량상태, 청구·수납, 법무 이관 기준을 교육 문장으로 추가한다**
- [ ] **Step 3: 모든 단계 카드를 열고 부서, 핵심업무, 다음 단계, 인계정보가 정상 표시되는지 확인한다**
- [ ] **Step 4: Commit**

### Task 2: 차량관리 교육 카드 확장

**Files:**
- Modify: `index.html` — 차량관리 탭의 `<details class="extra">` 카드 및 관련 CSS

**Interfaces:**
- Consumes: `extraGroups`의 `vehicle` 카테고리
- Produces: 차량 준비 상태와 계약 배정 상태를 함께 설명하는 접힌 카드

- [ ] **Step 1: 기존 차량 상태, 반납 후 재상품화·매각 카드와 중복되는 문장을 확인한다**
- [ ] **Step 2: `차량 준비와 계약 배정은 다르게 봅니다` 상세 카드를 추가한다**
- [ ] **Step 3: 반납 이후 카드에 반납점검 → 재상품화·재렌트 또는 매각 → 차량별 정산의 연결을 보완한다**
- [ ] **Step 4: 차량관리 탭에서 새 카드와 기존 카드만 보이는지, 작은 화면에서 흐름이 줄바꿈되는지 확인한다**
- [ ] **Step 5: Commit**

### Task 3: 역할·협업 예외 업무 카드 추가

**Files:**
- Modify: `index.html` — 역할·협업 탭의 상세 카드와 `extraGroups`

**Interfaces:**
- Consumes: `extraGroups`, 기존 `.flowline`, `.callout`, `.dept-grid` 스타일
- Produces: 사고·운행위반·청구수납·인계완료 교육 카드

- [ ] **Step 1: `사고 발생 시 업무 연결` 카드를 추가한다**
- [ ] **Step 2: `운행위반 고지서는 이렇게 처리합니다` 카드를 추가한다**
- [ ] **Step 3: `청구·수납과 연체의 연결` 카드를 추가한다**
- [ ] **Step 4: `업무기록과 인계 완료 기준` 카드에 계약번호·차량번호·현재 상태·금액·미완료 조치·다음 일정을 포함한 완료 기준을 보완한다**
- [ ] **Step 5: 역할·협업 탭에서 새 카드만 보이는지 확인하고, 새 카드 제목을 `extraGroups`의 `team`에 등록한다**
- [ ] **Step 6: Commit**

### Task 4: 반응형·인쇄·상호작용 확인

**Files:**
- Modify: `index.html` — 필요한 경우에만 CSS 미디어 쿼리

**Interfaces:**
- Consumes: 기존 탭 클릭, 카드 열기/닫기, `window.print()` 동작
- Produces: 화면 크기와 인쇄에서도 읽을 수 있는 교육 화면

- [ ] **Step 1: 데스크톱과 모바일 너비에서 4개 탭, 7단계 카드, 새 흐름 카드의 줄바꿈을 확인한다**
- [ ] **Step 2: 인쇄 미리보기에서 상세 카드, 흐름 화살표, 긴 설명이 페이지 경계에서 읽히는지 확인한다**
- [ ] **Step 3: 탭 전환, 키보드 좌우 이동, 단계 카드 열기·닫기, Escape 닫기를 확인한다**
- [ ] **Step 4: Commit**

## Self-review

- 설계의 7개 신규 교육 주제는 Task 1~3에 각각 배정했다.
- 현재 단일 HTML 구조를 유지해 불필요한 파일 분리를 하지 않는다.
- 탭 필터와 인쇄 레이아웃은 Task 4에서 검증한다.
- 새 카드 제목을 `extraGroups`에 추가해 잘못된 탭으로 분류되는 위험을 Task 3에서 점검한다.
