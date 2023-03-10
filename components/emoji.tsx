import type { NextPage } from "next";
import type { EmojiProps } from "../common/types";

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
