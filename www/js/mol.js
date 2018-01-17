/****************************
 * 与页面的元素绑定
 * 以及
 * 初始操作
 * 放到该函数中 
*******************************/
$(function(){
    $("#logo").attr("src","data:image/png;base64,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");
});
/*************************************************
 * 全局data format
 * data={
 * 0:{
 *    'title0':value0,
 *    'title2':value0,
 *      ...
 *      ...
 *    'titleN':valueN
 * },
 * 1:{},
 * ...
 * ...
 * n:{}
 * }
 * 
*****************************************************/
var data={};
var config={
    complete:function(re,file){//将本地csv转为json
        data={};
        //console.log("complete:",re);
        var tmp=re.data;//解析出的数据
        var title=tmp[0];//表头
        var item_cnt=title.length;//有多少项
        for(var i=1,_l=tmp.length-1;i<_l;i++){
            var item=tmp[i];
            //console.log(item[0]);
            var tmp_j={};
            for(var j=0;j<item_cnt;j++){
                tmp_j[title[j]]=item[j];
            }
            data[i-1]=tmp_j;
        }
    }
};
/*function doChange(){
    var upload_file=$.trim($("#upload_file").val());
    $("#showPath").val(upload_file);
    //console.log(upload_file);
    var formData=new FormData();
    formData.append("file",$("#upload_file")[0].files[0]);
    var fileName=$("#upload_file")[0].files[0].name;
    $.ajax({
        url:"cgi-bin/save_file.py",
        type:"POST",
        cache:false,
        data:formData,
        processData:false,
        contentType:false
    }).done(function(re){
        console.log("http://localhost:1123/data/"+fileName);
        Papa.parse("http://localhost:1123/data/"+fileName,{
            download:true,
            function(re){
                console.log(re.data);
            }
        });
    }).fail(function(re){
        console.log(445);
    });
}*/
/*************************************
 * 行间注释应该够了
 * 
***************************************/
function doChange(){
    $("input[type=file]").parse({
        config:config,
        before:function(file,inputElem){//执行解析csv开始
            console.log("Parsing file...");
        },
        error:function(err,file,inputElem,reason){//解析csv出错
            console.log("ERROR:", err, file);
			firstError = firstError || err;
			errorCount++;
        },
        complete:function(){//解析csv完毕  这里输出的data即为解析后的结果  
            /**************************
             * 在这里设置标志位
             * 或者
             * 将其他的处理函数都放到这里面
            **************************/
            console.log("Done");
            console.log(data);
        }
    }); 
}