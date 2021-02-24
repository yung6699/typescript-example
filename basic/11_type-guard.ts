interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {
    name: 'T',
    age: 33,
    skill: 'Icon'
  }
}

const andy = introduce();

// Developr 타입인지 검증하는 가드 함수
// 타입 가드 정의
function isDeveloper (target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(andy)) {
  andy.skill
} else {
  andy.age
}