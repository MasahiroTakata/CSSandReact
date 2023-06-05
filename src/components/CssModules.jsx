import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    // 「インポートしたscss.クラス名」記述することで、呼び出し可能
    <div className={classes.container}>
      <p className={classes.title}>CSS Modulesです</p>
      <button className={classes.button}>ボタン</button>
    </div>
  );
};
