- article에 `bg--black` 클래스
  글씨 흰색으로 변경해서 자식들이 상속받도록 하기

- article에 'addition' 클래스
  `display:block`으로 바꾸기

- 애플에서는 address나 a 태그에 tel 속성을 따로 주지 않아 추가하고 강조넣음.

- svg 이미지를 png나 JPEG로 변환하지 않고 그대로 사용해도 용량 문제가 없는지.

- `responsive--md` 클래스

- 변수의 숫자값이 계산이 안되는 문제
  ex) $article\_\_img--w--md: $lg--breakpoint -1px;
  // 1069px - 1px로 평가됨
  // calc나 보간을 써도 마찬가지.
  // 미디어쿼리에선 똑같이 해도 적용이 되는데 이건 왜 안될까?
