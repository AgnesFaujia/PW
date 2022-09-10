$(document).ready(() => {
  $(".nama").click(function () {
    alert("hai namamu adalah " + $(this).html() + "!");
  });
  $(".alamat").click(function (event) {
    alert(`Alamatmu di ` + $(this).html());
  });

  // GET BUTTON
  //to the hapus
  $(".remove").click(function () {
    const res = confirm("Yakin  mau diremove ?!");
    if (!res) return;
    alert("Tapi ngga bisa hihihi");
  });
  //ini buat edit
  $(".change").click(function () {
    const res = confirm("Yakin mau diedit ?!");
    if (!res) return;
    alert("sorry to say, anda siapa?");
  });
});
