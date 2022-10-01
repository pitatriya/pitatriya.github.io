$(document).ready(function(){
	$('.cell').click(function(){
		let isi = $(this).text();
		let tid = $(this).prop('id');
		let rid = tid.split("__");
		let id_baris = rid[1];
		let nama = $('#nama__'+id_baris).text();

		if(isi=='Hapus'){
			let yakin = confirm(`Yakin ingin menghapus daftar hewan ${nama} ?`);
			if(!yakin) return;

			$('#baris__'+id_baris).fadeOut();

		}else{
			alert('Anda sedang berada bukan di fungsi aksi')
		}
	})

	$(document).ready(function(){
		$(".sembunyi").click(function(){
			$("table").fadeOut();
		});
		$(".tampil").click(function(){
			$("table").fadeIn();
		});
	});
})
