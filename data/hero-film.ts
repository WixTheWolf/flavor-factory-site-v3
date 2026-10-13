/**
 * The homepage film: one silent 22-second cut of six shots, from the grove to a finished product.
 * The hero loops a lighter encode (1600x900 desktop, 540x960 phone crop); the full-screen player
 * loads the 1080p cut only when asked. Chapter starts are in seconds and match all three files.
 */
export type FilmChapter = { start: number; name: string; line: string };

export const HERO_FILM = {
  desktop: { prefix: "/hero/film-v1-bg", poster: "/hero/film-v1-poster.jpg" },
  mobile: { prefix: "/hero/film-v1-mobile", poster: "/hero/film-v1-poster-mobile.jpg" },
  theater: { prefix: "/hero/film-v1", poster: "/hero/film-v1-poster.jpg" },
  duration: 22,
  chapters: [
    { start: 0, name: "Origin", line: "It starts with the taste you have in mind." },
    { start: 3.6, name: "Essence", line: "We find its character, drop by drop." },
    { start: 7.2, name: "Build", line: "Then build it for your base and process." },
    { start: 10.8, name: "Format", line: "As a liquid or a powder." },
    { start: 14.4, name: "Lab", line: "Developed and refined in our Norco lab." },
    { start: 18, name: "Yours", line: "Ready for your finished product." },
  ] satisfies FilmChapter[],
};

/** Index of the chapter playing at time t. */
export function chapterAt(chapters: FilmChapter[], t: number) {
  let index = 0;
  for (let i = 0; i < chapters.length; i += 1) if (t >= chapters[i].start) index = i;
  return index;
}

/** How far through its chapter time t is, from 0 to 1. */
export function chapterProgress(chapters: FilmChapter[], index: number, t: number, duration: number) {
  const start = chapters[index].start;
  const end = chapters[index + 1]?.start ?? duration;
  return Math.min(1, Math.max(0, (t - start) / (end - start)));
}
