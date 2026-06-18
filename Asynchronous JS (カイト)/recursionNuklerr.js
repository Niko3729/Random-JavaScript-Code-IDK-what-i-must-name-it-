function rekursi(n) {
    console.log(n);
    if (n > 100000) {
        return;
    }
    if (n < -100) {
        return;
    }
    rekursi(n * 1.5);
}
rekursi(2);