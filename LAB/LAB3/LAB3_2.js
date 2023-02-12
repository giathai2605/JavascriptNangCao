function checkDogs(dogsJulia, dogsKate) {
    // Bước 1: Sao chép mảng của Julia và xóa hai con chó đầu tiên và cuối cùng
    let correctedJulia = [...dogsJulia];
    correctedJulia.splice(0, 1);
    correctedJulia.splice(correctedJulia.length - 1, 1);

    // Bước 2: Tạo một mảng có cả dữ liệu của Julia và Kate
    let allDogs = correctedJulia.concat(dogsKate);

    // Bước 3: Kiểm tra tuổi của mỗi con chó và ghi nhận kết quả
    allDogs.forEach((dog, index) => {
        if (dog >= 3) {
            console.log(`Chó số ${index + 1} là người lớn và ${dog} tuổi.`);
        } else {
            console.log(`Chó số ${index + 1} vẫn là chó con và ${dog} tuổi.`);
        }
    });
}

// Bước 4: Chạy hàm cho cả hai bộ dữ liệu thử nghiệm
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
