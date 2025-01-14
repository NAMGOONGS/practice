const images =["1.png","2.png","3.png","4.png","5.png","6.png"];
 //이미지명+파일명을 스트링안에 넣어준다

const chosenImage = images[Math.floor(Math.random() * images.length)];
 //chosenImage 변수를 선언하는데 랜덤한수를 사용하며 내림을한다.이경우 위의 이미지 변수의 스트링의 길이만큼 구성됨

const bgImage=document.createElement("img");
 //bgImage라는 변수를 만드는데 createELemet라는 소스를 생성하는 것을 부륵("사용희망태그")

bgImage.src =`img/${chosenImage}`;
 //여기서 bgImage는 위 선언된 변수(img).src형태로 생성됨 = `를 사용하여 "안에 소스"를 구성하는데
 // 이때 img(폴더)/$(호출){chosenImage(4열 선언변수)}
document.body.appendChild(bgImage);
//바디에 자식을 생성하는데 이것은 bgImage변수이다==> body > img.src"img/~~이미지명" 