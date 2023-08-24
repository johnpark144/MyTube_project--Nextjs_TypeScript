// 1부터 10까지중 5개숫자 랜덤으로
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
      return randNumArr.some((randNumArrIdx) => randNumArrIdx === idx); 
    });


  return fiveOtherDatas
}

export default useFiveRandomData
