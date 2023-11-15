import React from "react";
import { Button } from "antd";
import styles from "./Letters.module.css";
function Letters({ onClick }) {
  const lettersArray = [
    "а",
    "б",
    "в",
    "г",
    "ґ",
    "д",
    "е",
    "є",
    "ж",
    "з",
    "и",
    "і",
    "ї",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ь",
    "ю",
    "я",
  ];
  return (
    <ul className={styles.lettersContainer} onClick={onClick}>
      {lettersArray.map((item) => (
        <li key={item}>
          <Button type="text">{item}</Button>
        </li>
      ))}
    </ul>
  );
}
export default Letters;
