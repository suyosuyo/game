const question = [
    // 5こめから数字 
    ["遅れちゃってごめんね！","遅かったね","大丈夫だよ","もう帰るところだった","2","1","優しいね、ありがとう！","ごめんね、遅かったよね…","そうだったの？本当にごめん…"],
    ["急に呼び出してどうしたの？","俺と付き合え！","俺と付き合ってほしい","ずっと前から好きでした。付き合ってください！","3","2","えっ","えっ…","えっ…"],
    ["ええと…","いきなりでごめんね","早くしろ","ダメかな？","1","3","うーん…そういうのはちょっと…嫌かなあ…","まずはお友達から、よろしくお願いします","うん、いいよ。付き合おう！","わたしもずっと前から好きでした"],

];
// console.log(question[2][6]);

// 制限時間
let countDownTimer = 5; 
// 最後まで解答したか
let successFlag = false;
// 正答数
let successCount = 0;
// 問題数
let questionCount = 0;

// 問題を解く以外を消す 見えなくする 最初は問題を解くボタンだけ表示
document.getElementById("ansArea").style.visibility = "hidden";

// エンディング非表示
document.getElementById("Ending").style.visibility = "hidden";

// そうなんだ 選択肢表示の部分消す
document.getElementById("sounanda").style.visibility = "hidden";
// document.getElementById("quesentaku").style.visibility = "hidden";

// 成功失敗非表示
document.getElementById("lose").style.visibility = "hidden";


// カウント開始
const countTimer = () => {

    if(successFlag == false) {
        // document.getElementById("countDown").innerHTML = `残り${countDownTimer}秒です`;

    if(!countDownTimer == 0) {

        setTimeout(() => {

            countDownTimer = countDownTimer - 1;
            countTimer();

        },1000);
    } else {
        setTimeout(() => {

            // 時間経過で表情曇り
            document.getElementById("ningen").style.backgroundImage = "url(./img/hyouzyou.png)";
        
        })
    }
    }

}

// 問題文表示
const viewQuestion = () => {

    // 問題文の表示
    document.getElementById("question").innerHTML = question[questionCount][0];

    // 選択肢消す
    // document.getElementById("ansButton1").innerHTML = question[questionCount][1];
    // document.getElementById("ansButton2").innerHTML = question[questionCount][2];
    // document.getElementById("ansButton3").innerHTML = question[questionCount][3];
    document.getElementById("ansText").style.visibility = "hidden";

    countDownTimer = 25;
    countTimer();

    // // そうなんだ消す
    document.getElementById("sounanda").style.visibility = "hidden";

    // 人も戻す
    document.getElementById("ningen").style.backgroundImage = "url(./img/ohanasi.png)";

    // 選択肢の出す
    document.getElementById("quesentaku").style.visibility = "visible";

    const clickaction = document.getElementById("quesentaku")

    clickaction.addEventListener("click",() => {

        document.getElementById("ansText").style.visibility = "visible";

        document.getElementById("ansButton1").innerHTML = question[questionCount][1];
        document.getElementById("ansButton2").innerHTML = question[questionCount][2];
        document.getElementById("ansButton3").innerHTML = question[questionCount][3];
    });

}



// スタートボタン押したら
const ansStart = () => {
    
    document.getElementById("setumei").style.visibility = "visible";

    document.getElementById("section").style.backgroundImage = "url(./img/mizutama.jpg)";


    // 成功失敗非表示
    document.getElementById("lose").style.visibility = "hidden";

    // 問題を解くボタンを消す
    document.getElementById("ansStartButton").style.visibility = "hidden";
    document.getElementById("TOPtext").style.visibility = "hidden";

    // 説明の部分をくりっく
    const clicksetumei = document.getElementById("setumei")

    // 説明を押したら問題表示
    clicksetumei.addEventListener("click",() => {

    
    // 背景変更
    document.getElementById("section").style.backgroundImage = "url(./img/kousya.jpg)";

    // 人の表情差分
    document.getElementById("ningen").style.backgroundImage = "url(./img/ohanasi.png)";

    document.getElementById("setumei").style.visibility = "hidden";
    
    // 問題文と選択肢を表示
    document.getElementById("queText").style.visibility = "visible";

    document.getElementById("mondai").style.visibility = "visible";
    
    // 上で定義した関数を実行する

    // カウントダウン開始
    countTimer();
    viewQuestion();
    

    // 問題文クリックで選択肢表示
//     const clickaction = document.getElementById("queText")

//     clickaction.addEventListener("click",() => {

//         document.getElementById("ansText").style.visibility = "visible";

//         document.getElementById("ansButton1").innerHTML = question[questionCount][1];
//         document.getElementById("ansButton2").innerHTML = question[questionCount][2];
//         document.getElementById("ansButton3").innerHTML = question[questionCount][3];


// });


    });

    // END削除
    document.getElementById("end01").style.visibility = "hidden";
    document.getElementById("end02").style.visibility = "hidden";
    document.getElementById("end03").style.visibility = "hidden";
    document.getElementById("end00").style.visibility = "hidden";

}


