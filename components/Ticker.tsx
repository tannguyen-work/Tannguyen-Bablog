import { tickerItems } from "@/content/site";

/**
 * Dải chữ chạy vô hạn (marquee) — CSS thuần.
 * Nội dung được nhân đôi để vòng lặp liền mạch.
 */
export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <div className="ticker-half">
          {items.map((item, i) => (
            <span key={i} className="ticker-item">
              {item} <span className="ticker-star">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
