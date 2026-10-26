const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

test('new-hire guide contains the approved ERP training content and category mappings', () => {
  const requiredCards = [
    ['차량 준비와 계약 배정은 다르게 봅니다', 'vehicle'],
    ['사고 발생 시 업무 연결', 'team'],
    ['운행위반 고지서는 이렇게 처리합니다', 'team'],
    ['청구·수납과 연체의 연결', 'team'],
  ];

  for (const [title, category] of requiredCards) {
    assert.match(html, new RegExp(`<summary>${title}</summary>`));
    assert.match(html, new RegExp(`'${title}'\\s*:\\s*'${category}'`));
  }

  assert.match(html, /차량 준비상태/);
  assert.match(html, /계약 배정상태/);
  assert.match(html, /문서24 운전자변경/);
  assert.match(html, /하나의 상태값으로 섞지 않습니다/);
  assert.doesNotMatch(html, /<span>상품화중<\/span><b>→<\/b><span>출고가능<\/span><b>→<\/b><span>홀딩<\/span>/);
  assert.match(html, /잔액 없음: 수납 완료/);
  assert.match(html, /납부기한 경과 미납 잔액: 연체 관리/);
  assert.match(html, /계약번호와 차량번호/);
});
