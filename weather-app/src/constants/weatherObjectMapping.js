const weatherIcons = {
  10000: "/clear_day",
  10001: "/clear_night",
  10010: "/cloudy",
  10011: "/cloudy",
  40000: "/drizzle",
  40001: "/drizzle",
  50010: "/flurries",
  50011: "/flurries",
  20000: "/fog",
  20001: "/fog",
  21000: "/fog_light",
  21001: "/fog_light",
  60000: "/freezing_drizzle",
  60001: "/freezing_drizzle",
  60010: "/freezing_rain",
  60011: "/freezing_rain",
  62010: "/freezing_rain_heavy",
  62011: "/freezing_rain_heavy",
  62000: "/freezing_rain_light",
  62001: "/freezing_rain_light",
  70000: "/ice_pellets",
  70001: "/ice_pellets",
  71010: "/ice_pellets_heavy",
  71011: "/ice_pellets_heavy",
  71020: "/ice_pellets_light",
  71021: "/ice_pellets_light",
  11000: "/mostly_clear_day",
  11001: "/mostly_clear_night",
  11020: "/mostly_cloudy",
  11021: "/mostly_cloudy",
  11010: "/partly_cloudy_day",
  11011: "/partly_cloudy_night",
  40010: "/rain",
  40011: "/rain",
  42010: "/rain_heavy",
  42011: "/rain_heavy",
  42000: "/rain_light",
  42001: "/rain_light",
  50000: "/snow",
  50001: "/snow",
  51010: "/snow_heavy",
  51011: "/snow_heavy",
  51000: "/snow_light",
  51001: "/snow_light",
  80000: "/tstorm",
  80001: "/tstorm",
};

const weatherDescriptions = {
  10000: "نهار صاف",
  10001: "ليل صاف",
  10010: "نهار غائم",
  10011: "ليل غائم",
  40000: "نهار مع رذاذ",
  40001: "ليل مع رذاذ",
  50010: "نهار مع هبات مطر",
  50011: "ليل مع هبات مطر",
  20000: "نهار مع ضباب",
  20001: "ليل مع ضباب",
  21000: "نهار مع ضباب خفيف",
  21001: "ليل مع ضباب خفيف",
  60000: "نهار مع رذاذ متجمد",
  60001: "ليل مع رذاذ متجمد",
  60010: "نهار مع مطر متجمد",
  60011: "ليل مع مطر متجمد",
  62010: "نهار مع مطر متجمد شديد",
  62011: "ليل مع مطر متجمد شديد",
  62000: "نهار مع مطر متجمد خفيف",
  62001: "ليل مع مطر متجمد خفيف",
  70000: "نهار مع حبيبات جليد",
  70001: "ليل مع حبيبات جليد",
  71010: "نهار مع حبيبات جليد شديدة",
  71011: "ليل مع حبيبات جليد شديدة",
  71020: "نهار مع حبيبات جليد خفيفة",
  71021: "ليل مع حبيبات جليد خفيفة",
  11000: "نهار صاف غالبا",
  11001: "ليل صاف غالبا",
  11020: "نهار غائم غالبا",
  11021: "ليل غائم غالبا",
  11010: "نهار غائم جزئيا",
  11011: "ليل غائم جزئيا",
  40010: "نهار ممطر",
  40011: "ليل ممطر",
  42010: "نهار ممطر بغزارة",
  42011: "ليل ممطر بغزارة",
  42000: "نهار مع مطر خفيف",
  42001: "ليل مع مطر خفيف",
  50000: "نهار مثلج",
  50001: "ليل مثلج",
  51010: "نهار مع ثلج شديد",
  51011: "ليل مع ثلج شديد",
  51000: "نهار مع ثلج خفيف",
  51001: "ليل مع ثلج خفيف",
  80000: "نهار عاصف",
  80001: "ليل عاصف",
};

const hour = new Date().getHours();
const isDay = hour >= 6 && hour < 20;

export function getWeatherIcon(initialIconCode) {
  const realIconCode = isDay ? `${initialIconCode}0` : `${initialIconCode}1`;

  return `weatherIcons${weatherIcons[realIconCode]}.svg`;
}

export function getWeatherDescription(initialDescriptionCode) {
  const realDescriptionCode = isDay
    ? `${initialDescriptionCode}0`
    : `${initialDescriptionCode}1`;

  return weatherDescriptions[realDescriptionCode];
}
