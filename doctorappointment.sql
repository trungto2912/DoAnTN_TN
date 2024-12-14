-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 14, 2024 lúc 06:55 AM
-- Phiên bản máy phục vụ: 10.4.17-MariaDB
-- Phiên bản PHP: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `doctorappointment`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `pass` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `maQuyen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id`, `fullName`, `phone`, `pass`, `maQuyen`) VALUES
(16, 'Trung mr', '0914179440', '6cb94f78f71270c5183586a81b256546', 3),
(17, 'Việt Trung', '0329060915', '6cb94f78f71270c5183586a81b256546', 3),
(18, 'admin 1', '0914179550', '6cb94f78f71270c5183586a81b256546', 1),
(19, 'Nguyen', '0828682459', '8459c9bac8c77621d1a63b652982e665', 3),
(20, 'Tv trung', '0979225966', '6cb94f78f71270c5183586a81b256546', 3),
(21, 'Anh Anh', '0377520818', '6cb94f78f71270c5183586a81b256546', 3),
(22, 'Trung to', '0914179880', '6cb94f78f71270c5183586a81b256546', 3),
(25, 'Anh nguyên', '0838683459', '6cb94f78f71270c5183586a81b256546', 3),
(26, 'Trương', '0979225933', '6cb94f78f71270c5183586a81b256546', 3),
(27, 'Trung Ruoi', '0878262358', '6cb94f78f71270c5183586a81b256546', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`, `image`) VALUES
(1, 'Khoa Ngoại', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/ngoaikhoa.jpg?alt=media&token=c5bae3af-5030-438a-ab7e-0671c3b1201d'),
(2, 'Khoa Nội', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/khoanoi.jpg?alt=media&token=8033fc05-564c-45fe-85f0-f0f2511be8f1'),
(3, 'Khoa Mắt', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/khoamat.jpg?alt=media&token=ffe55476-cd07-478d-a2de-c1039316b3d2'),
(4, 'Da liễu', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/dalieu.jpg?alt=media&token=d4aa283f-d7f6-4b18-bf9c-28ff7001a4b5'),
(5, 'Tai Mũi Họng', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/taimuihong.jpg?alt=media&token=f4b16148-4eb4-4548-8146-14ea53242f44');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `doctor`
--

CREATE TABLE `doctor` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `clinic` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(15) NOT NULL,
  `pass` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `workTime` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `des` varchar(555) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `rating` float NOT NULL,
  `cateID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `doctor`
--

INSERT INTO `doctor` (`id`, `name`, `clinic`, `address`, `phone`, `pass`, `image`, `workTime`, `des`, `rating`, `cateID`) VALUES
(23, 'Nguyễn Quốc Việt', 'Bệnh viện Vinmec Đà Nẵng', 'K15/1 Duy Tân, Hòa Thuận Tây, Hải Châu, Đà Nẵng', '0914078840', '', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/11.png?alt=media&token=447bbd6c-4be5-4693-90a0-fb12ebc65c63', '7h30-17h00', 'Phòng khám tim mạch Đà Nẵng của bác sĩ Nguyễn Quốc Việt là một gợi ý hoàn hảo nếu bạn đang tìm kiếm một địa chỉ uy tín, điều trị chất lượng và hiệu quả', 4.5, 2),
(24, 'Hoàng Phương', 'Bệnh viện C Đà Nẵng', '164 Quang Trung, Hải Châu, Đà Nẵng', '0913443519', '', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/doctor1.jpg?alt=media&token=cd957ff8-e3af-4c1e-99c2-7084db8fa9e4', '7h30-16h30', 'Phòng khám Tim mạch Đà Nẵng của Thạc sĩ Hoàng Phương có dịch vụ khám, chẩn đoán và đánh giá bệnh cực kỳ chính xác', 5, 2),
(26, 'Hồ Văn Phước', 'Bệnh Viện Hoàn Mỹ', '109 Huỳnh Thúc Kháng, Nam Dương, Hải Châu, Đà Nẵng', '0979225966', '6cb94f78f71270c5183586a81b256546', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/doctor3.jpg?alt=media&token=df01d222-97fb-4d4a-8f9a-3cab72d17653', '7h30-16h30', 'Là bác sĩ lâu năm có nhiều kinh nghiệm trong nghề, phòng khám bác sĩ Hồ Văn Phước hiện là một trong những địa chỉ chính dành cho bệnh nhân có nhu cầu khám và điều trị các vấn đề về tim mạch. ', 4, 2),
(27, 'Huỳnh Đức Lai', 'Phòng khám nội tim mạch', 'Đường 30/4,Hòa Cường Bắc, Hải Châu, Đà Nẵng', '02363711111', '', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/doctor_2.jpg?alt=media&token=e5a29c6b-a6e3-4f9b-a5af-b43c907c2c12', '7h20-18h00', 'Bác sĩ Huỳnh Đức Lai đến là người chuẩn mực, có bề dày kinh nghiệm chuyên môn và trình độ học vấn chuyên môn', 5, 2),
(28, 'Nguyễn Hải Hòa', 'Trung Tâm Ngoại Khoa Đại Tâm', '93 Nguyễn Hữu Dật, Hoà Cường Bắc, Quận Hải Châu, Đà Nẵng', '0906139317', '', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/doctor_3.jpg?alt=media&token=b06cc08c-aca2-4662-8dbd-db46821ea75a', '7h00-17h00', 'Phòng khám tích cực cập nhật những phương pháp hiện đại với mong muốn cung cấp các trải nghiệm dịch vụ tốt và hiệu quả nhất.', 4, 1),
(29, 'Nguyên Ngọc Bá', 'Phòng Khám Ngoại Tổng Hợp', '78 Hải Phòng, Thạch Thang, Quận Hải Châu, Đà Nẵng', '0773685695', '', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/doctor_8.jpg?alt=media&token=d78193ac-56db-4059-8003-aa6581220472', '8h00-18h00', 'Luôn nằm trong top đầu các phòng khám Phòng khám bác sĩ Ngoại Khoa với chất lượng khám chữa bệnh tốt nhất tại Đà Nẵng', 4.3, 1),
(30, 'Nguyện Thị Hoa', 'Phong khám khoa ngoại', '205, Nguyễn Công Trứ, Quận Sơn Trà, Đà Nẵng', '02363936022', '', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/doctor_5.jpg?alt=media&token=897075df-1547-4f9a-813b-e011464c7286', '8h00-18h00', 'Khu vực khám thoáng mát, vệ sinh sạch sẽ, đầy đủ trang thiết bị, phục vụ tối ưu công tác khám chữa bệnh', 4, 1),
(31, 'Lê Quang Cường', 'Phòng khám ngoại tổng hợp', '49 Cao Thắng, Thanh Bình, Quận Hải Châu, Đà Nẵng', '02363812912', '', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/12.png?alt=media&token=ad229dcb-1794-4759-8a5e-e449561ff0ba', '7h30-17h30', 'BS Lê Quang Chí Cường là một địa chỉ xứng đáng được đứng trong hàng ngũ top các phòng khám Phòng khám bác sĩ Ngoại Khoa chất lượng nhất tại Đà Nẵng', 4.5, 1),
(32, 'Trương Hồng Mai', 'Phòng khám da liễu Đà Nẵng', 'K86/32 Thi Sách, Hòa Thuận Tây, Quận Hải Châu, Đà Nẵng', '0935941909', '', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/doctor_5.jpg?alt=media&token=897075df-1547-4f9a-813b-e011464c7286', '9h00-18h30', 'Bác sĩ Mai gây tiếng tăm trong nghề với ưu điểm trị các bệnh về da như mụn, xử lý laser,', 5, 4),
(33, 'Nguyễn Đức Tiến', 'Bệnh viện Da liễu Đà Nẵng', 'Số 236/42, Đường Trần Cao Vân, Quận Thanh Khê, Tp.Đà Nẵng', '0913428723', '', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/13.jpg?alt=media&token=558984ec-e93a-41a2-805b-cef2077ad878', '7h30-17h00', 'Bác sĩ chuyên khám các bệnh về: bệnh á sừng, vảy nến, viêm da cơ địa, lang ben…', 4.5, 4),
(34, 'Lê Như Ngọc', 'Phòng khám Mắt DN', 'Số 28 Hải Phòng, quận Hải Châu, thành phố Đà Nẵng', '0927599711', '', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/14.jpg?alt=media&token=66aa45dc-2ca0-4f42-9094-98e4d8d0bb60', '8h00-16h00', 'Bác sĩ Lê Như Ngọc là một trong những bác sĩ phụ khoa giỏi ở Đà Nẵng, là một bác sĩ có hơn 10 năm kinh nghiệm trong lĩnh vực Sản Phụ khoa', 5, 3),
(35, 'Lê Thị Hằng', 'Phòng khám chuyên Mắt Đà Nẵng', 'Số 192 Nguyễn Hữu Thọ, quận Hải Châu, thành phố Đà Nẵng', '0876342872', '6cb94f78f71270c5183586a81b256546', 'https://firebasestorage.googleapis.com/v0/b/appointmentdoctor-fb756.appspot.com/o/doctor_7.jpg?alt=media&token=88f4c6de-7dc7-4131-ba61-972a31fd6747', '8h00-17h00', 'Bác sĩ đã có hơn 7 năm kinh nghiệm trong lĩnh vực thăm khám, chẩn đoán và điều trị bệnh phụ khoa', 4, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permission`
--

CREATE TABLE `permission` (
  `maQuyen` int(11) NOT NULL,
  `tenQuyen` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `motaQuyen` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `permission`
--

INSERT INTO `permission` (`maQuyen`, `tenQuyen`, `motaQuyen`) VALUES
(1, 'Admin', 'Quản trị viên'),
(2, 'Patient', 'Bệnh nhân'),
(3, 'Doctor', 'Bác sĩ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_cart`
--

CREATE TABLE `tbl_cart` (
  `idDC` int(11) NOT NULL,
  `idDoc` int(11) NOT NULL,
  `idAcc` int(11) NOT NULL,
  `ngayDen` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `gioDen` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ghiChu` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `trangthai` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tbl_cart`
--

INSERT INTO `tbl_cart` (`idDC`, `idDoc`, `idAcc`, `ngayDen`, `gioDen`, `ghiChu`, `trangthai`) VALUES
(32, 23, 17, '14/12/2023', '12:28', '', 'Đã duyệt'),
(33, 24, 17, '14/11/2023', '00:47', '', 'Đã duyệt'),
(36, 24, 22, '15/11/2023', '15:43', '', 'Đã duyệt'),
(52, 26, 16, '1/1/2024', '03:07', '', 'Đã duyệt'),
(53, 26, 17, '28/12/2023', '11:35', '', 'Đã duyệt'),
(54, 26, 17, '28/12/2023', '13:35', '', 'Đã duyệt'),
(56, 34, 25, '28/12/2023', '23:10', '', 'Đã duyệt'),
(61, 26, 16, '30/12/2023', '21:34', '', 'Đã duyệt'),
(62, 26, 16, '30/12/2023', '09:34', '', 'Đã duyệt'),
(66, 24, 17, '5/15/2024', '2:48 PM', '', 'Đã duyệt'),
(68, 27, 17, '6/21/2024', '12:00 PM', '', 'Đã duyệt'),
(69, 26, 17, '6/20/2024', '4:05 PM', '', 'Chưa duyệt'),
(70, 26, 25, '6/26/2024', '8:59 AM', '', 'Chưa duyệt'),
(71, 27, 17, '12/23/2024', '6:25 PM', 'Hi', 'Chưa duyệt'),
(72, 26, 17, '11/24/2024', '6:52 PM', 'Hi', 'Đã duyệt');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accc` (`maQuyen`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rbct` (`cateID`);

--
-- Chỉ mục cho bảng `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`maQuyen`);

--
-- Chỉ mục cho bảng `tbl_cart`
--
ALTER TABLE `tbl_cart`
  ADD PRIMARY KEY (`idDC`),
  ADD KEY `qh_iddoc` (`idDoc`),
  ADD KEY `qh_idacc` (`idAcc`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT cho bảng `permission`
--
ALTER TABLE `permission`
  MODIFY `maQuyen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `tbl_cart`
--
ALTER TABLE `tbl_cart`
  MODIFY `idDC` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `accc` FOREIGN KEY (`maQuyen`) REFERENCES `permission` (`maQuyen`);

--
-- Các ràng buộc cho bảng `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `rbct` FOREIGN KEY (`cateID`) REFERENCES `category` (`id`);

--
-- Các ràng buộc cho bảng `tbl_cart`
--
ALTER TABLE `tbl_cart`
  ADD CONSTRAINT `qh_idacc` FOREIGN KEY (`idAcc`) REFERENCES `account` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `qh_iddoc` FOREIGN KEY (`idDoc`) REFERENCES `doctor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
