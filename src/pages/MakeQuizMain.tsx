import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./MakeQuizMain.module.css";

const Frame: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/make-quiz");
  };

  return (
    <div className={styles.frameContainer}>
      <div className={styles.testContent}>
        <span>1교시</span>
      </div>

      <div className={styles.textContainer}>
        <p className={styles.title}>2024학년도 우정기억능력시험</p>
        <p className={styles.title}>연말 모의평가 문제지</p>
      </div>

      <div className={styles.inputContainer}>
        <textarea className={styles.textboxName} rows={3} cols={9} />
        <div className={styles.titleContainer}>
          <h1 className={styles.h1}>영역</h1>
        </div>
      </div>

      <div className={styles.testContainerInner}>
        <div className={styles.firstParagraph}>
          <p className={styles.text}>
            본 모의고사는 한 해를 돌아보는 목적으로 제작되었습니다.
          </p>
          <p className={styles.text}>
            각 문항에 정답을 입력하고 친구들에게<br />
            공유해 우정 테스트를 진행해보세요!
          </p>
        </div>
      </div>

      <section className={styles.buttonWrapper}>
        <Button text="연말 모의고사 만들기" onClick={handleStartQuiz} />
      </section>
    </div>
  );
};

export default Frame;
