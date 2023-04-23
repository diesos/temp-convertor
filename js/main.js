document.querySelector('#cel').addEventListener('click', run)
document.querySelector('#cel2').addEventListener('click', run2)




function run() {
    const celsius = document.querySelector('#celo').value
    const convertor = celsius * 1.8 + 32

    document.querySelector('#faho').innerText = convertor


}
function run2() {
    const fahreinheit = document.querySelector('#celo2').value
    const convertor = (fahreinheit - 32) / 1.8

    document.querySelector('#faho2').innerText = convertor


}
