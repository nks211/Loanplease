import useStore from "../../Store/GameStore.jsx"
import GameStart from "./GameStart.jsx";
import GameEnd from "./GameEnd.jsx";
import ManualModal from "../Modal/ManualModal.jsx";
import GamePause from "./GamePause.jsx"

import ExitGame from "../Assets/exit_game.png"
import SampleCustomer from "../Assets/sample_customer.png"

function Game() {
  function formatNumber(num) {
    return String(num).padStart(2, '0');
  }

  const closeModal = () => {
    setShowModal(false); // 모달을 닫는 함수를 사용하여 showModal 상태를 변경함
  };

  const { showModal,
    setShowModal,
    time,
    score,
    timerActive,
    isGameEnd,
    isFinance,
    activateFinance,
    deactivateFinance,
    isCustomer,
    callCustomer,
    endCustomer1,
    endCustomer2,
    products,
    selectedProduct,
    selectProduct,
    isGamePause,
    setGamePause,
    dialogue,
    dialogueNum,
    isButtonEnabled,
    showScore,
    changeScore
  } = useStore();

  return (
    <>
      {/* 전체 화면 설정 */}
      <div className="flex items-center min-h-screen w-full overflow-auto">
        {/* 고정 크기의 웹게임 화면, 크기 고정 */}
        <div className="m-auto w-[1500px] min-w-[1500px] max-w-[1500px] h-[694px] min-h-[680px] max-h-[680px] border-cusColor3 border-[10px] font-cusFont1 bg-cusColor1/25">
          {showModal && <ManualModal closeModal={closeModal} />}
          {!timerActive && !isGameEnd && <GameStart />}
          {isGameEnd && <GameEnd />}
          {isGamePause && <GamePause />}
          <div className="h-[70%] flex">
            <div className="h-full w-[57.5%] border-[5px] border-black bg-game bg-cover">
              {isCustomer && (
                <>
                  {showScore && <div className="text-center absolute w-[150px] top-[33px] left-[95px] bg-white/40 p-2">
                    <p className={`text-3xl  ${changeScore >= 0 ? `text-rose-600` : `text-blue-500`}`}>
                      {changeScore > 0 && `+`}{changeScore}
                    </p>
                  </div>}
                  <img src={SampleCustomer} alt="" className="absolute left-[70px] top-[54px] h-[300px]" />
                  <div className="bg-speechBubble bg-contain bg-no-repeat absolute left-[270px] h-[250px] w-[300px]">
                    <div className="absolute left-[17px] top-[50px] w-[218px] h-[120px] text-lg text-center">
                      <p>{dialogue[dialogueNum]}</p>
                    </div>
                    <div className="absolute left-[307px] top-[0px] bg-white w-[100px] h-[100px] border-black border-[5px]">
                      <p>아이템1</p>
                    </div>
                    <div className="absolute left-[407px] top-[0px] bg-white w-[100px] h-[100px] border-black border-[5px]">
                      <p>아이템2</p>
                    </div>
                    <div className="absolute left-[507px] top-[0px] bg-white w-[100px] h-[100px] border-black border-[5px]">
                      <p>아이템3</p>
                    </div>
                    <div className="absolute left-[300px] top-[227px] bg-white w-[100px] h-[100px] border-black border-[5px]">
                      <p>준비물1</p>
                    </div>
                    <div className="absolute left-[400px] top-[227px] bg-white w-[100px] h-[100px] border-black border-[5px]">
                      <p>준비물2</p>
                    </div>
                  </div>
                </>

              )}



            </div>

            <div className="h-full w-[42.5%]">

              <div className="flex h-[15%] border-[5px] border-cusColor2 items-center bg-cusColor4 text-cusColor2">

                <div className="flex w-[35%] h-full px-[30px] items-center justify-between border-r-[5px] border-cusColor2 text-center">
                  <p>TIME</p>
                  <p>{Math.floor(time / 60)}:{formatNumber(time % 60)}</p>
                </div>

                <div className="flex w-[55%] h-full items-center px-[30px] justify-between border-r-[5px] border-cusColor2">
                  <p>SCORE</p>
                  <p>{score}</p>
                </div>

                <div className="flex w-[10%] h-full items-center justify-center">
                  <img src={ExitGame} alt="" className="w-[90%] h-[90%]" onClick={setGamePause} />
                </div>

              </div>

              <div className="flex h-[15%] mx-5 mt-5 items-center justify-between border-[5px] border-black rounded-t-lg">


                <div className={`flex items-center justify-center text-xl w-[50%] h-full ${isFinance ? 'bg-cusColor1 text-white border-black border-r-[4px]' : 'bg-gray-300 text-gray-400'}`} onClick={activateFinance}>
                  <p>금융정보</p>
                </div>

                <div className={`flex items-center justify-center text-xl w-[50%] h-full ${!isFinance ? 'bg-cusColor1 text-white border-black border-l-[4px]' : 'bg-gray-300 text-gray-400'}`} onClick={deactivateFinance}>
                  <p>비금융정보</p>
                </div>

              </div>

              <div className="flex h-[62.5%] border-x-[5px] border-b-[5px] mx-5 border-black rounded-b-lg bg-white">
                <p className="font-cusFont2">정보가 들어갈 자리입니다.</p>
              </div>

            </div>

          </div>

          <div className="h-[30%] flex">

            <div className="h-full w-[57.5%]">

              {!isCustomer && (<div className="flex items-center justify-center w-full h-full">
                <button className=" w-[300px] h-[80px] rounded-lg border-[5px] border-black bg-red-500 text-white text-2xl" onClick={callCustomer}>
                  <p>다음 고객님 부르기</p>
                </button>
              </div>)}

              {isCustomer && (<div className="flex justify-center items-center w-full h-full">

                <div className="flex w-[70%] h-full justify-center items-center">
                  <div className={`w-[90%] h-[90%] p-5 flex justify-center items-center ${selectedProduct ? selectedProduct.bgColor : `bg-cusColor4`} text-2xl border-[5px] border-black rounded-lg`}>
                    {!selectedProduct && <p>상품을 선택해주세요!</p>}
                    {selectedProduct &&
                      <div className="w-full">
                        <div className="h-[30%] w-full">
                          <p className="text-xl">{selectedProduct.name}</p>
                        </div>

                        <div className="h-[70%] w-full flex flex-col justify-around p-4">
                          <div className="flex justify-between">
                            <div className="flex-1 p-2">
                              <p className="text-base">옵션1: {selectedProduct.option1}</p>
                            </div>
                            <div className="flex-1 p-2">
                              <p className="text-base">옵션2: {selectedProduct.option2}</p>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <div className="flex-1 p-2">
                              <p className="text-base">옵션3: {selectedProduct.option3}</p>
                            </div>
                            <div className="flex-1 p-2">
                              <p className="text-base">옵션4: {selectedProduct.option4}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </div>

                <div className="w-[30%] h-[94%]">

                  <div className="h-[50%] w-full flex justify-center items-center">
                    <button className="w-[90%] h-[90%] bg-red-500 text-white flex justify-center items-center border-[5px] border-black rounded-lg text-xl" onClick={endCustomer1} disabled={!isButtonEnabled}>
                      <p>돌려보내기</p>
                    </button>
                  </div>

                  {selectedProduct ?
                    (<div className="h-[50%] w-full flex justify-center items-center">
                      <button className="w-[90%] h-[90%] bg-cusColor5 text-cusColor4 flex justify-center items-center border-[5px] border-black rounded-lg text-xl" onClick={endCustomer2} disabled={!isButtonEnabled}
                      >
                        <p>추천하기</p>
                      </button>
                    </div>) :
                    (<div className="h-[50%] w-full flex justify-center items-center">
                      <div className="w-[90%] h-[90%] bg-gray-300 text-gray-400 flex justify-center items-center border-[5px] border-black rounded-lg text-xl">
                        <p>추천하기</p>
                      </div>
                    </div>)
                  }

                </div>
              </div>)}
            </div>

            <div className="h-full w-[42.5%] flex justify-center items-center">
              <div className="h-[90%] w-[90%] flex-row items-center text-lg">
                <p className="mb-[10px] text-xl">대출 상품 목록</p>

                <div className="flex h-[80%]">
                  <div className="w-full m-1 flex justify-center items-center">
                    {products.map(product => (
                      <div key={product.name} className={`w-[50%] h-full m-1 flex justify-center items-center ${product.bgColor} rounded-lg shadow-lg border-[5px] border-black`}
                        onClick={() => selectProduct(product)}>
                        <p>{product.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Game
