// Lấy hàm IIFE dưới đây, và ở cuối function hãy gắn 1 event thay đổi màu của thẻ
// 'h1' sang màu xanh dương(blue) sau mỗi lần click vào element body.Chúng ta
// không select đến thẻ h1 đó nữa!
// Và sau đó hãy tự giải thích lại cho chính mình hoặc bạn học của mình Tại sao nó
// lại hoạt động!
// Hãy bình tĩnh nghĩ xem chính xác thì khi nào callback được thực thi, và biến được
// sử dụng trong ví dụ này có ý nghĩa gì ?

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();
// Đây là một hàm IIFE (Immediately Invoked Function Expression), nghĩa là nó sẽ được tự động gọi và thực thi ngay khi được tải vào trình duyệt. Trong hàm này, ta lần lượt lấy ra một thẻ h1 và thay đổi màu chữ của nó thành màu đỏ.

// Sau đó, chúng ta sử dụng hàm addEventListener để gắn sự kiện click vào thẻ body.Khi người dùng click vào body, hàm callback(nằm trong addEventListener) sẽ được thực thi, đổi màu của thẻ h1 thành xanh dương(blue).

// Chúng ta không cần tìm lại thẻ h1 vì ta đã gắn nó vào một biến cục bộ header trong hàm.Do đó, ta có thể sử dụng header trong hàm callback mà không cần tìm lại.

// Tại sao nó hoạt động: Vì biến header được gắn trong hàm, nên nó sẽ được giữ và duy trì giá trị nó //nhận được trong suốt thời gian chạy của hàm.Khi hàm callback được thực thi, biến header vẫn còn giá trị mà nó nhận được, do đó, ta có thể sử dụng nó để thay đổi màu của thẻ h1.