define(['jquery'],function ($) {
    $('#btn').click(function () {
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#form-login').serialize(),
            dataType:'json',
            success:function (data) {


                if(data.code==200){
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    location.href="/main/index";
                }else{
                    alert('错误');
                }  
            }

        })
        return false;
    })


})
