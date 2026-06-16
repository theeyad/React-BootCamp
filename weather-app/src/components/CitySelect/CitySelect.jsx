import "./CitySelect.css";

export default function CitySelect({ setCityName }) {
  return (
    <div className="flex gap-4 items-center text-white">
      <label htmlFor="city" className="cursor-pointer">
        المدينة
      </label>
      <select
        name="cityName"
        id="city"
        onChange={(e) => setCityName(e.target.value)}
      >
        <option value="Al Manşūrah">المنصورة</option>
        <option value="Damietta">دمياط</option>
        <option value="Cairo">القاهرة</option>
        <option value="Ismailia">الإسماعيلية</option>
        <option value="Kafr ash Shaykh">كفر الشيخ</option>
      </select>
    </div>
  );
}