// ボタンを押したら
const ansButton = (e) => {



    // 会話文
    if(e == question[questionCount][4]) {
        
        // alert("正解");
        
        successCount = successCount + 2;
        document.getElementById("ningen").style.backgroundImage = "url(./img/nikoniko.png)";

        // 何しゃべるか
        document.getElementById("question").innerHTML = question[questionCount][6];

        // タイマーリセット
        countDownTimer = 999;
        // countTimer();

        // succrssCount++;でも可

    }else if(e == question[questionCount][5]){

        successCount = successCount + 1;
        document.getElementById("ningen").style.backgroundImage = "url(./img/tameiki.png)";
        // alert("不正解");

        // 何しゃべるか
        document.getElementById("question").innerHTML = question[questionCount][7];

        // タイマーリセット
        countDownTimer = 999;
        // countTimer();
    
    } else {

        document.getElementById("ningen").style.backgroundImage = "url(./img/syokku.png)";

        // 何しゃべるか
        document.getElementById("question").innerHTML = question[questionCount][8];

        // タイマーリセット
        countDownTimer = 999;
        // countTimer();
    
    }

    // 問題数のカウントを増やす
    questionCount = questionCount + 1;
    // questionCount++;でも可

    // length 要素の数
    
    // 終了後
    if(questionCount == question.length){

        // 問題表示消す
        document.getElementById("quesentaku").style.visibility = "hidden";

        // 問題文のみ表示
        document.getElementById("mondai").style.visibility = "visible";

        // 猫ちゃん戻す
        document.getElementById("ningen").style.backgroundImage = "url(./img/nikoniko.png)";


        const endEvent = () => {


            // ボタンを再表示
            document.getElementById("ansStartButton").style.visibility = "visible"
            document.getElementById("ansStartButton").innerHTML = "もう一度挑戦する";

            // 問題文消去
            document.getElementById("mondai").style.visibility = "hidden";


    
            countDownTimer = 10;
            questionCount = 0;
            successCount = 0;
    
            successFlag = true;
            }


            // エンド分岐
        if(successCount === 6) {
        
            // 問題文消去
            document.getElementById("ansText").style.visibility = "hidden";

            // 選択肢透明消去
            document.getElementById("quesentaku").style.visibility = "hidden";

            // 1背景
            document.getElementById("end03").style.visibility = "visible";

            // 女の子
            document.getElementById("ningen").style.backgroundImage = "url(./img/tereru.png)";

            const end03 = document.getElementById("end03");
            
            document.getElementById("question").innerHTML = question[2][9];
            

            end03.addEventListener("click",() => {

                // 文字表示
                document.getElementById("lose").style.backgroundImage = "url(./img/daiseikou.png)";

                // 成功失敗非表示
                document.getElementById("lose").style.visibility = "visible";
                
                document.getElementById("end03").style.visibility = "hidden";
                endEvent();

            });
    
        }else if(successCount === 5 || 4 ) {

            // 問題文消去
            document.getElementById("ansText").style.visibility = "hidden";

            // 選択肢透明消去
            document.getElementById("quesentaku").style.visibility = "hidden";
            
            document.getElementById("end02").style.visibility = "visible";

            // 女の子
            document.getElementById("ningen").style.backgroundImage = "url(./img/nikoniko.png)";

            const end02 = document.getElementById("end02");

            document.getElementById("question").innerHTML = question[2][8];

            console.log(successCount);


            end02.addEventListener("click",() => {

                // 文字表示
                document.getElementById("lose").style.backgroundImage = "url(./img/seikou.png)";

                // 成功失敗非表示
                document.getElementById("lose").style.visibility = "visible";
                
                document.getElementById("end02").style.visibility = "hidden";
                endEvent();

            });
        
        } else if(successCount === 3 || 2 || 1 ) {

            // 問題文消去 
            document.getElementById("ansText").style.visibility = "hidden";

            // 選択肢透明消去
            document.getElementById("quesentaku").style.visibility = "hidden";
            
            document.getElementById("end01").style.visibility = "visible";

            // 女の子
            document.getElementById("ningen").style.backgroundImage = "url(./img/hyouzyou.png)";

            const end01 = document.getElementById("end01");


            // 発言 まずはお友達から
            document.getElementById("question").innerHTML = question[2][7];

            end01.addEventListener("click",() => {

                // 文字表示
                document.getElementById("lose").style.backgroundImage = "url(./img/sippai.png)";


                // 成功失敗非表示
                document.getElementById("lose").style.visibility = "visible";
                
                document.getElementById("end01").style.visibility = "hidden";
                endEvent();

            });
        
        } else {

            // 問題文消去
            document.getElementById("ansText").style.visibility = "hidden";

            // 選択肢透明消去
            document.getElementById("quesentaku").style.visibility = "hidden";

            document.getElementById("end00").style.visibility = "visible";

            // 女の子
            document.getElementById("ningen").style.backgroundImage = "url(./img/syokku.png)";

            const end00 = document.getElementById("end00");


            // 発言 
            document.getElementById("question").innerHTML = question[2][6];

            
            end00.addEventListener("click",() => {

                // 文字表示
                document.getElementById("lose").style.backgroundImage = "url(./img/sippai.png)";

                // 成功失敗非表示
                document.getElementById("lose").style.visibility = "visible";
                
                document.getElementById("end00").style.visibility = "hidden";
                endEvent();

            });
        }
        
        // document.getElementById("answer").innerHTML = `${successCount}問正解です！`

        // 色々消す
        document.getElementById("countDown").style.visibility = "hidden";
        document.getElementById("ansText").style.visibility = "hidden";
        document.getElementById("queText").style.visibility = "hidden";

    } else {

        // そうなんだ表示 問題隠す
        document.getElementById("sounanda").style.visibility = "visible";
        document.getElementById("ansText").style.visibility = "hidden";


        // 選択肢表示（透明）消す
        document.getElementById("quesentaku").style.visibility = "hidden";
        

        const sounanda = document.getElementById("sounanda");
        sounanda.addEventListener("click",() => {

        
            viewQuestion();

        });
        // viewQuestion();
    }

}