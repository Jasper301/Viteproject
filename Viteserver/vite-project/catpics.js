export function showPics(element){
    function getPics() {
        console.log('haetaan kuvat')
    }
    console.log(element);
    element.addEventListener('click', () => getPics());
}