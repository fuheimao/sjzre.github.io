function viewscount(type, id){
    if ( type == "" || id <= 0 ){
        return false;
    }
    // 浏览统计
    $.post("/api/countviews", {type: type, id: id}, function(){
        return false;
    });
}

function getviews(type, id){
    if ( type == "" || id <= 0 ){
        return false;
    }
    // 获取浏览数
    $.post("/api/getviews", {type: type, id: id}, function(data){
        $(".views").html(data.nums);
    },"json");
}

//下载统计
function downcount(type,id) {
    if ( type == "" || id <= 0 ){
        return false;
    }
    $.post("/api/countdown", {type: type, id: id}, function(){
        return false;
    });
}

function getscore(kid, pclass){
    var num = $("."+pclass+" .myscore").attr("data-sc");
    if ( kid <= 0 || num <= 0.0 ){
        layer.msg("评分异常");
        return false;
    }
    // 用户评分
    $.post("/api/getgamescore", {kid: kid, score: num}, function(data){
        if ( data.code == 14 ){
            location.href="https://my.3dmgame.com/setting/binding";
            return false;
        }
        if ( data.code == 5 ){
            openlogin();
            return false;
        }

        layer.msg(data.info);
        show_score();
        return false;
    },"json");
}

function gethanhapply(softid){
    if ( softid <= 0 ){
        return false;
    }
    // 记录申请人数
    $.post("/api/gethanhapply", {softid: softid}, function(data){
        if ( data.code == 14 ){
            location.href="https://my.3dmgame.com/setting/binding";
            return false;
        }

        layer.msg(data.msg);
        if(data.code == 1){
            $(".applynums").html(data.plnums);
        }

        return false;
    },"json");
}

function gethanhuanums(softid){
    if ( softid <= 0 ){
        return false;
    }
    // 获取申请人数
    $.post("/api/gethanhuanums", {softid: softid}, function(data){
        if(data.code == 1){
            $(".applynums").html(data.plnums);
        }

        return false;
    },"json");
}
