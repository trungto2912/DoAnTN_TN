import pandas as pd
import numpy as np


# Dữ liệu bệnh lý, chuyên khoa và triệu chứng
data = [
    # Chuyên khoa Nội
    # Viêm phổi
    ('Viêm phổi', 'Khoa Nội', 'Ho', 'Sốt', 'Khó thở', 'Mệt mỏi', None, None, None),
    ('Viêm phổi', 'Khoa Nội', 'Ho', 'Đau ngực', 'Khó thở', 'Sốt', None, None, None),
    ('Viêm phổi', 'Khoa Nội', 'Khó thở', 'Sốt', 'Mệt mỏi', 'Ho', None, None, None),
    ('Viêm phổi', 'Khoa Nội', 'Sốt', 'Khó thở', 'Đau ngực', 'Ho', None, None, None),

    # Tiểu đường
    ('Tiểu đường', 'Khoa Nội', 'Khát nước', 'Mệt mỏi', 'Đi tiểu nhiều', 'Giảm cân', 'Mờ mắt', None, None),
    ('Tiểu đường', 'Khoa Nội', 'Mờ mắt', 'Khát nước', 'Mệt mỏi', 'Đi tiểu nhiều', None, None, None),
    ('Tiểu đường', 'Khoa Nội', 'Đi tiểu nhiều', 'Giảm cân', 'Mệt mỏi', 'Khát nước', None, None, None),
    ('Tiểu đường', 'Khoa Nội', 'Giảm cân', 'Mờ mắt', 'Đi tiểu nhiều', 'Mệt mỏi', None, None, None),

    # Tăng huyết áp
    ('Tăng huyết áp', 'Khoa Nội', 'Đau đầu', 'Chóng mặt', 'Mệt mỏi', 'Đau ngực', 'Sốt', None, None),
    ('Tăng huyết áp', 'Khoa Nội', 'Sốt', 'Đau đầu', 'Chóng mặt', 'Mệt mỏi', None, None, None),
    ('Tăng huyết áp', 'Khoa Nội', 'Đau đầu', 'Chóng mặt', 'Đau ngực', 'Mệt mỏi', 'Sốt', None, None),
    ('Tăng huyết áp', 'Khoa Nội', 'Chóng mặt', 'Đau ngực', 'Sốt', 'Mệt mỏi', None, None, None),

    # Viêm dạ dày
    ('Viêm dạ dày', 'Khoa Nội', 'Đau bụng', 'Ợ hơi', 'Buồn nôn', 'Mất cảm giác thèm ăn', None, None, None),
    ('Viêm dạ dày', 'Khoa Nội', 'Buồn nôn', 'Mất cảm giác thèm ăn', 'Ợ hơi', 'Đau bụng', None, None, None),
    ('Viêm dạ dày', 'Khoa Nội', 'Mất cảm giác thèm ăn', 'Đau bụng', 'Buồn nôn', 'Ợ hơi', None, None, None),
    ('Viêm dạ dày', 'Khoa Nội', 'Ợ hơi', 'Đau bụng', 'Buồn nôn', 'Mất cảm giác thèm ăn', None, None, None),

    # Bệnh tim mạch
    ('Bệnh tim mạch', 'Khoa Nội', 'Đau ngực', 'Khó thở', 'Tim đập nhanh', 'Mệt mỏi', None, None, None),
    ('Bệnh tim mạch', 'Khoa Nội', 'Khó thở', 'Đau ngực', 'Tim đập nhanh', 'Mệt mỏi', None, None, None),
    ('Bệnh tim mạch', 'Khoa Nội', 'Tim đập nhanh', 'Mệt mỏi', 'Đau ngực', 'Khó thở', None, None, None),
    ('Bệnh tim mạch', 'Khoa Nội', 'Đau ngực', 'Mệt mỏi', 'Tim đập nhanh', 'Khó thở', None, None, None),

    # Sỏi thận
    ('Sỏi thận', 'Khoa Nội', 'Đau lưng', 'Đái rắt', 'Máu trong nước tiểu', 'Đau bụng', None, None, None),
    ('Sỏi thận', 'Khoa Nội', 'Đau bụng', 'Đái rắt', 'Máu trong nước tiểu', 'Đau lưng', None, None, None),
    ('Sỏi thận', 'Khoa Nội', 'Máu trong nước tiểu', 'Đau lưng', 'Đau bụng', 'Đái rắt', None, None, None),
    ('Sỏi thận', 'Khoa Nội', 'Đái rắt', 'Đau lưng', 'Đau bụng', 'Máu trong nước tiểu', None, None, None),

    # Bệnh gút
    ('Bệnh gút', 'Khoa Nội', 'Đau khớp', 'Sưng khớp', 'Nóng khớp', 'Đỏ khớp', None, None, None),
    ('Bệnh gút', 'Khoa Nội', 'Sưng khớp', 'Đỏ khớp', 'Đau khớp', 'Nóng khớp', None, None, None),
    ('Bệnh gút', 'Khoa Nội', 'Đỏ khớp', 'Đau khớp', 'Sưng khớp', 'Nóng khớp', None, None, None),
    ('Bệnh gút', 'Khoa Nội', 'Nóng khớp', 'Sưng khớp', 'Đỏ khớp', 'Đau khớp', None, None, None),

    # Viêm gan
    ('Viêm gan', 'Khoa Nội', 'Vàng da', 'Mệt mỏi', 'Chán ăn', 'Đau bụng', 'Nước tiểu sẫm màu', None, None),
    ('Viêm gan', 'Khoa Nội', 'Mệt mỏi', 'Vàng da', 'Chán ăn', 'Đau bụng', 'Nước tiểu sẫm màu', None, None),
    ('Viêm gan', 'Khoa Nội', 'Đau bụng', 'Vàng da', 'Chán ăn', 'Mệt mỏi', 'Nước tiểu sẫm màu', None, None),
    ('Viêm gan', 'Khoa Nội', 'Nước tiểu sẫm màu', 'Đau bụng', 'Chán ăn', 'Vàng da', 'Mệt mỏi', None, None),

    # Đau dạ dày
    ('Đau dạ dày', 'Khoa Nội', 'Đau bụng', 'Ợ hơi', 'Buồn nôn', 'Mất cảm giác thèm ăn', None, None, None),
    ('Đau dạ dày', 'Khoa Nội', 'Đau bụng', 'Buồn nôn', 'Ợ hơi', 'Mất cảm giác thèm ăn', None, None, None),
    ('Đau dạ dày', 'Khoa Nội', 'Mất cảm giác thèm ăn', 'Đau bụng', 'Buồn nôn', 'Ợ hơi', None, None, None),
    ('Đau dạ dày', 'Khoa Nội', 'Buồn nôn', 'Đau bụng', 'Mất cảm giác thèm ăn', 'Ợ hơi', None, None, None),

    # Viêm khớp
    ('Viêm khớp', 'Khoa Nội', 'Đau khớp', 'Sưng khớp', 'Cứng khớp', 'Mệt mỏi', None, None, None),
    ('Viêm khớp', 'Khoa Nội', 'Sưng khớp', 'Cứng khớp', 'Mệt mỏi', 'Đau khớp', None, None, None),
    ('Viêm khớp', 'Khoa Nội', 'Mệt mỏi', 'Cứng khớp', 'Đau khớp', 'Sưng khớp', None, None, None),
    ('Viêm khớp', 'Khoa Nội', 'Cứng khớp', 'Mệt mỏi', 'Sưng khớp', 'Đau khớp', None, None, None),

    # Thiếu máu
    ('Thiếu máu', 'Khoa Nội', 'Mệt mỏi', 'Da xanh xao', 'Đau đầu', 'Chóng mặt', 'Hoa mắt', None, None),
    ('Thiếu máu', 'Khoa Nội', 'Mệt mỏi', 'Chóng mặt', 'Da xanh xao', 'Đau đầu', 'Hoa mắt', None, None),
    ('Thiếu máu', 'Khoa Nội', 'Đau đầu', 'Mệt mỏi', 'Chóng mặt', 'Hoa mắt', 'Da xanh xao', None, None),
    ('Thiếu máu', 'Khoa Nội', 'Chóng mặt', 'Mệt mỏi', 'Đau đầu', 'Hoa mắt', 'Da xanh xao', None, None),

    # Rối loạn mỡ máu
    ('Rối loạn mỡ máu', 'Khoa Nội', 'Đau bụng', 'Mệt mỏi', 'Tim đập nhanh', 'Chóng mặt', None, None, None),
    ('Rối loạn mỡ máu', 'Khoa Nội', 'Mệt mỏi', 'Chóng mặt', 'Đau bụng', 'Tim đập nhanh', None, None, None),
    ('Rối loạn mỡ máu', 'Khoa Nội', 'Tim đập nhanh', 'Chóng mặt', 'Đau bụng', 'Mệt mỏi', None, None, None),
    ('Rối loạn mỡ máu', 'Khoa Nội', 'Chóng mặt', 'Đau bụng', 'Mệt mỏi', 'Tim đập nhanh', None, None, None),

    # Viêm tụy
    ('Viêm tụy', 'Khoa Nội', 'Đau bụng', 'Nôn mửa', 'Sốt', 'Mệt mỏi', None, None, None),
    ('Viêm tụy', 'Khoa Nội', 'Sốt', 'Đau bụng', 'Mệt mỏi', 'Nôn mửa', None, None, None),
    ('Viêm tụy', 'Khoa Nội', 'Mệt mỏi', 'Đau bụng', 'Nôn mửa', 'Sốt', None, None, None),
    ('Viêm tụy', 'Khoa Nội', 'Đau bụng', 'Sốt', 'Nôn mửa', 'Mệt mỏi', None, None, None),

    # Cảm cúm
    ('Cảm cúm', 'Khoa Nội', 'Ho', 'Sốt', 'Đau cơ', 'Mệt mỏi', 'Nhức đầu', None, None),
    ('Cảm cúm', 'Khoa Nội', 'Nhức đầu', 'Ho', 'Đau cơ', 'Sốt', 'Mệt mỏi', None, None),
    ('Cảm cúm', 'Khoa Nội', 'Đau cơ', 'Nhức đầu', 'Ho', 'Mệt mỏi', 'Sốt', None, None),
    ('Cảm cúm', 'Khoa Nội', 'Mệt mỏi', 'Ho', 'Sốt', 'Đau cơ', 'Nhức đầu', None, None),

    # Xơ gan
    ('Xơ gan', 'Khoa Nội', 'Vàng da', 'Mệt mỏi', 'Đau bụng', 'Đầy hơi', 'Nước tiểu sẫm màu', None, None),
    ('Xơ gan', 'Khoa Nội', 'Mệt mỏi', 'Vàng da', 'Đầy hơi', 'Đau bụng', 'Nước tiểu sẫm màu', None, None),
    ('Xơ gan', 'Khoa Nội', 'Đau bụng', 'Vàng da', 'Mệt mỏi', 'Đầy hơi', 'Nước tiểu sẫm màu', None, None),
    ('Xơ gan', 'Khoa Nội', 'Đầy hơi', 'Mệt mỏi', 'Vàng da', 'Đau bụng', 'Nước tiểu sẫm màu', None, None),
    # Covid-19
    ('Covid-19', 'Khoa Nội', 'Mất vị giác', 'Khó thở', 'Mệt mỏi', 'Ho khan', None, None, None),
    ('Covid-19', 'Khoa Nội', 'Mất khứu giác', 'Mệt mỏi', 'Ho có đờm', 'Khó thở', None, None, None),
    ('Covid-19', 'Khoa Nội', 'Ho khan', 'Sốt', 'Khó thở', 'Đau đầu', None, None, None),
    ('Covid-19', 'Khoa Nội', 'Sốt', 'Mệt mỏi', 'Mất vị giác', 'Ho có đờm', None, None, None),


    # Chuyên khoa Ngoại
    # Gãy xương
    ('Gãy xương', 'Khoa Ngoại', 'Đau xương', 'Sưng tấy', 'Mất chức năng', 'Đỏ', 'Nóng', None, None),
    ('Gãy xương', 'Khoa Ngoại', 'Sưng tấy', 'Đau xương', 'Mất chức năng', 'Nóng', 'Đỏ', None, None),
    ('Gãy xương', 'Khoa Ngoại', 'Mất chức năng', 'Đau xương', 'Sưng tấy', 'Đỏ', 'Nóng', None, None),
    ('Gãy xương', 'Khoa Ngoại', 'Đỏ', 'Sưng tấy', 'Đau xương', 'Mất chức năng', 'Nóng', None, None),

    # Viêm ruột thừa
    ('Viêm ruột thừa', 'Khoa Ngoại', 'Đau bụng', 'Buồn nôn', 'Sốt', 'Mệt mỏi', None, None, None),
    ('Viêm ruột thừa', 'Khoa Ngoại', 'Mệt mỏi', 'Sốt', 'Đau bụng', 'Buồn nôn', None, None, None),
    ('Viêm ruột thừa', 'Khoa Ngoại', 'Sốt', 'Đau bụng', 'Buồn nôn', 'Mệt mỏi', None, None, None),
    ('Viêm ruột thừa', 'Khoa Ngoại', 'Đau bụng', 'Mệt mỏi', 'Sốt', 'Buồn nôn', None, None, None),

    # U tuyến giáp
    ('U tuyến giáp', 'Khoa Ngoại', 'Khó nuốt', 'Mệt mỏi', 'Sưng cổ', 'Tăng cân', 'Nóng trong người', None, None),
    ('U tuyến giáp', 'Khoa Ngoại', 'Sưng cổ', 'Mệt mỏi', 'Khó nuốt', 'Tăng cân', 'Nóng trong người', None, None),
    ('U tuyến giáp', 'Khoa Ngoại', 'Tăng cân', 'Khó nuốt', 'Sưng cổ', 'Mệt mỏi', 'Nóng trong người', None, None),
    ('U tuyến giáp', 'Khoa Ngoại', 'Nóng trong người', 'Mệt mỏi', 'Tăng cân', 'Sưng cổ', 'Khó nuốt', None, None),



    # Viêm ruột
    ('Viêm ruột', 'Khoa Ngoại', 'Đau bụng', 'Tiêu chảy', 'Sốt', 'Mệt mỏi', None, None, None),
    ('Viêm ruột', 'Khoa Ngoại', 'Tiêu chảy', 'Mệt mỏi', 'Sốt', 'Đau bụng', None, None, None),
    ('Viêm ruột', 'Khoa Ngoại', 'Mệt mỏi', 'Đau bụng', 'Tiêu chảy', 'Sốt', None, None, None),
    ('Viêm ruột', 'Khoa Ngoại', 'Sốt', 'Mệt mỏi', 'Tiêu chảy', 'Đau bụng', None, None, None),

    # Phẫu thuật chấn thương
    ('Phẫu thuật chấn thương', 'Khoa Ngoại', 'Đau vết thương', 'Mất máu', 'Sưng tấy', 'Mệt mỏi', None, None, None),
    ('Phẫu thuật chấn thương', 'Khoa Ngoại', 'Mệt mỏi', 'Sưng tấy', 'Đau vết thương', 'Mất máu', None, None, None),
    ('Phẫu thuật chấn thương', 'Khoa Ngoại', 'Mất máu', 'Sưng tấy', 'Đau vết thương', 'Mệt mỏi', None, None, None),
    ('Phẫu thuật chấn thương', 'Khoa Ngoại', 'Sưng tấy', 'Mệt mỏi', 'Đau vết thương', 'Mất máu', None, None, None),

    # Ung thư đại trực tràng
    ('Ung thư đại trực tràng', 'Khoa Ngoại', 'Đau bụng', 'Tiêu chảy', 'Máu trong phân', 'Giảm cân', 'Mệt mỏi', None,
     None),
    ('Ung thư đại trực tràng', 'Khoa Ngoại', 'Giảm cân', 'Máu trong phân', 'Tiêu chảy', 'Đau bụng', 'Mệt mỏi', None,
     None),
    ('Ung thư đại trực tràng', 'Khoa Ngoại', 'Mệt mỏi', 'Giảm cân', 'Đau bụng', 'Tiêu chảy', 'Máu trong phân', None,
     None),
    ('Ung thư đại trực tràng', 'Khoa Ngoại', 'Tiêu chảy', 'Đau bụng', 'Giảm cân', 'Mệt mỏi', 'Máu trong phân', None,
     None),

    # U gan
    ('U gan', 'Khoa Ngoại', 'Đau bụng', 'Sốt', 'Vàng da', 'Mệt mỏi', None, None, None),
    ('U gan', 'Khoa Ngoại', 'Vàng da', 'Đau bụng', 'Mệt mỏi', 'Sốt', None, None, None),
    ('U gan', 'Khoa Ngoại', 'Sốt', 'Đau bụng', 'Vàng da', 'Mệt mỏi', None, None, None),
    ('U gan', 'Khoa Ngoại', 'Mệt mỏi', 'Vàng da', 'Đau bụng', 'Sốt', None, None, None),

    # Chấn thương sọ não
    ('Chấn thương sọ não', 'Khoa Ngoại', 'Đau đầu', 'Mất ý thức', 'Buồn nôn', 'Liệt tay chân', None, None),
    ('Chấn thương sọ não', 'Khoa Ngoại', 'Mất ý thức', 'Liệt tay chân', 'Buồn nôn', 'Đau đầu', None, None),
    ('Chấn thương sọ não', 'Khoa Ngoại', 'Liệt tay chân', 'Đau đầu', 'Mất ý thức', 'Buồn nôn', None, None),
    ('Chấn thương sọ não', 'Khoa Ngoại', 'Buồn nôn', 'Mất ý thức', 'Liệt tay chân', 'Đau đầu', None, None),

    # Suy giảm chức năng thận
    ('Suy giảm chức năng thận', 'Khoa Ngoại', 'Đau lưng', 'Mệt mỏi', 'Đái ít', 'Sưng phù', None, None),
    ('Suy giảm chức năng thận', 'Khoa Ngoại', 'Mệt mỏi', 'Sưng phù', 'Đái ít', 'Đau lưng', None, None),
    ('Suy giảm chức năng thận', 'Khoa Ngoại', 'Sưng phù', 'Mệt mỏi', 'Đái ít', 'Đau lưng', None, None),
    ('Suy giảm chức năng thận', 'Khoa Ngoại', 'Đái ít', 'Mệt mỏi', 'Sưng phù', 'Đau lưng', None, None),

    # Viêm phúc mạc
    ('Viêm phúc mạc', 'Khoa Ngoại', 'Đau bụng', 'Sốt', 'Buồn nôn', 'Mệt mỏi', None, None),
    ('Viêm phúc mạc', 'Khoa Ngoại', 'Sốt', 'Mệt mỏi', 'Đau bụng', 'Buồn nôn', None, None),
    ('Viêm phúc mạc', 'Khoa Ngoại', 'Mệt mỏi', 'Đau bụng', 'Sốt', 'Buồn nôn', None, None),
    ('Viêm phúc mạc', 'Khoa Ngoại', 'Buồn nôn', 'Mệt mỏi', 'Đau bụng', 'Sốt', None, None),

    # Chuyên khoa Da liễu
    # Bệnh vẩy nến
    ('Bệnh vẩy nến', 'Da liễu', 'Bong tróc da', 'Ngứa', 'Mẩn đỏ', 'Vảy da', None, None, None),
    ('Bệnh vẩy nến', 'Da liễu', 'Vảy da', 'Bong tróc da', 'Ngứa', 'Mẩn đỏ', None, None, None),
    ('Bệnh vẩy nến', 'Da liễu', 'Mẩn đỏ', 'Bong tróc da', 'Ngứa', 'Vảy da', None, None, None),
    ('Bệnh vẩy nến', 'Da liễu', 'Ngứa', 'Vảy da', 'Mẩn đỏ', 'Bong tróc da', None, None, None),

    # Chốc lở
    ('Chốc lở', 'Da liễu', 'Mụn nước', 'Ngứa', 'Đỏ da', 'Sưng tấy', None, None, None),
    ('Chốc lở', 'Da liễu', 'Sưng tấy', 'Mụn nước', 'Ngứa', 'Đỏ da', None, None, None),
    ('Chốc lở', 'Da liễu', 'Đỏ da', 'Mụn nước', 'Ngứa', 'Sưng tấy', None, None, None),
    ('Chốc lở', 'Da liễu', 'Ngứa', 'Mụn nước', 'Sưng tấy', 'Đỏ da', None, None, None),

    # Mề đay
    ('Mề đay', 'Da liễu', 'Ngứa', 'Nổi mẩn đỏ', 'Sưng phù', None, None, None, None),
    ('Mề đay', 'Da liễu', 'Nổi mẩn đỏ', 'Ngứa', 'Sưng phù', None, None, None, None),
    ('Mề đay', 'Da liễu', 'Sưng phù', 'Ngứa', 'Nổi mẩn đỏ', None, None, None, None),
    ('Mề đay', 'Da liễu', 'Ngứa', 'Sưng phù', 'Nổi mẩn đỏ', None, None, None, None),

    # Mụn trứng cá
    ('Mụn trứng cá', 'Da liễu', 'Mụn bọc', 'Mụn cám', 'Mụn đầu đen', None, None, None),
    ('Mụn trứng cá', 'Da liễu', 'Mụn đầu đen', 'Mụn bọc', 'Mụn cám', None, None, None),
    ('Mụn trứng cá', 'Da liễu', 'Mụn cám', 'Mụn đầu đen', 'Mụn bọc', None, None, None),
    ('Mụn trứng cá', 'Da liễu', 'Mụn bọc', 'Mụn đầu đen', 'Mụn cám', None, None, None),

    # Viêm da dị ứng
    ('Viêm da dị ứng', 'Da liễu', 'Ngứa', 'Mẩn đỏ', 'Sưng tấy', None, None, None),
    ('Viêm da dị ứng', 'Da liễu', 'Mẩn đỏ', 'Ngứa', 'Sưng tấy', None, None, None),
    ('Viêm da dị ứng', 'Da liễu', 'Sưng tấy', 'Ngứa', 'Mẩn đỏ', None, None, None),
    ('Viêm da dị ứng', 'Da liễu', 'Ngứa', 'Sưng tấy', 'Mẩn đỏ', None, None, None),

    # Nấm da
    ('Nấm da', 'Da liễu', 'Ngứa', 'Nổi mẩn đỏ', 'Lở loét', None, None, None),
    ('Nấm da', 'Da liễu', 'Lở loét', 'Nổi mẩn đỏ', 'Ngứa', None, None, None),
    ('Nấm da', 'Da liễu', 'Nổi mẩn đỏ', 'Lở loét', 'Ngứa', None, None, None),
    ('Nấm da', 'Da liễu', 'Ngứa', 'Lở loét', 'Nổi mẩn đỏ', None, None, None),

    # U bã đậu
    ('U bã đậu', 'Da liễu', 'Cục u trên da', 'Đau nhẹ', None, None, None),
    ('U bã đậu', 'Da liễu', 'Đau nhẹ', 'Cục u trên da', None, None, None),
    ('U bã đậu', 'Da liễu', 'Cục u trên da', 'Đau nhẹ', None, None, None),
    ('U bã đậu', 'Da liễu', 'Đau nhẹ', 'Cục u trên da', None, None, None),

    # Sẹo lồi
    ('Sẹo lồi', 'Da liễu', 'Nổi sẹo', 'Đau nhẹ', None, None, None),
    ('Sẹo lồi', 'Da liễu', 'Đau nhẹ', 'Nổi sẹo', None, None, None),
    ('Sẹo lồi', 'Da liễu', 'Đau nhẹ', 'Nổi sẹo', None, None, None),
    ('Sẹo lồi', 'Da liễu', 'Nổi sẹo', 'Đau nhẹ', None, None, None),

    # Viêm nang lông
    ('Viêm nang lông', 'Da liễu', 'Sưng nốt', 'Đỏ', 'Ngứa', None, None, None),
    ('Viêm nang lông', 'Da liễu', 'Ngứa', 'Đỏ', 'Sưng nốt', None, None, None),
    ('Viêm nang lông', 'Da liễu', 'Đỏ', 'Sưng nốt', 'Ngứa', None, None, None),
    ('Viêm nang lông', 'Da liễu', 'Sưng nốt', 'Ngứa', 'Đỏ', None, None, None),

    # Chàm
    ('Chàm', 'Da liễu', 'Ngứa', 'Mẩn đỏ', 'Da khô', None, None, None),
    ('Chàm', 'Da liễu', 'Mẩn đỏ', 'Ngứa', 'Da khô', None, None, None),
    ('Chàm', 'Da liễu', 'Da khô', 'Ngứa', 'Mẩn đỏ', None, None, None),
    ('Chàm', 'Da liễu', 'Ngứa', 'Da khô', 'Mẩn đỏ', None, None, None),

    # Viêm da tiếp xúc
    ('Viêm da tiếp xúc', 'Da liễu', 'Ngứa', 'Đỏ da', 'Sưng tấy', None, None, None),
    ('Viêm da tiếp xúc', 'Da liễu', 'Sưng tấy', 'Ngứa', 'Đỏ da', None, None, None),
    ('Viêm da tiếp xúc', 'Da liễu', 'Đỏ da', 'Ngứa', 'Sưng tấy', None, None, None),
    ('Viêm da tiếp xúc', 'Da liễu', 'Ngứa', 'Sưng tấy', 'Đỏ da', None, None, None),

    # Bệnh vảy nến thể mảng
    ('Bệnh vảy nến thể mảng', 'Da liễu', 'Vảy da', 'Ngứa', 'Đỏ', 'Bong tróc', None, None),
    ('Bệnh vảy nến thể mảng', 'Da liễu', 'Đỏ', 'Vảy da', 'Ngứa', 'Bong tróc', None, None),
    ('Bệnh vảy nến thể mảng', 'Da liễu', 'Bong tróc', 'Vảy da', 'Ngứa', 'Đỏ', None, None),
    ('Bệnh vảy nến thể mảng', 'Da liễu', 'Ngứa', 'Bong tróc', 'Vảy da', 'Đỏ', None, None),

    # Nổi mụn nước
    ('Nổi mụn nước', 'Da liễu', 'Mụn nước', 'Ngứa', 'Đỏ da', None, None, None),
    ('Nổi mụn nước', 'Da liễu', 'Đỏ da', 'Mụn nước', 'Ngứa', None, None, None),
    ('Nổi mụn nước', 'Da liễu', 'Mụn nước', 'Đỏ da', 'Ngứa', None, None, None),
    ('Nổi mụn nước', 'Da liễu', 'Ngứa', 'Mụn nước', 'Đỏ da', None, None, None),

    # Hắc lào
    ('Hắc lào', 'Da liễu', 'Ngứa', 'Nổi mẩn đỏ', 'Lở loét', None, None, None),
    ('Hắc lào', 'Da liễu', 'Lở loét', 'Nổi mẩn đỏ', 'Ngứa', None, None, None),
    ('Hắc lào', 'Da liễu', 'Nổi mẩn đỏ', 'Lở loét', 'Ngứa', None, None, None),
    ('Hắc lào', 'Da liễu', 'Ngứa', 'Lở loét', 'Nổi mẩn đỏ', None, None, None),

    # Chuyên khoa Mắt
    # Cận thị
    ('Cận thị', 'Khoa Mắt', 'Mờ mắt khi nhìn xa', 'Mỏi mắt', None, None, None, None, None),
    ('Cận thị', 'Khoa Mắt', 'Mờ mắt khi nhìn xa', 'Nhức mắt', None, None, None, None, None),
    ('Cận thị', 'Khoa Mắt', 'Mờ mắt khi nhìn xa', 'Khó nhìn xa', None, None, None, None, None),
    ('Cận thị', 'Khoa Mắt', 'Mờ mắt', 'Mỏi mắt', 'Nhìn đôi', None, None, None, None),

    # Viêm kết mạc
    ('Viêm kết mạc', 'Khoa Mắt', 'Đỏ mắt', 'Chảy nước mắt', 'Ngứa', 'Mờ mắt', None, None, None),
    ('Viêm kết mạc', 'Khoa Mắt', 'Đỏ mắt', 'Ngứa', 'Khó chịu', 'Mờ mắt', None, None, None),
    ('Viêm kết mạc', 'Khoa Mắt', 'Đỏ mắt', 'Chảy nước mắt', 'Ngứa mắt', None, None, None, None),
    ('Viêm kết mạc', 'Khoa Mắt', 'Ngứa', 'Mờ mắt', 'Sưng mí mắt', None, None, None, None),

    # Đục thủy tinh thể
    ('Đục thủy tinh thể', 'Khoa Mắt', 'Mờ mắt', 'Nhìn đôi', 'Khó nhìn vào ban đêm', None, None, None),
    ('Đục thủy tinh thể', 'Khoa Mắt', 'Mờ mắt', 'Nhìn đôi', 'Nhìn mờ khi trời sáng', None, None, None),
    ('Đục thủy tinh thể', 'Khoa Mắt', 'Nhìn đôi', 'Mất thị lực dần dần', 'Mờ mắt', None, None, None),
    ('Đục thủy tinh thể', 'Khoa Mắt', 'Mờ mắt', 'Khó nhìn vào ban đêm', 'Chói mắt', None, None, None),

    # Viêm giác mạc
    ('Viêm giác mạc', 'Khoa Mắt', 'Đỏ mắt', 'Đau mắt', 'Sưng mí mắt', 'Mờ mắt', None, None, None),
    ('Viêm giác mạc', 'Khoa Mắt', 'Đau mắt', 'Mờ mắt', 'Nhạy cảm với ánh sáng', None, None, None, None),
    ('Viêm giác mạc', 'Khoa Mắt', 'Đỏ mắt', 'Sưng mí mắt', 'Mờ mắt', None, None, None, None),
    ('Viêm giác mạc', 'Khoa Mắt', 'Mờ mắt', 'Đau mắt', 'Khó chịu khi nhìn sáng', None, None, None, None),

    # Glaucoma
    ('Glaucoma', 'Khoa Mắt', 'Đau mắt', 'Mờ mắt', 'Nhìn chói', 'Mất thị lực', None, None, None),
    ('Glaucoma', 'Khoa Mắt', 'Mờ mắt', 'Nhìn chói', 'Đau đầu', None, None, None, None),
    ('Glaucoma', 'Khoa Mắt', 'Mờ mắt', 'Nhìn chói', 'Mất thị lực từ từ', None, None, None, None),
    ('Glaucoma', 'Khoa Mắt', 'Đau mắt', 'Nhìn chói', 'Sưng mí mắt', None, None, None, None),

    # Mù màu
    ('Mù màu', 'Khoa Mắt', 'Khó phân biệt màu sắc', 'Mờ mắt', None, None, None, None, None),
    ('Mù màu', 'Khoa Mắt', 'Khó phân biệt màu đỏ và xanh', 'Mờ mắt', None, None, None, None, None),
    ('Mù màu', 'Khoa Mắt', 'Khó phân biệt màu sắc', 'Nhìn mờ', None, None, None, None, None),
    ('Mù màu', 'Khoa Mắt', 'Khó phân biệt màu xanh lá và vàng', 'Mờ mắt', None, None, None, None, None),
    # Viêm mí mắt
    ('Viêm mí mắt', 'Khoa Mắt', 'Đỏ mí mắt', 'Ngứa', 'Sưng mí mắt', 'Đau mắt', None, None),
    ('Viêm mí mắt', 'Khoa Mắt', 'Đỏ mí mắt', 'Ngứa', 'Sưng mí mắt', 'Khó mở mắt', None, None),
    ('Viêm mí mắt', 'Khoa Mắt', 'Ngứa mí mắt', 'Đỏ mí mắt', 'Sưng mí mắt', None, None, None),
    ('Viêm mí mắt', 'Khoa Mắt', 'Đau mắt', 'Ngứa mí mắt', 'Sưng mí mắt', None, None, None),

    # Viêm túi lệ
    ('Viêm túi lệ', 'Khoa Mắt', 'Sưng mắt', 'Đau quanh mắt', 'Chảy nước mắt', None, None, None),
    ('Viêm túi lệ', 'Khoa Mắt', 'Sưng mắt', 'Đau mí mắt', 'Khó mở mắt', None, None, None),
    ('Viêm túi lệ', 'Khoa Mắt', 'Sưng mắt', 'Chảy nước mắt', 'Nhạy cảm với ánh sáng', None, None, None),
    ('Viêm túi lệ', 'Khoa Mắt', 'Sưng mắt', 'Đau quanh mắt', 'Mờ mắt', None, None, None),

    # Bệnh võng mạc
    ('Bệnh võng mạc', 'Khoa Mắt', 'Mờ mắt', 'Nhìn đôi', 'Giảm thị lực', None, None, None),
    ('Bệnh võng mạc', 'Khoa Mắt', 'Mờ mắt', 'Giảm thị lực', 'Khó nhìn vào ban đêm', None, None, None),
    ('Bệnh võng mạc', 'Khoa Mắt', 'Mờ mắt', 'Giảm thị lực', 'Nhìn đôi', None, None, None),
    ('Bệnh võng mạc', 'Khoa Mắt', 'Mờ mắt', 'Giảm thị lực', 'Mất thị lực dần dần', None, None, None),

    # Tật khúc xạ
    ('Tật khúc xạ', 'Khoa Mắt', 'Mờ mắt', 'Nhức mắt', 'Khó nhìn ban đêm', None, None, None),
    ('Tật khúc xạ', 'Khoa Mắt', 'Mờ mắt', 'Nhức mắt', 'Mỏi mắt khi đọc', None, None, None),
    ('Tật khúc xạ', 'Khoa Mắt', 'Mờ mắt', 'Khó nhìn ban đêm', 'Mỏi mắt', None, None, None),
    ('Tật khúc xạ', 'Khoa Mắt', 'Nhức mắt', 'Mỏi mắt', 'Khó nhìn xa', None, None, None),

    # Mắt khô
    ('Mắt khô', 'Khoa Mắt', 'Mắt khô', 'Ngứa mắt', 'Khó mở mắt', None, None, None),
    ('Mắt khô', 'Khoa Mắt', 'Khô mắt', 'Ngứa', 'Đỏ mắt', None, None, None),
    ('Mắt khô', 'Khoa Mắt', 'Mắt khô', 'Khó mở mắt', 'Mỏi mắt', None, None, None),
    ('Mắt khô', 'Khoa Mắt', 'Mắt khô', 'Ngứa mắt', 'Chảy nước mắt', None, None, None),

    # Đau mắt
    ('Đau mắt', 'Khoa Mắt', 'Đau nhức mắt', 'Nhạy cảm với ánh sáng', None, None, None),
    ('Đau mắt', 'Khoa Mắt', 'Đau mắt', 'Đỏ mắt', None, None, None),
    ('Đau mắt', 'Khoa Mắt', 'Đau nhức mắt', 'Mờ mắt', None, None, None),
    ('Đau mắt', 'Khoa Mắt', 'Đau mắt', 'Nhạy cảm với ánh sáng', 'Mờ mắt', None, None, None),

    # Lão thị
    ('Lão thị', 'Khoa Mắt', 'Khó nhìn gần', 'Mỏi mắt khi đọc', None, None, None),
    ('Lão thị', 'Khoa Mắt', 'Khó nhìn gần', 'Mỏi mắt', None, None, None),
    ('Lão thị', 'Khoa Mắt', 'Khó nhìn gần', 'Mờ mắt khi đọc', None, None, None),
    ('Lão thị', 'Khoa Mắt', 'Khó nhìn gần', 'Mỏi mắt', 'Nhức mắt', None, None, None),

    # Rối loạn nhìn ban đêm
    ('Rối loạn nhìn ban đêm', 'Khoa Mắt', 'Khó nhìn vào ban đêm', 'Mờ mắt', None, None, None),
    ('Rối loạn nhìn ban đêm', 'Khoa Mắt', 'Khó nhìn vào ban đêm', 'Chói mắt', None, None, None),
    ('Rối loạn nhìn ban đêm', 'Khoa Mắt', 'Khó nhìn vào ban đêm', 'Nhìn mờ', None, None, None),
    ('Rối loạn nhìn ban đêm', 'Khoa Mắt', 'Khó nhìn vào ban đêm', 'Mỏi mắt', None, None, None),

    # Chuyên khoa Tai Mũi Họng
    ('Viêm họng', 'Tai Mũi Họng', 'Đau họng', 'Ho', 'Sốt', 'Khó nuốt', None, None, None),
    ('Viêm họng', 'Tai Mũi Họng', 'Ho', 'Sốt', 'Đau họng', None, None, None, None),
    ('Viêm họng', 'Tai Mũi Họng', 'Sốt', 'Khó nuốt', 'Đau họng', 'Ho', None, None, None),
    ('Viêm họng', 'Tai Mũi Họng', 'Khó nuốt', 'Ho', 'Sốt', 'Đau họng', None, None, None),

    ('Viêm amidan', 'Tai Mũi Họng', 'Đau họng', 'Sốt', 'Mệt mỏi', 'Khó nuốt', None, None, None),
    ('Viêm amidan', 'Tai Mũi Họng', 'Mệt mỏi', 'Sốt', 'Đau họng', None, None, None, None),
    ('Viêm amidan', 'Tai Mũi Họng', 'Khó nuốt', 'Mệt mỏi', 'Đau họng', 'Sốt', None, None, None),
    ('Viêm amidan', 'Tai Mũi Họng', 'Sốt', 'Đau họng', 'Khó nuốt', 'Mệt mỏi', None, None, None),

    ('Viêm xoang', 'Tai Mũi Họng', 'Đau đầu', 'Nghẹt mũi', 'Sổ mũi', 'Sốt', None, None, None),
    ('Viêm xoang', 'Tai Mũi Họng', 'Sổ mũi', 'Đau đầu', 'Sốt', None, None, None, None),
    ('Viêm xoang', 'Tai Mũi Họng', 'Nghẹt mũi', 'Sốt', 'Đau đầu', 'Sổ mũi', None, None, None),
    ('Viêm xoang', 'Tai Mũi Họng', 'Sốt', 'Nghẹt mũi', 'Sổ mũi', 'Đau đầu', None, None, None),

    ('Viêm tai giữa', 'Tai Mũi Họng', 'Đau tai', 'Sốt', 'Nghe kém', 'Mệt mỏi', None, None, None),
    ('Viêm tai giữa', 'Tai Mũi Họng', 'Nghe kém', 'Đau tai', 'Sốt', None, None, None, None),
    ('Viêm tai giữa', 'Tai Mũi Họng', 'Mệt mỏi', 'Nghe kém', 'Đau tai', 'Sốt', None, None, None),
    ('Viêm tai giữa', 'Tai Mũi Họng', 'Sốt', 'Mệt mỏi', 'Đau tai', 'Nghe kém', None, None, None),

    ('Chảy máu cam', 'Tai Mũi Họng', 'Chảy máu mũi', 'Nghẹt mũi', 'Đau đầu', None, None, None),
    ('Chảy máu cam', 'Tai Mũi Họng', 'Đau đầu', 'Chảy máu mũi', None, None, None, None),
    ('Chảy máu cam', 'Tai Mũi Họng', 'Nghẹt mũi', 'Đau đầu', 'Chảy máu mũi', None, None, None),
    ('Chảy máu cam', 'Tai Mũi Họng', 'Chảy máu mũi', 'Đau đầu', 'Nghẹt mũi', None, None, None),

    ('Sổ mũi', 'Tai Mũi Họng', 'Nghẹt mũi', 'Chảy nước mũi', 'Đau họng', None, None, None),
    ('Sổ mũi', 'Tai Mũi Họng', 'Chảy nước mũi', 'Đau họng', 'Nghẹt mũi', None, None, None, None),
    ('Sổ mũi', 'Tai Mũi Họng', 'Đau họng', 'Nghẹt mũi', 'Chảy nước mũi', None, None, None, None),
    ('Sổ mũi', 'Tai Mũi Họng', 'Nghẹt mũi', 'Đau họng', 'Chảy nước mũi', None, None, None),

    ('Dị ứng mũi', 'Tai Mũi Họng', 'Hắt hơi', 'Nghẹt mũi', 'Chảy nước mũi', 'Ngứa mắt', None, None),
    ('Dị ứng mũi', 'Tai Mũi Họng', 'Ngứa mắt', 'Hắt hơi', 'Nghẹt mũi', None, None, None, None),
    ('Dị ứng mũi', 'Tai Mũi Họng', 'Nghẹt mũi', 'Ngứa mắt', 'Chảy nước mũi', None, None, None, None),
    ('Dị ứng mũi', 'Tai Mũi Họng', 'Chảy nước mũi', 'Ngứa mắt', 'Hắt hơi', None, None, None, None),


    # Mất thính giác
    ('Mất thính giác', 'Tai Mũi Họng', 'Nghe kém', 'Ù tai', 'Chóng mặt', None, None, None),
    ('Mất thính giác', 'Tai Mũi Họng', 'Nghe kém', 'Ù tai', None, None, None, None),
    ('Mất thính giác', 'Tai Mũi Họng', 'Ù tai', 'Chóng mặt', None, None, None, None),
    ('Mất thính giác', 'Tai Mũi Họng', 'Nghe kém', 'Chóng mặt', None, None, None, None),

    # Lác mắt
    ('Lác mắt', 'Tai Mũi Họng', 'Mắt nhìn lệch', 'Khó phối hợp hai mắt', None, None, None, None),
    ('Lác mắt', 'Tai Mũi Họng', 'Mắt nhìn lệch', None, None, None, None, None),
    ('Lác mắt', 'Tai Mũi Họng', 'Khó phối hợp hai mắt', None, None, None, None, None),
    ('Lác mắt', 'Tai Mũi Họng', 'Mắt nhìn lệch', 'Khó phối hợp hai mắt', None, None, None, None),

    # Viêm thanh quản
    ('Viêm thanh quản', 'Tai Mũi Họng', 'Khàn giọng', 'Ho', 'Đau họng', None, None, None),
    ('Viêm thanh quản', 'Tai Mũi Họng', 'Khàn giọng', 'Ho', None, None, None, None),
    ('Viêm thanh quản', 'Tai Mũi Họng', 'Khàn giọng', 'Đau họng', None, None, None, None),
    ('Viêm thanh quản', 'Tai Mũi Họng', 'Ho', 'Đau họng', None, None, None, None),

    # Rối loạn thính giác
    ('Rối loạn thính giác', 'Tai Mũi Họng', 'Nghe kém', 'Ù tai', None, None, None, None),
    ('Rối loạn thính giác', 'Tai Mũi Họng', 'Nghe kém', None, None, None, None, None),
    ('Rối loạn thính giác', 'Tai Mũi Họng', 'Ù tai', None, None, None, None, None),
    ('Rối loạn thính giác', 'Tai Mũi Họng', 'Nghe kém', 'Ù tai', None, None, None, None),

    # Tắc nghẽn đường hô hấp
    ('Tắc nghẽn đường hô hấp', 'Tai Mũi Họng', 'Khó thở', 'Ho', 'Thở khò khè', None, None, None),
    ('Tắc nghẽn đường hô hấp', 'Tai Mũi Họng', 'Khó thở', 'Ho', None, None, None, None),
    ('Tắc nghẽn đường hô hấp', 'Tai Mũi Họng', 'Khó thở', 'Thở khò khè', None, None, None, None),
    ('Tắc nghẽn đường hô hấp', 'Tai Mũi Họng', 'Ho', 'Thở khò khè', None, None, None, None),

    # Nghẹt mũi
    ('Nghẹt mũi', 'Tai Mũi Họng', 'Khó thở', 'Chảy nước mũi', None, None, None, None),
    ('Nghẹt mũi', 'Tai Mũi Họng', 'Khó thở', None, None, None, None, None),
    ('Nghẹt mũi', 'Tai Mũi Họng', 'Chảy nước mũi', None, None, None, None, None),
    ('Nghẹt mũi', 'Tai Mũi Họng', 'Khó thở', 'Chảy nước mũi', None, None, None, None),

    # Viêm tai ngoài
    ('Viêm tai ngoài', 'Tai Mũi Họng', 'Đau tai', 'Ngứa tai', 'Sưng tai', None, None, None),
    ('Viêm tai ngoài', 'Tai Mũi Họng', 'Đau tai', 'Ngứa tai', None, None, None, None),
    ('Viêm tai ngoài', 'Tai Mũi Họng', 'Đau tai', 'Sưng tai', None, None, None, None),
    ('Viêm tai ngoài', 'Tai Mũi Họng', 'Ngứa tai', 'Sưng tai', None, None, None, None),
]

# Tạo DataFrame từ dữ liệu
columns = ['Disease Name', 'Specialty', 'Symptom 1', 'Symptom 2', 'Symptom 3', 'Symptom 4', 'Symptom 5', 'Symptom 6', 'Symptom 7']
df = pd.DataFrame(data, columns=columns)

# Xử lý dữ liệu thiếu: Điền 'NaN' cho các triệu chứng thiếu

df.fillna(np.nan, inplace=True)

# Chuẩn hóa triệu chứng
def standardize_symptom(symptom):
    if isinstance(symptom, str):  # Đảm bảo chỉ áp dụng chuẩn hóa cho chuỗi
        return symptom.strip().lower()
    return symptom

for col in columns[2:]:
    df[col] = df[col].apply(standardize_symptom)
# Lưu DataFrame vào file CSV với UTF-8 BOM encoding
df.to_csv('medical_conditions.csv', index=False, encoding='utf-8-sig', na_rep='NaN')

print("Dataset đầy đủ đã được tạo và lưu thành công dưới dạng CSV.")
