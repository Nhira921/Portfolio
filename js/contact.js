"use strict";
{
    var firebaseConfig = {
        apiKey: "--",
        authDomain: "--",
        databaseURL: "--",
        projectId: "--",
        storageBucket: "--",
        messagingSenderId: "--",
        appId: "--",
        measurementId: "-",
    };

    //Firebaseの初期化
    firebase.initializeApp(firebaseConfig);
    const firestore = firebase.firestore();

    //DOM要素の取得
    const submitBtn = document.querySelector("#submit");

    let userName = document.querySelector("#userFullName");
    let userEmail = document.querySelector("#userEmail");
    let userNumber = document.querySelector("#userNumber");
    let userMessage = document.querySelector("#userMessage");

    const db = firestore.collection("contactData");
    //送信日時の取得

    //送信ボタンクリック時処理
    submitBtn.addEventListener("click", () => {
        //日時の取得とコンソール確認用
        let dateSent = new Date();
        console.log(dateSent);

        //フォームの値を取得
        let userNameInput = userName.value;
        let userEmailInput = userEmail.value;
        let userNumberInput = userNumber.value;
        let userMessageInput = userMessage.value;

        //Firebase Database のコレクションにアクセスする
        db.doc()
            .set({
                name: userNameInput,
                email: userEmailInput,
                phone: userNumberInput,
                message: userMessageInput,
                date: dateSent,
            })
            .then(function () {
                console.log("Data Saved");
                alert("送信されました。");
                return window.location.reload(); //ページの再読み込みでフォームのリセット
            })
            .catch(function (error) {
                console.log(error);
                alert(
                    "送信に失敗しました。\nお手数ですが、下記メールアドレスへご連絡ください。\n ✉--@gmail.com"
                );
            });
    });
}
