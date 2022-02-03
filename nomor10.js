var namaTeman = [
{Nama: `IkhsanSkinHead`, Kelas: `XI RPL 1`},
{Nama: `ArpiGunawan`, Kelas: `XI RPL 1`},
{Nama: `AhmadCabul`, Kelas: `XI RPL 2`},
{Nama: `IlhamCoding`, Kelas: `XI RPL 1`},
{Nama: `IloZago`, Kelas: `XI RPL 1`},
{Nama: `DayonsKonS`, Kelas: `XI RPL 3`},
{Nama: `LupySenza`, Kelas: `XI RPL 2`},
{Nama: `HerdianPaleka`, Kelas: `XI RPL 1`},
{Nama: `GentaGemink`, Kelas: `XI RPL 1`},
{Nama: `Gilangdirga`, Kelas: `XI RPL 3`},]

console.log();

function Manggil() {
  var nyeleksi = namaTeman.filter (Ngaran =>{
    return Ngaran.Kelas == "XI RPL 1"
  });
  console.log(nyeleksi);
}
Manggil();