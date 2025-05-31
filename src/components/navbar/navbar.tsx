"use client";

import Link from "next/link";

export default function navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Главная</Link>
        </li>
        <li>
          <Link href="/page-one">Страница 1</Link>
        </li>
        <li>
          <Link href="/page-two">Страница 2</Link>
        </li>
      </ul>
    </nav>
  );
}
