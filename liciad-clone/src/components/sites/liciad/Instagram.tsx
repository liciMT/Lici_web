"use client";

import { useEffect, useState } from "react";
import { A, instagram } from "./data";

const DELAY = 2500;

function useColumns() {
  const [cols, setCols] = useState(6);
  useEffect(() => {
    const calc = () => setCols(window.innerWidth <= 1024 ? 2 : 6);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return cols;
}

export function Instagram() {
  const cols = useColumns();
  const pages = Math.ceil(instagram.length / cols);
  const [page, setPage] = useState(0);
  const current = Math.min(page, pages - 1);

  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p + 1) % pages), DELAY);
    return () => clearInterval(t);
  }, [pages]);

  return (
    <section className="lc-insta">
      <h6 className="lc-insta__title">
        <a href="https://www.instagram.com/licisk/">Sleduj náš Instagram @licisk</a>
      </h6>
      <div className="lc-insta__feed">
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transform: `translateX(-${current * 100}%)`,
              transition: "transform 0.6s ease",
            }}
          >
            {instagram.map((item) => (
              <a
                key={item.src}
                href={item.href}
                className="lc-insta__item"
                style={{ flex: `0 0 ${100 / cols}%` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="lc-insta__frame" src={A("2024/01/ig_before.png")} alt="" />
                <span className="lc-insta__photo" style={{ backgroundImage: `url(${A(item.src)})` }}>
                  {item.type === "video" && (
                    <svg className="lc-insta__play" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="lc-insta__frame" src={A("2024/01/ig_after.png")} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="lc-insta__dots">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`lc-insta__dot${i === current ? " is-active" : ""}`}
              aria-label={`Strana ${i + 1}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
