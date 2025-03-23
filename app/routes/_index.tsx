import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "計算ツール" },
    { name: "description", content: "計算ツールサイト" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>計算ツールサイト</h1>
      <ul>
        <li>
          <Link to="compound-interest">複利計算</Link>
        </li>
      </ul>
    </div>
  );
}
