$(document).ready(function()
{
    $("button").click(function()
    {
        let uname=$("#uname").val();
        let pswd=$("#pswd").val();
        validateLogin(uname,pswd,function(f)
        {
            if(f==1)
            {
               // console.log("hgfg")
                window.location.href="main.html";
            }
            else

            {
                 alert("please check your  username and password");
            }

        })
    })

function validateLogin(uname,pswd,callback)
{
    var flag=0;
    if(uname=="admin"&&pswd=="12345")
    {
        flag=1;

    }
    else
        flag=0;
        callback(flag);
}

});
