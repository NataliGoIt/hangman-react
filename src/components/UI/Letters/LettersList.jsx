import React from "react";
import { Button } from "antd";
import styles from "./Letters.module.css";
function Letters() {
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
    <div className={styles.lettersContainer}>
      {lettersArray.map((item) => {
        return (
          <div key={item}>
            <Button type="text">{item}</Button>
          </div>
        );
      })}
    </div>
  );
}
export default Letters;
