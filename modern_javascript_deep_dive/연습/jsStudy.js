// const response = [
//   {
//     country: "KR",
//     province: "all",
//     city: "all",
//     shopList: ["shop1", "shop2", "shop3"],
//   },
//   {
//     country: "CN",
//     province: "all",
//     city: "all",
//     shopList: ["shop4", "shop5", "shop6"],
//   },
//   {
//     country: "US",
//     province: "all",
//     city: "all",
//     shopList: ["shop7", "shop8", "shop9"],
//   },
// ];

// const list = response.flatMap((item) =>
//   item.shopList.map((shop) => {
//     return {
//       city: item.city,
//       country: item.country,
//       province: item.province,
//       shop,
//     };
//   })
// );

// console.log(list);

const el = document.getElementById("result");
const { className, clientHeight, scrollTop } = el;
console.log(el);
console.log(className);
console.log(clientHeight);
console.log(scrollTop);
