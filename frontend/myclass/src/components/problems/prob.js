import { useState } from "react";

const Prob = () => {
  // 주관식 객관식 설계
  const [isMultiple, setIsMultiple] = useState(true); // 기본 선택은 객관식

  const handleRadioChange = (e) => {
    setIsMultiple(e.target.value === "true");
  };

  // 객관식 보기 설계
  const [choiceNum, setChoiceNum] = useState(2);

  const maxChoices = 5;
  const minChoices = 2;

  const plusChoiceNum = () => {
    if (choiceNum < maxChoices) {
      setChoiceNum(choiceNum + 1);
    }
  };

  const minusChoiceNum = () => {
    if (choiceNum > minChoices) {
      setChoiceNum(choiceNum - 1);
    }
  };

  const renderChoices = () => {
    const choices = [];
    for (let i = 1; i <= choiceNum; i++) {
      choices.push(
        <div key={`choice_${i}`}>
          <input type="text" placeholder="보기를 입력하세요" />
        </div>
      );
    }
    return choices;
  };

  return (
    <>
      <div id="prob_create">
        <label>
          <input
            type="radio"
            name="isMultiple"
            value={false}
            checked={!isMultiple} // 주관식 선택 시 checked 속성 true
            onChange={handleRadioChange}
          />
          주관식
        </label>
        <label>
          <input
            type="radio"
            name="isMultiple"
            value={true}
            checked={isMultiple} // 객관식 선택 시 checked 속성 true
            onChange={handleRadioChange}
          />
          객관식
        </label>
        <br />
        <input type="text" placeholder="문제 제목을 입력하세요" />
        <br />
        <input type="file" alt="image" />
        <br />
        <textarea placeholder="문제 설명을 입력하세요" />
        <br />
        {isMultiple ? (
          <div id="choice_wrap">
            {/* <span>{choiceNum}</span> */}
            {renderChoices()}
            {choiceNum < maxChoices && (
              <button onClick={plusChoiceNum}>보기 추가</button>
            )}
            {choiceNum > minChoices && (
              <button onClick={minusChoiceNum}>보기 삭제</button>
            )}
            {/* <input
              id="choice_1"
              type="text"
              placeholder="보기를 입력하세요"
            ></input>
            <button
              onClick={() => {
                plusChoiceNum();
              }}
            >
              보기 추가
            </button> */}
          </div>
        ) : (
          <div id="short_wrap">
            <input type="text" placeholder="정답을 입력하세요"></input>
          </div>
        )}
      </div>
    </>
  );
};

export default Prob;
