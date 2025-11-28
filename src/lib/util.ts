import { mkdir } from "node:fs";
import { file } from "bun";

// biome-ignore lint/suspicious/noExplicitAny: arbitrary json
export async function cachedFetch(path: string): Promise<any> {
  mkdir("./.cache", { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
  });

  const key = file(".cache/key.json");

  let dic: Dict<string> = {};

  if (await key.exists()) {
    dic = await key.json();
    if (dic[path]) {
      const json = JSON.parse(dic[path]);
      return json;
    }
  }

  const result = await fetch(path);

  dic[path] = await result.text();
  await key.write(JSON.stringify(dic));
  return JSON.parse(dic[path]);
}

export async function cachedFetchAs<T>(path: string): Promise<T> {
  return (await cachedFetch(path)) as T;
}

export function capitalizeFirstLetter(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
