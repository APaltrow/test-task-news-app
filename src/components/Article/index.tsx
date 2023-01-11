import style from "./Article.module.scss";
export const Article = () => {
  return (
    <article className={style.article}>
      <h2 className={style.article_title}>
        Google Chrome Google ChromeGoogle ChromeGoogle ChromeGoogle ChromeGoogle
        ChromeGoogle ChromeGoogle Chrome
      </h2>
      <p className={style.article_description}>
        Google Chrome is a web browser developed by Google, released in 2008.
        Chrome is the world's most popular web browser today! Google Chrome is a
      </p>
    </article>
  );
};
