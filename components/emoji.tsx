import type { NextPage } from "next";

interface EmojiProps {
  label?: string;
  symbol: string;
}

const Emoji: NextPage<EmojiProps> = ({ label, symbol }) => (
  <span
    role="img"
    aria-label={label ?? ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);

export default Emoji;
