let events = [[3, 'goal'], [17, 'goal'], [64, 'yellow card'], [75, 'substitution'], [80, 'goal']];

// 1. Tạo ra mảng các sự kiện khác nhau
let uniqueEvents = Array.from(new Set(events.map(event => event[1])));

// 2. Xóa sự kiện thẻ vàng phút 64
events = events.filter(event => event[0] !== 64 || event[1] !== 'yellow card');

// 3. In ra console số lượng sự kiện và thời gian trung bình
console.log(`${events.length} sự kiện xảy ra, trung bình mỗi ${Math.round(90 / events.length)} phút.`);

// 4. In ra console mỗi sự kiện trong trận đấu
events.forEach(event => {
    let half = event[0] <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
    let symbol = event[1] === 'goal' ? '⚽' : '💬';
    console.log(`${half} ${event[0]}: ${symbol} ${event[1].toUpperCase()}`);
});
