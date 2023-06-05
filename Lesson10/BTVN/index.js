let profile = {
    name: "Ronaldo",
    yob: 1985,
    nationality: "Bồ Đào Nha",
};

alert(`Thông tin về cầu thủ:\r\n + Tên cầu thủ: ${profile.name} \r\n + Năm sinh: ${profile.yob}\r\n + Quốc tịch: ${profile.nationality}`);
let response = prompt("Bạn có muốn thêm thông tin cầu thủ? Nếu là Có, vui lòng nhập 'Y' và Không là 'N'");
if (response === "N" || response === "n") { alert("Goodbye!"); }
else if (response === "Y" || response === "y") {
    let moreInfo = prompt("Thông tin mà bạn muốn thêm là?");
    profile["newinfor"] = moreInfo;
}
alert(`Cảm ơn bạn đã bổ sung thông tin về cầu thủ Ronaldo! Thông tin về cầu thủ Ronaldo sau khi mới cập nhật là:\r\n + Tên cầu thủ: ${profile.name} \r\n + Năm sinh: ${profile.yob}\r\n + Quốc tịch: ${profile.nationality}\r\n + Thông tin mới bổ sung từ bạn: ${profile.newinfor}`);

