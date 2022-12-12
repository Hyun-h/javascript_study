const checkedObj = {
  isParking: false,
  isScreen: false,
  isMembership: false,
};

const isInvalidCheck = Object.values(checkedObj).every((value) => !value);

console.log(isInvalidCheck);

if (isInvalidCheck)
  return alert("타석타입은 무조건 하나 이상 체크되어야 합니다.");
