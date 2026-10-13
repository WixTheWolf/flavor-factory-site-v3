import { Fragment, type CSSProperties } from "react";

type Props = {
  text: string;
  /** Gold italic phrase that fades in after the words, styled by the heading's own `em` rule. */
  accent?: string;
};

/**
 * Heading words that rise in one after another as the heading scrolls into view.
 * CSS only (see .reveal-word in app/redesign.css): nothing is hidden before JavaScript runs,
 * and browsers without scroll timelines or visitors who prefer reduced motion see plain text.
 */
export function RevealWords({ text, accent }: Props) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <Fragment key={index}>
          <span className="reveal-word" style={{ "--i": index } as CSSProperties}>
            {word}
          </span>
          {index < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
      {accent && (
        <>
          {" "}
          <em className="reveal-em" style={{ "--i": words.length } as CSSProperties}>
            {accent}
          </em>
        </>
      )}
    </>
  );
}
