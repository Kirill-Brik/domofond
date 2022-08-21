import styles from "./itemNamed.module.scss";

export interface IItemNamed {
  readonly icon?: string;
  readonly name: string;
  readonly text: string;
  readonly reversed?: boolean;
  readonly href?: string;
}

const ItemNamed = ({ icon, name, text, reversed, href }: IItemNamed) => {
  const iconClass = styles.icon + " " + "material-symbols-outlined";
  const contentClass =
    styles.content + (reversed ? " " + styles.content_reversed : "");

  return (
    <div className={styles.container}>
      {icon && <span className={iconClass}>{icon}</span>}
      <div className={contentClass}>
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
