$(document).ready(function(){
	$.ajax({
      	type        : "GET",
	    dataType    : "json",
      	url			: "http://localhost/webku/assests/json/content.json",
		success     : function(data){
           	$("#username1").text(data.result.content[0].fullname);
           	$("#username2").text(data.result.content[1].fullname);
           	var tanggal1 = format_tanggal(data.result.content[0].created_at);
           	var tanggal2 = format_tanggal(data.result.content[1].created_at);
           	$("#tanggal1").text(tanggal1);
           	$("#tanggal2").text(tanggal2);
           	$("#kalimat1").text(data.result.content[0].description);
           	$("#kalimat2").text(data.result.content[1].description);
           	$("#photo1").attr("src",data.result.content[0].user_photo);
           	$("#photo2").attr("src",data.result.content[1].user_photo);
      	},
      	error: function (xhr, status, msg) {
        alert('Status: ' + status + "\n" + msg);
      }
    });
});

function format_tanggal(isi){
	var tahun=isi.slice(0, 4);
	var bulan=isi.slice(5,7);
	var bulan2="";
	var tanggal=isi.slice(8,10);
	if (bulan=="01") {
		bulan="Januari";
	}
	else if (bulan=="02"){
		bulan2="Fabruari";
	}else if (bulan=="03"){
		bulan2="Maret";
	}else if (bulan=="04"){
		bulan2="April";
	}else if (bulan=="05"){
		bulan2="Mei";
	}else if (bulan=="06"){
		bulan2="Juni";
	}else if (bulan=="07"){
		bulan2="Juli";
	}else if (bulan=="08"){
		bulan2="Agustus";
	}else if (bulan=="09"){
		bulan2="September";
	}else if (bulan=="10"){
		bulan2="Oktober";
	}else if (bulan=="11"){
		bulan2="November";
	}else if (bulan=="12"){
		bulan2="Desember";
	}
	var kalimat = tanggal + " " + bulan2 + " " + tahun;
	return kalimat;
}

$(document).ready(function(){
	slideshow();
});

function slideshow() {
	setTimeout(function () {
        $("#popup").hide();
        $("#popup2").show();
    }, 1000);
    setTimeout(function () {
        $("#popup").show();
        $("#popup2").hide();
        slideshow()
    }, 2000);
}
