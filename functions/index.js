function time() {
    this.seg = 0;
    setInterval(() => {
        this.seg++; // undefined + 1
        console.log(this.seg); // NaN
    }, 1000);
};

function time1() {
    const self = this;
    self.seg = 0;
    setInterval(() => {
        self.seg++; // 0 + 1
        console.log(this.seg); // 1, 2, 3
    }, 1000);
};

function time2() {
    this.seg = 0;
    setInterval(() => {
        self.seg++; // 0 + 1
        console.log(this.seg); // 1, 2, 3
    }, 1000);
};

const $user = document.querySelector('#user');
$user.addEventListener('click', () => {
    console.log(this.id); // Undefined
});

const $button = document.querySelector('#button');
$user.addEventListener('click', function() {
    console.log(this.id); // #button
});
