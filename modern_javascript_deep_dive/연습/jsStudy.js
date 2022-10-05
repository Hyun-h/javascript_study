const response = [
  {
    city: "city1",
    country: "country1",
    province: "province1",
    shopList: ["1234", "qwer", "asdf"],
  },
  {
    city: "city2",
    country: "country2",
    province: "province2",
    shopList: ["2345", "wert", "sdfg"],
  },
  {
    city: "city3",
    country: "country3",
    province: "province3",
    shopList: ["3456", "xvxcv", "dfgdf"],
  },
];

const list = response.flatMap((info) =>
  info.shopList.map((shop) => {
    return {
      city: info.city,
      country: info.country,
      province: info.province,
      shop,
    };
  })
);

console.log(list);
