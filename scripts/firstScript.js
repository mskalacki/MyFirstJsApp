$('#formularzLogowania').draggable();


var users = 
    [
        {
            userName : "Skała",
            password : "aaa"
        },
        {
            userName : "Toki",
            password : "dupadupa"
        }
    ]
var tempMainDivBatch;

function zaloguj()
{
    let userNameInput = $('#userName').val();
    let passwordInput = $('#password').val();
    let successInnerHtmlBatch = 
    "<img src = \"pictures/sparta.jpg\" alt = \"Sparta\"><br><p2>Brawo! Zalogowałeś się i możesz popatrzeć na Leonidasa!<p2>";
    let failureInnerHtmlBatch = 
    "<img src = \"pictures/failure.jpg\" alt = \"Porażka\"><br><br><button onclick = \"RefreshLoginView()\">Spróbuj ponownie</button>";
    tempMainDivBatch = document.getElementById("main").innerHTML;

    if (userNameInput && passwordInput)
    {
        let userInDb = users.find(x =>  x.userName === userNameInput && x.password === passwordInput);
 
        userInDb ? document.getElementById("main").innerHTML = successInnerHtmlBatch : document.getElementById("main").innerHTML = failureInnerHtmlBatch;

    }
}
function RefreshLoginView()
{
    document.getElementById("main").innerHTML = tempMainDivBatch;
}


