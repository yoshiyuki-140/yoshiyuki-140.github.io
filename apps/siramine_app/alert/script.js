// 仮のアラートメッセージ（実際のデータに置き換える必要があります）
var disasterMessage = "災害が発生しました。安全な場所に避難してください。";

// アラートメッセージを表示する関数
function displayAlert() {
    var alertDiv = document.getElementById("alertMessage");
    alertDiv.textContent = disasterMessage;
}

// ページが読み込まれたときにアラートを表示
window.onload = displayAlert;