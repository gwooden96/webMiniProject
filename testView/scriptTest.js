/* 반응형 꿀팁 그리드 저장변수 */
let cardListWebNew = `<div class="accordion" id="accordionPanelsStayOpenExample">
<div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      'CPU'종류에 대한 팁!
    </button>
  </h2>
  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
    <div class="accordion-body">
      <div class="content-tip-grid">
        <img src="img/tip-grid-web-New-01.png">
      </div>
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      '모니터'종류에 대한 팁!
    </button>
  </h2>
  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
    <div class="accordion-body">
      <div class="content-tip-grid">
        <img src="img/tip-grid-web-New-02.png">
      </div>
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      '윈도우' 종류에 대한 팁!
    </button>
  </h2>
  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
    <div class="accordion-body">
      <div class="content-tip-grid">
        <img src="img/tip-grid-web-New-03.png">
      </div>
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-headingFour">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
      노트북 '무게'에 대한 팁!
    </button>
  </h2>
  <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
    <div class="accordion-body">
      <div class="content-tip-grid">
        <img src="img/tip-grid-web-New-04.png">
      </div>
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-headingFive">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
      '메모리' 종류에 대한 팁!
    </button>
  </h2>
  <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
    <div class="accordion-body">
      <div class="content-tip-grid">
        <img src="img/tip-grid-web-New-05.png">
      </div>
    </div>
  </div>
</div>
</div>`;






let cardListMb = `<div class="container-tip-grid">
  <div class="box-tip-grid">
      <div class="content-tip-grid">
          <img src="img/tip-grid-mobile-01.png">
      </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-mobile-02.png">
    </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-mobile-03.png">
    </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-mobile-04.png">
    </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-mobile-05.png">
    </div>
  </div>
  </div>`


  let cardListWeb = `<div class="container-tip-grid">
  <div class="box-tip-grid">
      <div class="content-tip-grid">
          <img src="img/tip-grid-web-New-01.png">
      </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-web-New-02.png">
    </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-web-New-03.png">
    </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-web-New-04.png">
    </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-web-New-05.png">
    </div>
  </div>
</div>`


/* 모바일 크기에 따른 변화 */


let contTbody = $('.container-tip-body');

const mediaViewContent = window.matchMedia(`(max-width: 768px)`)	// 1

    let viewChangeHandler = (mediaViewContent) => {  					// 3
    	if(mediaViewContent.matches === true){
        //alert('모바일 사이즈 입니다.');
        contTbody.html(cardListMb);

        $('.box-tip-grid').css('border', '1px dashed lightgray');
        $('.content-tip-grid img').css('width', '100%');
      } else {
      // alert('원본 사이즈 입니다.');
        contTbody.html(cardListWebNew);
        $('.card-list').css('flex-direction', '');
        $('.box-tip-grid').css('border', '1px dashed lightgray');
        $('.content-tip-grid img').css('width', '100%');
      }
      
    }
    viewChangeHandler(mediaViewContent);
    mediaViewContent.addEventListener("change", viewChangeHandler);

  
/* 태블릿 크기에 따른 변화 */

/*미작성*/






/* 반복 되는 것 배열로 통합 구축 작업 (체크박스 구역) */

let checkbox = [
  {name : '화면 크기대', check1 : '1kg 미만', check2 : '1.0~1.5kg', check3 : '1.5~2.0kg', check4 : '2.0~'},
  {name : '무게', check1 : '17인치', check2 : '15인치', check3 : '14인치', check4 : '13인치'},
  {name : '윈도우 설치유무', check1 : '윈도우 미포함', check2 : '윈도우 11 홈', check3 : '윈도우 11 프로', check4 : '윈도우 10 홈'},
  {name : 'CPU 코어 수', check1 : '16코어', check2 : '8코어', check3 : '6코어', check4 : '4코어'},
  {name : '그래픽카드', check1 : '내장그래픽', check2 : 'RTX3070', check3 : 'RTX3060', check4 : 'RTX3050'},
]


checkbox.forEach((data) => {

  let checkboxHtml = `<div class="checkbox-title">
  <span>${data.name}</span>
</div>
<label>
  <div>
    <input type="checkbox" name="">
    <span>${data.check1}</span>
  </div>
</label>
<label>
  <div>
    <input type="checkbox" name="">
    <span>${data.check2}</span>
  </div>
</label>
<label>
  <div>
    <input type="checkbox" name="">
    <span>${data.check3}</span>
  </div>
</label>
<label>
  <div>
    <input type="checkbox" name="">
    <span>${data.check4}</span>
  </div>
</label>`;

$('.container-checkbox').append(checkboxHtml);

});


/* 반복 되는 것 배열로 통합 구축 작업(상품카드 구역) */



