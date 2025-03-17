import { langs } from "@uiw/codemirror-extensions-langs";

// Define allowed language keys
const languageMap: Record<
  string,
  ReturnType<(typeof langs)[keyof typeof langs]>
> = {
  javascript: langs.javascript(),
  jsx: langs.javascript({ jsx: true }),
  typescript: langs.javascript({ typescript: true }),
  tsx: langs.javascript({ jsx: true, typescript: true }),
  html: langs.html(),
  css: langs.css(),
  scss: langs.css(),
  less: langs.less(),
  json: langs.json(),
  markdown: langs.markdown(),
  xml: langs.xml(),
  python: langs.python(),
  php: langs.php(),
  java: langs.java(),
  cpp: langs.cpp(),
  csharp: langs.csharp(),
  sql: langs.sql(),
  rust: langs.rust(),
  go: langs.go(),
  ruby: langs.ruby(),
  swift: langs.swift(),
  kotlin: langs.kotlin(),
  dart: langs.dart(),
  shell: langs.shell(),
};

export const getCodeMirrorLang = (lang: string) => {
  const key = lang.toLowerCase() as keyof typeof languageMap;
  if (key in languageMap) return languageMap[key];

  return langs.kotlin();
};
