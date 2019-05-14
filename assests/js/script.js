$("#tombol1").click(function() {
	var nilai = $("#tombol1").val();
	if (nilai=="Tampilkan") {
		$.ajax({
          	type        : "GET",
		    dataType    : "JSON",
          	url			: "http://localhost/webku/assests/json/content.json",
			data 		: {description:"value",created_at:"value",fullname:"value",user_photo:"value"},
			success     : function(data){
               $("#username1").text(data['fullname']);
               var tanggal = format_tanggal(data['created_at']);
               $("#tanggal1").text(tanggal);
               $("#kalimat1").text(data['description']);
               $("#photo1").attr("src",data['user_photo']);
          	},
          	error		:function(error){
              console.log('error');
          	}
	    });
		$("#gambar1").show();
		$("#kalimat1").show();
		$("#username1").show();
		$("#tanggal1").show();
		$("#tombol1").val("Hilangkan");
	}else{
		$("#tombol1").val("Tampilkan");
		$("#gambar1").hide();
		$("#kalimat1").hide();
		$("#username1").hide();
		$("#tanggal1").hide();
		$("#photo1").attr("src",'http://localhost/webku/assests/image/user.png');
		
	}
});

$("#tombol2").click(function() {
	var nilai = $("#tombol2").val();
	if (nilai=="Tampilkan") {
		$.ajax({
          	type        : "GET",
		    dataType    : "JSON",
          	url			: "http://localhost/webku/assests/json/content.json",
			data 		: {description:"value",created_at:"value",fullname:"value",user_photo2:"value"},
			success     : function(data){
               $("#username2").text(data['fullname2']);
               var tanggal = format_tanggal(data['created_at2']);
               $("#tanggal2").text(tanggal);
               $("#kalimat2").text(data['description2']);
               $("#photo2").attr("src",data['user_photo2']);
          	},
          	error		:function(error){
              console.log('error');
          	}
	    });
		$("#gambar2").show();
		$("#kalimat2").show();
		$("#username2").show();
		$("#tanggal2").show();
		$("#tombol2").val("Hilangkan");
	}else{
		$("#tombol2").val("Tampilkan");
		$("#gambar2").hide();
		$("#kalimat2").hide();
		$("#username2").hide();
		$("#tanggal2").hide();
		$("#photo2").attr("src",'http://localhost/webku/assests/image/user.png');
	}
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