let laptop = [
  {title : '가성비 보급형 노트북 No.01', name : '레노버 아이디어패드 Slim1-14ALC R3', content : '라이젠 5000 시리즈 탑재한 가성비 사무용 노트북', true1 : '웹캠 가리개', true2 : '가벼운 무게', true3 : '저렴한 금액대', true4 : '준수한 배터리 용량', false1 : '터치패드 퀄리티 다소 떨어짐', false2 : '윈도우 설치 불편', false3 : '다소 아쉬운 저장장치', price : '399,000원', footerContent : '노트북 / 운영체제(OS): 미포함(프리도스) / 제조사기본상품 / 용도: 사무/인강용 , 휴대용 / 화면정보 35.5cm(14인치) / 1920x1080(FHD) / 220nit / 눈부심 방지 / 슬림형 베젤 / 프로세서 AMD / 라이젠3-4세대 / 루시엔 / 5300U (2.6GHz) / 쿼드(4)코어 / 메모리 DDR4 / 메모리 용량: 8GB / 3200MHz / 메모리 교체: 가능(1슬롯) / 저장장치 M.2(NVMe) / 128GB / 저장 슬롯: 1개 / 그래픽 내장그래픽 / Radeon Graphics / 네트워크 무선랜: 802.11ax(Wi-Fi 6) / 영상입출력 HDMI / 웹캠(HD) / 단자 USB-C: 1개 / USB-A: 2개 / USB 3.0 / USB 2.0 / SD카드 / 부가기능 TPM / 웹캠OFF 지원 / 입력장치 ㅡ형 방향키 / 파워 배터리: 42Wh / 어댑터: 65W / 충전단자: DC / 주요제원 두께: 17.9mm / 무게: 1.38kg / 색상: 그레이'}
  ,{title : '가성비 보급형 노트북 No.01', name : '레노버 아이디어패드 Slim1-14ALC R3', content : '라이젠 5000 시리즈 탑재한 가성비 사무용 노트북', true1 : '웹캠 가리개', true2 : '가벼운 무게', true3 : '저렴한 금액대', true4 : '준수한 배터리 용량', false1 : '터치패드 퀄리티 다소 떨어짐', false2 : '윈도우 설치 불편', false3 : '다소 아쉬운 저장장치', price : '399,000원', footerContent : '노트북 / 운영체제(OS): 미포함(프리도스) / 제조사기본상품 / 용도: 사무/인강용 , 휴대용 / 화면정보 35.5cm(14인치) / 1920x1080(FHD) / 220nit / 눈부심 방지 / 슬림형 베젤 / 프로세서 AMD / 라이젠3-4세대 / 루시엔 / 5300U (2.6GHz) / 쿼드(4)코어 / 메모리 DDR4 / 메모리 용량: 8GB / 3200MHz / 메모리 교체: 가능(1슬롯) / 저장장치 M.2(NVMe) / 128GB / 저장 슬롯: 1개 / 그래픽 내장그래픽 / Radeon Graphics / 네트워크 무선랜: 802.11ax(Wi-Fi 6) / 영상입출력 HDMI / 웹캠(HD) / 단자 USB-C: 1개 / USB-A: 2개 / USB 3.0 / USB 2.0 / SD카드 / 부가기능 TPM / 웹캠OFF 지원 / 입력장치 ㅡ형 방향키 / 파워 배터리: 42Wh / 어댑터: 65W / 충전단자: DC / 주요제원 두께: 17.9mm / 무게: 1.38kg / 색상: 그레이'}

]





laptop.forEach((data) => {

  let listCardWeb = `<div class="container-card-pcv">
                      <div class="content-row-pcv">
                        <div class="box-first box">
                          <p class="box-title-text">${data.title}</p>
                          <img src="img/${data.name}.png">
                        </div>
                        <div class="boxOne box">
                          <h5>${data.name}</h5>
                          <p class="card-text">${data.content}</p>
                        </div>
                        <div class="boxTwo box">
                          <ul>
                            <p class="card-text-true">장점</p>
                            <li class="box-nav-item">${data.true1}</li>
                            <li class="box-nav-item">${data.true2}</li>
                            <li class="box-nav-item">${data.true3}</li>
                            <li class="box-nav-item">${data.true4}</li>
                          </ul>
                          <ul>
                            <p class="card-text-false">단점</p>
                            <li class="box-nav-item">${data.false1}</li>
                            <li class="box-nav-item">${data.false2}</li>
                            <li class="box-nav-item">${data.false3}</li>
                          </ul>
                        </div>
                        <div class="boxFour box">
                          <img src="img/${data.content}.png">
                        </div>
                        <div class="boxFive box">
                          <p class="card-text">금액 :</p>
                          <p class="card-text">${data.price}</p>
                        </div>
                        <div class="boxSix">
                          <div class="card-body">
                            <button type="button" class="btn btn-lg btn-danger">구매링크</button>
                            <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="노트북 사양" data-bs-content="${data.footerContent}">제품스펙 보기</button>
                          </div>
                        </div>
                      </div>`;
                $('.ontainer-card-main').append(listCardWeb);
  
      });
  


      // const openBtn = document.querySelector('.button-spec-open');
      // const closeBtn = document.querySelector('.button-spec-close');
      // const offcanvasMenu = document.querySelector('.offcanvas-menu');
      
      // openBtn.addEventListener('click', function(e) {
      //   e.preventDefault();
      //   offcanvasMenu.classList.add('active');
      
      // });
      
      // closeBtn.addEventListener('click', function(e) {
      //   e.preventDefault();
      //   offcanvasMenu.classList.remove('active');
      
      // });

// 다크모드

// let cnt = 0; 

// let mode = document.querySelector('.mode'); 

// mode.addEventListener('click', function(){
//     cnt++;
//     console.log(cnt);


//     if(cnt % 2 == 1) {
//         document.body.style.background = 'black';
//         document.querySelector('.container-tip-body-main').style.blackground = '';
//         document.querySelector('.img-mode').src="img/solid-black-sun-symbol.png"


//     } else {
//         document.body.style.background = 'white';
//         document.querySelector('.img-mode').src="img/night-mode.png"
//     }


// });




// 팝오버 활성화
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

let popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body'
})