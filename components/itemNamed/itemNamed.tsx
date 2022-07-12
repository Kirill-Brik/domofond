import styles from "./itemNamed.module.scss";

export interface IItemNamed {
  readonly icon?: string;
  readonly name: string;
  readonly text: string;
  readonly reversed?: boolean;
  readonly href?: string;
}

const ItemNamed = ({ icon, name, text, reversed, href }: IItemNamed) => {
  return (
    <div className={styles.container}>
      {icon && (
        <span className={styles.icon + " " + "material-symbols-outlined"}>
          {icon}
        </span>
      )}
      <div
        className={
          styles.content + (reversed ? " " + styles.content_reversed : "")
        }
      >
        <span className={styles.name}>{name}</span>

        {(href && (
          <a href={href} className={styles.text}>
            {text}
          </a>
        )) || <span className={styles.text}>{text}</span>}
      </div>
    </div>
  );
};

export default ItemNamed;
