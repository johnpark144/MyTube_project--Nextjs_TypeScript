function useFiveRandomData(arrDataState:any) {

  const randNumArr: Array<number> = [];
    while (randNumArr.length < 5) {
      let randomNum = Math.floor(Math.random() * 10) + 1;
      if (randNumArr.find((n) => n === randomNum)) {
        continue;
      }
      randNumArr.push(randomNum); // 1부터 10까지 5개 랜덤숫자를 배열에
    }

    const fiveOtherDatas = arrDataState?.filter((arr: object, idx: number) => {
      return randNumArr.some((randNumArrIdx) => randNumArrIdx === idx); // 랜덤숫자 배열안에 숫자와 겹치는 index데이터 저장
    });


  return fiveOtherDatas
}

export default useFiveRandomData
