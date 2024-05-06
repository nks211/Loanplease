package com.d105.loanplease.domain.game.serviceImpl;

import com.d105.loanplease.domain.game.dto.*;
import com.d105.loanplease.domain.game.response.GameInfoResponse;
import com.d105.loanplease.domain.game.service.GameService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class GameServiceImpl implements GameService {

    @Override
    public ResponseEntity<GameInfoResponse> getGameInfo() {

        // 랜덤으로 값을 생성한다.


        // Fast API에 결과를 전송한다.


        // 데이터를 보낸다.
        Loan loan = new Loan(); // 레포지토리에서 가져와야함.
        CustomerInfo customerInfo = new CustomerInfo("나싸피", 26, "남성", "");
        FinancialInfo financialInfo = new FinancialInfo(2500.0, "수입 유형", "직업 유형");
        NonFinancialInfo nonFinancialInfo = new NonFinancialInfo("없음", "없음", 2, "대학 졸업", "4", "아파트", 250, 3);

        GameInfo gameInfo = new GameInfo(loan, customerInfo, financialInfo, nonFinancialInfo, 1);
        GameInfoResponse response = GameInfoResponse.createGameInfoResponse(HttpStatus.OK.value(), "게임 정보를 성공적으로 받아왔습니다.", gameInfo);
        return ResponseEntity.ok(response);
    }
}
